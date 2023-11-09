import React from 'react'
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Img, SubTitle } from '../HeroSection/HeroStyle';
import HeroBgAnimation from '../HeroBgAnimation';
import { Title } from '../Skills/index';
import { Bio } from '../../data/constants';

const About = () => {
  return (
    <div >
        <HeroContainer>
          <Title></Title>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                     <div style={{margin:15}}>
                     <Title id="user-detail-name">About</Title>
                       </div>
                       <SubTitle id="user-detail-intro">{Bio.about}</SubTitle>
                     
                     

                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src="https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-MERN-Stack-Developers-from-us.png" alt="hero-image"  className="home-img"/>
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
    </div>
  )
}

export default About;