import React from 'react'
import './ImageBox.css'

const ImageBox = ({ img }) => (
  <div className="blog-image">
    <div className="single-item">
      <img src={require(`../assets/img/${img}`)} alt="blog" />
    </div>
  </div>
)

export default ImageBox
