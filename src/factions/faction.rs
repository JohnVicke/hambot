pub enum FactionType {
    BandleCity,
    Bilgewater,
    Demacia,
    Freljord,
    Ionia,
    Ixtal,
    Noxus,
    Piltover,
    ShadowIsles,
    Shurima,
    Targon,
    Void,
    Zaun,
}

pub struct Faction {
    name: FactionType,
    challenge: String,
    champions: Vec<Champion>,
}

pub struct Champion {
    name: String,
}

pub fn bandle_city() -> Faction {
    Faction {
        name: FactionType::BandleCity,
        challenge: String::from("5 under 5"),
        champions: vec![
            Champion {
                name: String::from("Corki"),
            },
            Champion {
                name: String::from("Fizz"),
            },
            Champion {
                name: String::from("Gnar"),
            },
            Champion {
                name: String::from("Heimerdinger"),
            },
            Champion {
                name: String::from("Kennen"),
            },
            Champion {
                name: String::from("Kled"),
            },
            Champion {
                name: String::from("Lulu"),
            },
            Champion {
                name: String::from("Poppy"),
            },
            Champion {
                name: String::from("Rumble"),
            },
            Champion {
                name: String::from("Teemo"),
            },
            Champion {
                name: String::from("Tristana"),
            },
            Champion {
                name: String::from("Veigar"),
            },
            Champion {
                name: String::from("Vex"),
            },
            Champion {
                name: String::from("Yuumi"),
            },
            Champion {
                name: String::from("Ziggs"),
            },
        ],
    }
}

pub fn Bilgewater() -> Faction {
    Faction {
        name: FactionType::Bilgewater,
        challenge: String::from("All Hands on Deck"),
        champions: vec![
            Champion {
                name: String::from("Fizz"),
            },
            Champion {
                name: String::from("Gangplank"),
            },
            Champion {
                name: String::from("Graves"),
            },
            Champion {
                name: String::from("Illaoi"),
            },
            Champion {
                name: String::from("Miss Fortune"),
            },
            Champion {
                name: String::from("Nautilus"),
            },
            Champion {
                name: String::from("Nilah"),
            },
            Champion {
                name: String::from("Pyke"),
            },
            Champion {
                name: String::from("Tahm Kench"),
            },
            Champion {
                name: String::from("Twisted Fate"),
            },
        ],
    }
}

pub fn Demacia() -> Faction {
    Faction {
        name: FactionType::Bilgewater,
        challenge: String::from("Demacia"),
        champions: vec![
            Champion {
                name: String::from("Fiora"),
            },
            Champion {
                name: String::from("Galio"),
            },
            Champion {
                name: String::from("Garen"),
            },
            Champion {
                name: String::from("Jarvan IV"),
            },
            Champion {
                name: String::from("Kayle"),
            },
            Champion {
                name: String::from("Lucian"),
            },
            Champion {
                name: String::from("Lux"),
            },
            Champion {
                name: String::from("Morgana"),
            },
            Champion {
                name: String::from("Poppy"),
            },
            Champion {
                name: String::from("Quinn"),
            },
            Champion {
                name: String::from("Shyvana"),
            },
            Champion {
                name: String::from("Sona"),
            },
            Champion {
                name: String::from("Sylas"),
            },
            Champion {
                name: String::from("Vayne"),
            },
            Champion {
                name: String::from("Xin Zhao"),
            },
        ],
    }
}

pub fn Freljord() -> Faction {
    Faction {
        name: FactionType::Freljord,
        challenge: String::from("Ice, Ice, Baby"),
        champions: vec![
            Champion {
                name: String::from("Anivia"),
            },
            Champion {
                name: String::from("Ashe"),
            },
            Champion {
                name: String::from("Braum"),
            },
            Champion {
                name: String::from("Gnar"),
            },
            Champion {
                name: String::from("Gragas"),
            },
            Champion {
                name: String::from("Lissandra"),
            },
            Champion {
                name: String::from("Nunu & Willump"),
            },
            Champion {
                name: String::from("Olaf"),
            },
            Champion {
                name: String::from("Ornn"),
            },
            Champion {
                name: String::from("Sejuani"),
            },
            Champion {
                name: String::from("Trundle"),
            },
            Champion {
                name: String::from("Tryndamere"),
            },
            Champion {
                name: String::from("Udyr"),
            },
            Champion {
                name: String::from("Volibear"),
            },
        ],
    }
}

