import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';

export default class Meat extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View styles={styles.container}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Text style={styles.titleHeader}>Encuentra</Text>
                        </View>
                        <View style={styles.boton}>
                            <Text style={styles.textoBoton}
                                    onPress={this.buttonClicked}>Salir</Text>
                        </View>
                    </ScrollView>
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
})