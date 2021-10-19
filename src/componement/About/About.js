import React from 'react';

import './About.css'

const About = () => {
    return (
        <div className='about-bg'>
            {/* about item */}
            
          <div className='cards'>
    
    <div className='row  p-5 bg-info text-justify '>
    <div className="col-md-6  p-2">
        <h3>study is education  </h3>
        <p>The United States is home to some of the most prestigious universities and colleges in the world. With over 150 universities featured in international rankings, the U.S. has some of the best business schools, medical schools, and </p>
    </div>
    <div className="col-md-6 p-2">
        <h3>Computer Sciences degrees</h3>
        <p>Computer Sciences degrees teach computer hardware and software, so students can work with algorithms, databases, networks, or artificial intelligence. IT degrees from top tech schools allow students to fix complex problems better and faster. Computer </p>
    </div>
    
    
</div>
          </div>
            
        </div>
    );
};

export default About;