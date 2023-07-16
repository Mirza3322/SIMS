import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../src/actions/chatbotActions';

const ChatbotComponent = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const chatbotResponse = useSelector((state) => state.chatbot.response);
  const [chatHistory, setChatHistory] = useState([]);

  const handleMessageSend = () => {
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { message, isUser: true },
    ]);

    dispatch(sendMessage(message));

    setMessage('');
  };

  useEffect(() => {
    if (chatbotResponse) {
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { message: chatbotResponse.response, isUser: false },
      ]);
    }
  }, [chatbotResponse]);

  const renderChatItem = ({ item }) => {
    const containerStyle = {
      alignSelf: item.isUser ? 'flex-end' : 'flex-start',
      backgroundColor: item.isUser ? '#DCF8C6' : '#F0F0F0',
      padding: 10,
      borderRadius: 8,
      marginVertical: 5,
      marginHorizontal: 10,
    };

    const textStyle = {
      color: item.isUser ? 'black' : 'black',
      fontSize: 16,
    };

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>{item.message}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <FlatList
        data={chatHistory}
        renderItem={renderChatItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ flexGrow: 1, paddingVertical: 10 }}
        inverted // To display the latest messages at the top
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: 'white',
        }}
      >
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderColor: '#E0E0E0',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 10,
            marginRight: 10,
            backgroundColor: 'white',
          }}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={handleMessageSend} />
      </View>
    </View>
  );
};

export default ChatbotComponent;
