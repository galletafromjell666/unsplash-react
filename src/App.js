import SearchBox from "./components/SearchBox";
import { store } from "./store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { unsplashAPI } from "./features/apiSlice";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={unsplashAPI}>
      <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <SearchBox />
      </div>
      </ApiProvider>
    </Provider>
  );
}

export default App;
