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
      <View>
        <View style={styles.headerLogin}>

          <Image style={{width: 310, height: 100}} resizeMode={'strech'}source={require('./assets/znach.png')}/>
         
        </View>
        <View style={styles.form}>
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
  tain: {
    flex: 1,
    justifyContent: 'center'
  },
  titleStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 80,
  },
  headerLogin: {
    backgroundColor: '#FFF63D',
    height: 300,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#ebebeb',
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
    width: 150,
    backgroundColor: '#00ADB5',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10

  },
  textoBoton: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15

  },
  textoGris: {
    fontWeight: 'bold',
    color: 'gray',

  },
  link: {
    color: 'blue'
  },
  form:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  }
});
