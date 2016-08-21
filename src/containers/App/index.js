import React from 'react';

import Content from 'components/Content';
import Footer from 'components/Footer';

import style from './styles.css';

//Initiate global styles. Webpack loader for node_modules folder.
import faStyles from 'font-awesome/css/font-awesome.css';


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
