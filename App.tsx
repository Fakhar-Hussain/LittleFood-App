import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import Main from './Components/Main'

import {Store , Persistor} from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Main/>
      </PersistGate>
    </Provider>
  )
}

export default App;