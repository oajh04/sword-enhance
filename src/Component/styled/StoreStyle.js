import styled from 'styled-components';

export const ModalBorder = styled.div`
    position: absolute;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const StoreModal = styled.div`
    box-shadow: 8px 10px 30px 0 rgba(0, 0, 0, 0.16);
    overflow: hidden;
    width: 900px;
    height: 600px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: #ffffff;
`

export const StoreSort = styled.div`
    width: 100%;
    height: 100%;
`