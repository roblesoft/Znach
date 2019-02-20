import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
export default class App extends React.Component {    
  constructor(props){
    super(props)
    this.state = {email: '', password: ''}

  }
  buttonClicked = () => {

    const data = this.state
    /*axios.post('http://polar-savannah-83006.herokuapp.com/publications', {
      email: data.email, password: data.password} )

      .then( response => {
          console.log(response)
        })
        .catch(error  => {
          console.log(error)
        })
        */
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleStyle}><Text style={styles.header}>Znach</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
        <View style={styles.boton}>
          <Text style={styles.textoBoton} onPress={this.buttonClicked}>Iniciar sesion</Text>
        </View>
        <Text style={styles.textoGris}>¿No tienes cuenta?</Text>
        <Text style={styles.link}
              onPress={() => this.props.navigation.navigate('Registration')}>Registrate</Text>
      </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF30F',

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
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    width: 280,
    height: 50,
    borderRadius: 100,
    marginBottom: 20
  },
  boton: {
    width: 280,
    backgroundColor: '#00ADB5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20

  },
  textoBoton: {
    fontWeight: 'bold',
    color: '#000'

  },
  textoGris: {
    fontWeight: 'bold',
    color: 'gray',

  },
  link: {
    color: 'blue'
  }
});


