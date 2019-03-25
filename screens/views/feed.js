import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
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
                            <Text style={styles.titleHeader}>Feed</Text>
                            <Ionicons style={styles.message} name={'ios-chatbubbles'} size={25}/>
                        </View>
                        <View style={styles.screenContainer}>
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