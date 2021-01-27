import React from 'react';
import * as S from '../styled/MainEnhanceStyle';
import { useSelector, useDispatch } from 'react-redux';
import { enhanceSuccess, enhanceFail } from '../modules/EnhanceModule';
import { itemEnhance, itemSell } from '../modules/MyProfileModule';

const MainFooter = () => {
    const ReduxResult = useSelector(state => state)
    const dispatch = useDispatch();

    const myProfile = ReduxResult.MyProfileModule;
    const Enhance = ReduxResult.EnhanceModule;

    console.log(Enhance)

    const onEnhanceSuccess = () => {
        dispatch(enhanceSuccess());
    };
    const onEnhanceFail = () => {
        dispatch(enhanceFail());
    };
    const onMoneyMius = (e) => {
        itemEnhance({money: e})
    }
    const onMoneyPlus = (e) => {
        itemSell({money: e})
    }

    const onEnhanceStart = () => {
        if(myProfile.money > Enhance.probabmoney){
            if(Math.random() < Enhance.probability){
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