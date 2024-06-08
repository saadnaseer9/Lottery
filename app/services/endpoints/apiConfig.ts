import config from "../config/configuration";

export const endpoints = {
    lottery :{
        getLotteryCosmic:`${config.BASE_URL}luckito/lottery/get-lottery?lotteryType=COSMIC`,
        getLotteryClassic:"luckito/lottery/get-lottery?lotteryType=CLASSIC",
        getLotteryAtomic:"luckito/lottery/get-lottery?lotteryType=ATOMIC"
    }
}