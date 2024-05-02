import React from 'react';
import type {Node} from 'react';
import {
    Button,
    Text,
    useColorScheme,
    View,
    Alert
  } from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

const CleverTap = require('clevertap-react-native');
CleverTap.onUserLogin({'Name': 'Kushagra', 
'Identity': '12', 
'Email' : 'ab2@react.com',
'MSG-push':true,
'MSG-email':true,
'MSG-sms':true,
'MSG-whatsapp':true});
CleverTap.setDebugLevel(3);

export default function App() {
  // Function to be called when the button is clicked
  const handlePress = () => {
    Alert.alert('Button Clicked!');
    

    var props = {
        'Name': 'Shubham', 
'Identity': '1wq2', 
'Email' : 'ab2sasassaas@react.com',
'MSG-push':true,
'MSG-email':true,
'MSG-sms':true,
'MSG-whatsapp':true
}

CleverTap.profileSet(props)

var chargeDetails = { 'totalValue': 20, 
                      'category': 'books', 
                      'purchase_date': new Date()
                    }
var items = [
{ 'title': 'book1', 'published_date': new Date('2010-12-12T06:35:31'), 'author': 'ABC' },
{ 'title': 'book2', 'published_date': new Date('2020-12-12T06:35:31'), 'author': 'DEF'},
{ 'title': 'book3', 'published_date': new Date('2000-12-12T06:35:31'), 'author': 'XYZ' }]

CleverTap.recordChargedEvent(chargeDetails, items);


  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Click now!" onPress={handlePress} />
    </View>
  );
}