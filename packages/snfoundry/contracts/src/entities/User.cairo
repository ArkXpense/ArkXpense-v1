use starknet::{ContractAddress};

#[derive(Drop, Serde, starknet::Store)]
pub struct User {
    address: ContractAddress, //key 
    nickname: felt252,
}

//Methods for the User struct
#[generate_trait]
impl ExpenseImpl of ExpenseTrait {
    
}