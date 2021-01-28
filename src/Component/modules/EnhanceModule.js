import { ENHANCESUCCESS, ENHANCEFAIL } from './type';

export const enhanceSuccess = (e) => ({type: ENHANCESUCCESS, id: e})
export const enhanceFail = (e) => ({type: ENHANCEFAIL, id: e})

const initialState = [
    {
        "id": 0,
        "some": "0강", //현재 능력치
        "probability": 1, //강화 확률
        "probabmoney": 300, //강화 가격
        "sellmoney": 0, //판매 가격
    },
    {
        "id": 1,
        "some": "1강",
        "probability": 1,
        "probabmoney": 300,
        "sellmoney": 150,
    },
    {
        "id": 2,
        "some": "2강",
        "probability": 1,
        "probabmoney": 500,
        "sellmoney": 400,
    },
    {
        "id": 3,
        "some": "3강",
        "probability": 0.95,
        "probabmoney": 500,
        "sellmoney": 600,
    },
    {
        "id": 4,
        "some": "4강",
        "probability": 0.95,
        "probabmoney": 1000,
        "sellmoney": 800,
    },
    {
        "id": 5,
        "some": "5강",
        "probability": 0.9,
        "probabmoney": 1500,
        "sellmoney": 1600,
    },
    {
        "id": 6,
        "some": "6강",
        "probability": 0.9,
        "probabmoney": 2000,
        "sellmoney": 3500,
    },
    {
        "id": 7,
        "some": "7강",
        "probability": 0.9,
        "probabmoney": 2000,
        "sellmoney": 6100,
    },
    {
        "id": 8,
        "some": "8강",
        "probability": 0.85,
        "probabmoney": 3000,
        "sellmoney": 10000,
    },
    {
        "id": 9,
        "some": "9강",
        "probability": 0.8,
        "probabmoney": 5000,
        "sellmoney": 20000,
    },
    {
        "id": 10,
        "some": "10강",
        "probability": 0.8,
        "probabmoney": 11000,
        "sellmoney": 35000,
    },
    {
        "id": 11,
        "some": "11강",
        "probability": 0.75,
        "probabmoney": 20000,
        "sellmoney": 160000,
    },
    {
        "id": 12,
        "some": "12강",
        "probability": 0.7,
        "probabmoney": 35000,
        "sellmoney": 350000,
    },
    {
        "id": 13,
        "some": "13강",
        "probability": 0.7,
        "probabmoney": 55000,
        "sellmoney": 1000000,
    },
    {
        "id": 14,
        "some": "14강",
        "probability": 0.65,
        "probabmoney": 100000,
        "sellmoney": 3000000,
    },
    {
        "id": 15,
        "some": "15강",
        "probability": 0.6,
        "probabmoney": 180000,
        "sellmoney": 7500000,
    },
    {
        "id": 16,
        "some": "16강",
        "probability": 0.6,
        "probabmoney": 300000,
        "sellmoney": 14200000,
    },
    {
        "id": 17,
        "some": "17강",
        "probability": 0.55,
        "probabmoney": 300000,
        "sellmoney": 20000000,
    },
    {
        "id": 18,
        "some": "18강",
        "probability": 0.5,
        "probabmoney": 500000,
        "sellmoney": 30000000,
    },
    {
        "id": 19,
        "some": "19강",
        "probability": 0.45,
        "probabmoney": 1000000,
        "sellmoney": 100000000,
    },
    {
        "id": 20,
        "some": "20강",
        "probability": 0.4,
        "probabmoney": 2000000,
        "sellmoney": 400000000,
    },
]

export default function enhance(state = initialState, action){
    switch(action.type){
        case ENHANCESUCCESS:
            return state.filter(en => en.id === action.id);
        case ENHANCEFAIL: 
            return state.filter(en => en.id === 0);
        default:
            return state.filter(en => en.id === 0);
    }
}