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
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    )

    const updatedData = await response.json()
    console.log(updatedData)
    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {name, username, phone, website, email, address} = blogData

    return (
      <div className="blog-info">
        <h2 className="name">{name}</h2>

        <div className="author-details">
          <p className="blog-content">username : {username}</p>
          <p className="blog-content">phone : {phone}</p>
          <p className="blog-content">website : {website}</p>
          <p className="blog-content">email : {email}</p>
        </div>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
