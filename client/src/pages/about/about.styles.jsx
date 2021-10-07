import styled from 'styled-components';

export const AboutPageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const AboutTitleContainer = styled.h1`
    text-align: center;
	font-size: 40px;
	margin: 0;
    padding-bottom: 5px;
`
export const AboutParagraphContainer = styled.div`
    text-align: center;
	font-size: 18px;
	margin-left: auto;
	margin-right: auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        width: 80%;
	}

	@media (min-width: 800px) {
        width: 700px;
	}
`
export const AboutLine = styled.p`
    margin: 0;
`
export const Link = styled.a`
    margin: 0;
    text-decoration: underline;
`