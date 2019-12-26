import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

const Login = props => {
  return (
    <View>
      <Logo/>
      <Form type='Login'/>
      <View style={styles.signUpText}>
        <Text style={styles.textField}>Don't have account ? <Text style={{color:'red'}}> SignUp </Text></Text>
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
  signUpText:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  },
  textField:{
    color:'#fff',
    textAlign: 'center'
  }
});
export default Login;
