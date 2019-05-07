import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
import MenuBar from './MenuBar'

export default class Publish extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <View styles={styles.container}>
                <View style={styles.screenContainer}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Text style={styles.titleHeader}>Notificaciones</Text>
                        </View>
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
        height: 130,
        paddingLeft: 10,
        backgroundColor: '#f5f5f5',
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray'
    }
    
})