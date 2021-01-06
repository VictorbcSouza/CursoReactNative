import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
class App extends Component{
  render(){

    return(
      <View>
        <Text>Olá Mundo</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{ color: 'purple', fontSize: 30}} >React-Native</Text>
     
      <Jobs largura ={500} altura ={200} nome="react-native" />

      </View>    
    );
  }
}



export default App;

class Jobs extends Component{
  render(){
    const img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eavvm6_TKHJOQv4N5tH9oHxzTOQzs5YOOQ&usqp=CAU';

    return(
     <View> 
        <Image
        source={{ uri: img }}
        style={{ width: this.props.largura, height: this.props.altura}}
        />
        <Text>React-Native</Text>
      </View>
    );  
  }
}