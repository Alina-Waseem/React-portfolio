import React from 'react';
import img from './img.jpg';


const styles = {
  container: {
    height: '80vh',
  },
  infoBox: {
    position: 'absolute',
    top: '50%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    display: 'flex',
  },
  imgBox: {
    position: 'absolute',
    top: '50%',
    left: '125%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Home() {
  return (
    <div name="home" style={styles.container} >
      <div className='infoBox' style={styles.infoBox}>
        <div>
          <h1 style={{ fontSize: '50px' }}>Hi, <br />
            I am Alina Waseem,<br />
            Front-end Developer
          </h1>
          <p style={{ fontSize: '20px' }}>I design and develop experiences that make people’s lives simpler
            through Web and Mobile apps.I work with HTML5, CSS3, JavaScript and React.</p>
          <div>
            <a href='projects'><button style={{ width: '150px', height: '40px', border: '0', borderRadius: '40px 40px 40px 40px', color: '' }}>See My Projects</button></a>
          </div>
        </div>
        <div className='imgBox' style={styles.imgBox}>
          <img src={img} alt="Alina Waseem" style={{ width: '150px', border: '2px', borderColor: 'black', borderRadius: '40px 40px 40px 40px' }} />
        </div>
      </div>
    </div>
  );
}
