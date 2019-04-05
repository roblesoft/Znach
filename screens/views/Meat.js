import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class Meat extends React.Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Conoce'
    }

    render(){
        return(
            <View styles={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.categoriesContainer}>
                            <TouchableOpacity 
                                style={[styles.categorie, {backgroundColor: '#8a29ff'}]}
                                onPress={() => this.props.navigation.navigate('Tecnologic', {categorie: "Diseño"})}>
                                <Text style={styles.categoriesText}>Diseño</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.categoriesContainer}>
                            <TouchableOpacity 
                                style={[styles.categorie, {backgroundColor: '#299eff'}]}
                                onPress={() => this.props.navigation.navigate('Tecnologic', {categorie: "Tecnologia"})}>
                                <Text style={styles.categoriesText}>Tecnología</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.categoriesContainer}>
                            <TouchableOpacity 
                                style={[styles.categorie, {backgroundColor: '#86f500'}]}
                                onPress={() => this.props.navigation.navigate('Tecnologic', {categorie: "Negocios"})}>
                                <Text style={styles.categoriesText}>Negocios</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.categoriesContainer}>
                            <TouchableOpacity 
                                style={[styles.categorie, {backgroundColor: '#ff8a29'}]}
                                onPress={() => this.props.navigation.navigate('Tecnologic', {categorie: "Ciencias"})}>
                                <Text style={styles.categoriesText}>Ciencias</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.categoriesContainer}>
                            <TouchableOpacity 
                                style={[styles.categorie, {backgroundColor: '#2933ff'}]}
                                onPress={() => this.props.navigation.navigate('Tecnologic', {categorie: "Adminsitracion"})}>
                                <Text style={styles.categoriesText}>Administración</Text>
                            </TouchableOpacity>
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
  categoriesContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10
  },
  categorie: {
      borderRadius: 15,
      width: '100%',
      height: 100,
      marginBottom: 5,
      paddingTop: 20,
      paddingLeft: 20,
  },
  categoriesText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25
  }
})