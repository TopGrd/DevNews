import React from 'react'
import '../assets/css/layout.css'

const Row = ({ children }) => <div className="row">{children}</div>
const Col = ({ type, style, children }) => <div className={`col-sm-12 col-md-${type === 'post' ? 5 : 7} col-xs-12`} style={style}>{children}</div>

const FullCol = ({ children }) => <div className="col-sm-12 col-xs-12">{children}</div>

export { Row, Col, FullCol }
