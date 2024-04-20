import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/main";
import "./styles/_Global.sass";
import { store } from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Provider>
);
