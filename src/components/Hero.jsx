import React from 'react'
import SocialIcon from './SocialIcon'
import { myFoto } from '../assets'

const Hero = () => {
  return (
    <section className="hero">
            <div className="container hero-wrapper">
                <div className="hero-content">
                    <span className="iner-subtitle hero-subtitle">
                        MY NAME IS
                    </span>
                    <h1 className="hero-title">
                        Michel <span>Marushev.</span></h1>
                    <p className="hero-text">
                        Creative front-end developer with more than +5 years of experience in enterprise companies and
                        startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX
                    </p>
                    <SocialIcon/>
                </div>
                <figure className="hero-img"><img src={myFoto} alt="" /></figure>
            </div>
        </section>  
  )
}

export default Hero