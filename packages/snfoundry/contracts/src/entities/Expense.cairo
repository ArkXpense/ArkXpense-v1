use starknet::storage::Map;
use starknet::{ContractAddress};

#[starknet::storage_node]
pub struct Expense {
    id:u32, //key
    group_id : u32,
    guarrantor: ContractAddress,
    //User address : amount to be paid
    debtors: Map<ContractAddress, u32>,

}

#[generate_trait]
impl ExpenseImpl of ExpenseTrait {
    
}