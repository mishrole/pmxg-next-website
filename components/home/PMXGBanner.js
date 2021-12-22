import styled from 'styled-components';
import { Container } from "react-bootstrap";

const StyledWrapper = styled.div`
    padding: 150px 0 0;
    position: relative;
`;

const StyledContainer = styled(Container)`
    background-color: #273e74;
    text-align: center;
    color: #FFFFFF;
    padding: 80px 0;

    h2 {
        font-weight: bold;
        margin-bottom: 1em;
    }

    p {
        font-size: 26px;
        padding: 0 2.5em;
        color: rgba(255,255,255,0.9);
        line-height: 35px;
    }
`;

export const PMXGBanner = ({ translate }) => {

    const whoWeAre = translate('home:who-we-are');
    const whoWeAreMessage = translate('home:who-we-are_message');

    return (
        <>
            <StyledWrapper name="who-we-are">
                <StyledContainer fluid>
                    <h2>{whoWeAre}</h2>
                    <p>{whoWeAreMessage}</p>
                </StyledContainer>
            </StyledWrapper>
        </>
    )
}