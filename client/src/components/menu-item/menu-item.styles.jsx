import styled from 'styled-components';

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: ${({ size }) => (size ? '500px' : '320px')};
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	margin: 0 7.5px 15px;
	overflow: hidden;
    border-radius: 20px;


    &:hover {
		cursor: pointer;

		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& .content {
			opacity: 0.9;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

    @media screen and (max-width: 800px) {
        /* height: 300px; */
    }
`
export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`
export const ContentContainer = styled.div`
    height: 100px;
    width: 190px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: white;
    opacity: 0.7;
    // no matter what other elements there are, position as intended
    position: absolute;
    box-shadow: 3px 3px 5px;

    border-radius: 10px;
`
export const ContentTitle = styled.span`
    font-weight: bold;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 22px;
    color: #4a4a4a;
`
export const ContentSubTitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`