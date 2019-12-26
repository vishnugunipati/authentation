import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

const SignUp = props => {
  return (
    <View>
      <Logo/>
      <Form type='SignUp'/>
      <View style={styles.signUpText}>
        <Text style={styles.textField}>Already have account ?
          <Text> SignIn</Text></Text>
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
  }
});
export default SignUp;
