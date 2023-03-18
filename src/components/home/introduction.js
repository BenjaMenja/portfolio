import {Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";

function Introduction(props) {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div style={{marginBottom: props.margin}}>
            <Row>
                <Col>
                    <Card className="border-0" style={{
                        width: '40vw',
                        textAlign: "center",
                        left: '5vw',
                        background: bgColor
                    }}>
                        <CardBody>
                            <CardTitle tag="h1" style={{color: "#FFFFFF"}}>
                                A little about me
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0" style={{
                        width: '80vw',
                        textAlign: "left",
                        left: '5vw',
                        background: bgColor
                    }}>
                        <CardBody>
                            <CardText tag="h5" style={{color: "#FFFFFF"}}>
                                My name is Ben Gelinas, and I am a Computer Science and Game Development student. I have experience in using languages such as Java, JavaScript, Python, and C++. I also have experience in using development tools such as Visual Studio, Git, WebStorm, and IntelliJ.
                                <br></br>
                                <br></br>
                                <a href="../projects">Projects</a> I've worked on include a game engine with text-based graphics, a small game within that engine, and a large scale game using
                                <a style={{fontStyle: 'italic'}}> Minecraft's mcfunction</a> scripting language.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Introduction