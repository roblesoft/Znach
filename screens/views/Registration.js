import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default class Registration extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          email: '',
          password: '',
          name: '',
          area: '',
          gen: '',
          age: ''
        }
    }

  buttonClicked = () => {
    alert('restrado')

    const data = this.state
    console.log(data)
    axios.post('http://polar-savannah-83006.herokuapp.com/users', {
      user: {email: data.email, password: data.password}} )
      .then( response => {
          this.props.navigation.navigate('Profile', {
            email: this.state.email,
            name: this.state.name,
            age: this.state.age,
            gen: this.state.gen,
            area: this.state.area
          })
//          console.log(response)

        })
        .catch(error  => {
          console.log(error)
        })
    }
    render(){
        return(
        <View style={styles.container}>
          <ScrollView style={{zIndex: 10}}>
          <View style={styles.headerRegistration}>
            <Text style={styles.header}>Registrate</Text>
          </View>
          <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="Nombre"
            onChangeText={(name) => this.setState({name})}
            />
            <View style={styles.cols}>
              <TextInput
              style={styles.inputSmall}
              placeholder="Edad"
              onChangeText={(age) => this.setState({age})}
              />
              <TextInput
              style={styles.inputSmall}
              placeholder="Genero"
              onChangeText={(gen) => this.setState({gen})}
              />
            </View>
            <TextInput
            style={styles.input}
            placeholder="Area de especialidad"
            onChangeText={(area) => this.setState({area})}
            />
            <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            />
            <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            />
            <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            />
            <View style={styles.boton}>
            <Text style={styles.textoBoton} onPress={this.buttonClicked}>Registrarse</Text>
            </View>

            <Text style={styles.textoGris}>¿Ya tienes cuenta?</Text>
            <Text style={styles.link}
                  onPress={() => this.props.navigation.navigate('Home')}>Inicia sesion</Text>
          </View>
          </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF63D',
  },
  form: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    marginTop: 15,
    paddingTop: 40,
    paddingBottom: 40

  },
  cols: {
    flex: 1,
    flexDirection: 'row',

  },
  titleStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  headerRegistration: {
    backgroundColor: '#FFF63D',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  input: {
    height: 45,
    backgroundColor: '#ebebeb',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    width: 260,
    borderRadius: 100,
    marginBottom: 20
  },
 inputSmall: {
    height: 45,
    backgroundColor: '#ebebeb',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    width: 125,
    borderRadius: 100,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 20
  },
  boton: {
    width: 150,
    backgroundColor: '#00ADB5',
    shadowColor: '#00ADB5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    height: 45,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20

  },
  textoBoton: {
    fontWeight: 'bold',
    color: '#FFF'

  },
  textoGris: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 12

  },
  link: {
    color: 'blue',
    fontSize: 12
  }
});

