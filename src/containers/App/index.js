import React from 'react';

import Content from 'components/Content';
import Footer from 'components/Footer';

import style from './styles.css';

export default class App extends React.Component {
  render () {
    return (
        <div>
            <Content />
            <Footer />
        </div>
    );
  }
}
