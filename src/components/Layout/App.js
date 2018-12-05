import React from 'react';

import styles from './App.module.css';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

const App = props => (
  <div className={styles.container}>
    <Header className={styles.header} />
    <Content {...props} className={styles.content} />
    <Footer className={styles.footer} />
  </div>
);

export default App;
