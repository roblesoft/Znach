import React from 'react';
import axios from 'axios'
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         ScrollView, 
         FlatList, 
         TouchableOpacity, 
         AsyncStorage,
         RefreshControl } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
export default class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {list: [],
                     refreshing: false}
        this.path = "http://polar-savannah-83006.herokuapp.com/"
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Znach',
            headerRight: (
                <Ionicons 
                    style={{paddingRight: 10} } 
                    name={'ios-chatbubbles'} 
                    size={25}
                    onPress={()=> navigation.navigate('Messages')}/>
            ),
        };
    }
    _retrieveData = async () => {
        try{
            const user_id = await AsyncStorage.getItem('user_id')
            const user_name = await AsyncStorage.getItem('user_name')
            if(user_id !== null){
                console.log(user_name)
                console.log(user_id)
                return {user_id, user_name}
            }
        }catch(error){
            console.error(error)
        }
    }

    componentDidMount(){

        axios.get(this.path + 'publications/')
        .then( response => {
            console.log(response.data)
            this.setState({list: response.data.reverse() })
        })
        .catch(error => {
            console.log(error)
        })

    }

    _onRefresh = () => {
        this.setState({refreshing: true})

        axios.get(this.path + 'publications/')
        .then( response => {
            this.setState({list: response.data.reverse() })
            this.setState({refreshing: false})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.screenContainer}>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }>
                        <View style={styles.screenContainer}>
                            <FlatList
                                horizontal={true}
                                style={styles.list}
                                showsHorizontalScrollIndicator={false}
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
                        <FlatList 
                            data={this.state.list}
                            renderItem={({item}) => 
                                <View style={styles.publicationsContainer}>
                                        <View style={styles.publication}>
                                            <View style={styles.publicationHeader}>
                                                <View style={styles.publicationUser}>
                                                    <Image
                                                        style={styles.avatarPublication}
                                                        source={require('../../assets/default-avatar.png')}/>
                                                        <View styles={styles.publicationInformation}>
                                                            <Text style={styles.publicationUserName}>{item.user_id == null ? 'mr. Nobody' : item.user.name}</Text>
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
            <View style={styles.Buttoncontainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => this.props.navigation.navigate('NuevaPublicacion')}>
                    <Text style={styles.Buttontext}>+</Text>
                </TouchableOpacity>
            </View>
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
    Buttoncontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#00ADB5',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 25,
        height: 50,
        width: 50,
        marginBottom: 20,
        marginRight: 20,
        right: 1,
        bottom: 1,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,

    },
    Buttontext: {
        color: 'white',
        fontSize: 30,
        fontWeight: '200'
    },
    block: {
        height: 20,
        backgroundColor: 'blue'

    }
    
})