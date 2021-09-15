import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    width: 70%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

    button {
        /* margin-left: auto; */
		margin-bottom: 20px;
		// color: #60db75;
    }

    @media (max-width: 800px) {
        width: 90%;
	}
`
    
export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: 22%;
    font-size: 14px;
    &:last-child {
      width: 12%;
    }
  }
`;
export const TotalContainer = styled.div`
    margin-top: 30px;
    /* margin-left: auto; */
    /* align-items: center; */
    font-size: 36px;
`
export const TestWarningContainer = styled.div`
    text-align: center;
    font-size: 18px;
    color: rgb(209, 0, 0);
`
