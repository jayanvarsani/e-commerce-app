import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`	
export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    margin-bottom: -5px;

`
    
export const TextContainer = styled.span`
    width: 23%;
    @media (max-width: 800px) {
        font-size: 16px;
	}
`

export const QuantityContainer = styled(TextContainer)`
    /* display: flex;
    div {
        cursor: pointer;
        padding: 0px 5px
    } */

    display: flex;
    span {
        margin: 0 10px;
    }
    div {
        cursor: pointer;
        padding: 0px 5px;
    }
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
