import React, { useState } from 'react';
import * as S from '../styled/MainEnhanceStyle';
import { useSelector, useDispatch } from 'react-redux';

const MainBody = () => {
    const ReduxResult = useSelector(state => state);
    const dispatch = useDispatch();

    const myProfile = ReduxResult.MyProfileModule;
    const Enhanced = ReduxResult.EnhanceModule[0];

    const [ Enhance, setEnhance ] = useState(Enhanced)

    console.log(Enhance)

    return (
        <>
            <S.EnhanceBody>
                <S.BodySub>
                    판매가격 : {Enhance.sellmoney} <br />
                    강화가격 : {Enhance.probabmoney}
                </S.BodySub>
                <S.BodyContent>
                    이미지 <br />
                    {Enhance.some}<br/>
                    강화확률 : {Enhance.probability * 100}%
                </S.BodyContent>
                <S.BodySub>
                    아이템 목록
                </S.BodySub>
            </S.EnhanceBody>
        </>
    )
}

export default MainBody;