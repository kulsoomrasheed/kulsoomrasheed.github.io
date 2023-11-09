import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage4.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {

        // Create an invisible anchor element
        const handleDownload = () => {
            const link = document.createElement('a');
            link.href = 'KulsoomRasheed_Resume.pdf';
            link.download = 'KulsoomRasheed_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
      };
    return (
        <div id="about" className="about section">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title id="user-detail-name">Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop >
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle id="user-detail-intro"></SubTitle>
                       <div style={{display:'flex', gap:10, margin:4}}>
                       <ResumeButton href={Bio.resume} className='nav-link resume' id="resume-link-2" target='display'>Check Resume</ResumeButton>
                        <ResumeButton onClick={handleDownload}  className='nav-link resume' id="resume-link-1">Download Resume</ResumeButton>
                       </div>

                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image"  className="home-img"/>
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection