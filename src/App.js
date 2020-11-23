import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import HomePage from "./HomePage";
import EmployeesPage from "./EmployeesPage";
import store from "./redux/store";
import { Provider } from "react-redux";
import HttpServices from "./services";
import { setEmloyees } from "./redux/actions";

class App extends React.Component {
  componentDidMount() {
    const htt = new HttpServices();
    htt.getAllEmployees().then((emp) => {
      store.dispatch(setEmloyees(emp));
    })
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/">
                <EmployeesPage />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
