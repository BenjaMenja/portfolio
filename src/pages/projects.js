import AllProjects from "../components/projects/allprojects";
import {Card, CardTitle} from "reactstrap";

function Projects() {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div>
            <Card style={{
                alignSelf: 'center',
                background: bgColor,
                marginBottom: '10vw'
            }}>
                <CardTitle tag='h1' style={{color: '#FFFFFF'}}>
                    Projects I've worked on
                </CardTitle>
            </Card>
            <AllProjects/>
        </div>
    )
}

export default Projects;