import React from 'react'
import { CENTER_IMAGES } from './Imagedata'
import Imageprops2 from './Imageprops2'

const Centerimage = () => {
  return (
    <div className="centerImage">
      {CENTER_IMAGES.map((centerimages) => <Imageprops2{...centerimages}/>)}
    </div>
  )
}

export default Centerimage
