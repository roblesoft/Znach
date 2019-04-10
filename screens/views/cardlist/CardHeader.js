import React from 'react';
import { View } from 'react-native';

const CardHeader = (props) => {
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
    flexDirection: 'column',
    position: 'relative',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 10,
  }
};

export default CardHeader;