/*
* File: App.js
* Author: Németh Ottó
* Copyright: 2024, Németh Ottó
* Group: Szoft I/2-E
* Date: 2024-04-05
* Github: https://github.com/ottoburg17/
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { lekerTanulok } from './services/tanuloService';

export default function App() {
   
  const [tanulok, beallitTanulok] = useState([]);

  useEffect(() =>{
     lekerTanulok().then(data => {
       console.log(data)
       beallitTanulok(data)
     });
  }, []);


  return (
    <View style={styles.container}>
      <Text>Üdvözlöm</Text>
      <Text>A tanulók nevei</Text>

      <FlatList
      data={tanulok}
      renderItem={ ({item}) => (
        <View style={styles.tanuloLista}>
          <Text>{item.name}</Text>

          <View style={styles.footer}>
            <Text style={styles.cityText}>{item.city}</Text>
            <Text style={styles.birthText}>{item.birth}</Text>
          </View>

        </View>
      )}
      />
           
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tanuloLista: {
    border: 'solid 2px blue',
    borderRadius: 8,
    padding: 5,
    margin: 5,
    backgroundColor: 'gold',
  },
  cityText: {
    fontSize: 10,
    marginEnd: 5,
  },
  birthText: {
    fontSize: 10,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
