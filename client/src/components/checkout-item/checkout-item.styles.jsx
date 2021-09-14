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
        width: 70%;
	    /* height: 100%; */
        border-radius: 15px;
    }
`
    
export const TextContainer = styled.span`
    width: 23%;
`

export const QuantityContainer = styled(TextContainer)`
    display: flex;
    div {
        cursor: pointer;
        padding: 0px 5px
    }
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
