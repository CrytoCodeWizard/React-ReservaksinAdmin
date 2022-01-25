// import './App.css';
import Router from "./Routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Config/Redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
      {/* <div> */}

      {/* </div> */}
    </>
  );
}

export default App;
