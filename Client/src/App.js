import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import MainPage from './pages/MainPage.js';
import CreatePost from './pages/CreatePost.js';
import Post from './pages/Post';
function App() {
  return (
    <>
    <div className="navBar">
        <div className="links">
          <a href="/">MainPage</a>
          <a href="/createpost">CreatePost</a>
        </div>
    </div>
    <Router>
      <Routes>
      <Route path="/" exact element={<MainPage></MainPage>}/>
      <Route path="/createpost" exact element={<CreatePost></CreatePost>}/>
      <Route path="/post/:postID" exact element={<Post></Post>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
