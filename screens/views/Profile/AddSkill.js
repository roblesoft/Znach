
import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, AsyncStorage, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

export default class AddSkill extends React.Component{
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
        alert("Publicado")
        this.state.user_id = await this._retrieveData()
        //console.log(this.state.user_id)
        //console.log(`${this.state.user_id} id usuario publicacion`)
        axios.post(this.path + 'skills/', {skill: {name: this.state.text, user_id: this.state.user_id} })
        .then(respond =>{
            console.log(respond.status)
            //console.log(respond)

        })
        .catch(error => {
            console.log(error)
        })
        this.props.navigation.navigate('Home', {text: this.state.text})
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>Nueva Habilidad</Text>
                    <TouchableOpacity 
                        onPress={this.publicar}
                        style={styles.boton}>
                        <Text style={styles.textBoton}>+</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    onChangeText={(text) => this.setState({text})}
                    placeholder={'Nueva habilidad'}/>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingHorizontal: 5
    },
    titulo: {
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 20
    },
    boton: {
        width: 48,
        backgroundColor: '#00ADB5',
        shadowColor: '#00ADB5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        height: 48,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    textBoton: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 15
    },
    input: {
        paddingTop: 15,
        paddingHorizontal: 5,
        fontSize: 17,
        marginLeft: 20

    }
})