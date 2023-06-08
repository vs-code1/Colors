import {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Statusbar,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {id: 1, title: 'Dog'},
  {id: 2, title: 'Cat'},
  {id: 3, title: 'Rat'},
  {id: 4, title: 'Loin'},
  {id: 5, title: 'Frog'},
  {id: 6, title: 'Duck'},
  {id: 7, title: 'Racoon'},
  {id: 8, title: 'Bear'},
  {id: 9, title: 'Camileon'},
  {id: 10, title: 'Polar Bear'},
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

function TouchAbleFList() {
  const [selectdId, setSelectedId] = useState('');

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectdId ? '#0d3b66' : '#faf0ca';
    const color = item.id === selectdId ? '#faf0ca' : '#0d3b66';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColot={color}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extractData={selectdId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    alignItems: 'center',
    fontSize: 34,
  },
});

export default TouchAbleFList;
