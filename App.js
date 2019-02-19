import React from 'react';
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
