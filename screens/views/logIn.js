import React from 'react'
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, AsyncStorage } from 'react-native';
export default class App extends React.Component {    
  constructor(props){
    super(props)
    this.state = {email: '', password: ''}

  }
  buttonClicked = () => {

    const data = this.state
    //inicio de sesion con axios
    axios.post('http://polar-savannah-83006.herokuapp.com/users/sign_in', {
      user: {email: data.email, password: data.password}} )
      .then( response => {
        console.log(response.data)
        console.log("respuesta")
        //console.log(`${response.data} datos del registro`)
        this._storeData(JSON.stringify(response.data.id), response.data.name, response.data.city)
        if(response.status == 200){
          this.props.navigation.navigate('SignedIn')
        }

      })
      .catch(error  => {
        console.log(error)
    })
  }

  _storeData = async (user_id, user_name, user_city) => {
    try{
      await AsyncStorage.setItem('user_id', user_id)
      await AsyncStorage.setItem('user_name', user_name)
      await AsyncStorage.setItem('user_city', user_city)
    }catch(error){
      console.error(error)
    }
  }

  render() {
    return (
      <ScrollView>
        <View>

          <View style={styles.headerLogin}>

            <Image 
              style={{width: 255, height: 80}} 
              resizeMode={'stretch'}
              source={require('../../assets/znach.png')}
              />
          </View>
          <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            onChangeText={(email) => this.setState({email})}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />
          <View style={styles.boton}>
            <Text 
              style={styles.textoBoton} 
              onPress={this.buttonClicked}>Iniciar sesion</Text>
          </View>
          <Text style={styles.textoGris}>¿No tienes cuenta?</Text>
          <Text style={styles.link}
                onPress={() => this.props.navigation.navigate('SignUp')}>Registrate</Text>
          </View>
        </View>
      </ScrollView>

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
    width: 260,
    height: 45,
    borderRadius: 100,
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
    fontSize: 12

  },
  link: {
    color: 'blue',
    fontSize: 12
  },
  form:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  }
});
