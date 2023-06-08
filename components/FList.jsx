import {View, Text, FlatList, StyleSheet} from 'react-native';

const COLORS = [
  {colorName: 'Base03', hexCode: '#002b36'},
  {colorName: 'Base02', hexCode: '#073642'},
  {colorName: 'Base01', hexCode: '#586e75'},
  {colorName: 'Base00', hexCode: '#657b83'},
  {colorName: 'Base0', hexCode: '#839496'},
  {colorName: 'Base1', hexCode: '#93a1a1'},
  {colorName: 'Base2', hexCode: '#eee8d5'},
  {colorName: 'Base3', hexCode: '#fdf6e3'},
  {colorName: 'Yellow', hexCode: '#b58900'},
  {colorName: 'Orange', hexCode: '#cb4b16'},
  {colorName: 'Red', hexCode: '#dc322f'},
  {colorName: 'Magenta', hexCode: '#d33682'},
  {colorName: 'Violet', hexCode: '#6c71c4'},
  {colorName: 'Blue', hexCode: '#268bd2'},
  {colorName: 'Cyan', hexCode: '#2aa198'},
  {colorName: 'Green', hexCode: '#859900'},
];

const Item = ({colorName, hexCode}) => (
  <View style={[{backgroundColor: hexCode}, styles.itemContainer]}>
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

function FList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={COLORS}
        renderItem={({item}) => (
          <Item colorName={item.colorName} hexCode={item.hexCode} />
        )}
        keyExtractor={item => item.hexCode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d8f3dc',
    marginBottom: 50,
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

export default FList;
