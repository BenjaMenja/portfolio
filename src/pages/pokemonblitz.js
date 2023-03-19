import image from '../images/pokemon-blitz.png'
import {Card, CardText} from "reactstrap";
import ProjectStatus from "../components/projects/projectstatus";
function PokemonBlitz() {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem'}}>Pokemon Blitz</h1>
            <img src={image} alt="Uh oh" width={visualViewport.width * 0.33} height={visualViewport.height * 0.4} style={{marginBottom: '10rem'}}/>
            <Card style={{
                background: bgColor,
                marginLeft: '15vw',
                width: '70vw'
            }}>
                <CardText tag="h4" style={{
                    color: '#FFFFFF'
                }}>
                    <i>Pokemon Blitz </i>
                    is a 2D bullet hell game built using the <a href='/dragonfly'>Dragonfly</a> game engine.
                    The goal is to survive as long as possible against the endless wave of flying Pokeballs and Voltorbs traveling across the map.
                    You can choose between three playable Pokemon, each with their own unique set of moves to aid in survival.
                    You can gain points every second you're alive and by destroying enemies with your moves.
                    <br></br>
                    <br></br>
                    My contributions include drawing all art assets, choosing accompanying audio, and designing and programming the player characters, movement, abilities, navigable menu, and HUD.
                    <br></br>
                    <br></br>
                    <ProjectStatus teamsize='2' isDone="Yes" role="Programmer, ASCII Artist" tools="C++ / Visual Studio" dates="February 2023 - March 2023"/>
                </CardText>
            </Card>
        </div>
    )
}

export default PokemonBlitz