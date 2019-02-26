import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
export default class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {email: '', password: ''}
    }
    deleteSession = () => {
        const data = this.state
        axios.delete('http://polar-savannah-83006.herokuapp.com/users/sign_out', {
        user: {email: data.email, password: data.password}} )
        .then( response => {
            this.props.navigation.navigate('Profile', {email: this.state.email})
            console.log(response)
        })
        .catch(error  => {
            console.log(error)
        })
    }
    render(){
        return(
            <View>

                <Text>Hello{this.props.navigation.state.params.email}</Text>
                <Text onPress={this.deleteSession}>Cerrar sesion</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    }
})