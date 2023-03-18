import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";

function Project(props) {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div>
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
                        color: "#FFFFFF",
                        textAlign: 'justify',
                        textAlignLast: 'center'
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
        </div>
    )
}

export default Project