import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';
import Navbar from './components/Navbar';
import BlogPostsList from './components/BlogPostsList';
import BlogIndividualPost from './components/BlogIndividualPost';
import SignInAndSignUp from './components/SignUpAndSignIn';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={BlogPostsList} />
          <Route path="/posts/:postId" component={BlogIndividualPost} />
          <Route path="/add-post" component={AddPost} />
          <Route path="/sign-in" component={SignInAndSignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
