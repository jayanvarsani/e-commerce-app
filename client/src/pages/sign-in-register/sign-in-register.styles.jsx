import styled from 'styled-components';

export const SignInRegisterContainer = styled.div`
    max-width: 850px;
	display: flex;
	margin: 30px auto;

	@media (max-width: 1000px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	@media (min-width: 1000px) {
		flex-direction: row;
		justify-content: space-between;
	}
`

export const SignInRegisterTitleContainer = styled.h1`
    text-align: center;
	font-size: 40px;
	margin: 0;
`

