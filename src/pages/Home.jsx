import Linkbar from '../components/Linkbar'
import Topbar from '../components/Topbar'
import React, { useEffect, useState } from 'react'
import headshot from '../assets/images/headshot.jpg'
import '../assets/styles/home.css'
import ProjectLineItem from '../components/ProjectLineItem'

export default function Home() {

    const [shortTimeout, setShortTimeout] = useState(true)
    const [longTimeout, setLongTimeout] = useState(true)

    const projects = [

        {name: 'FlockRank.net', 
         description: 'My passion project - FlockRank is a full-stack web application for fans of the band ‘Goose’. Utilized React, Express.js and MongoDB to host user-specific submissions. Users can create an account, make posts, comment, and upvote their favorite songs with all actions being saved in a database. ',
         techStack: 'React, Express.js, Node.js, MongoDB, HTML, CSS',
         liveapp: 'https://flockrank.net',
         repo: 'https://github.com/drewherald/flockRank' 
        },

        {name: 'Alias Media & Design', 
            description: 'Homepage site for Alias Media & Design, a digital advertising startup that I interned at. This project involved me working with a creative director and translating their figma mock ups into functional code.',
            techStack: 'React + Typescript, HTML, CSS',
            liveapp: 'https://aliasmediadesign.com',
            repo: null
        },

        {name: 'Daisy Market', 
            description: 'Daisy Market is a fashion brand created by a connection I made at my internship. Using his design, I developed a mock website for him to implement if he ever wanted to follow through with his brand. The website utilizes the fake store API to load products and has a functioning cart.',
            techStack: 'React, HTML, CSS',
            liveapp: 'https://daisymarket.netlify.app/',
            repo: 'https://github.com/drewherald/daisymarket' 
        }
    ]

    useEffect(() => {
        setTimeout(setShortTimeout(false), 2300)
        setTimeout(setLongTimeout(false), 6000)

        const description = document.querySelectorAll('.animate-via-scroll')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('animated-via-scroll')
                }
            })
        }, {
            threshold: 0.5
        })

        for(let i =0; i<description.length; i++){
            const el = description[i]

            observer.observe(el)
        }
    }, [])



  return (
    <div>
        
        <header id="home">
        <Topbar />
        <Linkbar />
        <div className="mainHead">
            <p>Hello! My name is</p>
            <div className="name"><h1 className={shortTimeout ? "typeAnimation" : ''} id="animatedName">Drew Herald</h1></div>
            <div className="occupation"><h1 id={longTimeout ? "unAnimated" : ''} className={shortTimeout ? "" : 'occupationType'}>I am a Web Developer</h1></div>
            <p id={shortTimeout ? 'blurb' : ''} className={shortTimeout ? '' : 'blurb'}>With an emphasis on front end work but a passion for all things coding, I build engaging and 
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
                skills every day with a hunger to improve. Whether it be collaborating with a team or building webapps from my 
                home office, I am driven by the desire to create applications that provide value to their users.
            </p></div>
        </div>
        <img src={headshot} alt='headshot' className='headshot' />
        </section>
        <section id="projects">
                {projects.map((project) => <ProjectLineItem project={project} key={project.name}/>)}
        </section>
        <section id="contact">
            <h3>Feel Free To Say Hello</h3>
            <p>Whether you want to chat about professional work or debate the best JS framework, I'm always
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
