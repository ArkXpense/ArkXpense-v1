use starknet::ContractAddress;

#[starknet::interface]
pub trait IArkXpenseContractState<TContractState> {
    fn test(ref self: TContractState) -> ContractAddress;
}

#[starknet::contract]
mod ArkXpenseContractState {

    use openzeppelin_access::ownable::OwnableComponent;
    use starknet::storage::Map;
    use starknet::{ContractAddress};//, contract_address_const};
    //use starknet::{get_caller_address, get_contract_address};
    use super::{IArkXpenseContractState};
    use crate::entities::Expense::{Expense};
    use crate::entities::Group::{Group};
    

    component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);

    // Ownable Mixin
    #[abi(embed_v0)]
    impl OwnableMixinImpl = OwnableComponent::OwnableMixinImpl<ContractState>;
    impl InternalImpl = OwnableComponent::InternalImpl<ContractState>;

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
        #[substorage(v0)]
        ownable: OwnableComponent::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        OwnableEvent: OwnableComponent::Event,
    }

    #[constructor]
    fn constructor(ref self: ContractState, owner: ContractAddress) {
        //self.greeting.write("Building Unstoppable Apps!!!");
        self.ownable.initializer(owner);
    }
    
    #[abi(embed_v0)]
    impl YourContractImpl of IArkXpenseContractState<ContractState> {
        
        fn test(ref self: ContractState) -> ContractAddress {
            self.ownable.assert_only_owner();
            return self.ownable.owner();
        }
    }
}
