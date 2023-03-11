import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row} from "reactstrap";

function NameDesc(props) {
    let bgColor = '#070734'
    return (
        <div style={{marginBottom: props.margin}}>
            <Row>
                <Col sm="6">
                    <Card style={{
                        width: '40vw',
                        textAlign: "center",
                        left: '5vw',
                        background: bgColor
                    }}>
                        <CardBody style={{color: '#FFFFFF'}}>
                            <CardTitle tag="h1">
                                Hi!
                            </CardTitle>
                            <CardSubtitle tag="h1">
                                I'm Ben Gelinas
                            </CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card style={{
                        width: '40vw',
                        textAlign: "center",
                        background: bgColor
                    }}>
                        <CardBody style={{color: '#FFFFFF'}}>
                            <CardText tag="h4">
                                I am a Computer Science and Game Development student pursuing a career in the video game industry. Check out some of the projects I've worked on down below, or learn more about me by clicking on my About tab!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default NameDesc