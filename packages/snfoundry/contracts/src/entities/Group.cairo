use starknet::storage::Map;
use crate::entities::User::{User};
use starknet::{ContractAddress};

#[starknet::storage_node]
pub struct Group {
    id:u32, //
    group_name: felt252,
    users: Array<User>,
    userCounter: u8,
    //User address : balance
    balances: Map<ContractAddress, i32>,
}