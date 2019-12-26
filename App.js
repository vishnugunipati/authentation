
import React from 'react';
import {StyleSheet, View, StatusBar } from 'react-native';
import Logo from './src/components/Logo';
import Form from './src/components/Form';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';



const App: () => React$Node = () => {
  return (
    <View style={styles.containers}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content"/>
      {/*<Login/>*/}
      <SignUp/>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    backgroundColor: '#455A64',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  textContent:{
    color: 'white'
  }
});

export default App;
