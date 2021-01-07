import React, { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native';
class App extends Component{

  render(){

    return(
      <View style={styles.area} >
        <Text style={[styles.textCss,styles.textAlign]}>Texto 1</Text>
        <Text>Texto 2</Text>
        <Text>Texto 3</Text>
        <Text>Texto 4</Text>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  area:{
    marginTop: 10,
  },
  textCss:{
    fontSize: 40,
    color: '#FF0000'
  },
  textAlign:{
    textAlign: 'center'
  },
}); 

export default App;
