import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Meat extends React.Component{
    constructor(props){
        super(props)

    }
    buttonClicked = () => {
        this.props.navigation.navigate('SignedOut')
    }
    render(){
        const { navigation } = this.props
        const name = navigation.getParam('email', 'default')
        return(
            <View styles={styles.container}>
                    <ScrollView>
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
                                    source={require('../../assets/default-avatar.png')}/>
                            </View>
                        </View>
                        <View style={styles.userNameContainer}>
                            <Text style={styles.userName}>Uriel Robles</Text>
                        </View>
                        <View style={styles.skillsContainer}>
                            <View style={styles.skill}>
                                <Text style={styles.skillText}>Programador</Text>
                            </View>
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
  }
})