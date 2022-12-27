//import Results from "./components/Results";
import { store } from "./store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { unsplashAPI } from "./features/apiSlice";
import UnsplashSearch from "./features/UnsplashSearch";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={unsplashAPI}>
      <div className="App w-full min-h-screen max-h-fit bg-gradient-custom bg-no-repeat bg-cover bg-center pb-12">
        <UnsplashSearch/>
      </div>
      </ApiProvider>
    </Provider>
  );
}

export default App;
