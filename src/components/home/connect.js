import {Card, Col, Container, Row} from "reactstrap";

function Connect(props) {
    return (
        <div style={{marginBottom: props.margin}}>
            <Container>
                <Row>
                    <Col tag="h1" style={{color: '#FFFFFF'}}>
                        Find me on
                    </Col>
                </Row>
                <Row>
                    <Col xs='6' tag="h1" style={{color: '#FFFFFF'}}>
                        <i className="bi-github"></i> <br></br>
                        <a href="https://github.com/BenjaMenja">GitHub</a>
                    </Col>
                    <Col xs='6' tag="h1" style={{color: '#FFFFFF'}}>
                        <i className="bi-linkedin"></i> <br></br>
                        <a href="https://www.linkedin.com/in/benjamin-gelinas-4679b723b/">LinkedIn</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Connect