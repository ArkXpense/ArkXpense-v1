use starknet::{ContractAddress};

#[derive(Drop, Serde, starknet::Store)]
pub struct User {
    address: ContractAddress, //key 
    nickname: felt252,
}