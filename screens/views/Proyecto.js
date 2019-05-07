import React, { Component } from 'react';
import { View, StyleSheet, Button, ScrollView, Text, AsyncStorage } from 'react-native';

import axios from 'axios'
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  proyect_name: t.String,
  proyect_description: t.String,
  category: t.String,
  requeriments: t.String,
  email: t.String,
  //username: t.maybe(t.String),
  terms: t.Boolean,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 20,
    },
  },
  controlLabel: {
    normal: {
      backgroundColor: '#ebebeb',
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 5,
      paddingTop: 5,
      width: 260,
      height: 45,
      borderRadius: 100,
      marginBottom: 20,
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: 'bold',
    },
  },
};

const options = {
  fields: {
    proyect_name: {
      label: 'Nombre del Proyecto',
      error: 'Escribe el nombre de tu proyecto',
    },
    proyect_description: {
      label: 'Descripción Breve del Proyecto ',
      error: 'Mínimo 10 palabras',
    },
    category: {
      label: 'Categoría',
      error: 'Escoge alguna categoría',
    },
    requeriments: {
      label: 'Requerimentos',
      error: 'Escribe algún requerimento',
    },
    email: {
      label: 'Correo Electronico',
      error: 'Escribe un Correo Electronico',
    },
    terms: {
      label: 'Aceptar Terminos y Condiciones',
    },
  },
  stylesheet: formStyles,
};
export default class Proyecto extends React.Component {
    constructor(props){
        super(props)
        this.state = { user_id: '' }
        this.path = "http://polar-savannah-83006.herokuapp.com/"
	}

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  };

    _retrieveData = async () => {
        try{
            const user_id = await AsyncStorage.getItem('user_id')
            const user_name = await AsyncStorage.getItem('user_name')
            if(user_name !== null){
                //console.log(user_name)
                //console.log(`${user_id} id usuario`)
                return user_id
            }
        }catch(error){
            console.error(error)
        }
    }

    publicar = async () => {
        this.state.user_id = await this._retrieveData()
        const value = this._form.getValue();
        axios.post(this.path + 'proyects/', {proyect: {name: value.proyect_name, 
													   user_id: this.state.user_id, 
													   description: value.proyect_description, 
													   categorie: value.category,
													   jobs: value.requeriments,
													   email: value.email
													   } })
        .then(respond =>{
            //console.log(respond)

        })
        .catch(error => {
            console.log(error)
        })
        this.props.navigation.navigate('Home', {text: this.state.text})

    }

  render() {
    return (
      <View style={styles.container}>
		<View style={styles.header}>
			<Text style={styles.headerText}>Nuevo Proyecto</Text>
		</View>
        <View style={styles.form}>
          <ScrollView>
            <Form ref={c => (this._form = c)} type={User} options={options} />
            <Button
              style={styles.boton}
              title="Publicar Proyecto"
              onPress={this.publicar}
            />
          </ScrollView>
        </View>
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
    backgroundColor: '#FFF',
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
    paddingBottom: 40,
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
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerText: {
    backgroundColor: '#FFF63D',
    fontSize: 40,
	  paddingVertical: 40,
	  fontWeight: 'bold'
  },
header: {
	flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

}
});
