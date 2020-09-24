import React from 'react';
import {CreativeSection,CreativeInfo,InfoDesc,InfoTitle,Span}  from './style'
const About= () => {
  return (
     <CreativeSection id="team">
         <div class="container">
             <CreativeInfo>
                 <InfoTitle><Span>Our </Span> Team </InfoTitle>
                
                 <InfoDesc>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor dignissimos eius quos ipsa blanditiis alias 
                      quidem. Aspernatur illum, corporis aut enim ad eaque 
                      eos odio dicta exercitationem odit quos aliquid 
                      quibusdam architecto provident soluta mollitia est 
                      praesentium! Libero, minima minus.
                 </InfoDesc>
                 <InfoDesc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolor dignissimos eius quos ipsa blanditiis alias 
                     quidem. Aspernatur illum, corporis aut enim ad eaque 
                     eos odio dicta exercitationem odit quos aliquid 
                     quibusdam architecto provident soluta mollitia est 
                     praesentium! Libero, minima minus.
                </InfoDesc>
             </CreativeInfo>
         </div>
     </CreativeSection>
  );
}

export default About;
