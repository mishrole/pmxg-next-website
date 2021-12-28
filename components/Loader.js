import styled from "styled-components";
import { Container, Spinner } from "react-bootstrap";

const StyledContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  background: #002764;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <>
      <StyledContainer fluid>
        <Spinner animation="border" variant="light" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </StyledContainer>
    </>
  );
};
