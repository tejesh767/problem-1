// Write your code here
// Write your code here
import {useState, useEffect} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const [posts, setPosts] = useState([])
  const {repositoryDetails} = props
  const {title, body, userId, id} = repositoryDetails
  useEffect(() => {
    async function fetchData() {
      const url = `https://jsonplaceholder.typicode.com/users/${userId}`
      const response = await fetch(url)
      const updatedData = await response.json()
      setPosts(updatedData.name)
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <Link to={`/blogs/${id}`} className="repository-item">
      <li>
        <h1 className="repository-name name">{posts}</h1>

        <h1 className="repository-name">{title}</h1>
        <div className="stats-container">
          <p className="stats-text">{body}</p>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
