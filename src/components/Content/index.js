import React from 'react';

import FontAwesome from 'react-fontawesome';

import style from './styles.css';


export default class Content extends React.Component {
  render () {
    return (
        <div className={style.container}>
            <p className={style.headline}>Coming soon!</p>
            <div className={style.iconsContainer}>
                <a href="https://github.com/mantasak"><FontAwesome name='github' size='3x' /></a>
                <a href="https://facebook.com/mantasakalauskas"><FontAwesome name='facebook-official' size='3x' /></a>
                <a href="mailto:mantas@sakalauskas.me"><FontAwesome name='envelope' size='3x' /></a>
            </div>
        </div>
    );
  }
}
