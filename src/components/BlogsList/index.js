import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

class BlogsList extends Component {
  state = {
    searchInput: '',
    repositoriesData: [],
    isSorted: false,
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
      const result = fetchedData.map(each => ({
        userId: each.userId,
        id: each.id,
        title: each.title,
        body: each.body,
        mixtures: each.title + each.body,
      }))
      this.setState({
        repositoriesData: result,
      })
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  sorting = () => {
    const {repositoriesData, isSorted} = this.state

    if (isSorted === true) {
      const sortedData = repositoriesData.sort((p1, p2) => {
        if (p1.title < p2.title) return 1
        return -1
      })
      this.setState({
        repositoriesData: sortedData,
        isSorted: false,
      })
    } else {
      const sortedData = repositoriesData.sort((p1, p2) => {
        if (p1.title > p2.title) return 1
        return -1
      })
      this.setState({
        repositoriesData: sortedData,
        isSorted: true,
      })
    }
  }

  render() {
    const {searchInput, repositoriesData, isSorted} = this.state

    const searchResults = repositoriesData.filter(eachUser =>
      eachUser.mixtures.includes(searchInput),
    )

    const text = isSorted ? 'sort in DESC' : 'Sort in ASC'

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Posts</h1>
          <div className="line">
            <button type="button" className="button" onClick={this.sorting}>
              {text}
            </button>
            <input
              type="search"
              className="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="repositories-list">
            {searchResults.map(eachRepository => (
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
