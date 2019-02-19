import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {email: '',
                  password: ''}
    this.text = ''
  }
  buttonClicked = () => {

    const data = this.state
    axios.post('http://polar-savannah-83006.herokuapp.com/publications', {
      email: data.email, password: data.password} )

      .then( response => {
          console.log(response)
        })
        .catch(error  => {
          console.log(error)
        })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleStyle}><Text style={styles.header}>Znach</Text></View>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(text) => this.setState({text})}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(text) => this.setState({password})}
        />
        <Button title="click me" onPress={this.buttonClicked}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    alignItems: 'center',

    justifyContent: 'center'
  },
  header: {
    fontSize: 80,
  },
  input: {
    height: 40,
    backgroundColor: '#ebebeb',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    width: 150,
    height: 50,
    borderRadius: 10


  }
});
