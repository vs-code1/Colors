import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function PalettePreview({ handlePress, colorPalette }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.paletteText}> {colorPalette.paletteName} </Text>
      <FlatList
        style={[styles.boxList]}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <View style={[{ backgroundColor: item.hexCode }, styles.box]}></View>
        )}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 2,
    borderColor: 'black',
  },
  paletteText: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  boxList: {
    flexDirection: 'row',
  },
  box: {
    margin: 5,
    height: 30,
    width: 30,
  },
});

export default PalettePreview;
