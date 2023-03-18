function ImageFormat(props) {
    return (
        <div>
            <img src={props.source} width={visualViewport.width * 0.45} height={visualViewport.height * 0.5} style={{marginBottom: '2rem'}} alt='oops'/>
            <h5 style={{color: '#FFFFFF'}}>{props.caption}</h5>
        </div>
    )
}

export default ImageFormat