import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, FlatList, AsyncStorage } from 'react-native';
import axios from 'axios'

export default class Tecnologic extends React.Component{
    constructor(props){
        super(props)
        this.path = "http://polar-savannah-83006.herokuapp.com/"
        this.state = {list: [], user_id: ''}
        this.categorie = this.props.navigation.state.params.categorie
        this.sendInvitation = this.sendInvitation.bind(this)
        this.press = this.press.bind(this)
        axios.get(`${this.path}user_publications/categories/`, {
            params: {categorie: this.categorie}
        })
        .then(response => {
            console.log(response.data)
            this.state.list = response.data
            this.forceUpdate()

        })
        .catch(error => {
            console.error(error)
        })
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
    async sendInvitation(invited_id){
        this.setState({user_id: await this._retrieveData()}) 
        axios.post(this.path + 'invitations/', {
            invitation: {
                host_id: this.state.user_id, 
                invited_id: invited_id,
                accepted: false
            },
            xsrfHeaderName: 'X-XSRF-TOKEN'
        })
        .then(response => {
            console.log(response.status)
        })
        .catch(error => {
            console.log(error)
        })

    }
    static navigationOptions = {
        title: this.categorie
    }
    press(id){
        alert(id)

    }
    _keyExtractor = (item, index) => item.id

    render(){

        return(
            <View>
                <FlatList
                    data={this.state.list}
                    KeyExtractor={this._keyExtractor}
                    renderItem={({item}) =>
                    <View>
                        <Text>dd</Text>
                        <Text>{item.name}</Text>
                        <Button title={"añadir"} onPress={() => this.sendInvitation(item.id)}/>
                    </View>
                }
                    
                />

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