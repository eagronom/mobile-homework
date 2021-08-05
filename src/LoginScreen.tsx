import React, { Fragment } from 'react';
import { Image } from 'react-native';

class LoginScreen extends React.PureComponent {
  render = () => (
    <Fragment>
      <Image source={require('../assets/eagronom.png')} />
    </Fragment>
  )
}

export default LoginScreen;
