import React from 'react';
import { Text, View, Image, FlatList, AsyncStorage } from 'react-native';
import Card from './Card';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardButton from './CardButton';
import ButtonDeal from './ButtonDeal';
import ButtonCancel from './ButtonCancel';
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from'axios'




const UserDetails = ({ user }) => {
	const { name, specialty, age, city, skills, id } = user;
	console.log(skills)
  const {
	userData,
	cardContent,
	userContainerStyle,
	thumbnailsubiconsStyle,
    thumbnailuserStyle,
    headerContentStyle,
	thumbnailuserContainerStyle,
    thumbnailContainerStyle,
		headerTextStyle,
		skill
	} = styles;
   _retrieveData = async () => {
        try{
            const user_id = await AsyncStorage.getItem('user_id')
            const user_name = await AsyncStorage.getItem('user_name')
            if(user_name !== null){
                //console.log(user_name)
                //console.log(`${user_id} id usuario`)
                return user_id
            }
        }catch(error){
            console.error(error)
        }
    }
    async function sendInvitation(invited_id){
       const user_id = await _retrieveData()
        const path = "http://polar-savannah-83006.herokuapp.com/"
        axios.post(path + 'invitations/', {
            invitation: {
                host_id: user_id, 
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


return (
	<Card>
		<View style={cardContent}>
			<CardHeader>
				<View style={thumbnailuserContainerStyle}>
					<Image
					style={thumbnailuserStyle}
					source={require('../../../assets/default-avatar.png') }
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{name}</Text>
					<Text style={userData}>{specialty}</Text>
				</View>
				</CardHeader>
				<View style={userContainerStyle}>

					<CardContent>
						<View style={thumbnailContainerStyle}>
							<Ionicons name={"ios-calendar"} size={14}/>
						</View>
						<View>
							<Text>{age} años</Text>
						</View> 
					</CardContent>

					<FlatList
						data={skills}
						style={{height: 70}}
						renderItem={({item}) =>
							<CardContent>
								<View style={thumbnailContainerStyle}>
								</View>
								<View style={styles.skill}>
									<Text style={{color: 'white'}}>{item.name}</Text>
								</View> 
							</CardContent>
						}
					/>

					<CardContent>
						<View style={thumbnailContainerStyle}>
							<Ionicons name={"ios-pin"} size={14}/>
						</View>
						<View >
							<Text >{city}</Text>
						</View> 
				</CardContent>
			</View>
		</View>
		<CardButton>

			<ButtonDeal onPress={() => sendInvitation(id)} />
		</CardButton>
	</Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
		marginBottom: 10,
		marginTop: 10
  },
  headerTextStyle: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'white'
  },
  thumbnailuserStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  thumbnailsubiconsStyle: {
    height: 30,
    width: 30
  },
  thumbnailuserContainerStyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailContainerStyle: {
	flexDirection: 'column',
    marginLeft: 20,
    marginRight: 15,
    marginBottom: 10,
  },
  userData: {
    fontSize: 18,
		justifyContent: 'space-around',
		color: 'white'
  },
  userContainerStyle: {
	marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  cardContent: {
	marginLeft: 5,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 25,
	backgroundColor: '#c86ce9',
	},
	skill: {
		backgroundColor: '#00ADB5',
		paddingHorizontal: 5,
		borderRadius: 10
	}
};

export default UserDetails;
