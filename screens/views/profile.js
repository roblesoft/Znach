import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, FlatList } from 'react-native';
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
                            <Text style={styles.textGray}>encuentra emprendedores como tú</Text>
                        </View>
                        <View style={styles.screenContainer}>
                            <FlatList
                                horizontal={true}
                                style={styles.list}
                                data={[
                                    {key: 1, text: 'Desarrollo'},
                                    {key: 2, text: 'Diseño'},
                                    {key: 3, text: 'Finanzas'},
                                    {key: 4, text: 'Marketing'}
                                ]}
                                renderItem = { ({item}) => 
                                    <Text style={styles.categories}>{item.text}</Text>
                                }
                            />
                            <View style={styles.welcome}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Encuentra colaboladores en desarrollo de software</Text>
                            </View>

                            <FlatList
                                horizontal={true}
                                style={styles.list}
                                data={[
                                    {key: 'Uriel'},
                                    {key: 'David'},
                                    {key: 'Andrea'},
                                    {key: 'Jorge'},
                                    {key: 'Rodrigo'},
                                    {key: 'd'},
                                    {key: 'andrea'}
                                ]}

                                renderItem = { ({item}) => 
                                    <View style={styles.userCont}>
                                        <Image 
                                            source={require('../../assets/default-avatar.png')}
                                            style={styles.avatar} />
                                        <Text style={styles.name}>{item.key}</Text>
                                    </View>
                                }
                                
                            />
                        </View>
                    </ScrollView>
                </View>
                <MenuBar />
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