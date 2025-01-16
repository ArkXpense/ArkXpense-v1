#[starknet::interface]
pub trait IArkXpenseContractState<TContractState> {
   //funtions to the implemented by the contract 
}

#[starknet::contract]
mod ArkXpenseContractState {
    //use openzeppelin_access::ownable::OwnableComponent;
    use starknet::storage::Map;
    use starknet::{ContractAddress};//, contract_address_const};
    //use starknet::{get_caller_address, get_contract_address};
    use super::{IArkXpenseContractState};
    use crate::entities::Expense::{Expense};
    use crate::entities::Group::{Group};
    

    //component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);

    #[abi(embed_v0)]
    //impl OwnableImpl = OwnableComponent::OwnableImpl<ContractState>;
    //impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        group_counter: u32,
        expense_counter: u32,

        //user address : array of group ids where user is present
        user_group_map: Map<ContractAddress, Array<u32>>,

        //group id : array of expense 
        group_expense_map: Map<u32, Array<Expense>>,

        //group id : group
        id_group_map: Map<u32, Group>,
    }

    #[constructor]
    fn constructor(ref self: ContractState, owner: ContractAddress) {
        //self.greeting.write("Building Unstoppable Apps!!!");
        //self.ownable.initializer(owner);
    }

    #[abi(embed_v0)]
    impl YourContractImpl of IArkXpenseContractState<ContractState> {
        
    }
}
