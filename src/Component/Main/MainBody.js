import React from 'react';
import * as S from '../styled/MainEnhanceStyle';

const MainBody = () => {
    return (
        <>
            <S.EnhanceBody>
                <S.BodyRight>
                    판매가격
                    강화가격
                </S.BodyRight>
                <S.BodyCenter>
                    이미지
                    강화확률 : 70%
                </S.BodyCenter>
                <S.BodyLeft>
                    아이템 목록
                </S.BodyLeft>
            </S.EnhanceBody>
        </>
    )
}

export default MainBody;