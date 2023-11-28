type AvatarFormats = "webp" | "png" | "gif" | "jpeg";

/**
 * Discord CDN endpoints for images.
 * @see https://discord.com/developers/docs/reference#image-formatting-cdn-endpoints
 */
export function discordCDN() {
  const baseUrl = "https://cdn.discordapp.com";
  return {
    avatar: ({
      userId,
      avatarId,
      format = "webp",
    }: {
      userId: string;
      avatarId: string;
      format?: AvatarFormats;
    }) => `${baseUrl}/avatars/${userId}/${avatarId}.${format}`,
  };
}
