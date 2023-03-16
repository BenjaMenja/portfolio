import {Card, CardTitle, CardBody, CardText, Col, Row, List} from "reactstrap";

function Description(props) {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div style={{marginBottom: props.margin}}>
            <Row>
                <Col sm="6">
                    <Card className="border-0" style={{
                        width: '40vw',
                        textAlign: "center",
                        left: '15vw',
                        background: bgColor
                    }}>
                        <CardBody>
                            <CardTitle tag="h1" style={{
                                color: "#FFFFFF"
                            }}>
                                About Me
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="6">
                    <Card className="border-0" style={{
                        width: '40vw',
                        textAlign: "left",
                        left: "15vw",
                        background: bgColor
                    }}>
                        <CardBody>
                            <CardText tag="h4" style={{color: '#FFFFFF'}}>
                                Hello! I'm Ben Gelinas, and I am a Computer Science and Game Development student from Westfield, Massachusetts. I like to work on team-based projects that include Web apps and games.
                                <br></br>
                                <br></br>
                                I have experience with languages such as C/C++, C#, Java, JavaScript, and React. A full list of languages and development tools I use can be found below.
                                <br></br>
                                <br></br>
                                Outside of programming, I also enjoy:
                                <List>
                                    <li>Performing music</li>
                                    <li>Playing and analyzing games</li>
                                    <li>Solving puzzles</li>
                                </List>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Description