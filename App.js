/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, WebView, SafeAreaView } from 'react-native';
// import CookieManager from 'react-native-cookies';
import Cookie from 'react-native-cookie';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showWebView: false,
    }
  }

  async componentDidMount() {

    // await CookieManager.clearAll();

    // const set = await CookieManager.set({
    //   name: 'search_self_token_cas',
    //   value: '2.0003f0f3ce96b1967b12594d7c4dfb3280',
    //   domain: '.ke.com',
    //   origin: '.ke.com',
    //   path: '/',
    //   version: '1',
    //   expiration: '2019-05-30T12:30:00.00-05:00'
    // })
    // console.log('CookieManager.set =>', set);

    const result = await Cookie.set(
      'http://ke.com/',
      'search_self_token_cas',
      '2.0003f0f3ce96b1967b12594d7c4dfb3280',
      {
        path: '/',
        domain: '.ke.com'
      }
    )
    console.log(result);

    this.setState({
      showWebView: true,
    })

    const cookie = await Cookie.get('http://ke.com/');
    console.log(cookie)

    // const all = await CookieManager.getAll()
    // console.log('CookieManager.getAll =>', all);

    // const search = await CookieManager.get('http://search.ke.com/CreateApp')
    // console.log(search)

  }
  render() {
    const { showWebView } = this.state;
    if (showWebView) {
      return (
        <SafeAreaView style={styles.container}>
          <WebView
            style={{ flex: 1, }}
            source={{ uri: 'http://search.ke.com/CreateApp' }}
          />
        </SafeAreaView>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
