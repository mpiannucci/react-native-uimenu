import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import ContextMenu from './ContextMenu';

const App = () => {
  const [color, setColor] = useState('blue');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ContextMenu title={color + ' Box'} onPress={() => {
        setColor('red');
      }}>
        <View style={{width: 200, height: 200, backgroundColor: color}} />
      </ContextMenu>
    </SafeAreaView>
  );
}

export default App;