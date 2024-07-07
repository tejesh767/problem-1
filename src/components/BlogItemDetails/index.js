import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: []}

  componentDidMount = () => {
    this.extract()
  }

  extract = async () => {
    const {match} = this.props
    const {params} = match
    const {userId} = params
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}/comments`,
    )
    const updatedData = await response.json()
    console.log(updatedData)
    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state

    return (
      <div className="blog-info">
        <ul className="">
          {blogData.map(each => (
            <>
              <h2 className="name">name : {each.name}</h2>

              <p className="blog-content">email : {each.email}</p>

              <p className="blog-content">postId : {each.postId}</p>

              <p className="blog-content">
                commentId {each.id} : {each.body}
              </p>
            </>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
