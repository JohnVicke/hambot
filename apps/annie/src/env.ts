if (!process.env.DISCORD_CLIENT_ID) {
  console.error("DISCORD_CLIENT_ID is not set");
  process.exit(1);
}

if (!process.env.DISCORD_TOKEN) {
  console.error("DISCORD_TOKEN is not set");
  process.exit(1);
}

export const env = {
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
};
