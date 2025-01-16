use starknet::{ContractAddress};

#[derive(Drop, Serde, starknet::Store)]
pub struct User {
    address: ContractAddress, //key 
    nickname: felt252,
}

//Methods for the User struct
#[generate_trait]
impl ExpenseImpl of ExpenseTrait {
    //Get functions
    fn get_address(ref self:User) -> @ContractAddress{
        @self.address
    }

    fn get_nickname(ref self:User) -> @felt252{
        @self.nickname
    }

    //Set functions
    fn set_nickname(ref self:User, nickname:felt252){
        self.nickname = nickname;
    }
}