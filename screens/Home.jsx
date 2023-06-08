import { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import PalettePreview from '../components/PalettePreview';

const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

function Home({ navigation, route }) {
  const newColorPalette = route.params ? route.params.newPalette : undefined;
  const [colorPalettes, setColorPalettes] = useState('');
  const [isRefresh, setIsRefresh] = useState(false);

  const getColorPalettes = useCallback(async () => {
    const res = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const palettes = await res.json();
    if (res.ok) {
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    getColorPalettes();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((colorPalettes) => [newColorPalette, ...colorPalettes]);
    }
  }, [newColorPalette]);

  const handleRefresh = useCallback(async () => {
    setIsRefresh(true);
    await getColorPalettes();
    setTimeout(() => {
      setIsRefresh(false);
    }, 1000);
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ColorPaletteModal')}
      >
        <Text style={styles.modal}>Add Your New Color Palette.</Text>
      </TouchableOpacity>
      <FlatList
        data={colorPalettes ? colorPalettes : COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => navigation.navigate('ColorPalette', item)}
            colorPalette={item}
          />
        )}
        onRefresh={handleRefresh}
        refreshing={isRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 2,
    borderColor: 'black',
  },
  navigationText: {
    fontSize: 18,
    padding: 10,
    color: 'red',
  },
  modal: {
    padding: 10,
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
  },
});

export default Home;
