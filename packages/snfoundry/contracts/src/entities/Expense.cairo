use starknet::storage::Map;
use starknet::{ContractAddress};

#[starknet::storage_node]
pub struct Expense {
    id:u32, //key
    group_id : u32,
    guarrantor: ContractAddress,
    //User address : amount to be paid
    debtors: Map<ContractAddress, u32>,
    paid:bool,

}

//Methods for the Expense struct
#[starknet::interface]
#[generate_trait]
impl ExpenseImpl of ExpenseTrait {
    //Get functions
    fn get_id(ref self:Expense) -> @u32{
        @self.id
    }
    fn get_group_id(ref self:Expense) -> @u32{
        @self .group_id
    }

    fn get_guarrantor(ref self:Expense) -> @ContractAddress{
        @self.guarrantor
    }
    fn get_debtors(ref self:Expense) -> @Map<ContractAddress, u32>{
        @self.debtors
    }
    fn get_paid(ref self:Expense) -> @bool{
        @self.paid
    }

    //Set functions
    fn set_paid(ref self:Expense, paid:bool){
        self.paid = paid;
    }
}