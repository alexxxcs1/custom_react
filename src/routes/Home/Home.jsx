import React, { Component } from 'react'
import {Route,Switch  } from 'react-router-dom';
import style from './Home.scss'

import ProgressBanner from 'components/ProgressBanner'
import HellworldBox from 'components/HellworldBox'
import HomeChildFirst from 'routes/HomeChildFirst';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageonload:false,
    };
  }
  componentDidMount()
  {
      this.setState({
        pageonload:true,
      }) 
      console.log(this.props);
      
  }
  render() {
    return (
      <div className={style.Box}>
        <ProgressBanner loaded={this.state.pageonload} color='#333'/>
        <HellworldBox />
        <Switch>
          <Route path='/Home/firstchild' exact component={HomeChildFirst} /> 
        </Switch>
      </div>
    )
  }
}

export default Home
