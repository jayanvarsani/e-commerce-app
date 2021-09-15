import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  /* min-width: 325px; */
	display: flex;
	flex-direction: column;
	/* height: 500px; */
	align-items: center;
	position: relative;
  padding: 10px;

    &:hover {
		.image {
			opacity: 0.8;
		}

		button {
			opacity: 0.85;
			display: flex;
		}
	}

  @media screen and (min-width: 800px) {
    width: 325px;
    height: 500px;
  }

  @media screen and (max-width: 800px) {
    width: 50%;
    height: 400px;
    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: 0.85;
        display: flex;
      }
    }
  }
`

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 10px;
`
    
export const AddButton = styled(CustomButton)`
    width: 70%;
    opacity: 0.7;
    position: absolute;
    top: 386px;
    display: none;
    
    @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0px 10px;
      top: 290px;
	  }
`

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    border-radius: 20px;
`

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
`;