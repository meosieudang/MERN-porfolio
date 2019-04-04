import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Porfolio from "./components/PagePorfolio/Porfolio";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Detail from "./components/PorfolioDetail/Detail";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import Contact from "./components/Contact/Contact";
import CreateProfile from "./components/CreateProfile/CreateProfile";
class App extends Component {
  state = { sidebarOpen: false };

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  render() {
    const Perspective = styled.div`
      height: 100vh;
      perspective: 1200px;
    `;
    return (
      <Router>
        <>
          <Navbar />

          <Route
            render={({ location }) => (
              <Perspective>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={1000}
                    classNames="slide"
                  >
                    <div className="page">
                      <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route
                          exact
                          path="/porfolio"
                          component={({ history, match }) => (
                            <Porfolio history={history} match={match} />
                          )}
                        />
                        <Route
                          path="/porfolio/:id"
                          component={({ match, history }) => (
                            <Detail match={match} history={history} />
                          )}
                        />
                        <Route
                          path="/about"
                          component={({ history }) => (
                            <About history={history} />
                          )}
                        />
                        <Route path="/contact" component={Contact} />
                        <Route path="/create" component={CreateProfile} />
                      </Switch>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </Perspective>
            )}
          />
        </>
      </Router>
    );
  }
}

export default App;
