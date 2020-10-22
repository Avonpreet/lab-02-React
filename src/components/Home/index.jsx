import React from 'react';
import Header from '../shared/Header';
import { Link } from 'react-router-dom';
import About from '../About';
import Styles from '../shared/Header/styles';
// You need to import your shared header...

const Home = () => {
  return (
    <>
      <Header title="Home" />
      {/* You need to use your shared header component... */}
      {/* You need a link to your about page as a call to action */}
      <Styles.Header> 
        <Link onClick={About} to="/about" className="linkToAbout">About</Link>
      </Styles.Header>
    
    </>
  );
}
 
export default Home;