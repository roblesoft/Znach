import React from 'react'
import { StyleSheet, RefreshControl, Text, FlatList,  View, Button, TextInput, Image, ScrollView, AsyncStorage } from 'react-native';
import axios from 'axios'
import ProyectList from './../cardlist/ProyectsDetails'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Proyects extends React.Component{
    constructor(props){
        super(props)
        this.state = { user_id: '', proyects: [], refreshing: false}
        this.path = "http://polar-savannah-83006.herokuapp.com/"
    }

	async componentDidMount(){
        try{
            this.setState({user_id: await AsyncStorage.getItem('user_id')})
        }catch(error){
            console.error(error)
        }
        console.log(this.state.user_id)
        axios.get(this.path + 'proyects')
        .then(respond => {
            console.log(respond.data)
            this.setState({proyects: respond.data})
        })
    }

	_onRefresh = () => {
        this.setState({refreshing: true})
       axios.get(this.path + 'proyects')
        .then(response => {
            this.setState({proyects: response.data})
            this.setState({refreshing: false})
        })
        .catch(error => {
            console.error(error)
        })
 
    }



    async sendInvitation(invited_id){
        axios.post(this.path + 'invitations/', {
            invitation: {
                host_id: this.state.user_id, 
                invited_id: invited_id,
                accepted: false
            },
        })
        .then(response => {
            console.log(response.status)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render(){
        return(
            <View>
                <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
						}>
				<FlatList
					data={this.state.proyects}
					renderItem={({item}) => 
						<View style={styles.notificationContainer}>
							<View style={styles.notification}>
								<Image
									style={styles.avatarPublication}
									source={require('./../../../assets/default-avatar.png')}/>
								<View style={{flex: 1, flexDirection: 'column'}}>
									<Text style={{color: '#FFF', fontWeight: 'bold', paddingLeft: 10, }}>{item.name}</Text>
									<Text style={{ color: '#FFF', paddingLeft: 10}}>{item.categorie}</Text>
									<Text style={{ color: '#FFF', paddingLeft: 10, fontWeight: 'bold'}}>Descripcion:</Text>
									<Text style={{ color: '#FFF', paddingLeft: 10}}>{item.description}</Text>
									<Text style={{ color: '#FFF', paddingLeft: 10, fontWeight: 'bold'}}>Requerimentos:</Text>
									<Text style={{ color: '#FFF', paddingLeft: 10}}>{item.jobs}</Text>
									<Text style={{ color: '#FFF', paddingLeft: 10, fontWeight: 'bold'}}>Contacto:</Text>
									<Text style={{ color: '#FFF', paddingLeft: 10}}>{item.email}</Text>
								</View>
							</View>
							<Ionicons 

								name={'ios-checkmark-circle'} 
								size={40} color={'#00ADB5'} 
								style={{marginRight: 10}}
								onPress={() => this.sendInvitation(item.user_id)}/>
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
