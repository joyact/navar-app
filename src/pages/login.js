import React from 'react';
import { Container, PageWrapper } from 'components/Common/styled';
import { Logo, BackButton } from 'components/Common';
import { LoginForm, HelpLogin } from 'components/Login';

function LoginPage() {
  return (
    <PageWrapper graybg padding>
      <BackButton />
      <Container margin={{ top: 35, bottom: 40 }}>
        <Logo />
      </Container>
      <Container margin={{ bottom: 40 }}>
        <LoginForm />
      </Container>
      <HelpLogin />
    </PageWrapper>
  );
}

export default LoginPage;
