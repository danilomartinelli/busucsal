import React, {Fragment} from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Routes} from '../../routes';

export function App() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
