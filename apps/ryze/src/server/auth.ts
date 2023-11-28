import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { getServerSession } from "next-auth";
import type { DefaultSession, NextAuthOptions } from "next-auth";
import type { DiscordProfile } from "next-auth/providers/discord";
import DiscordProvider from "next-auth/providers/discord";

import { db } from "@ham/db";
import type { DbUser } from "@ham/db";

import { env } from "~/env";
import { discordCDN } from "~/lib/discord-cdn";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DbUser;
  }
}

export const authOptions: NextAuthOptions = {
  debug: env.NODE_ENV === "development",
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: DrizzleAdapter(db),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
      profile: (profile: DiscordProfile) =>
        ({
          ...profile,
          image: discordCDN().avatar({
            userId: profile.id,
            avatarId: profile.avatar,
          }),
          name: profile.username,
          accentColor: profile.accent_color,
          bannerColor: profile.banner_color,
          emailVerified: null,
          role: "user",
        }) satisfies DbUser,
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
