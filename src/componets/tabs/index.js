import React from 'react';
import { Container, TabsContainer, TabItem, TabText } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Tabs() {
    return (
        <Container>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={14} color="#fff" />
                    <TabText>Indicar Amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={14} color="#fff" />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={14} color="#fff" />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={14} color="#fff" />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={14} color="#fff" />
                    <TabText>Bloquear contato</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}