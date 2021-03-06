import styled, { css } from 'styled-components';

const primaryColour = 'black'
const secondaryColour = 'grey'

const shrinkLabelStyles = css`
    top: -14px;
	font-size: 12px;
	color: ${primaryColour};
`

export const GroupContainer = styled.div`
    position: relative;
	margin: 45px 0;
    margin-bottom: -10px;

    input[type="password"] {
		letter-spacing: 0.3em;
	}
`
export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: ${secondaryColour};
    font-size: 18px;
    padding: 10px 10px 10px 10px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${secondaryColour};
    margin: 25px 0;

    &:focus {
        outline: none;
    }

    // whenever a form input field is in focus
    // target the label and call shrink label
    // move up, change colour and size
    &:focus ~ label {
        ${shrinkLabelStyles}
    }
`

export const FormInputLabelContainer = styled.label`
    color: ${secondaryColour};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLabelStyles};
    }
`





