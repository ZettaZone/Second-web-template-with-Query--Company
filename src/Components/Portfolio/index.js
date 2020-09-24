import React, { useState, useEffect } from 'react';
import {PortfolioTitle,Span,PortfolioList,PortfolioItem,BoxDiv,Img,
    Overlay,OverlaySpan,PortfolioSection} from './style';
import Axios from 'axios';

const Portfolio = () => {

    const [images , setImages] = useState([])

    useEffect( () => {
        Axios.get('js/data.json').then( res => { setImages(res.data.portfolio) } )
    } , [])


    const PortfolioImages = images.map( (imageItem)=>{
        return (
            <BoxDiv key={imageItem.id}>
                <Img src={imageItem.image} alt="" />
                <Overlay> <OverlaySpan>Lorem ipsum dolor sit amet consectetur adipisicing.</OverlaySpan></Overlay>
            </BoxDiv>
        )

    })




  return (
    <PortfolioSection id="portfolio">
    <PortfolioTitle><Span>Our</Span> Portfolio</PortfolioTitle>
    <PortfolioList> 
        <PortfolioItem bg="active" >All </PortfolioItem>
        <PortfolioItem>Project1</PortfolioItem>
        <PortfolioItem>Project2</PortfolioItem>
        <PortfolioItem >Project3</PortfolioItem>
        <PortfolioItem>Project4</PortfolioItem>
    </PortfolioList>
    <div>
        {PortfolioImages}
    </div>
</PortfolioSection>
  );
}

export default Portfolio;
