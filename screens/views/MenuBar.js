import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView , TouchableHighlight} from 'react-native';


export default class MenuBar extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        menuStyle = StyleSheet.create({
            menu: {
                flex: .1,
                flexDirection: 'row',
                backgroundColor: '#fff65D',
                height: 60,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10

            },
            iconButton: {
                marginRight: 20,
                flex: .2,
                paddingTop: 13,
                paddingLeft: 13

            },
            icon: {
                width: 33,
                height: 33
            }
        })
        return(
                <View style={menuStyle.menu}>
                       <View style={menuStyle.iconButton}

                          onPress={() => this.props.navigation.navigate('Meat')}
                          >
                        <TouchableHighlight 
                            
                        >
                        <Image
                        style={menuStyle.icon}
                        source={require('../../assets/profile.png')}
                        /> 
                        </TouchableHighlight>
                    </View>
                    <View style={menuStyle.iconButton}>
                        <Image
                        style={menuStyle.icon}
                        source={require('../../assets/notifications.png')}
                        onPress={() => this.props.navigation.navigate('Profile')}
                        /> 
                    </View>
                    <View style={menuStyle.iconButton}>
                        <Image
                        style={menuStyle.icon}
                        source={require('../../assets/add.png')}
                        /> 
                    </View>
                    <View style={menuStyle.iconButton}>
                        <Image
                        style={menuStyle.icon}
                        source={require('../../assets/messages.png')}
                        /> 
                    </View>
                    <View style={menuStyle.iconButton}>
                        <Image
                        style={menuStyle.icon}
                        source={require('../../assets/meat.png')}
                        onPress={() => this.props.navigation.navigate('Profile')}
                        /> 
                    </View>
                </View>
        );
    }
}

