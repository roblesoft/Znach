
import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

export default class Chat extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>

                <Text>{this.props.navigation.state.params.owner_one}</Text>
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
})