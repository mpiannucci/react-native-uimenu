import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ContextMenu from './ContextMenu';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ContextMenu>
        <View style={{width: 200, height: 200, backgroundColor: 'blue'}} />
      </ContextMenu>
    </SafeAreaView>
  );
}

export default App;