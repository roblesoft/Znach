
import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, ScrollView, FlatList , TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

export default class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: '',
            user_id: '',
            messages: [],
            time: ''
        }
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

    tick() {
            this.setState(prevState => ({
              time: prevState.seconds + 1
            }));
          }
        


    async componentDidMount(){
        this.interval = setInterval(() => this.tick(), 500);
        this.setState({user_id: await this._retrieveData()})
        axios.get(this.path + 'chats/' + this.props.navigation.state.params.chat_id)
        .then(response => {
            console.log(response.data.messages)
            this.setState({messages: response.data.messages})
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    sendMessage =  async () => {
        console.log("send")
        axios.post(this.path + 'messages/', {
            message: {
                text: this.state.text,
                owner_two_id: this.props.navigation.state.params.owner_one_id,
                owner_one_id: await this._retrieveData(),
                chat_id: this.props.navigation.state.params.chat_id
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(response.status)
        })

    }

    rowDirection( user_one, user_two){
        return { justifyContent: user_one == user_two ? 'flex-start': 'flex-end'}
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={{padding: 15}}>{this.props.navigation.state.params.owner_one}</Text>
                    <FlatList   
                        data={this.state.messages}
                        renderItem={({item}) => 
                            <View style={[styles.messageDirection, this.rowDirection(item.owner_one_id, this.state.user_id )] }>
                                <View style={styles.message}>
                                    <Text>{item.owner_one.name}</Text>
                                    <Text style={{color: 'white'}}>{item.text}</Text>
                                </View>
                            </View>
                    }/>
                <View style={styles.messageInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="mensaje"
                        value={this.state.text}
                        clearButtonMode='always'
                        onChangeText={(text) => this.setState({text})}
                    />
                    <View style={styles.boton}>

                        <Text style={styles.textoboton} onPress={this.sendMessage}>Enviar</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6ebf1',
    },
    message: {
        width: '50%',
        padding: 8,
        backgroundColor: '#00ADB5',
        marginBottom: 10,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    messageInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: 50
    },
    input: {
        backgroundColor: '#ebebeb',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        width: 250,
        height: 35,
        borderRadius: 100,
        marginRight: 5
    },
    boton: {
        backgroundColor: '#00ADB5',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    textoboton: {
        color: '#fff',
    },
    messageDirection: {
        flex: 1,
        flexDirection: 'row-reverse'
    }
})