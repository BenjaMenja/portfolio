import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row} from "reactstrap";
import MediaQuery from "react-responsive";

function NameDesc(props) {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div style={{marginBottom: props.margin}}>
            <MediaQuery query={"(min-device-width: 601px)"}>
                <Row>
                    <Col sm="6">
                        <Card className="border-0" style={{
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
                        <Card className="border-0" style={{
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
            </MediaQuery>

            <MediaQuery query={"(max-device-width: 600px)"}>
                <Card className="border-0" style={{
                    width: '70vw',
                    textAlign: "center",
                    left: '15vw',
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
                <Card className="border-0" style={{
                    width: '75vw',
                    textAlign: "center",
                    background: bgColor,
                    left: '12.5vw'
                }}>
                    <CardBody style={{color: '#FFFFFF'}}>
                        <CardText tag="h4">
                            I am a Computer Science and Game Development student pursuing a career in the video game industry. Check out some of the projects I've worked on down below, or learn more about me by clicking on my About tab!
                        </CardText>
                    </CardBody>
                </Card>
            </MediaQuery>
        </div>
    )
}

export default NameDesc