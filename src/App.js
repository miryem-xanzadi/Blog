
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import AboutUs from './containers/AboutUs';

function App() {
  return (
    <Router >
      <div className="App">
        <Header />

        <Hero />
        <Route path="/" exact component={Home} />
        <Route  path="/contact-us" component={ContactUs} />     
        <Route path="/post/:postId" exact component={Post} />
        <Route path="/about-us" exact component={AboutUs} />
    </div>
    </Router >
  );
}

export default App;
