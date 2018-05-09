import React from 'react'
import { Row, FullCol } from './Base'
import SingleBlog from './SingleBlog'
import './Content.css'

const Content = ({ list }) => {
  const listBlog = (list) => {
    return list.map((item, i) => (
      <SingleBlog key={`blog-${i}`} {...item} />
    ))
  }

  return (
    <div className="content">
      <div className="container">
        <Row>
          <FullCol>
            {listBlog(list)}
          </FullCol>
        </Row>
      </div>
    </div>
  )
}

export default Content
