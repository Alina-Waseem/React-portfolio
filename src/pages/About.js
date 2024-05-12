import React from 'react'

const about = {
  container: {
    height: '80vh',
  },
  infoBox: {
    position: 'absolute',
    top: '55%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    display: 'flex',
    width: '50%',
    
  },
  connectBox: {
    position: 'absolute',
    top: '55%',
    left: '120%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
  },
};


export default function About() {
  return (
    <div name="home" style={about.container} >
      <div className='infoBox' style={about.infoBox}>
        <div>
          <h3 style={{ fontSize: '50px' }}>
            Get to Know me!
          </h3>
          <p style={{ fontSize: '20px' }}>I'm an ambitious Computer Science student, dedicated to mastering web development alongside my studies. Proficient in different languages, I thrive on crafting intuitive, visually captivating digital experiences. My coursework has instilled a strong grasp of computer science fundamentals, while practical projects have honed my skills in building dynamic, responsive web applications. With a sharp eye for detail and a passion for staying ahead in tech, I'm committed to advancing in the dynamic world of web development.</p>
        </div>
        <div className='imgBox' style={about.connectBox}>
          <h3>Connect with Me on LinkdIn</h3>
          <h2><a href="https://www.linkedin.com/in/alina-waseem-b32339260/" style={{ color: '#AA336A' }}>linkedin</a></h2>
          <h3>Explore My Projects on GitHub</h3>
          <h2><a href="https://github.com/Alina-Waseem " style={{ color: '#AA336A' }}>GitHub</a></h2>
          <h3>Get in Touch via Email</h3>
          <h2><a href="mailto:pc6115alina@gmail.com" style={{ color: '#AA336A' }}>Email</a></h2>
        </div>
      </div>
    </div>
  )
}
