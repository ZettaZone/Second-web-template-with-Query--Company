import React from 'react';
import {HomeSection,HomeIformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from './style'

const Home = () => {
  return (
    <HomeSection>
        <div className="container">
            <HomeIformation>
                <HomeTitle>Lorem ipsum</HomeTitle>
                <HomeInfo>Lorem ipsum dolor sit amet consectetur</HomeInfo>
                <HomeDesc>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Rem impedit <Span> commodi officia maiores </Span> 
                    fuga accusantium!Rem impedit commodi officia maiores 
                    fuga accusantium!</HomeDesc>
                <HomeBtn>Get Started</HomeBtn>
            </HomeIformation>
        </div>
    </HomeSection>
  );
}

export default Home;
