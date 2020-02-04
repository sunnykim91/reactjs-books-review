import React, { createRef, useEffect } from 'react';
import { Col } from 'antd';
import styled from 'styled-components';
import { Input, Button, message } from 'antd';
import './SigninForm.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const StyledCol = styled(Col).attrs(() => ({
  span: 12
}))`
  vertical-align: top;
`;
const StyledMainDiv = styled.div`
  padding: 40px;
  font-weight: bold;
`;

const StyledTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #642828;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const StyledInputDiv = styled.div`
  text-align: center;
`;

const StyledBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const SigninForm = ({ login, error, loading }) => {
  const emailRef = createRef();
  const passwordRef = createRef();

  const history = useHistory();
  // const [loading, setLoading] = useState(false);

  const click = async () => {
    const email = emailRef.current.state.value;
    const password = passwordRef.current.state.value;

    try {
      await login(email, password);
      history.push('/');
    } catch {}
  };

  useEffect(() => {
    console.log(error);
    if (error === null) return null;
    // if (error.response.data.error === 'USER_NOT_EXIST') {
    //   message.error('유저가 없습니다.');
    // } else if (error.response.data.error === 'PASSWORD_NOT_MATCH') {
    //   message.error('비밀번호가 틀렸습니다.');
    // } else {
    //   message.error('로그인에 문제가 있습니다.');
    // }
  }, [error]);
  // const click = async () => {
  //   const email = emailRef.current.state.value;
  //   const password = passwordRef.current.state.value;

  //   console.log(email, password);

  //   try {
  //     // setLoading(true);
  //     startLoading();
  //     const response = await axios.post('https://api.marktube.tv/v1/me', {
  //       email,
  //       password
  //     });
  //     const { token } = response.data;
  //     // setLoading(false);
  //     endLoading();
  //     localStorage.setItem('token', token);
  //     setToken(token);
  //     history.push('/');
  //   } catch (error) {
  //     console.log(error.response);
  //     // setLoading(false);
  //     endLoading();
  //     const errorMsg = error.response.data.error;
  //     setError(errorMsg);
  //   }
  // };

  return (
    <StyledCol>
      <StyledMainDiv>
        <StyledTitle>LOG IN, START SEARCHING.</StyledTitle>
        <StyledInputDiv>
          <div style={{ textAlign: 'left' }}>
            Email<span style={{ color: 'red' }}>*</span>
          </div>
          <Input
            ref={emailRef}
            className='inputEmail'
            placeholder='example@asdf.com'
          />
          <div style={{ textAlign: 'left' }}>
            Password<span style={{ color: 'red' }}>*</span>
          </div>
          <Input
            ref={passwordRef}
            type='password'
            className='inputPassword'
            placeholder='input password'
          />
        </StyledInputDiv>
        <Button
          type='primary'
          style={{ marginBottom: '30px' }}
          loading={false}
          onClick={click}
        >
          SIGN IN
        </Button>
        <hr
          style={{
            border: 'solid 0.8px rgba(120, 120, 120, .2)'
          }}
        />
        <StyledBottomDiv>
          Need to create an account?
          <Button
            style={{
              border: '2px solid rgba(0, 150, 255, .8)',
              color: ' rgba(0, 150, 255, .8)',
              fontWeight: 'bold'
            }}
          >
            SIGN UP
          </Button>
        </StyledBottomDiv>
        <StyledBottomDiv>
          Forgot your password?
          <Button
            style={{
              border: '2px solid  rgba(0, 150, 255, .8)',
              color: ' rgba(0, 150, 255, .8)',
              fontWeight: 'bold'
            }}
          >
            RECOVERY
          </Button>
        </StyledBottomDiv>
      </StyledMainDiv>
    </StyledCol>
  );
};

export default SigninForm;
