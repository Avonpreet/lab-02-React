import React from 'react';
import Header from '../shared/Header';

const Home = () => {
  return (
    <>
      <Header title="About" />
      {/* You need to use your shared header component... */}
      {/* You need a paragraph describing a fun fact about you */}
      <p className="ml-5 text-center mt-5">I am Avonpreet Kaur. I am from Punjab,India.
        I like dancing. And I also love singing Punjabi Folk songs. 
      </p>
    </>
  );
}
 
export default Home;