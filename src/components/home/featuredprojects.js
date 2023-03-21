import Project from "../projects/project";
import dragonflyimg from "../../images/dragonfly.png"
import pkmnblitzimg from "../../images/pokemon-blitz.png"
import rslogo from "../../images/royal-siege-logo.png"
import {Button, Card, Col, Row} from "reactstrap";
import MediaQuery from "react-responsive";
function FeaturedProjects(props) {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div style={{marginBottom: props.margin}}>
            <h1 style={{
                color: '#FFFFFF',
                marginBottom: '3rem'
            }}>
                Featured Projects
            </h1>
            <MediaQuery query={"(min-device-width: 769px)"}>
                <Row style={{
                    marginLeft: '8.5vw',
                    marginBottom: '3rem'
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
                                 desc="A team-based MOBA game built in Minecraft using its mcfunction scripting language. It is a work in progress game that features 14 unique characters, four maps, two gamemodes, and original artwork and music. The game's direction and programming are lead by me."
                                 project="royal-siege"/>
                    </Col>
                </Row>
            </MediaQuery>
            <MediaQuery query={"(max-device-width: 768px)"} >
                <Project title="Dragonfly" imgsrc={dragonflyimg}
                         desc="An ASCII art game engine capable of providing a code framework necessary to build 2D text-based video games. Built by me with the guidance of Professor Mark Claypool at Worcester Polytechnic Institute."
                         project="dragonfly"/>
                <Project title="Pokemon Blitz" imgsrc={pkmnblitzimg}
                         desc="A bullet hell game made in the Dragonfly game engine. I created all things related to the playable characters, navigable menu, artwork, and information displays."
                         project="pokemon-blitz"/>
                <Project title="Royal Siege" imgsrc={rslogo}
                         desc="A team-based MOBA game built in Minecraft using its mcfunction scripting language. It is a work in progress game that features 14 unique characters, four maps, two gamemodes, and original artwork and music. The game's direction and programming are lead by me."
                         project="royal-siege"/>
            </MediaQuery>

            <MediaQuery query={"(min-device-width: 769px)"}>
                <Row>
                    <Col sm={4}>
                        <Card style={{
                            width: '20vw',
                            marginLeft: '40vw',
                            background: bgColor
                        }}>
                            <Button color={'primary'} style={{fontSize: '1.3rem'}} onClick={() => {
                                window.location.href = '/projects'
                            }}>
                                More Projects <i className='bi-arrow-right'></i>
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </MediaQuery>
            <MediaQuery query={"(max-device-width: 768px)"}>
                <Row>
                    <Col sm={4}>
                        <Card style={{
                            width: '45vw',
                            marginLeft: '27.5vw',
                            background: bgColor
                        }}>
                            <Button color={'primary'} style={{fontSize: '1.3rem'}} onClick={() => {
                                window.location.href = '/projects'
                            }}>
                                More Projects <i className='bi-arrow-right'></i>
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </MediaQuery>

        </div>
    )
}

export default FeaturedProjects