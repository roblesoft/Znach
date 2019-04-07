import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, AsyncStorage } from 'react-native';
import axios from 'axios'

export default class Notifications extends React.Component{
    constructor(props){
        super(props)
        this.state = {invitations: [], user_id: ''}
        this.path = "http://polar-savannah-83006.herokuapp.com/"

    }
    _retrieveData = async () => {
        try{
            const user_id = await AsyncStorage.getItem('user_id')
            const user_name = await AsyncStorage.getItem('user_name')
            if(user_name !== null){
                //console.log(user_name)
                //console.log(`${user_id} id usuario`)
                return user_id
            }
        }catch(error){
            console.error(error)
        }
    }
    async componentDidMount(){
        this.setState({user_id: await this._retrieveData()}) 
        axios.get(this.path + 'user_publications/invitations/', {
            params: {
                user_id: this.state.user_id
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({invitations: response.data})
        })
        .catch(error => {
            console.error(error)
        })
    }

    render(){
        return(
            <View styles={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.titleHeader}>Notificaciones</Text>
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