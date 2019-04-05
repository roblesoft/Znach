import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, AsyncStorage, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

export default class Meat extends React.Component{
    constructor(props){
        super(props)
        this.prevState = {user_name: '', user_id: '', user_city: ''}
        this.state = {user_name: '', user_id: '', user_city: ''}
        this.path = "http://polar-savannah-83006.herokuapp.com/"
        this.publications = [] 
        this.skills = []
        this.componentInitialize()
    }

    static navigationOptions = {
        header: null
    }

    buttonClicked = () => {
        this.props.navigation.navigate('SignedOut')
    }


    AddSkill = () => {
        this.props.navigation.navigate('AddSkill')
    }


    async componentInitialize(){
        try{
            this.state.user_id = await AsyncStorage.getItem('user_id')
            this.state.user_name = await AsyncStorage.getItem('user_name')

            this.state.user_city = await AsyncStorage.getItem('user_city')
        }catch(error){
            console.error(error)
        }
        console.log(this.state.user_id)
        axios.get(this.path + 'user_publications/index', {
            params: {user_id: this.state.user_id}
        })
        .then(respond => {
            console.log(respond.data)
            this.publications = respond.data
        })
    }

   async componentDidMount(){
        try{
            this.state.user_id = await AsyncStorage.getItem('user_id')
            this.state.user_name = await AsyncStorage.getItem('user_name')
            this.state.user_city = await AsyncStorage.getItem('user_city')
        }catch(error){
            console.error(error)
        }
        console.log(this.state.user_id)
        //peticion de publicaciones del usuario
        axios.get(this.path + 'user_publications/index', {
            params: {user_id: this.state.user_id}
        })
        .then(respond => {
            console.log(respond.data)
            this.publications = respond.data
            this.forceUpdate()
        })
        //peticion de habilidades del usuario
        axios.get(this.path + 'user_publications/skills', {
            params: {user_id: this.state.user_id}
        })
        .then(respond => {
            console.log(respond.status)
            console.log(respond.data)
            this.skills = respond.data
            this.forceUpdate()
        })
        .catch(error => {
            console.error(error)
        })
        this.forceUpdate()
    }
    render(){
        console.log("render")
        return(
            <View styles={styles.container}>
                    <ScrollView style={{backgroundColor: '#f6f8fa'}}>
                        <View style={styles.header}>
                            <View style={styles.logOut}>
                                <Ionicons 
                                    name={'ios-settings'} 
                                    size={25}
                                    onPress={this.buttonClicked}
                                    color={'white'}/>
                                <Ionicons 
                                    name={'ios-log-out'} 
                                    size={25}
                                    onPress={this.buttonClicked}
                                    color={'white'}/>
                            </View>
                            <View style={styles.avatarContainer}>
                                <Image
                                    style={styles.avatar}
                                    source={require('../../../assets/default-avatar.png')}/>
                            </View>
                        </View>
                        <View style={styles.userNameContainer}>
                            <Text style={styles.userName}>{this.state.user_name}</Text>
                        </View>
                        <View style={styles.userCityContainer}>
                            <Ionicons name={"ios-pin"} size={14}/>
                            <Text style={styles.userCity}>{this.state.user_city}</Text>
                        </View>
                        <View style={styles.skillsContainer}>
                            <FlatList
                                data={this.skills}
                                horizontal={true}
                                renderItem={
                                    ({item}) => 
                                    <View style={styles.skill}>
                                        <Text style={styles.skillText}>{item.name}</Text>
                                    </View>
                                }
                            />
                            <TouchableOpacity style={[{fontSize: 30}, styles.skill, ]} onPress={this.AddSkill}>
                                <Text style={styles.skillText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.statisticsSection}>
                            <View style={styles.static}>
                                <View style={styles.staticHalf}>
                                    <Text style={styles.staticText}>0</Text>
                                </View>
                                <View style={styles.staticHalf}>
                                    <Text style={styles.staticText}>Red</Text>
                                </View>
                            </View>
                            <View style={styles.static}>
                                <View style={styles.staticHalf}>
                                    <Text style={styles.staticText}>0</Text>
                                </View>
                                <View style={styles.staticHalf}>
                                    <Text style={styles.staticText}>Seguidores</Text>
                                </View>
                            </View>
                            <View style={styles.static}>
                                <View style={styles.staticHalf}>
                                    <Text style={styles.staticText}>0</Text>
                                </View>
                                <View style={styles.staticHalf}>
                                    <Text style={styles.staticText}>Siguiendo</Text>
                                </View>
                            </View>
                        </View>
                        <FlatList 
                            data={this.publications}
                            renderItem={({item}) => 
                                <View style={styles.publicationsContainer}>
                                        <View style={styles.publication}>
                                            <View style={styles.publicationHeader}>
                                                <View style={styles.publicationUser}>
                                                    <Image
                                                        style={styles.avatarPublication}
                                                        source={require('../../../assets/default-avatar.png')}/>
                                                        <View styles={styles.publicationInformation}>
                                                            <Text style={styles.publicationUserName}>Uriel Robles</Text>
                                                            <Text style={styles.publicationDate}>{item.created_at.substr(0,10)}</Text>
                                                        </View>
                                                </View>
                                                <Ionicons
                                                    name={"ios-more"}
                                                    size={25}/>
                                            </View>
                                            <View style={styles.publicationBody}>
                                                <Text>{item.text}</Text>
                                            </View>
                                        </View>
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
        backgroundColor: '#e6ebf1',
        paddingBottom: 20,
        marginBottom: 20
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
        height: 230,
        backgroundColor: '#00ADB5',
        paddingBottom: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        shadowColor: '#00ADB5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },
    textGray: {
        fontSize: 15,
        color: 'gray'
    },
    avatar:{
        borderRadius: 60,
        height: 120,
        width: 120,
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
  logOut: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 30,
      paddingRight: 20,
      paddingLeft: 20
  },
  userNameContainer: {
      paddingTop: 60,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  userName: {
      fontWeight: 'bold',
      fontSize: 30,
  },
  avatarContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 90

  },
  skillsContainer: {
      marginHorizontal: 10,
      marginTop: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  skill: {
      backgroundColor: '#8a29ff',
      paddingBottom: 5,
      paddingTop: 5,
      paddingLeft: 10,
      paddingRight: 10,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      marginRight: 5
  },
  skillText: {
      fontSize: 13,
      color: 'white',
  },
  statisticsSection: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10
  },
  static: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
  },
  staticHalf: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
  },
  staticText: {
      color: 'gray',
      fontSize: 12
  },
  publication: {
      borderWidth: 1,
      borderColor: '#d0dbe5',
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 10,
      width: '100%',
      borderRadius: 20,
      backgroundColor: 'white',
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
  },
  publicationsContainer: {
      flex: 1,
      flexDirection: 'row',
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 10,
  },
  publicationBody: {
      marginBottom: 20,
      paddingLeft: 60

  },
  publicationHeader:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'

  },
  avatarPublication: {
      height: 50,
      width: 50,
      borderRadius: 25,
  },
  publicationUser: {
      flex: 1,
      flexDirection: 'row',
      paddingRight: 12

  },
  publicationInformation: {
      flexDirection: 'row',
      flex: 1,
      marginLeft: 10,
      paddingLeft: 10,
  },
  publicationUserName: {
      paddingLeft: 10,
  },
  publicationDate: {
      paddingLeft: 10,
      color: 'gray'

  },
  userCityContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  userCity: {

    color: 'gray'
  }
})