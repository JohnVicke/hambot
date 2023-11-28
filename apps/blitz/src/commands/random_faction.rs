use crate::{Context, Error};

use crate::{
    factions::faction::{
        bandle_city, bilgewater, demacia, freljord, ionia, ixtal, noxus, piltover, shadow_isles,
        shurima, targon, void, zaun, Faction,
    },
    utils::random,
};

const FACTIONS: [fn() -> Faction; 15] = [
    bilgewater,
    bandle_city,
    demacia,
    freljord,
    ionia,
    noxus,
    piltover,
    shadow_isles,
    void,
    void,
    zaun,
    ionia,
    targon,
    ixtal,
    shurima,
];

#[poise::command(slash_command)]
pub async fn random_faction(ctx: Context<'_>) -> Result<(), Error> {
    let random = random::random_number(FACTIONS.len() as u32);
    let faction = FACTIONS[random as usize]();

    ctx.send(|reply| {
        reply.embed(|embed| {
            embed.title(faction.name()).image(faction.img_url()).field(
                "Challenge",
                faction.challenge(),
                true,
            )
        });
        reply.content(faction.champions_content())
    })
    .await?;

    Ok(())
}
