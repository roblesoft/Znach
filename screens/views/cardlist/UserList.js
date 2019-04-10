import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
import UserDetails from './UserDetails';

class UserList extends Component {
  constructor(props){
    super(props)
    this.state = { users: [] };
    this.path = "http://polar-savannah-83006.herokuapp.com/"
    this.renderUsers.bind(this)

  }

  componentWillMount() {
    axios.get(`${this.path}user_publications/categories/`, {
        params: {categorie: this.props.categorie}
    })
    .then(response => {
        console.log(response.data)
        this.setState({users: response.data})
    })
    .catch(error => {
        console.error(error)
    })
  }
  renderUsers() {
    return this.state.users.map(user => 
      <UserDetails key={user.name} user={user} />
    );
  }
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {this.renderUsers()}
      </ScrollView>
    );
  }
}

export default UserList;