pub fn Ionia() -> Faction {
    Faction {
        name: FactionType::Ionia,
        challenge: String::from("Everybody was Wuju Fighting"),
        champions: vec![
            Champion {
                name: String::from("Ahri"),
            },
            Champion {
                name: String::from("Akali"),
            },
            Champion {
                name: String::from("Irelia"),
            },
            Champion {
                name: String::from("Ivern"),
            },
            Champion {
                name: String::from("Jhin"),
            },
            Champion {
                name: String::from("Karma"),
            },
            Champion {
                name: String::from("Kayn"),
            },
            Champion {
                name: String::from("Kennen"),
            },
            Champion {
                name: String::from("Lee Sin"),
            },
            Champion {
                name: String::from("Lillia"),
            },
            Champion {
                name: String::from("Master Yi"),
            },
            Champion {
                name: String::from("Rakan"),
            },
            Champion {
                name: String::from("Sett"),
            },
            Champion {
                name: String::from("Shen"),
            },
            Champion {
                name: String::from("Syndra"),
            },
            Champion {
                name: String::from("Varus"),
            },
            Champion {
                name: String::from("Wukong"),
            },
            Champion {
                name: String::from("Xayah"),
            },
            Champion {
                name: String::from("Yasuo"),
            },
            Champion {
                name: String::from("Yone"),
            },
            Champion {
                name: String::from("Zed"),
            },
        ],
    }
}

pub fn Ixtal() -> Faction {
    Faction {
        name: FactionType::Ixtal,
        challenge: String::from("Elemental, My Dear Watson"),
        champions: vec![
            Champion {
                name: String::from("Malphite"),
            },
            Champion {
                name: String::from("Milio"),
            },
            Champion {
                name: String::from("Neeko"),
            },
            Champion {
                name: String::from("Nidalee"),
            },
            Champion {
                name: String::from("Qiyana"),
            },
            Champion {
                name: String::from("Rengar"),
            },
            Champion {
                name: String::from("Zyra"),
            },
        ],
    }
}

pub fn Noxus() -> Faction {
    Faction {
        name: FactionType::Noxus,
        challenge: String::from("Strength Above All"),
        champions: vec![
            Champion {
                name: String::from("Briar"),
            },
            Champion {
                name: String::from("Cassiopeia"),
            },
            Champion {
                name: String::from("Darius"),
            },
            Champion {
                name: String::from("Draven"),
            },
            Champion {
                name: String::from("Katarina"),
            },
            Champion {
                name: String::from("Kled"),
            },
            Champion {
                name: String::from("LeBlanc"),
            },
            Champion {
                name: String::from("Rell"),
            },
            Champion {
                name: String::from("Riven"),
            },
            Champion {
                name: String::from("Samira"),
            },
            Champion {
                name: String::from("Sion"),
            },
            Champion {
                name: String::from("Swain"),
            },
            Champion {
                name: String::from("Talon"),
            },
            Champion {
                name: String::from("Vladimir"),
            },
        ],
    }
}

pub fn piltover() -> Faction {
    Faction {
        name: FactionType::Piltover,
        challenge: String::from("Calculated"),
        champions: vec![
            Champion {
                name: String::from("Caitlyn"),
            },
            Champion {
                name: String::from("Camille"),
            },
            Champion {
                name: String::from("Corki"),
            },
            Champion {
                name: String::from("Ezreal"),
            },
            Champion {
                name: String::from("Heimerdinger"),
            },
            Champion {
                name: String::from("Jayce"),
            },
            Champion {
                name: String::from("Orianna"),
            },
            Champion {
                name: String::from("Seraphine"),
            },
            Champion {
                name: String::from("Vi"),
            },
        ],
    }
}

