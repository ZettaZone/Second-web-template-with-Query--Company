import React from 'react';
import {DropSection,DropTitle,Form,FormInput,Input,InputEmail,InputSubmit,InputSup,InputText,InputTextare,Span} from './style'
const Contact = () => {
  return (

        <DropSection id="contact">
          <div class="container">
              <DropTitle>Contact <Span> Us</Span> </DropTitle>
              <Form action="">
                  <FormInput>
                      <InputText type="text" name="" id="" placeholder="Your Name"/>
                      <InputEmail type="email" name="" id="" placeholder="Your Email"/>
                  </FormInput>
                  <InputSup type="text" name="" id="" class="sub" placeholder="Your Subject"/>
                  <InputTextare name="" id="" cols="30" rows="10" placeholder="Your Message"></InputTextare>
                  <InputSubmit type="submit" value="Send Message"/>
              </Form>
          </div>
      </DropSection>

  );
}

export default Contact;
