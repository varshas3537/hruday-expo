import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component{
  render(){
    return(
       <Button title="Click me" color="red" />
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
       <RedButton/>
      <Text>My First React component</Text>
      </View>
    );
  }
}
