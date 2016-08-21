import React from 'react';

import FontAwesome from 'react-fontawesome';

export default class Content extends React.Component {
  render () {
    return (
        <div>
            <p> Content!</p>
            <FontAwesome name='rocket' size='2x' />
        </div>
    );
  }
}
