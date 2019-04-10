import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const ButtonCancel = ({ onPress }) => {
	const {
	buttoniconsStyle,
	buttonContainerStyle,
  } = styles;
  return (
	<TouchableOpacity onPress={onPress} style={buttonContainerStyle}>
		<View>
		</View>	
	</TouchableOpacity>			
  );
};

const styles = {
  buttoniconsStyle: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: '#de413c',
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

export default ButtonCancel;