use rand::Rng;

pub fn random_number(n: u32) -> u32 {
    rand::thread_rng().gen_range(0..n)
}
