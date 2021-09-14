import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-top: 10px;
    }
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding-top: 15px;
    padding-left: 5px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
        padding-left: 10px;
    }
`
export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
    @media screen and (min-width: 800px) {
        width: 50%;
    }
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
	cursor: pointer;
`
