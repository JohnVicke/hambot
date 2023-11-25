use rand::Rng;

async fn random_number(n: u8) -> u8 {
    let mut rng = rand::thread_rng();
    rng.gen_range(0..n);
}

async fn globetrobe() {}
