import styled from 'styled-components';

export const HomeSection = styled.div`
height: 500px;
    background: url('images/Home/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;

    @media (max-width : 991px){
            height: 350px;
        }

    @media (max-width : 768px){
            height: 400px;
            background-position: bottom;
        }
`
export const HomeIformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media (max-width : 991px){
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
    @media (max-width : 768px){
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 80%;
    }
`

export const HomeTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    color: #5e5e5e;
    margin-bottom: 20px;
    @media (max-width : 991px){
        font-size: 22px;
        margin-bottom: 12px;
    }
    @media (max-width : 768px){
        font-size: 20px;
        margin-bottom: 10px;
    }
`
export const HomeInfo = styled.h4`
    font-size: 24px;
    color: #081F62;
    margin-bottom: 20px;
    @media (max-width : 991px){
        font-size: 18px;
        margin-bottom: 12px;
    }
    @media (max-width : 768px){
        font-size: 16px;
        margin-bottom: 10px;
    }
`
export const HomeDesc = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color:#534F80;
    margin-bottom: 40px;
    @media (max-width : 991px){
        font-size: 14px;
        line-height: 1.2;
        margin-bottom: 12px;
    }
    @media (max-width : 768px){
        font-size: 12px;
        line-height: 1;
        margin-bottom: 20px;
    }
`
export const Span = styled.span`
    font-weight: bolder;
`

export const HomeBtn = styled.span`
    background: #081F62;
    color: #FEFEFE;
    font-size: 18px;
    font-weight: bold;
    border: 0;
    width: 150px;   
    padding: 15px;
    cursor: pointer;
    &:hover{
        background: #FEFEFE;
        color: #081F62;
    }
    @media (max-width : 991px){
        font-size: 14px;
        width: 100px;   
        padding: 7.5px;
    }
    @media (max-width : 768px){
        font-size: 12px;
        width: 100px;   
        padding: 8px;
    }
`

