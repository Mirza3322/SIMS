/*const initialState = {
    response: null,
  };*/
  
  const chatbotReducer = (state={chatbot:{}}, action) => {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return {
          ...state,
          response: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default chatbotReducer;
  