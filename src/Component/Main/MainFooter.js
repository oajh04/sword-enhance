import React from 'react';
import * as S from '../styled/MainEnhanceStyle';

const MainFooter = ({onEnhance}) => {
    return (
        <>
            <S.EnhanceFooter>
                <S.FooterBox>
                    판매하기
                </S.FooterBox>
                <S.FooterBox>
                    <div onClick={onEnhance}>강화하기</div>
                </S.FooterBox>
            </S.EnhanceFooter>
        </>
    )
}

export default MainFooter;