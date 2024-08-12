import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";

import AppRoute from "./routes/Route";
import store from "./store/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <AppRoute />
            </Provider>
        </>
    );
}

export default App;
