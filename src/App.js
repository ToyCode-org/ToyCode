import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
