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

impl FactionType {
    pub fn to_string(&self) -> &'static str {
        match self {
            FactionType::BandleCity => "Bandle City",
            FactionType::Bilgewater => "Bilgewater",
            FactionType::Demacia => "Demacia",
            FactionType::Freljord => "Freljord",
            FactionType::Ionia => "Ionia",
            FactionType::Ixtal => "Ixtal",
            FactionType::Noxus => "Noxus",
            FactionType::Piltover => "Piltover",
            FactionType::ShadowIsles => "Shadow Isles",
            FactionType::Shurima => "Shurima",
            FactionType::Targon => "Targon",
            FactionType::Void => "Void",
            FactionType::Zaun => "Zaun",
        }
    }
}

pub struct Faction {
    name: FactionType,
    img_url: String,
    challenge: String,
    champions: Vec<Champion>,
}

impl Faction {
    pub fn challenge(&self) -> &str {
        return &self.challenge;
    }
    pub fn name(&self) -> &str {
        return self.name.to_string();
    }
    pub fn img_url(&self) -> &str {
        return &self.img_url;
    }
    pub fn champions_content(&self) -> String {
        format!(
            "{}",
            self.champions
                .iter()
                .map(|champion| format!("- `{}`", champion.to_string()))
                .collect::<Vec<_>>()
                .join("\n")
        )
    }
}

pub struct Champion {
    name: String,
}

impl Champion {
    pub fn to_string(&self) -> &str {
        return &self.name;
    }
}

pub fn bandle_city() -> Faction {
    Faction {
        name: FactionType::BandleCity,
        challenge: String::from("5 under 5"),
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/6/68/Bandle_City_Crest.png/revision/latest?cb=20190415230719"),
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

pub fn bilgewater() -> Faction {
    Faction {
        name: FactionType::Bilgewater,
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/0/06/Bilgewater_Crest.png/revision/latest?cb=20161117042614"),
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

pub fn demacia() -> Faction {
    Faction {
        name: FactionType::Demacia,
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/0/04/Demacia_Crest.png/revision/latest?cb=20180116201503"),
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

pub fn freljord() -> Faction {
    Faction {
        name: FactionType::Freljord,
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/0/0d/Freljord_crest.png/revision/latest?cb=20161117021436"),
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

pub fn ionia() -> Faction {
    Faction {
        name: FactionType::Ionia,
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/a/ae/Ionia_Crest.png/revision/latest?cb=20161117020756"),
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

pub fn ixtal() -> Faction {
    Faction {
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/d/df/Ixtal_Crest.png/revision/latest/scale-to-width-down/1000?cb=20190613153702"),
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

pub fn noxus() -> Faction {
    Faction {
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/e/e9/Noxus_Crest.png/revision/latest?cb=20161117055949"),
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
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Piltover_Crest.png/revision/latest?cb=20161117163225"),
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
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/e/e6/Shadow_Isles_LoR_Region.png/revision/latest?cb=20210827234448"),
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
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/6/66/Shuriman_Crest.png/revision/latest?cb=20161117023625"),
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
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Targon_Crest.png/revision/latest?cb=20161117025619"),
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
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Void_Crest.png/revision/latest?cb=20180801201707"),
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
        img_url: String::from("https://static.wikia.nocookie.net/leagueoflegends/images/b/bc/Zaun_Crest.png/revision/latest?cb=20180116201441"),
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
