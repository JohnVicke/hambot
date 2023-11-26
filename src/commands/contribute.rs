use crate::{Context, Error};

#[poise::command(slash_command)]
pub async fn contribute(ctx: Context<'_>) -> Result<(), Error> {
    ctx.say("https://github.com/johnvicke/hambot").await?;

    Ok(())
}
