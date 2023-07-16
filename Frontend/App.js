
import store from "./src/store" 
import { Provider } from "react-redux";
import NavigationWrapper from "./NavigationWrapper";




function App() {

  return (
<Provider store={store}>    
    <NavigationWrapper/>
    </Provider>
  );
}


export default App;
  