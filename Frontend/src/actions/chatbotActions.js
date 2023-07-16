import axios from 'axios';

export const sendMessage = (message) => async (dispatch) => {
  try {
    console.log(message);
    const res = await axios.post('http://192.168.22.238:4000/api/v1/chatbot', { message });
    console.log(res.data.response);
    dispatch({
      type: 'SEND_MESSAGE',
      payload: res.data.response,
    });
    console.log("after dispatching send message");
  } catch (error) {
    console.error('Error:', error);
    // Handle error if needed
  }
};
