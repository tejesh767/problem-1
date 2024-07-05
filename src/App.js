import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BlogItemDetails from './components/BlogItemDetails'

import BlogsList from './components/BlogsList'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BlogsList} />

      <Route exact path="/blogs/:userId" component={BlogItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
