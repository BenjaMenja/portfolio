import {Row, Col} from "reactstrap";

function FooterBar() {
    return (
        <>
            <Row style={{
                background: '#000000',
                width: '100vw',
                height: '5.5vh',
                alignItems: "center"
            }}>
                <Col style={{color: '#FFFFFF'}}>
                    This website was built from scratch using React and Reactstrap.
                </Col>
            </Row>
        </>
    )
}

export default FooterBar