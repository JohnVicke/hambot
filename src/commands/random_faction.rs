use crate::{
    factions::faction::{
        bilgewater, bundle_city, demacia, freljord, ionia, ixtal, noxus, piltover, shadow_isles,
        shurima, targon, void, zaun, Faction,
    },
    utils::random,
};

const FACTIONS: [fn() -> Faction; 15] = [
    bilgewater,
    bundle_city,
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

pub fn random_faction() -> Faction {
    let random = random::random_number(FACTIONS.len() as u32);
    return FACTIONS[random as usize]();
}
