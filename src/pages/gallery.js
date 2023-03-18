import ImageFormat from "../components/gallery/ImageFormat";
import lobby from '../images/royal-siege-gallery/lobby.png'
import tdm from '../images/royal-siege-gallery/tdm.png'
import forestglen from '../images/royal-siege-gallery/forestglen.png'
import winterland from '../images/royal-siege-gallery/winterland.png'
import {Button, Col, Row} from "reactstrap";

function Gallery() {
    return (
        <div>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem'}}>Royal Siege Photo Gallery</h1>
            <Button color='primary' style={{marginBottom: '3rem'}} onClick={() => {
                window.location.href = '/royal-siege'
            }}>
                Back to Royal Siege Page
            </Button>
            <Row style={{marginBottom: '2rem'}}>
                <Col>
                    <ImageFormat source={lobby} caption={'The lounge area of the lobby'}/>
                </Col>
                <Col>
                    <ImageFormat source={tdm} caption={'The Coliseum map'} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ImageFormat source={forestglen} caption={'The Forest Glen map'}/>
                </Col>
                <Col>
                    <ImageFormat source={winterland} caption={'The Winterland map'} />
                </Col>
            </Row>
        </div>
    )
}

export default Gallery