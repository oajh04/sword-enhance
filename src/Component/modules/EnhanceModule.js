const ENhANCESUCCESS = 'ENHACNESUCCESS';
const ENHANCEFAIL = 'ENHANCEFAIL';

export const enhanceSuccess = (e) => ({type: ENhANCESUCCESS, counter: 0 + e})
export const enhanceFail = (e) => ({type: ENHANCEFAIL, counter: 0})

const initialState = [
    {
        "some": "0강", //현재 능력치
        "probability": 1, //강화 확률
        "probabmoney": 300, //강화 가격
        "sellmoney": 0, //판매 가격
    },
    {
        "some": "1강",
        "probability": 1,
        "probabmoney": 300,
        "sellmoney": 150,
    },
    {
        "some": "2강",
        "probability": 1,
        "probabmoney": 500,
        "sellmoney": 400,
    },
    {
        "some": "3강",
        "probability": 0.95,
        "probabmoney": 500,
        "sellmoney": 600,
    },
    {
        "some": "4강",
        "probability": 0.95,
        "probabmoney": 1000,
        "sellmoney": 800,
    },
    {
        "some": "5강",
        "probability": 0.9,
        "probabmoney": 1500,
        "sellmoney": 1600,
    },
    {
        "some": "6강",
        "probability": 0.9,
        "probabmoney": 2000,
        "sellmoney": 3500,
    },
    {
        "some": "7강",
        "probability": 0.9,
        "probabmoney": 2000,
        "sellmoney": 6100,
    },
    {
        "some": "8강",
        "probability": 0.85,
        "probabmoney": 3000,
        "sellmoney": 10000,
    },
    {
        "some": "9강",
        "probability": 0.8,
        "probabmoney": 5000,
        "sellmoney": 20000,
    },
    {
        "some": "10강",
        "probability": 0.8,
        "probabmoney": 11000,
        "sellmoney": 35000,
    },
    {
        "some": "11강",
        "probability": 0.75,
        "probabmoney": 20000,
        "sellmoney": 160000,
    },
    {
        "some": "12강",
        "probability": 0.7,
        "probabmoney": 35000,
        "sellmoney": 350000,
    },
    {
        "some": "13강",
        "probability": 0.7,
        "probabmoney": 55000,
        "sellmoney": 1000000,
    },
    {
        "some": "14강",
        "probability": 0.65,
        "probabmoney": 100000,
        "sellmoney": 3000000,
    },
    {
        "some": "15강",
        "probability": 0.6,
        "probabmoney": 180000,
        "sellmoney": 7500000,
    },
    {
        "some": "16강",
        "probability": 0.6,
        "probabmoney": 300000,
        "sellmoney": 14200000,
    },
    {
        "some": "17강",
        "probability": 0.55,
        "probabmoney": 300000,
        "sellmoney": 20000000,
    },
    {
        "some": "18강",
        "probability": 0.5,
        "probabmoney": 500000,
        "sellmoney": 30000000,
    },
    {
        "some": "19강",
        "probability": 0.45,
        "probabmoney": 1000000,
        "sellmoney": 100000000,
    },
    {
        "some": "20강",
        "probability": 0.4,
        "probabmoney": 2000000,
        "sellmoney": 400000000,
    },
]

export default function enhance(state = initialState, action){
    console.log(action.counter)
    switch(action.type){
        case ENhANCESUCCESS:
            return state[1];
        case ENHANCEFAIL: 
            return state[0];
        default:
            return state[0];
    }
}