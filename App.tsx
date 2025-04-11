// Import necessary packages
import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';

// Main component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      <WebView
        source={{ uri: 'https://www.mjmdigigold.com/' }}
        style={styles.webview}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />

    </SafeAreaView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;