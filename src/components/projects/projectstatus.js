import {Card, CardText, CardTitle} from "reactstrap";

function ProjectStatus(props) {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div>
            <Card style={{
                textAlign: 'left',
                background: bgColor,
                marginTop: '5rem',
                marginBottom: '10rem'
            }}>
                <CardTitle tag="h1">
                    Development Info:
                </CardTitle>
                <CardText tag="h4" style={{
                    lineHeight: '35px'
                }}>
                    Team Size: {props.teamsize} <br></br>
                    Role: {props.role} <br></br>
                    Project Finished: {props.isDone} <br></br>
                    Start/End: {props.dates} <br></br>
                    Languages/Tools Used: {props.tools} <br></br>
                </CardText>
            </Card>
        </div>
    )
}

export default ProjectStatus