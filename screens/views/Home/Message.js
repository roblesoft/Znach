import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

export default class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = {chats: [], 
                     user_id: '',
                     chats_received: []}
        this.path = "http://polar-savannah-83006.herokuapp.com/"

    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Mesajes',
            headerRight: (
                <Ionicons 
                    style={{paddingRight: 10} } 
                    name={'ios-create'} 
                    size={25}
                    onPress={()=> navigation.navigate('Messages')}/>
            ),
        };
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
        axios.get(this.path + 'user_publications/chats/',{
            params: {
                user_id: this.state.user_id
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({chats: response.data})
        })
        .catch(error => {
            console.log(error)
        })

        axios.get(this.path + 'user_publications/chats_received/',{
            params: {
                user_id: this.state.user_id
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({chats_received: response.data})
        })
        .catch(error => {
            console.log(error)
        })

    }
    
    render(){
        return(
            <View styles={styles.container}>
                <View >
                    <ScrollView>
                        <FlatList
                            data={this.state.chats}
                            renderItem={({item}) =>
                            <TouchableOpacity style={styles.chat} onPress={() => this.props.navigation.navigate('Chat', {owner_two: item.owner_two.name, owner_two_id: item.owner_two.id, chat_id: item.id})}>
                                <Text>{item.owner_two.name}</Text>
                                <Text>{item.owner_two.specialty}</Text>
                            </TouchableOpacity>
                        }
                        />
                        <FlatList
                            data={this.state.chats_received}
                            renderItem={({item}) =>
                            <TouchableOpacity style={styles.chat} onPress={() => this.props.navigation.navigate('ChatReceived', {owner_one: item.owner_one.name, owner_one_id: item.owner_one.id, chat_id: item.id})}>
                                <Text>{item.owner_one.name}</Text>
                                <Text>{item.owner_one.specialty}</Text>
                            </TouchableOpacity>
                        }
                        />
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
    },
    chat: {
        borderWidth: 1, 
        marginTop: 10, 
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 19
    }

    
})