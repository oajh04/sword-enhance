const ITEMENHANCE = 'ITEMENHANCE';
const ITEMSELL = 'ITEMSELL';

export const itemEnhance = (e) => ({
    type: ITEMENHANCE, 
    enhanceMoney: e.money, 
});

export const itemSell = (e) => ({
    type: ITEMSELL,
    sellMoney: e.money,
});

const initialState = {
    money: 1000000,
    prevent: 0,
}

export default function myprofile(state = initialState, action){
    switch(action.type){
        case ITEMENHANCE:
            return state.money - action.enhanceMoney;
        case ITEMSELL:
            return state.money + action.sellMoney;
        default:
            return state;
    }
}