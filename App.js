import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
class App extends Component{
  render(){

    const img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eavvm6_TKHJOQv4N5tH9oHxzTOQzs5YOOQ&usqp=CAU';
    return(
      <View>
        <Text>Olá Mundo</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{ color: 'red', fontSize: 30}} >React-Native</Text>

        <Image
          source={{ uri: img}}
          style={{width: 300, height: 250}}
        />
      </View>    
    );
  }
}

export default App;