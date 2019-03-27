import React from 'react'

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class AddBotton extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => this.props.navigation.navigate('NuevaPublicacion')}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
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
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: '200'
    },
    block: {
        height: 20,
        backgroundColor: 'blue'

    }
})