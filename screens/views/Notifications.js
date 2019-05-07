import React from 'react'
import { StyleSheet,
         Text, 
         View, 
         ScrollView, 
         Image,
         AsyncStorage, 
         FlatList,
         RefreshControl } from 'react-native';
import axios from 'axios'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Notifications extends React.Component{
    constructor(props){
        super(props)
        this.state = {invitations: [],
                      user_id: '',
                      refreshing: false}
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

    _onRefresh = () => {
        this.setState({refreshing: true})
       axios.get(this.path + 'user_publications/invitations/', {
            params: {
                user_id: this.state.user_id
            }
        })
        .then(response => {
            console.log(response.data)
            this.setState({invitations: response.data})
            this.setState({refreshing: false})
        })
        .catch(error => {
            console.error(error)
        })
 
    }


    deleteInvitation(invitation_id){
        axios.delete(this.path + 'invitations/' + invitation_id)
        .then(response => {
            console.log(response.status)
        })
        .catch(error => {
            console.log(error)
        })
    }

    async acceptInvitation(invitation_id, host_id){
        alert(invitation_id)
        axios.put(this.path + 'invitations/' + invitation_id , 
        {
            invitation: {accepted: true},
            owner_one: host_id,
            owner_two: await this._retrieveData()
        })
        .then(response => {
            console.log(response.status)
            console.log(response.data)
        })

        .catch(error => {
            console.log(error)
        })
        
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
                <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }>
                    <View style={styles.header}>
                        <Text style={styles.titleHeader}>Notificaciones</Text>
                    </View>
                        <FlatList
                            data={this.state.invitations}
                            renderItem={({item}) => 
                                <View style={styles.notificationContainer}>
                                    <View style={styles.notification}>
                                        <Image
                                            style={styles.avatarPublication}
                                            source={require('../../assets/default-avatar.png')}/>
                                        <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Text style={{color: '#FFF', fontWeight: 'bold', paddingLeft: 10}}>{item.host.name}</Text>
                                        <Text style={{ color: '#FFF', paddingLeft: 10}}>{item.host.city}</Text>
                                        <Text style={{ color: '#FFF', paddingLeft: 10}}>{item.host.specialty}</Text>
                                        </View>
                                    </View>
                                    <Ionicons 
                                        name={'ios-checkmark-circle'} 
                                        size={40} color={'#00ADB5'} 
                                        style={{marginRight: 10}}
                                        onPress={() => this.acceptInvitation(item.id, item.host.id)}/>
                                    <Ionicons 
                                        name={'ios-close-circle'} 
                                        size={40} 
                                        color={'#b50800'} 
                                        onPress={() => this.deleteInvitation(item.id)}/>
                                </View>
                        }/>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        backgroundColor: '#e6ebf1',
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
    notification: {
        backgroundColor: '#00ADB5',
        borderColor:'#00ADB5',
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 90,
        width: '80%',
        flex: 1,
        flexDirection: 'row',
        marginRight: 10
    },
    notificationContainer:{
        paddingHorizontal: 20, 
        paddingTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatarPublication: {
        height: 30,
        width: 30,
        borderRadius: 15

    }
})
