import Linkbar from '../components/Linkbar'
import Topbar from '../components/Topbar'
import React from 'react'
import headshot from '../assets/images/headshot.jpg'
import '../assets/styles/home.css'

export default function Home() {
  return (
    <div>
        
        <header id="home">
        <Topbar />
        <Linkbar />
        <div className="mainHead">
            <p>Hello! My name is</p>
            <div className="name"><h1 className="typeAnimation" id="animatedName">Drew Herald</h1></div>
            <div className="occupation"><h1 id="unAnimated">I am a Web Developer</h1></div>
            <p id="blurb">With an emphasis on front end work but a passion for all things coding, I build engaging and 
                interactive webpages to improve user experience. Keep scrolling to learn more! </p>
        </div>
        </header>
        <section id="about">
        <div className="aboutText">
            <div><h2>Self Taught. </h2><h2 className="yellow">Self Made.</h2></div>
            <br />
            <div><p className="yellow">Due to extra time by myself while studying finance in Italy,</p> <p>I discovered a love for
                programming. Starting with Java and swiftly moving into the world of web development, it began to consume all of 
                my free time. While I graduated with a economics degree, I knew I wanted to spend my life learning
                and writing code. As a self taught developer, I am already commited to explore the unknown, building upon my 
                skills every day with a hunger to improve. Whether git it be collaborating with a team or building webapps from my 
                home office, I am driven by the desire to create applications that provide value to those that use them
            </p></div>
        </div>
        <img src={headshot} alt='headshot' className='headshot' />
        </section>
        <section id="projects">

        </section>
        <section id="contact">
            <h3>Feel Free To Say Hello</h3>
            <p>Whether you want to chat about professional work or debate the best CSS framework, I'm always
                available to talk. Don't be shy, hit the button below to send me an email!
            </p>
            <div className="contactLink"><a href="mailto:drewherald9@gmail.com" className="email-button">Contact Me</a></div>
        </section>
        <footer>
        <p>© 2025 - Drew Herald</p>
        </footer>
    </div>
  )
}
