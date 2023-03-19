import {Button} from "reactstrap";
import React from "react";
import image from '../images/resume.png'
function Resume() {


    return (
        <div style={{
            color: '#FFFFFF'
        }}>
            <h1 style={{marginBottom: '3rem'}}>
                Resume
            </h1>
            <Button color="primary" style={{marginBottom: '3rem'}} onClick={() => {
                window.location.href = 'https://drive.google.com/file/d/1DMkTC63gdr66AO5G32YvemX6pY0lJLmQ/view?usp=sharing'
            }}>
                Download Here
            </Button>
            <br></br>
            <img src={image} alt="oops" />
        </div>
    )
}

export default Resume