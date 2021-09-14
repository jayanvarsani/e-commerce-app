import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
    display: flex;
	flex-direction: column;
	margin-bottom: 10px;
	align-items: center;

	@media screen and (max-width: 800px) {
		align-items: center;
	}
`
export const PreviewContainer = styled.div`
    display: flex;
	justify-content: center;
	flex-wrap: wrap;
`
    
export const PreviewTitleContainer = styled.h1`
    font-size: 40px;
	margin-bottom: 5px;
	cursor: pointer;
`

