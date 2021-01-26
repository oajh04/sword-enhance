import styled from 'styled-components';

export const FailModalBorder = styled.div`
    position: absolute;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    visibility: ${({visibility}) => visibility};
`;

export const FailModal = styled.div`
    box-shadow: 8px 10px 30px 0 rgba(0, 0, 0, 0.16);
    overflow: hidden;
    width: 900px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: #ffffff;
`