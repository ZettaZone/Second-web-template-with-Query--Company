import React, { Component } from 'react';
import {ProfileSection,ProfileDiv,Skills,ProfileTitle,ProfileList
,ProfileItem,ProfileSpan,Span,SkillsTitle,SkillsDesc,Bar,BarParent,BarPerc,BarTitle,ParentSpan}  from './style'
import Axios from 'axios';

class Profile extends Component {

  state ={
    profile : []
  }

  componentDidMount(){
    Axios.get('js/data.json').then( res => {this.setState({profile:
    res.data.Profile}) })
  }

render(){
  const {profile} =this.state;
  
  const Profilelist = profile.map( (Profileitem) => {
    return(
        <Bar key= {Profileitem.id}>
            <BarTitle> {Profileitem.bartitle} </BarTitle>
            <BarPerc>{Profileitem.barperc}</BarPerc>
            <BarParent>
                <ParentSpan sp={Profileitem.sp}></ParentSpan>
            </BarParent>
        </Bar>
    )
  } ) 

  return (
    <ProfileSection id="about">
         <div className="container">
             <ProfileDiv>
                <ProfileTitle><Span>About</Span> Us</ProfileTitle>
                <ProfileList>
                    <ProfileItem>
                        <ProfileSpan>Our Mission</ProfileSpan> Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </ProfileItem>
                    <ProfileItem>
                        <ProfileSpan>Our Plane</ProfileSpan> Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </ProfileItem>
                    
                    <ProfileItem>
                        <ProfileSpan>Our Vision</ProfileSpan> Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </ProfileItem>
                </ProfileList>
             </ProfileDiv>

             <Skills>
                <SkillsTitle>Our <Span>Skills</Span></SkillsTitle>
                <SkillsDesc>Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit sit amet consectetur adipisicing elit. Vero maiores suscipit enim omnis natus!</SkillsDesc>
              
               {Profilelist}
            
             </Skills>
         </div>
     </ProfileSection>
  );
}
}

export default Profile;
