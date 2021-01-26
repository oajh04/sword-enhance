import React from 'react';
import * as S from '../styled/MainEnhanceStyle';

const MainHeader = () => {

    return (
        <>
            <S.EnhanceHeader>
                    <S.HeaderRigth>
                        상점
                    </S.HeaderRigth>
                    <S.HeaderCenter>
                        검 강화하기
                    </S.HeaderCenter>
                    <S.HeaderLeft>
                        소지 금액 : 1000000
                    </S.HeaderLeft>
                </S.EnhanceHeader>
        </>
    )
}

export default MainHeader;