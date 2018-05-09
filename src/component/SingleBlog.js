import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from './Base'
import ImageBox from './ImageBox'
import './SingleBolg.css'

const SingleBlog = ({ title, uri, category, date, content, img }) => (
  <div className="single-blog">
    <Row>
      <Col
        type="post"
        style={{
          paddingRight: '115px',
        }}
      >
        <h1 className="title">
          <Link to={uri}>{title}</Link>
        </h1>
        <div className="meta">
          <div className="category">
          <Link to={uri}>{category}</Link>
          </div>
          <div className="date">
            <span>{date}</span>
          </div>
        </div>
        <p>{content}</p>
        <Link to={uri} className="read-more">read more</Link>
      </Col>
      <Col type="image">
        <ImageBox img={img} />
      </Col>
    </Row>
  </div>
)

export default SingleBlog
