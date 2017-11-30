import React, { Component } from 'react';
import './config/ReactotronConfig';
import { View, ScrollView } from 'react-native';
import Header from 'components/Header';
import Email from 'components/Email';
import EmailMenu from 'components/EmailMenu';
import NewBottom from 'components/Buttom';
import { geral } from 'styles';

export default class index extends Component {
  state= {
    menuEmail: [{
      id: 1,
      title: 'Social',
      description: 'Google+',
      qty: '1',
    },
    {
      id: 2,
      title: 'Promotions',
      description: 'Zagat, Google Offers',
      qty: '2',
    },
    {
      id: 3,
      title: 'Updates',
      description: 'Google Play',
      qty: '1',
    }],
    email: [{
      id: 1,
      title: 'Andy Brown',
      description: 'Bring Your Parents to Work Day! Hey! What do yout thing ...',
      qty: '1',
      time: '1:45 PM',
    },
    {
      id: 2,
      title: 'Keri Anderson',
      description: 'Picture from last Saturday',
      qty: '2',
    },
    {
      id: 3,
      title: 'Regis, Peter, Rache 3',
      description: 'Board game night? Sunday works! If you can get ...',
      qty: '1',
      time: '3:25 PM',
    },
    {
      id: 4,
      title: 'Aruna Knight',
      description: 'Book you recommended',
      qty: '1',
      time: '8:02 AM',
    },
    {
      id: 5,
      title: 'Raphael Morales',
      description: 'Olá, tudo bom? Quero a caneca!',
      qty: '1',
      time: '6:00 PM',
    },
    ],
  };
  render() {
    return (
      <View>
        <ScrollView>
          <Header />
          { this.state.menuEmail.map(menuEmail => <EmailMenu  key={menuEmail.id}  menuEmail={menuEmail}/> )}
          { this.state.email.map(email => <Email  key={email.id}  email={email}/> )}
        </ScrollView>
        <NewBottom />
      </View>
    );
  }
}

