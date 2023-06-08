import { View, Text, FlatList, StyleSheet } from 'react-native';

const Item = ({ colorName, hexCode }) => (
  <View style={[{ backgroundColor: hexCode }, styles.itemContainer]}>
    <Text
      style={[
        styles.textContainer,
        {
          color:
            parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
              ? 'black'
              : 'white',
        },
      ]}
    >
      {' '}
      {colorName} - {hexCode}{' '}
    </Text>
  </View>
);

function ColorPalette({ route }) {
  const { colors, paleteName } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <Item colorName={item.colorName} hexCode={item.hexCode} />
        )}
        keyExtractor={(item) => item.hexCode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // marginBottom: 50,
  },
  itemContainer: {
    padding: 15,
    margin: 8,
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 18,
  },
});

export default ColorPalette;
