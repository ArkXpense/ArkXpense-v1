use starknet::ContractAddress;


#[starknet::interface]
pub trait IArkXpenseContractState<TContractState> {
    fn get_user_groups( self: @TContractState, user_address:ContractAddress)-> Array<u32>;
    //fn add_group_to_user( self: @TContractState, user_address:ContractAddress);
    //fn remove_group_from_user( self: @TContractState, user_address:ContractAddress);  
    //fn add_expense_to_group( self: @TContractState, group_id:u32, expense:Expense);
    //fn remove_expense_from_group( self: @TContractState, group_id:u32, expense_id:u32);
    //fn get_group_expenses( self: @TContractState, group_id:u32)->Array<Expense>;
    //fn get_group( self: @TContractState, group_id:u32)->Group; 
    //fn get_expense_details( self: @TContractState, expense_id:u32)->Expense;
}

#[starknet::contract]
mod ArkXpenseContractState {

    //use starknet::storage::StoragePathEntry;
    use openzeppelin_access::ownable::OwnableComponent;
    use starknet::{ContractAddress};//, contract_address_const};
    use starknet::storage::Map;
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
        self.group_counter.write(1); //0 is reserved for default group
        self.expense_counter.write(1); //0 is reserved for default expense

    }
    
    #[abi(embed_v0)]
    impl ArkXpenseContractState of IArkXpenseContractState<ContractState> {
        
        fn get_user_groups( self: @ContractState,user_address:ContractAddress)->Array<u32>{
            self.ownable.assert_only_owner();
            array![]
        }

        
    }

    #[generate_trait]
    impl InternalFunctions of InternalFunctionsTrait {
      
    }
}
