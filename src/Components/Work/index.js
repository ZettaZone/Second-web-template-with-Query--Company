import React, { Component } from 'react';
import {WorkSection,WorkTitle,Span,Part,Icon,PartTitle,Line,PartDesc,ParentPart}  from './style'
import Axios from 'axios';


class Work extends Component {

    state ={
      works : []
    }

    componentDidMount(){
      Axios.get('js/data.json').then( res => {this.setState({works:
      res.data.works}) })
    }

  render(){
    const {works} =this.state;
    const workslist = works.map( (workitem) => {
      return(

              <Part key= {workitem.Id} >
                  <Icon className={workitem.icon}></Icon>
                  <PartTitle>{workitem.title}</PartTitle>
                  <Line/>
                  <PartDesc > {workitem.body} </PartDesc>
              </Part>
      )
    } ) 
    return (
      <WorkSection id="service">
          <div className="container">
          <WorkTitle>
                  <Span>Our</Span> Services
          </WorkTitle>
             
          <ParentPart>
             {workslist}
          </ParentPart>
          </div>
      </WorkSection>
    );
  }
}

export default Work;
