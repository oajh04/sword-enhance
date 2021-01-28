import React, { useState } from 'react';
import * as S from '../styled/MainEnhanceStyle'
import Header from './MainHeader';
import Body from './MainBody';
import Footer from './MainFooter';
import StoreModal from '../Modal/StoreModal';
import { useSelector, useDispatch } from 'react-redux';
import { openmodal, closemodal } from '../modules/StoreModule';

const MainEnhance = () => {
    const ReduxResult = useSelector(state => state)
    const dispatch = useDispatch();

    const showmodal = ReduxResult.StoreModule;
    const Profile = ReduxResult.MyProfileModule;

    const onOpenModal = () => {
        dispatch(openmodal());
    };
    const onCloseModal = () => {
        dispatch(closemodal());
    };

    return (
      <>
        <S.MainEnhanceBorder>
            
            <S.EnhanceAll>

                <Header onOpenModal={onOpenModal} onCloseModal={onCloseModal}/>
                <Body profile={Profile}/>
                <Footer />

            </S.EnhanceAll>
            
            <StoreModal/>
        </S.MainEnhanceBorder>
      </>
    );
}

export default MainEnhance;