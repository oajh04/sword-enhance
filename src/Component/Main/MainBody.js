import React from 'react';
import * as S from '../styled/MainEnhanceStyle';

const MainBody = () => {
    return (
        <>
            <S.EnhanceBody>
                <S.BodySub>
                    판매가격
                    강화가격
                </S.BodySub>
                <S.BodyContent>
                    이미지
                    강화확률 : 70%
                </S.BodyContent>
                <S.BodySub>
                    아이템 목록
                </S.BodySub>
            </S.EnhanceBody>
        </>
    )
}

export default MainBody;