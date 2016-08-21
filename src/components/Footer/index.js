import React from 'react';

import style from './styles.css';


export default class Footer extends React.Component {
  render () {
    return <div className={style.container}><p> Created with &hearts; in London! &copy;2016</p></div>;
  }
}
