import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

class BlogsList extends Component {
  state = {
    repositoriesData: [],
  }

  componentDidMount() {
    this.getRepositories()
  }

  getRepositories = async () => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      this.setState({
        repositoriesData: fetchedData,
      })
    }
  }

  render() {
    const {repositoriesData} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Posts</h1>
          <ul className="repositories-list">
            {repositoriesData.map(eachRepository => (
              <BlogItem
                key={eachRepository.id}
                repositoryDetails={eachRepository}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BlogsList
