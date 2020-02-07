import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import ContextMenu from './ContextMenu';

const App = () => {
  const [color, setColor] = useState('blue');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ContextMenu title={'Set Color'} actions={[
        {
          title: 'blue',
          systemIcon: color == 'blue' ? 'paintbrush.fill' : 'paintbrush',
        },
        {
          title: 'red',
          systemIcon: color == 'red' ? 'paintbrush.fill' : 'paintbrush'
        }
      ]} onPress={(event) => {
        setColor(event.nativeEvent.name);
      }} onCancel={() => {console.warn('CANCELLED')}} >
        <View style={{width: 200, height: 200, backgroundColor: color}} />
      </ContextMenu>
    </SafeAreaView>
  );
}

export default App;