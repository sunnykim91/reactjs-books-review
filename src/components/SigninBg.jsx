import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';
import bgImg from '../images/bg_signin.png';

const StyledCol = styled(Col).attrs(() => ({
  span: 12
}))``;

const StyledImg = styled.img`
  width: 100%;
`;

const SigninBg = () => (
  <StyledCol>
    <StyledImg src={bgImg} alt='Signin' />
  </StyledCol>
);

export default SigninBg;
