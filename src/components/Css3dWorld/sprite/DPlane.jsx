import React, { Component } from 'react'
import Plane from './Plane';

export class DPlane extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          type:'default'
      };
      this.refreshState_type = this.refreshState_type.bind(this);
      this.createPlane = this.createPlane.bind(this);
  }
  componentDidMount()
  {
    this.refreshState_type(this.props)
  }
  refreshState_type(prop)
  {
    console.log(prop.type);
      
    this.setState({
        type:prop.type?prop.type:'default',
    });
  }
  createPlane()
  {
      switch (this.state.type) {
          case 'default':
              return <Plane />
          case 'front':
              return <Plane />
          case 'bottom':
              return <Plane style={{transform:'translateX(-50%) translateY(-50%) rotateX(90deg)'}}/>

          default:
              return <Plane />
      }
  }
  render() {
    return (
      <div>
          {this.createPlane()}
      </div>
    )
  }
}

export default DPlane
