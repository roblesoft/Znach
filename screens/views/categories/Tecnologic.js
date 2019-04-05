import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, FlatList } from 'react-native';
import axios from 'axios'

export default class Tecnologic extends React.Component{
    constructor(props){
        super(props)
        this.path = "http://polar-savannah-83006.herokuapp.com/"
        this.list = []
        this.categorie = this.props.navigation.state.params.categorie
        axios.get(`${this.path}user_publications/categories/`, {
            params: {categorie: this.categorie}
        })
        .then(response => {
            console.log(response.data)
            this.list = response.data

        })
        .catch(error => {
            console.error(error)
        })
    }
    static navigationOptions = {
        title: this.categorie
    }
    render(){
        return(
            <View>

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
        paddingTop: 30
    },
    header:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 85,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff529',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    message: {
        paddingTop: 40,
        color: '#000'
    },
    textGray: {
        fontSize: 15,
        color: 'gray'
    },
    avatar:{
        borderRadius: 35,
        height: 70,
        width: 70,
    },
    list: {
        margin: 10

    },
    categories: {
        fontSize: 18,
        marginRight: 30,
        marginTop: 10,
      
    },
    welcome: {
        width: 300,
        height: 150,
        backgroundColor: '#66A0CC',
        margin: 10,
        paddingTop: 100,
        borderRadius: 30,
        paddingLeft: 20,
        color: '#fff'

    },
    userCont:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20
    },
    name: {
    }
    
})