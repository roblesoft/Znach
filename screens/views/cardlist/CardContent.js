import React from 'react';
import { View } from 'react-native';

const CardContent = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    marginLeft: 5,
    marginRight: 5,
  }
};

export default CardContent;