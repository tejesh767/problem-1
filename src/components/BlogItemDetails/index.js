import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {commentsData: [], userData: [], postId: '', userId: ''}

  componentDidMount = () => {
    this.extract()
  }

  extract = async () => {
    const {postId, userId} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url)
    const updatedData = await response.json()

    this.setState({postId: updatedData.id, userId: updatedData.userId})
    console.log(updatedData)
    this.getCommentDetails()
    this.getUserDetails()
  }

  getCommentDetails = async () => {
    const {postId} = this.state
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    const response = await fetch(url)
    const commentsData = await response.json()
    console.log(commentsData)
    this.setState({commentsData})
  }

  getUserDetails = async () => {
    const {userId} = this.state
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const response = await fetch(url)
    const updata = await response.json()
    this.setState({userData: updata})
  }

  renderBlogItemDetails = () => {
    const {commentsData, postId, userData} = this.state
    console.log('username data here')
    console.log(userData)
    return (
      <div className="blog-info">
        <ul className="">
          <div className="top">
            <h1 className="postId">postId:{postId}</h1>
            <h1 className="postId">username:{userData.username}</h1>
          </div>

          {commentsData.map(each => (
            <>
              <div className="line1">
                <p className="blog-content">commentId : {each.id}</p>
                <h2 className="name">name : {each.name}</h2>
                <p className="blog-content">email : {each.email}</p>
              </div>
              <p className="blog-content">comment : {each.body}</p>
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
