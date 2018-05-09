import React from 'react'
import { connect } from 'react-redux'
import { Header, Content } from '../component'
import * as blogActions from '../actions/blogList'

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(blogActions.fetchBlogList())
  }

  render() {
    const list = this.props.list
    return (
      <div>
        <Header />
        <Content list={list} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    list: state.Home,
  }
}


export default connect(mapStateToProps)(Home)
