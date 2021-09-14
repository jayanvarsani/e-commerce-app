import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ItemsContainer = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px; */

    display: flex;
	justify-content: center;
	flex-wrap: wrap;
`
    
export const CollectionTitleContainer = styled.h1`
    /* font-size: 38px;
    margin: 0 auto 30px; */
    font-size: 40px;
	margin-bottom: 5px;
`