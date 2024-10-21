import Lottie from 'lottie-react'
import React from 'react'
import loader from "src/assets/images/Animation - 1722643112341.json"

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Lottie animationData={loader} style={{ width: 100, height: 100, marginTop: 50 }}/>
    </div>
  )
}

export default Loader