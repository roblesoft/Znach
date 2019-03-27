import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';


export default class NuevaPublicacion extends React.Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Publicar',
        };
    }
    
    render(){
        return (
            <View>

            </View>
        );  
    }
}