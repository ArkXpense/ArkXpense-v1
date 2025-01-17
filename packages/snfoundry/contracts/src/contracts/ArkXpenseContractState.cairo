use starknet::ContractAddress;


#[starknet::interface]
pub trait IArkXpenseContractState<TContractState> {
    fn test(ref self: TContractState) -> ContractAddress;

    fn get_user_groups( self: @TContractState, user_address:ContractAddress)-> Array<u32>;
    //fn add_group_to_user( self: @TContractState, user_address:ContractAddress);
}

#[starknet::contract]
mod ArkXpenseContractState {

    use starknet::storage::StoragePathEntry;
use openzeppelin_access::ownable::OwnableComponent;
    use starknet::{ContractAddress};//, contract_address_const};
    use starknet::storage::Map;
    use starknet::{get_caller_address, get_contract_address};
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
        //user address : (group id : user id)
        user_group_map: Map<ContractAddress, Map<u32,u32>>,

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
        //self.get_user_groups().
    }
    
    #[abi(embed_v0)]
    impl ArkXpenseContractState of IArkXpenseContractState<ContractState> {
        
        fn test(ref self: ContractState) -> ContractAddress {
            self.ownable.assert_only_owner();
            return self.ownable.owner();
        }

        fn get_user_groups( self: @ContractState,user_address:ContractAddress)->Array<u32>{
            let map_aux = self.user_group_map.entry(user_address);
            let mut i = 0;

            let mut list: Array<u32> = ArrayTrait::new();

            loop{
                let group_id = map_aux.entry(i).read();
                if(group_id==0){
                    break;
                }else {
                    list.append(group_id);
                    i += 1;
                }
            };
            list
        }

        // fn add_group_to_user( self: @ContractState, user_address:ContractAddress){
        //     let map_aux = self.user_group_map.entry(user_address);

        //     let mut i = 0;

        //     loop{
        //         let index = map_aux.entry(i).read();
        //         if(index==0){
        //             self.user_group_map.entry(user_address).entry(i).write(self.group_counter.read());
                 
        //             break;
        //         }else {
        //             i += 1;
        //         }
        //     };
        // }
    }

    #[generate_trait]
    impl InternalFunctions of InternalFunctionsTrait {
      
    }
}
