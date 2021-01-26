import React from 'react';
import * as S from '../styled/MainEnhanceStyle';

const MainHeader = ({onOpenModal, onCloseModal}) => {

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
                        소지 금액 : 1000000
                    </S.HeaderBox>
                </S.EnhanceHeader>
        </>
    )
}

export default MainHeader;