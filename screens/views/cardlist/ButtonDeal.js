import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const ButtonDeal = ({ onPress }) => {
	const {
	buttoniconsStyle,
	buttonContainerStyle,
  } = styles;
  return (
	<TouchableOpacity onPress={onPress} style={buttonContainerStyle}>
		<View>
      <Ionicons name={'ios-checkmark-circle'} size={50} color={'#00ADB5'}/>
		</View>	
	</TouchableOpacity>			
  );
};

const styles = {
  buttoniconsStyle: {
    height: 70,
    width: 70,
    borderWidth: 1,
	borderColor: '#2ad873',
    borderRadius: 50,
  },
	buttonContainerStyle: {
	flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flex: 1,
  },
};

export default ButtonDeal;