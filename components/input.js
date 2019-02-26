import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

export default class Input extends React.component{
    contructor(props){
        super(props)
        this.text = ''
    }
    render(){
        return(
            <TextInput style={styles.input}/>
        );
    }
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    width: 280,
    height: 50,
    borderRadius: 100,
    marginBottom: 20
  }
})