import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
import MenuBar from './MenuBar'

export default class Message extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <View styles={styles.container}>
                <View style={styles.screenContainer}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Text style={styles.titleHeader}>Notificaciones</Text>
                        </View>
                    </ScrollView>

                </View>

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
        paddingTop: 50
    },
    header:{
        justifyContent: 'center',
        height: 130,
        paddingLeft: 10,
        backgroundColor: '#f5f5f5',
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray'
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