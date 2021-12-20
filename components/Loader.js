import { Container, Spinner } from "react-bootstrap";

export const Loader = () => {
    return (
        <>
        
        <Container fluid className="loader">
            <Spinner animation="border" variant="light" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>

        <style jsx>{`
            .loader {
                height: 100vh;
                width: 100vw;
                background: #002764;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>

        </>
    )
}