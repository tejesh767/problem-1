// Write your code here
// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {repositoryDetails} = props
  const {title, body, userId} = repositoryDetails

  return (
    <Link to={`/blogs/${userId}`} className="repository-item">
      <li>
        <h1 className="repository-name">{title}</h1>
        <div className="stats-container">
          <p className="stats-text">{body}</p>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
