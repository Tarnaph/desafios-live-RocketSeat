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
      iconType: 'group',
      iconColor: 'blue',
      bagdeColor: 'red',
      qty: '1',
    },
    {
      id: 2,
      title: 'Promotions',
      description: 'Zagat, Google Offers',
      iconType: 'star',
      iconColor: 'red',
      bagdeColor: 'magenta',
      qty: '2',
    },
    {
      id: 3,
      title: 'Updates',
      description: 'Google Play',
      iconType: 'phone',
      iconColor: 'green',
      bagdeColor: 'aqua',
      qty: '1',
    }],
    email: [{
      id: 1,
      title: 'Andy Brown',
      description: 'Bring Your Parents to Work Day! Hey! What do yout thing ...',
      qty: '1',
      time: '1:45 PM',
      iconColor: 'aqua',
      save: true,
      attachment: true,
    },
    {
      id: 2,
      title: 'Keri Anderson',
      description: 'Picture from last Saturday',
      qty: '2',
      time: '3:45 AM',
      iconColor: 'red',
      save: false,
      attachment: false,
    },
    {
      id: 3,
      title: 'Regis, Peter ...',
      description: 'Board game night? Sunday works! If you can get ...',
      qty: '1',
      time: '3:25 PM',
      iconColor: 'yellow',
      save: false,
      attachment: false,
    },
    {
      id: 4,
      title: 'Aruna Knight',
      description: 'Book you recommended',
      qty: '1',
      time: '8:02 AM',
      iconColor: 'green',
      save: true,
      attachment: true,
    },
    {
      id: 5,
      title: 'Raphael Morales',
      description: 'Olá, tudo bom? Quero a caneca!',
      qty: '1',
      time: '6:00 PM',
      iconColor: 'red',
      save: false,
      attachment: true,
    },
    ],
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          { this.state.menuEmail.map(menuEmail =>
            <EmailMenu
              key={menuEmail.id}
              iconType={menuEmail.iconType}
              iconColor={menuEmail.iconColor}
              bagdeColor={menuEmail.bagdeColor}
              menuEmail={menuEmail}
            />)}
          { this.state.email.map(email =>
            <Email
              key={email.id}
              email={email}
              iconColor={email.iconColor}
            />)}
        </ScrollView>
        <NewBottom />
      </View>
    );
  }
}

