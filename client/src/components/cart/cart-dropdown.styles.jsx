import styled, { css } from "styled-components";

const emptyStyling = ({ length }) => (
    length ? css`overflow-y: scroll;` : css`overflow-y: hidden;`
)

export const CartDropdownContainer = styled.div`
    position: absolute;
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding: 20px;
	/* border: 1px solid black; */
	background-color: white;
	
	z-index: 5;

	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	box-shadow: 0px 5px 10px #0000006d;

	@media (max-width: 800px) {
        top: 90px;
		right: 32px;
		width: 295px;
	}

	@media (min-width: 800px) {
        top: 90px;
		right: 72px;
		width: 295px;
	}
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    text-align: center;
    padding: 15px;
    padding-top: 5px;
`
export const CartItems = styled.div`
    max-height: 278px;
    display: flex;
    flex-direction: column;
    ${emptyStyling}
`
