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
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    marginTop: 5,
    marginBottom: 10,
  }
};

export default CardHeader;