import styled, { css } from "styled-components";

const getButtonStyles = ({isGoogle, inverted}) => {
    if (isGoogle) return googleSignInStyles
    return inverted ? invertedButtonStyles : buttonStyles
}

const buttonStyles = css`
    background-color: #272727;
    color: white;
    border: none;
    &:hover {
		background-color: white;
		color: #272727;
		border: 2px solid #272727;
	}
`

const invertedButtonStyles = css`
    background-color: white;
	color: black;

    &:hover {
        background-color: black;
        color: white;
    }
`

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: 100%;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0px 35px 0 35px;
    font-size: 15px;
    background-color: #272727;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    // margin-bottom: 5px;
    margin: 3px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: auto;

    ${getButtonStyles}
`