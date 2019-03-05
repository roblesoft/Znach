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
                        <Text style={styles.textGray}>Descubre emprendedores</Text>
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
                            renderItem = { ({item}) => {
                                <Text style={styles.categories}>{item.text}</Text>
                            }}
                        />

                        <FlatList
                            horizontal={true}
                            style={styles.list}
                            data={[
                                {key: 'Uriel'},
                                {key: 'david'},
                                {key: 'j'},
                                {key: 'k'},
                                {key: 'l'},
                                {key: 'd'},
                                {key: 'andrea'}
                            ]}
                            renderItem = { ({item}) => 
                                <Image 
                                    source={require('../../assets/default-avatar.png')}
                                    style={styles.avatar} />
                            }
                        />
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
    },
    avatar:{
        borderRadius: 50,
        height: 100,
        width: 100,
        marginRight: 20
    },
    list: {
        margin: 10

    },
    categories: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})