import React from 'react'

function Imgbig() {
  return (
    <>
    <div className="description">
        <div className="imgbig">
          <img
            src={process.env.PUBLIC_URL + "images/2.jpg"}
            width="80%"
            height="500px"
          ></img>
        </div>
      </div>
    </>
  )
}

export default Imgbig