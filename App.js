import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Linking, Alert, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text 
      style={styles.titleText}>
        Intelligent Kettle
      </Text>
      <View style={styles.kettleContainer}>
      <Image style={styles.kettleImage} source={{
        width: 500,
        height: 500,
        uri: "https://image.flaticon.com/icons/png/512/125/125653.png"
      }} />
      </View>
      <Text style={styles.buttonWall}>
      <Button style={styles.functioningButtons} color="#6796e0" title="Turn On" 
      onPress={() => 
      Alert.alert("Hot!","Turn on the kettle?", [
        {text: "Yes", onPress: () => Linking.openURL('http://czajnik.ddns.net/on') },
        {text: "No"},
      ])
      }/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button style={styles.functioningButtons} color="#6796e0" title="Turn OFF" 
      onPress={() => 
      Alert.alert("Freezing!","Turn off the kettle?", [
        {text: "Yes", onPress: () => Linking.openURL('http://czajnik.ddns.net/off') },
        {text: "No"},
      ])
      }/>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafcff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWall: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  functioningButtons: {
    color: "#6796e0",
  },
  titleText: {
    marginTop: 50,
    textAlign: 'center',
    color:'#6796e0',
    fontSize: 60,
  },
  kettleImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  kettleContainer: {
    flex: 1,
    marginLeft: 0,
    width: 200,
    height: 300,
  },
});
