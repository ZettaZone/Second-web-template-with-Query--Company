/* Second way to Styled Components*/

import styled from 'styled-components';

export const NavbarSection = styled.div`
padding: 20px 0;
overflow: hidden;
position: relative;
`

export const Logo = styled.div`
/* width: 50%;*/
float: left;
@media (max-width : 991px){
        width:100%;
        float: none;
    }
    
`

export const LogoText = styled.h2`
font-size : 30px;
font-weight: bold;
@media (max-width : 767px){
    font-size : 24px;
    font-weight: bold;
 }
`
export const NavbarInput= styled.input`
position: absolute;
top: 15px;
right: 25px;
display: none;

&:checked ~ ul{
    display: block;
}
&:checked ~  label{
    background: url("/images/Navbar/close.png") no-repeat;
    background-size: cover;
}


`
export const NavbarLabel= styled.label`
position: absolute;
top: 15px;
right: 25px;
display: block;
width: 15px;
height: 15px;
background: url("images/Navbar/open.png") no-repeat;
background-size: cover;
padding: 20px;
cursor: pointer;

@media (min-width : 992px){
    display: none;
 }

 @media (max-width : 767px){
    width: 7px;
    height: 7px;
 }

`

export const UlList = styled.ul`
width: 50%;
float: right;
list-style: none;
@media (max-width : 991px){
    width: 100%;
    float: none;
    margin-top: 20px;
    display: none;
}
`
export const ListItem = styled.li`
display: inline-block;
@media (max-width : 991px){
    display: inline_block;
    font-size: 14px;
    text-align: center;
}
`
export const Anchor = styled.a`
display: block;
text-decoration: none !important;
color:#222 !important;
font-weight: bold;
padding: 10px 15px;
&:hover{  
    color: #081F62;
}
`

