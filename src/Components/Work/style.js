import styled from 'styled-components';

export const WorkSection = styled.div`
    height: auto;
    padding: 50px 0;
    background: #FEFEFE;
    overflow: hidden;
`

export const WorkTitle = styled.h2`
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
export const ParentPart = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 50px;

    @media (max-width : 940px){
        grid-template-columns: repeat(2,1fr);
    }

    @media (max-width : 768px){
        grid-template-columns: repeat(1,1fr);
    }
`

export const Part = styled.div`
    margin-top: 20px;
    float: left;
    height: auto;
    padding: 100px 10px;
    box-sizing: border-box;
    text-align: center;
    box-shadow: 10px 10px 15px rgba(73, 78, 92, 0.1);
    @media (max-width : 940px){
        margin: 2% auto;
    }

    @media (max-width : 768px){
        padding: 70px 10px;
    }

    @media (max-width : 575px){
        padding: 55px 10px;
        width:70%;
        float: none;
        margin-left:0;
    }
`
export const Icon = styled.i`
    color: #534F80;
    margin-bottom: 20px;
`

export const PartTitle = styled.h4`
    font-size: 25px;
    color: #081F62;
    margin-bottom: 20px;
`

export const Line = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
`
export const PartDesc = styled.p`
    font-size: 14px;
    color: #534F80;
`
