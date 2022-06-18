/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// main branch
import React from 'react';
import { Text, View ,ActivityIndicator} from 'react-native';
import RootNav from '../components/RootNav';
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import { NativeBaseProvider ,Box } from 'native-base';

//develop
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { }

  componentWillUnmount() { }


  renderLoading = () => {
    <View style={{ flex: 1 }}>
      <ActivityIndicator size="large" />
    </View>
  }


  render() {
    return (
      <NativeBaseProvider>
      <Provider store={store}>
       <PersistGate persistor={persistor} loading={this.renderLoading()}>
       <View style={{flex:1}}>
       <RootNav/>
       </View>
       </PersistGate>
       </Provider>
       </NativeBaseProvider>
    )
  }
}

export default App




