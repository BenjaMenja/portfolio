import {Button, Card, CardText, Col, List, Row} from "reactstrap";
import image from '../images/living_room_kitchen.png'
import messybp from '../images/messy_bp.png'
import corruptedfile from '../images/corruptedfile.png'
import dialoguebox from '../images/dialoguebox.png'
import dialoguebp from '../images/dialogueboxbp.png'
import flowchart from '../images/greatescapearchitecture.png'
import dialogueboxchart from '../images/dialogueboxflowchart.png'


function TheGreatEscape() {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem'}}>The Great Escape</h1>
            <img src={image} alt={'Uh oh'} width={visualViewport.width * 0.5} height={visualViewport.height * 0.6} style={{marginBottom: '8rem'}}/><br/>

            <Button color='primary' size={'lg'} style={{marginBottom: '2rem'}} onClick={() => window.location.href='https://github.com/BenjaMenja/The-Great-Escape/releases/tag/v1.1.0-alpha'}>Download</Button>

            <Card style={{
                background: bgColor,
                marginLeft: '15vw',
                width: '70vw',
                textAlign: 'left'
            }}>
                <CardText tag="h5" style={{
                    color: '#FFFFFF'
                }}>
                    <i>The Great Escape </i>
                    is a third person stealth mission game where you play as a rebellious teenager who is determined to sneak out of the house to attend a party.
                    Use your surroundings to your advantage, manipulate objects, and complete a variety of challenges to avoid detection from family members in your house.
                    Developed in Unreal Engine 5.1 using Unreal's Blueprint system, the game features a plethora of technical and artistic assets.
                    <Row xs={'2'} style={{marginTop: '4rem', marginBottom: '4rem'}}>
                        <Col>
                            <List style={{listStylePosition: 'inside'}}>
                                <u>Technical Features</u>
                                <li>Controllable player</li>
                                <li>3 AI controlled NPCs</li>
                                <li>Item pickup and drop system</li>
                                <li>Held item system</li>
                                <li>Interactions with placed objects</li>
                                <li>Dialogue and hint system</li>
                                <li>Menus for important game events</li>
                            </List>
                        </Col>
                        <Col>
                            <List style={{listStylePosition: 'inside'}}>
                                <u>Artistic Features</u>
                                <li>4 fully modeled, rigged, and animated characters</li>
                                <li>Character animations for movement and events</li>
                                <li>Fully modeled and textured house environment</li>
                                <li>Procedurally generated environment assets</li>
                                <li>2 rigged and animated environment objects</li>
                                <li>Carefully placed lights with Lumen lighting</li>
                                <li>Modeled and textured objects for various game puzzles</li>
                            </List>
                        </Col>
                    </Row>
                    <div style={{textAlign: 'center', marginTop: '2rem'}}>
                        <img src={flowchart} alt={''} width={'75%'}/>
                        <h5>The Great Escape's overall architecture</h5>
                    </div>

                    <h2><u>My Contributions</u></h2>
                    <div style={{marginBottom: '4rem'}}>
                        As one of the gameplay programmers of the project, I performed extensive work to create the core gameplay and extra features of the game.
                        I lead the creation of the dialogue and hint system, placed object interactions, and programming puzzle events.
                        I also helped implement item pickups and integrated art assets into existing Blueprints.
                        <div style={{textAlign: 'center', marginTop: '2rem'}}>
                            <img src={dialogueboxchart} alt={''} width={'50%'}/>
                            <h5>Diagram of the Dialogue Box</h5>
                        </div>
                        <br /><br/>
                        For the design component, I collaborated with my teammates to develop the initial idea for a twist on a stealth like game.
                        I also helped design and arrange the layout of the house, including rooms and locations of various game objects.
                        I took part in designing the puzzles the player would have to complete, and lead the implementation of those puzzles into the game.
                        <br/><br/>
                        I also developed the website for the game, which contains various information pertaining to the game, including team info, artistic design choices, and a download link.<br/>
                        A link to the site can be found <a href={'https://benjamenja.github.io/the-great-escape-website/'}>here</a>.
                    </div>
                    <h2><u>Challenges Faced</u></h2>
                    <div style={{marginBottom: '4rem'}}>
                        As this was my first experience with Unreal Engine, I experienced many challenges when working through Unreal's seemingly endless amount of tools.
                        <br /><br/>
                        <h3><u>Blueprints</u></h3>
                        Before <i>The Great Escape</i>, I had never seen or used the Blueprint system before. However, the team quickly decided it would be easier to pick up than Unreal's use of C++.
                        Blueprints were great to work with, as they made many important gameplay functions easier to implement. They also made it easier to visualize the logic of a particular event or function.
                        However, Blueprints also posed a few challenges. In some cases, Blueprints made it more difficult or less intuitive to implement basic code that would be simple in a language like C++.
                        For example, I found that loops and some conditional statements were more difficult to implement, and they would also sometimes produce poor looking blueprint graphs.
                        This leads into another challenge with using blueprints. If a particular section of code got very large, the resulting graph could look quite messy, making it more difficult to look at if we had to go back and fix something.
                        The biggest issue with blueprints is that Unreal stores them as binary files, which caused major issues when it came to version control.
                        <div style={{textAlign: 'center', marginTop: '2rem'}}>
                            <img src={messybp} width={'50%'} style={{marginBottom: '1rem'}} alt=''/>
                            <h5>Example of a messy blueprint we used to display object names in the viewport</h5>
                        </div>
                        <br/><br/>
                        <h3><u>Version Control</u></h3>
                        The team decided to use Git and Github for our version control system, as the majority of us had a solid understanding of Git to use it efficiently.
                        However, we discovered very early on that Unreal Engine stores blueprints and many assets as binary files.
                        Git and Github can store binary files without much trouble, but the issues became apparent when the team had to merge each other's individual work into a master branch.
                        We learned that Git does not deal with merging binary files well. If more than one person changed the same binary file (Ex. Worked on the same blueprint), we would have to choose one person's version to keep, and completely throw away the other.
                        This would cause a loss in work, and it would often require the lost work to be redone, either by making a copy of the work or recreating their blueprint graph. This problem became especially noticeable when we had to make changes to the map, which is stored as binary.
                        We also faced a problem where some of our Unreal asset files would become corrupted in some way after pulling from Github or switching branches.
                        The corrupted file could not have its changes reverted, and we were forced to make a change to that file on a different computer and have the other team member delete the file and pull from Github. <br/>
                        I am not sure if I would recommend Git and Github for future Blueprint based Unreal Engine projects.
                        <div style={{textAlign: 'center', marginTop: '2rem'}}>
                            <img src={corruptedfile} width={'50%'} style={{marginBottom: '1rem'}} alt=''/>
                            <h5>Example of what a corrupted file looked like in Github Desktop</h5>
                        </div>
                        <br/><br/>
                        <h3><u>Game Programming</u></h3>
                        I was able to pick up and learn Unreal's blueprint system fairly quickly. However, there were certain parts of the game that proposed challenges for me as I was working on them.
                        <i>The Great Escape</i> features a hint system, where the majority of hints involve the player character's thoughts being displayed as they perform various actions or enter specific areas.
                        <div style={{textAlign: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
                            <img src={dialoguebox} width={'50%'} style={{marginBottom: '1rem'}} alt=''/>
                            <h5>The dialogue box where hints are displayed</h5>
                        </div>
                        There were a few problems that arose from the initial implementation of the hints. The main issue came from when multiple events that generate hints activate at once.
                        Hints are typically displayed for 2.5 seconds before disappearing.
                        However, if another hint appeared while one was active, it would overwrite the text as anticipated, but the box would disappear after the first hint's 2.5 seconds were up.
                        A solution for this was found by creating a timer as a property of the box. When the timer hits 0, the box disappears from the screen.
                        When a hint wants to be displayed, it triggers an event that checks the state of the timer. If the timer is at 0, it replaces the current timer with a new one that starts at 2.5 seconds and does the same thing as the old timer.
                        If the timer is not 0 (meaning there is a box being displayed), it clears the current timer without hiding the box, then replaces it with a new one. This allowed for a working hint system that could help navigate players through the game.
                        <div style={{textAlign: 'center', marginTop: '2rem', marginBottom: '2rem'}}>
                            <img src={dialoguebp} width={'50%'} style={{marginBottom: '1rem'}} alt=''/>
                            <h5>Blueprint graph for editing the display state of the dialogue box.</h5>
                        </div>
                    </div>
                    <h2><u>Lessons Learned</u></h2>
                    With this being my first exposure to Unreal Engine and creating a 3D game from a blank slate, I learned a lot through the work I've done and the challenges I faced.<br/><br/>
                    <b>Set Deadlines Early</b><br/>
                    Setting deadlines early in development can greatly simplify workflow amongst the team. After major team milestones (such as the alpha & playtest builds), the team met as quickly as possible to set goals for what we wanted to get done for the next major milestone.
                    This lead to very few nights where we had to stay extraordinarily late to finish up major parts of the game.<br/><br/>
                    <b>Have Clear Communication</b><br/>
                    Having clear communication amongst team members is very important to ensure a productive team. Keeping constant updates and exchanging ideas between teammates boosted the team's work ethic and increased the speed at which problems could be fixed.
                    Being able to clearly define goals is something I believe is crucial to creating a polished game.<br/><br/>
                    <b>Unreal is Difficult</b><br/>
                    I found Unreal Engine to be fairly difficult to fully understand. The sheer amount of features it comes with out of the box is very overwhelming, and the initial learning curve was hard to overcome in the beginning.
                    However, as time went on, I got more and more used to the basics of getting a game running, and it ended up becoming a bit easier in the end.
                </CardText>
            </Card>
        </>
    )
}

export default TheGreatEscape