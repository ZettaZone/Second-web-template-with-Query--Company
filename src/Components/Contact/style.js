import styled from 'styled-components';

export const DropSection = styled.div`
padding: 50px 0;
text-align: center;
`

export const DropTitle = styled.h2`
font-size: 35px;
margin-bottom: 30px;

@media (max-width : 768px){
        font-size: 26px;
    }
`

export const Span = styled.span`
font-weight: normal;
`

export const Form = styled.form`
width: 70%;
margin: auto;
`

export const Input = styled.input`
box-sizing: border-box;
    padding: 14px;
    margin-bottom: 20px;
    outline: 0;
    font-size:12px;
`

export const FormInput = styled.div`
overflow: hidden;
@media (max-width : 768px){
    width: 100%;
}
`

export const InputText = styled(Input)`
width: 49%;
float: left;
@media (max-width : 768px){
    width: 100%;
}
`
export const InputEmail = styled(Input)`
width: 49%;
float: right;
@media (max-width : 768px){
    width: 100%;
}
`
export const InputSup = styled(Input)`
width: 100%;
@media (max-width : 768px){
    width: 100%;
}
`

export const InputTextare = styled.textarea`
box-sizing: border-box;
padding: 14px;
font-size:12px;
width: 100%;
background: rgb(255, 255, 255);
outline: 0;
margin-bottom: 30px;
`
export const InputSubmit = styled(Input)`
background: #081F62;
color: #FEFEFE;
font-size: 18px;
font-weight: bold;
border: 0;
width: 200px;   
padding: 15px;
cursor: pointer;
&:hover{
    background: #FEFEFE;
    color: #081F62;
    border:1px solid #081F62;
}
@media (max-width : 768px){
    font-size: 12px;
    width: 130px;   
    padding: 15px;
}
`
