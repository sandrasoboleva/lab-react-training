import React from "react"


const ClickablePicture = (props) => {

  
    return(
        <div>
        <img src={props.img} alt='' style={{width: 150}} />
        <img src={props.imgClicked} alt='' style={{width: 150}} />

        </div>
    )
}


export default ClickablePicture