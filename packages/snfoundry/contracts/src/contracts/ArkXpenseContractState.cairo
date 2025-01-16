#[starknet::interface]
pub trait IArkXpenseContractState<TContractState> {
    //get functions

    //create functions

    //update functions


    
}

#[starknet::contract]
mod ArkXpenseContractState {
    use openzeppelin_access::ownable::OwnableComponent;
    use starknet::storage::Map;
    use starknet::{ContractAddress, contract_address_const};
    use starknet::{get_caller_address, get_contract_address};
    use super::{IArkXpenseContractState};

    //component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);

    #[abi(embed_v0)]
    //impl OwnableImpl = OwnableComponent::OwnableImpl<ContractState>;
    //impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;

    const ETH_CONTRACT_ADDRESS: felt252 =
        0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7;

    // #[event]
    // #[derive(Drop, starknet::Event)]
    // enum Event {
    //     #[flat]
    //     OwnableEvent: OwnableComponent::Event,
    //     GreetingChanged: GreetingChanged,
    // }

    // #[derive(Drop, starknet::Event)]
    // struct GreetingChanged {
    //     #[key]
    //     greeting_setter: ContractAddress,
    //     #[key]
    //     new_greeting: ByteArray,
    //     premium: bool,
    //     value: u256,
    // }

    #[storage]
    struct Storage {
        group_counter: u32,
        expense_counter: u32,

        //user address : array of group ids where user is present
        user_group_map: Map<ContractAddress, Array<u32>>,
        group_expense_map: Map<u32, Array<u32>>,

        total_counter: u256,
        user_greeting_counter: Map<ContractAddress, u256>,
        #[substorage(v0)]
        ownable: OwnableComponent::Storage,
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
