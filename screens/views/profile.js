import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
import MenuBar from './MenuBar'
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
            <View style={styles.container}>
                <View style={styles.screenContainer}>
                    <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.titleHeader}>Conoce</Text>
                        <Text style={styles.textGray}>Descubre emprendedores</Text>

                    </View>

                    </ScrollView>
                </View>
                <MenuBar/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screenContainer: {
        flex: .9
    },
    titleHeader: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingTop: 40
    },
    header:{
        justifyContent: 'center',
        height: 100,
        paddingLeft: 10
    },
    textGray: {
        fontSize: 15,
        color: 'gray'
    }
})