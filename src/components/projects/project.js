import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";
import MediaQuery from "react-responsive";

function Project(props) {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div>
            <MediaQuery query={"(min-device-width: 769px)"}>
                <Card outline color="light" style={{
                    width: '20vw',
                    textAlign: 'center',
                    background: bgColor
                }}>
                    <CardBody>
                        <CardTitle tag="h2" style={{
                            color: '#FFFFFF'
                        }}>
                            {props.title}
                        </CardTitle>
                        <img src={props.imgsrc} alt="Uh oh" width='90%' height='auto'/>
                        <CardText style={{
                            color: "#FFFFFF"
                        }}>
                            {props.desc}
                            <br></br>
                            <br></br>
                            <Button color="primary" onClick={() => {
                                window.location.href = '/' + props.project
                            }}>
                                Learn More
                            </Button>
                        </CardText>
                    </CardBody>
                </Card>
            </MediaQuery>
            <MediaQuery query={"(max-device-width: 768px)"}>
                <Card outline color="light" style={{
                    width: '75vw',
                    textAlign: 'center',
                    background: bgColor,
                    marginLeft: '12.5vw',
                    marginBottom: '5rem'
                }}>
                    <CardBody>
                        <CardTitle tag="h2" style={{
                            color: '#FFFFFF'
                        }}>
                            {props.title}
                        </CardTitle>
                        <img src={props.imgsrc} alt="Uh oh" width='90%' height='auto'/>
                        <CardText style={{
                            color: "#FFFFFF"
                        }}>
                            {props.desc}
                            <br></br>
                            <br></br>
                            <Button color="primary" onClick={() => {
                                window.location.href = '/' + props.project
                            }}>
                                Learn More
                            </Button>
                        </CardText>
                    </CardBody>
                </Card>
            </MediaQuery>
        </div>
    )
}

export default Project