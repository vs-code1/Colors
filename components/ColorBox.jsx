import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = ({colorName, hexCode}) => {
  const boxColor = {backgroundColor: hexCode};
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>
        {colorName} - {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
