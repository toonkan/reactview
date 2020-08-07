import React from 'react';
import { View,Text } from 'react-native';
 
class App extends React.Component{
  render(){
    return(
      <View style={{
        flexDirection:"row",
        height:100,
        padding:20,
      }}>
        <View style={{backgroundColor:"pink",flex:0.3}}>
          <Text style={{
            color:"red",
            textAlign:"center",
            
          }}>IU</Text>
        </View>
        <View style={{backgroundColor:"yellow",flex:0.5}}/>
        <Text>Hello Guy World</Text>
      </View>
    )
  }
}
export default App;