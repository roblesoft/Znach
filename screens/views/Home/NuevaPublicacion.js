import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios'


export default class NuevaPublicacion extends React.Component{
    constructor(props){
        super(props)
        this.state = {text: '', user_id: ''}
        this.path = "http://polar-savannah-83006.herokuapp.com/"
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Publicar',
        };
    }
    _retrieveData = async () => {
        try{
            const user_id = await AsyncStorage.getItem('user_id')
            const user_name = await AsyncStorage.getItem('user_name')
            if(user_id !== null){
                console.log(user_name)
                return user_id
            }
        }catch(error){
            console.error(error)
        }
    }

    publicar = () => {
        const user_id = this._retrieveData()
        console.log(user_id)
        axios.post(this.path + 'publications/', {publication: {text: this.state.text, user_id: user_id} })
        .then(respond =>{
        })
        .catch(error => {
            console.log(error)
        })
        this.props.navigation.navigate('Home', {text: this.state.text})

    }
    
    render(){
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.titulo}>Nueva publicacion</Text>
                    <TouchableOpacity 
                        onPress={this.publicar}
                        style={styles.boton}>
                        <Text style={styles.textBoton}>Publicar</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    onChangeText={(text) => this.setState({text})}
                    placeholder={'En que nuevo estas trabajando?'}/>

            </View>
        );  
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingHorizontal: 5
    },
    titulo: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    boton: {
        width: 90,
        backgroundColor: '#00ADB5',
        shadowColor: '#00ADB5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        height: 38,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBoton: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 15
    },
    input: {
        paddingTop: 15,
        paddingHorizontal: 5,
        fontSize: 17

    }
})