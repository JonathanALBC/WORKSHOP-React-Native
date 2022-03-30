//--------------------Hello wordl 1 (fonctionnel)
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>React Native</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    backgroundColor: "blue"
  },
  title: {
    marginTop: 70,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;

//----------------------------hello wordl 2 (fonctionnel)

//import React from "react";
//import { View, Text } from "react-native";
//
//const App = () => {
//  return (
//    <View
//      style={{
//        width: 200,
//        height: 200,
//        backgroundColor: "blue",
//        alignItems: "center",
//        justifyContent:"center",
//      }}
//      >
//        <Text>Hello, World!</Text>
//  </View>
//  );
//
//  
//};
//
//export default App;


//--------------------Button (non fonctionnel)

//import React from 'react';
//import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
//
//const App = () => (
//  <SafeAreaView style={styles.container}>
//    <View>
//      <Text style={styles.title}>
//        The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
//      </Text>
//      <Button
//        title="Press me"
//        onPress={() => Alert.Text('Hello Wolrd')}
//      />
//    </View>
//  </SafeAreaView>
//);
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    marginHorizontal: 16,
//  },
//  title: {
//    textAlign: 'center',
//    marginVertical: 8,
//  },
//  fixToText: {
//    flexDirection: 'row',
//    justifyContent: 'space-between',
//  },
//});
//
//export default App;