if (!process.env.DISCORD_CLIENT_ID) {
  throw new Error("DISCORD_CLIENT_ID is not set");
}

if (!process.env.DISCORD_TOKEN) {
  throw new Error("DISCORD_TOKEN is not set");
}

export const env = {
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
};
