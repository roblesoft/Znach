import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Registration extends React.Component{
    constructor(props){
        super(props)
        this.data = {email: '', password: ''}

    }

  buttonClicked = () => {
      alert('restrado')

    const data = this.data
    console.log(data)
    axios.post('http://polar-savannah-83006.herokuapp.com/users', {
      email: data.email, password: data.password} )
      .then( response => {
          console.log(response)
        })
        .catch(error  => {
          console.log(error)
        })
    }
    render(){
        return(
        <View style={styles.container}>
            <Text style={styles.header}>Registrate</Text>
            <Text>Nombre</Text>
            <TextInput
            style={styles.input}
            placeholder="Nombre"
            />
            <Text>Email</Text>
            <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => data.email = email}
            />
            <Text>Contraseña</Text>
            <TextInput
            style={styles.input}
            placeholder="contraseña"
            secureTextEntry={true}
            onChangeText={(password) => data.password = password }
            />
            <View style={styles.boton}>
            <Text style={styles.textoBoton} onPress={this.buttonClicked}>Registrarse</Text>
            </View>
            <Button  title="Iniciar sesion"
                onPress={() => this.props.navigation.navigate('Home')}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF30F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 50,
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

