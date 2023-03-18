import Project from "./project";
import dragonflyimg from "../../images/dragonfly.png"
import pkmnblitzimg from "../../images/pokemon-blitz.png"
import rslogo from "../../images/royal-siege-logo.png"
import {Col, Row} from "reactstrap";

function AllProjects() {
    return(
        <div>
            <Row style={{
                marginLeft: '7.5vw'
            }}>
                <Col sm="4">
                    <Project title="Dragonfly" imgsrc={dragonflyimg}
                             desc="An ASCII art game engine capable of providing a code framework necessary to build 2D text-based video games. Built by me with the guidance of Professor Mark Claypool at Worcester Polytechnic Institute."
                             project="dragonfly"/>
                </Col>
                <Col sm="4">
                    <Project title="Pokemon Blitz" imgsrc={pkmnblitzimg}
                             desc="A bullet hell game made in the Dragonfly game engine. I created all things related to the playable characters, navigable menu, artwork, and information displays."
                             project="pokemon-blitz"/>
                </Col>
                <Col sm="4">
                    <Project title="Royal Siege" imgsrc={rslogo}
                             desc="A team-based MOBA game built in Minecraft using its mcfunction scripting language. It is a work in progress game that features 14 unique characters, two maps, two gamemodes, and original artwork and music. The game's direction and programming are lead by me."
                             project="royal-siege"/>
                </Col>
            </Row>
        </div>
    )
}

export default AllProjects