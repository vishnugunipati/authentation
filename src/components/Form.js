import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Form = props => {

  return(
    <View style={styles.containers}>
      <TextInput
        placeholder="Email"
        style={styles.inputText}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputText}
      />

      <TouchableOpacity style={styles.loginText}>
        <Text style={styles.logText}>{props.type}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containers:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputText:{
    width: 300,
    backgroundColor: '#fff',
    borderRadius:25,
    paddingHorizontal: 16,
    marginVertical:10,
    height: 43,
  },
  loginText:{
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius:25,
    paddingHorizontal: 12,
    marginVertical:10,
    height: 43,
  },
  logText:{
    color:'#ffffff',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center'
  }
});

export default Form;
