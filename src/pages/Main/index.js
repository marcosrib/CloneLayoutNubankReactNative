import React from 'react';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardFooter,
  Title,
  Description,
  Annotation,
  CardContent
} from './style';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Header from '~/componets/header'
import Tabs from '~/componets/tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '~/componets/menu';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );
  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;
      if (translationY > 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      })

    }
  }
  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              }),
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={20} color="#666" />
              <Icon name="person-add" size={20} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponivel</Title>
              <Description>R$ 197.615,99</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 20,00
            </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs />
    </Container>
  );
}


