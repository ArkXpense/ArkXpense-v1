use starknet::{ContractAddress};

#[storage]
pub struct User {
    address: ContractAddress, //key 
    nickname: felt252,
}