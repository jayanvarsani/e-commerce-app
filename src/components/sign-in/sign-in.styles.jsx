import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 380px;
	display: flex;
	flex-direction: column;

    .title {
		margin: 10px 0;
	}

	@media (max-width: 1000px) {
		padding-bottom: 70px;
	}

	@media (min-width: 1000px) {
		padding-bottom: 0px;
	}
    
	.error-container {
		margin-top: -40px;
	}
`

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
`
