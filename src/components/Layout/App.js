import React from 'react';
import styled from 'styled-components';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const HeaderStyled = styled(Header)`
  flex-shrink: 0;
  width: 100%;
  height: 10vh;
`;

const ContentStyled = styled(Content)`
  flex: 1 0 auto;
  width: 100%;
  margin-top: 1em;
`;

const FooterStyled = styled(Footer)`
  flex-shrink: 0;
  width: 100%;
  height: 10vh;
`;

const App = props => (
  <Container>
    <HeaderStyled />
    <ContentStyled {...props} />
    <FooterStyled />
  </Container>
);

export default App;