pub fn shadow_isles() -> Faction {
    Faction {
        name: FactionType::ShadowIsles,
        challenge: String::from("Spooky Scary Skeletons"),
        champions: vec![
            Champion {
                name: String::from("Elise"),
            },
            Champion {
                name: String::from("Evelynn"),
            },
            Champion {
                name: String::from("Fiddlesticks"),
            },
            Champion {
                name: String::from("Gwen"),
            },
            Champion {
                name: String::from("Hecarim"),
            },
            Champion {
                name: String::from("Kalista"),
            },
            Champion {
                name: String::from("Karthus"),
            },
            Champion {
                name: String::from("Maokai"),
            },
            Champion {
                name: String::from("Senna"),
            },
            Champion {
                name: String::from("Thresh"),
            },
            Champion {
                name: String::from("Viego"),
            },
            Champion {
                name: String::from("Yorick"),
            },
        ],
    }
}

pub fn shurima() -> Faction {
    Faction {
        name: FactionType::Shurima,
        challenge: String::from("The Sun Disc Never Sets"),
        champions: vec![
            Champion {
                name: String::from("Akshan"),
            },
            Champion {
                name: String::from("Amumu"),
            },
            Champion {
                name: String::from("Azir"),
            },
            Champion {
                name: String::from("K'Sante"),
            },
            Champion {
                name: String::from("Nasus"),
            },
            Champion {
                name: String::from("Naafiri"),
            },
            Champion {
                name: String::from("Rammus"),
            },
            Champion {
                name: String::from("Renekton"),
            },
            Champion {
                name: String::from("Sivir"),
            },
            Champion {
                name: String::from("Skarner"),
            },
            Champion {
                name: String::from("Taliyah"),
            },
            Champion {
                name: String::from("Xerath"),
            },
            Champion {
                name: String::from("Zilean"),
            },
        ],
    }
}

pub fn targon() -> Faction {
    Faction {
        name: FactionType::Targon,
        challenge: String::from("Peak Performance"),
        champions: vec![
            Champion {
                name: String::from("Aphelios"),
            },
            Champion {
                name: String::from("Aurelion Sol"),
            },
            Champion {
                name: String::from("Diana"),
            },
            Champion {
                name: String::from("Leona"),
            },
            Champion {
                name: String::from("Pantheon"),
            },
            Champion {
                name: String::from("Soraka"),
            },
            Champion {
                name: String::from("Taric"),
            },
            Champion {
                name: String::from("Zoe"),
            },
        ],
    }
}

pub fn void() -> Faction {
    Faction {
        name: FactionType::Void,
        challenge: String::from("Inhuman Screeching Sounds"),
        champions: vec![
            Champion {
                name: String::from("Bel'Veth"),
            },
            Champion {
                name: String::from("Cho'Gath"),
            },
            Champion {
                name: String::from("Kai'Sa"),
            },
            Champion {
                name: String::from("Kassadin"),
            },
            Champion {
                name: String::from("Kha'Zix"),
            },
            Champion {
                name: String::from("Kog'Maw"),
            },
            Champion {
                name: String::from("Malzahar"),
            },
            Champion {
                name: String::from("Rek'Sai"),
            },
            Champion {
                name: String::from("Vel'Koz"),
            },
        ],
    }
}

pub fn zaun() -> Faction {
    Faction {
        name: FactionType::Zaun,
        challenge: String::from("Chemtech Comrades"),
        champions: vec![
            Champion {
                name: String::from("Blitzcrank"),
            },
            Champion {
                name: String::from("Dr. Mundo}}"),
            },
            Champion {
                name: String::from("Ekko"),
            },
            Champion {
                name: String::from("Janna"),
            },
            Champion {
                name: String::from("Jinx"),
            },
            Champion {
                name: String::from("Renata Glasc"),
            },
            Champion {
                name: String::from("Twitch"),
            },
            Champion {
                name: String::from("Urgot"),
            },
            Champion {
                name: String::from("Viktor"),
            },
            Champion {
                name: String::from("Warwick"),
            },
            Champion {
                name: String::from("Zac"),
            },
            Champion {
                name: String::from("Zeri"),
            },
            Champion {
                name: String::from("Ziggs"),
            },
        ],
    }
}
