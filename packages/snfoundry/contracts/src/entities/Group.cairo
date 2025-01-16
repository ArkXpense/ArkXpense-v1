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

//Methods for the Group struct
#[starknet::interface]
#[generate_trait]
impl ExpenseImpl of ExpenseTrait {
    //Get functions
    fn get_id(ref self:Group) -> @u32{
        @self.id
    }
    fn get_group_name(ref self:Group) -> @felt252{
        @self.group_name
    }
    fn get_users(ref self:Group) -> @Array<User>{
        @self.users
    }
    fn get_userCounter(ref self:Group) -> @u8{
        @self.userCounter
    }
    fn get_balances(ref self:Group) -> @Map<ContractAddress, i32>{
        @self.balances
    }

    //Set functions
    fn set_group_name(ref self:Group, group_name:felt252){
        self.group_name = group_name;
    }

    //Aditional functions
    
    //fn add_user(ref self:Group, user:User){
    //    self.users.append(user);
    //    self.userCounter += 1;
    // }

    // fn update_balance(ref self:Group, user:ContractAddress, amount:i32){
    //     let balance = self.balances.get(user);
    //     self.balances.insert(user, balance + amount);
    // }

   

    

}