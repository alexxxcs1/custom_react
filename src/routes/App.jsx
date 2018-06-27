import React, { Component } from 'react';
import { HashRouter,Route,Switch  } from 'react-router-dom';
// import style from  './App.scss';

import Home from 'routes/Home'
import NotFound from 'routes/NotFound'

import AnimateBackground from 'components/AnimateBackground'

class App extends Component {
  render() {
    return (
      <div >
        <HashRouter >
          <div>
            <Switch>
              
                {/* 首页 */}
                <Route path='/' exact component={Home} > 
                  {/* <Route path="/login" component={Login}/> */}
                </Route>
                {/* 404页面 */}
                <Route component={NotFound}/> 
              
            </Switch>
          </div>
        </HashRouter>
        <AnimateBackground />
      </div>
    );
  }
}

export default App;
