import styled from 'styled-components';

export const ProfileSection = styled.div`
    padding: 50px 0;
    overflow:hidden;
`
export const ProfileDiv = styled.div`
    width: 50%;
    float: left;
    
    @media (max-width : 768px){
        width: 100%;
        float: none;
        margin: auto 16px;
    }

`

export const Skills = styled(ProfileDiv)`


`
export const ProfileTitle = styled.h2`
    font-size: 35px;
    margin-bottom: 30px;

    @media (max-width : 768px){
            font-size: 26px;
        }

    @media (max-width : 575px){
        font-size: 28px;
    }
`

export const SkillsTitle = styled(ProfileTitle)`

`
export const Span = styled.span`
    font-weight: normal;
`

export const ProfileList = styled.ul`
    list-style: none;
    margin-right:25px;
`
export const ProfileItem = styled.li`
    margin: 25px;
    margin-left:0px;

    @media (max-width : 768px){
        margin: 20px 0;
        font-size: 13px;
    }

    @media (max-width : 575px){
        margin: 13px 0;
        font-size: 15px;
    }
`

export const ProfileSpan = styled.span`
    width: 100px;
    display: inline-block;
    font-weight: bolder;
    color: #081F62
`
export const SkillsDesc = styled.p`
    /*font-size: 15px;
    color: #534F80;*/
    line-height: 1.5;
    margin-bottom: 25px;

    @media (max-width : 768px){
        font-size: 13px;
    }

    @media (max-width : 575px){
        font-size: 15px;
    }
`
export const Bar = styled.div`
    overflow:hidden;
    padding: 10px 0;
    margin-bottom: 10px;
 `
 
 export const BarTitle = styled.span`
    float: left;

    @media (max-width : 768px){
        font-size: 13px;
    }

    @media (max-width : 575px){
        font-size: 15px;
    }

 `

 export const BarPerc = styled.span`
    float: right;
    margin-right: 100px;
 `
 export const BarParent = styled.div`
    height: 4px;
    clear: both;
    background: #f8f8ff;
    position: relative;
    top: 5px;
 `

 export const ParentSpan = styled.span`
    background: #081F62;
    padding:1.5px;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.sp === 1 ? "100%" : ""};
    width: ${props => props.sp === 2 ? "90%" :""};
    width: ${props => props.sp === 3 ? "80%" :""};
`
 