import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Znach</Text>
        <Button title="click me" onPress={buttonClicked}/>
      </View>
    );
  }
}

const buttonClicked= () => {
  alert('has pulsado')
  axios.get('http://polar-savannah-83006.herokuapp.com/publications').
    then( response => {
      console.log(response.data)
    })
    .catch(error  => {
      console.log(error)
    })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
