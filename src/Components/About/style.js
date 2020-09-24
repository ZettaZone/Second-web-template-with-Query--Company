import styled from 'styled-components';

export const CreativeSection = styled.div`
    height: 500px;
    background: url('images/creative/about-bg.jpg');
    /*background-attachment: fixed;*/
    background-size: cover;
    background-position: center;
    position: relative;

    @media (max-width : 991px){
            height: 350px;
        }

    @media (max-width : 768px){
        height: 400px;
    }

    @media (max-width : 450px){
        height: 200px;
    }
`
export const CreativeInfo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    /*background: rgba(231, 233, 240, 0.59);*/
    background: rgba(254, 254, 254, 0.607);
    padding:30px 50px;

    @media (max-width : 991px){
        padding:10px 15px;
    }

    @media (max-width : 768px){
        padding:5px 10px;
        width: 80%;
    }

    @media (max-width : 450px){
        padding:1px 5px;
    }

`
export const InfoTitle = styled.h2`
    font-weight: bold;
    font-size: 35px;
    text-transform: uppercase;
    margin-bottom: 16px

    @media (max-width : 991px){
        font-size: 32px;
    }

    @media (max-width : 768px){
        font-size: 26px;
        margin-bottom: 2%;
    }

    @media (max-width : 450px){
        font-size: 25px;
    }
`
export const Span = styled.span`
    font-weight: normal;
`
export const InfoDesc = styled.span`
    color: #534F80;
    margin-bottom:0px;
    line-height:1.7;

    @media (max-width : 991px){
        font-size: 15px;
        margin-bottom:5px;
        line-height:1.5;
    }

    @media (max-width : 768px){
        font-size: 13px;
        margin-bottom:5px;
        line-height:1;
    }

    @media (max-width : 450px){
        font-size: 8px;
        margin-bottom:5px;
        line-height:1;
    }
`
