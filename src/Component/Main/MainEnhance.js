import React, { useState } from 'react';
import * as S from '../styled/MainEnhanceStyle'
import Header from './MainHeader';
import Body from './MainBody';
import Footer from './MainFooter';
import StoreModal from '../Modal/StoreModal';
import { useSelector, useDispatch } from 'react-redux';
import { openmodal, closemodal } from '../modules/StoreModule';
import { itemEnhance } from '../modules/MyProfileModule';
//import MoneyModel from './MoneyModul';

const MainEnhance = () => {
    const ReduxResult = useSelector(state => state)
    const dispatch = useDispatch();

    const onOpenModal = () => {
        dispatch(openmodal());
    };
    const onCloseModal = () => {
        dispatch(closemodal());
    };

    const onEnhance = () => {
        dispatch(itemEnhance({money: 10000}));
    }

    const showmodal = ReduxResult.StoreModule;

    console.log(showmodal)

    return (
      <>
        <S.MainEnhanceBorder>
            
            <S.EnhanceAll>

                <Header onOpenModal={onOpenModal} onCloseModal={onCloseModal}/>
                <Body />
                <Footer onEnhance={onEnhance}/>

            </S.EnhanceAll>
            
            <StoreModal/>
        </S.MainEnhanceBorder>
      </>
    );
}

export default MainEnhance;