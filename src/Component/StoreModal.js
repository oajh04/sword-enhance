import React, { useState } from 'react';
import * as S from './styled/StoreStyle';

const StoreModal = () => {

    return (
        <>
            <S.ModalBorder visibility={visibility}>
                <S.StoreModal>
                    <S.StoreSort>

                    </S.StoreSort>
                </S.StoreModal>
            </S.ModalBorder>
        </>
    )
}

export default StoreModal;