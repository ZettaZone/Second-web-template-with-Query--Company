import styled from 'styled-components';

export const PortfolioSection = styled.div`
    background: #f8f8f8;
    padding-top: 20px;
    overflow: hidden;
`

export const PortfolioTitle = styled.h2`
    text-align: center;
    font-size: 35px;

    @media (max-width : 768px){
            font-size: 26px;
        }

        @media (max-width : 575px){
            font-size: 28px;
        }
`

export const Span = styled.span`
    font-weight: normal;
`

export const PortfolioList = styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0;
`
export const PortfolioItem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    cursor: pointer;
    background-color: ${props => props.bg === "active" ? "#081F62" : " "};
    color: ${props => props.bg === "active" ? "#fff" : " "};

    @media (max-width : 768px){
        font-size: 14px;
        padding: 5px;
    }

    @media (max-width : 575px){
        display:block;
        margin:auto;
   }
`

export const BoxDiv = styled.div`
    width: 25%;
    float: left;
    font-size: 0%;
    position: relative;

    @media (max-width : 968px){
         width: 50%;
    }

    @media (max-width : 768px){
        width: 50%;
   }

    @media (max-width : 575px){
        width: 100%;
   }
`

export const Img = styled.img`
    width: 100%;
`

export const Overlay = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(38, 59, 245, 0.5);
    opacity: 0;
    cursor: pointer;

    &:hover {
        opacity: 1 ;
        transition: all 1.5s ease-in-out;
    }

`

export const OverlaySpan = styled.span`
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%,-50%);
    text-align: center;
    color: #fff;
    font-size: 17px;
    font-weight: bold;

    @media (max-width : 768px){
       font-size: 14px;
   }
`
