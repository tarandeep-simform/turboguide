/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

function App(): JSX.Element {
  const [result, setResult] = useState<string>('');
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TextInput
            style={{borderWidth: 1}}
            value={input1}
            onChangeText={text => setInput1(text)}
            placeholder={'Enter first number'}
          />
          <TextInput
            value={input2}
            onChangeText={text => setInput2(text)}
            placeholder={'Enter second number'}
          />
          <Text>Result IS: {result}</Text>
          <Button
            title={'Add'}
            onPress={async () =>
              setResult(
                String(
                  await RTNCalculator?.add(Number(input1), Number(input2)),
                ) || '',
              )
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
