import React from 'react';
import {View, Image,Text, StyleSheet} from 'react-native';

const Logo = props => {
  return(
    <View style={styles.containers}>
      <Image
        style={styles.img}
        source={require('../images/logo.png')}
      />
      <Text style={styles.logoText}> Welcome To</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  containers:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'center',
  },
  img: {
    width: 50,
    height: 50
  },
  logoText:{
    fontSize: 18,
    color: '#fff',
    marginVertical:15
  }
});

export default Logo;

