import React from 'react';
import * as S from '../styled/MainEnhanceStyle';
import { useSelector, useDispatch } from 'react-redux';
import { enhanceSuccess, enhanceFail } from '../modules/EnhanceModule';
import { itemEnhance, itemSell } from '../modules/MyProfileModule';

const MainFooter = () => {
    const ReduxResult = useSelector(state => state)
    const dispatch = useDispatch();

    const myProfile = ReduxResult.MyProfileModule;
    const Enhance = ReduxResult.EnhanceModule[0];

    console.log(Enhance)

    const onEnhanceSuccess = () => {
        dispatch(enhanceSuccess(1));
    };
    const onEnhanceFail = () => {
        dispatch(enhanceFail());
    };
    const onMoneyMius = (e) => {
        dispatch(itemEnhance({money: e}))
    }
    const onMoneyPlus = (e) => {
        dispatch(itemSell({money: e}))
    }

    const onEnhanceStart = () => {
        console.log(myProfile.money, Enhance.probabmoney)
        if(myProfile.money > Enhance.probabmoney){
            if(Math.random() < Enhance.probability){
                console.log()
                onEnhanceSuccess()
            }
            else{
                onEnhanceFail()
            }
            onMoneyMius(Enhance.probabmoney)
        }
    }

    const onItemSell = () => {
        onMoneyPlus(Enhance.sellmoney);
        onEnhanceFail()
    }

    return (
        <>
            <S.EnhanceFooter>
                <S.FooterBox>
                    <div onClick={onItemSell}>판매하기</div>
                </S.FooterBox>
                <S.FooterBox>
                    <div onClick={onEnhanceStart}>강화하기</div>
                </S.FooterBox>
            </S.EnhanceFooter>
        </>
    )
}

export default MainFooter;