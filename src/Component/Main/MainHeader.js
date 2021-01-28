import React, { useState } from 'react';
import * as S from '../styled/MainEnhanceStyle';
import StoreModal from '../Modal/StoreModal';
import { useSelector, useDispatch } from 'react-redux';
import { openmodal, closemodal } from '../modules/StoreModule';

const MainHeader = () => {
    const ReduxResult = useSelector(state => state)
    const dispatch = useDispatch();

    const showmodal = ReduxResult.StoreModule;
    const myProfile = ReduxResult.MyProfileModule;

    const [ money, setMoney ] = useState(myProfile)
    console.log(money)

    const onOpenModal = () => {
        dispatch(openmodal());
    };

    return (
        <>
            <S.EnhanceHeader>
                    <S.HeaderBox>
                        <div onClick={onOpenModal}>상점</div>
                    </S.HeaderBox>
                    <S.HeaderBox>
                        검 강화하기
                    </S.HeaderBox>
                    <S.HeaderBox>
                        
                        소지 금액 : {money.money}
                        
                    </S.HeaderBox>
                </S.EnhanceHeader>
        </>
    )
}

export default MainHeader;