import React, { Fragment } from 'react';
import {FooterSection,Paragraph,ScrollTop} from './style';


const Footer= () => {
  return (
  <Fragment>
    <FooterSection>
      <Paragraph> &copy; Copyright Zetta Zone. All Rights Reserved</Paragraph>
    </FooterSection>

    <ScrollTop id="scroll-top">
      <i className="fas fa-chevron-up"/>
    </ScrollTop>
  </Fragment>
  );
}

export default Footer;
