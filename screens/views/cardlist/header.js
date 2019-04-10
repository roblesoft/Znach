import  React from 'react';
import { Image, Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, thumbnailsubiconsStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#8d0fbb',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 80,
    paddingTop: 20,
    elevation: 2,
    position: 'relative',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    fontSize: 25,
    color: '#f3edf5',
    fontFamily: 'Major Mono Display',
    letterSpacing: -0.18,
    fontWeight: 'bold',
  },
  thumbnailsubiconsStyle: {
  height: 30,
  width: 30, 
  marginLeft: 20,
  marginRight: 100,
  paddingTop: 20,
  },
};

export default Header;