import React from 'react';
import SignIn from '../components/Signin';
import ScrollToTop from '../components/ScrollToTop';

const SigninPage: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <SignIn />
    </>
  );
}

export default SigninPage;