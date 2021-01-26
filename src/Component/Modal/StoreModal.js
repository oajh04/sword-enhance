import React, { useState } from 'react';
import * as S from '../styled/StoreStyle';
import { useSelector, useDispatch } from 'react-redux';
import { closemodal } from '../modules/StoreModule';

const StoreModal = () => {
    const ReduxResult = useSelector(state => state.StoreModule);

    const dispatch = useDispatch();
    const onCloseModal = () => {
        dispatch(closemodal());
    };

    return (
        <>
            {
            ReduxResult &&
            <S.ModalBorder>
                <S.StoreModal>
                    <S.StoreSort>
                        <div onClick={onCloseModal}>닫기</div>
                    </S.StoreSort>
                </S.StoreModal>
            </S.ModalBorder>
            }
        </>
    )
}

export default StoreModal;