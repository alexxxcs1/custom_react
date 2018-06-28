import React, { Component } from 'react'

export class Plane extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
        style : {
            width:'200px',
            height:'300px',
            background:'#fff',
        }
    }; 
  }
  componentDidMount()
  {
      var custom_props  =JSON.parse(JSON.stringify(this.props.style?this.props.style:''));
      var custom_state = JSON.parse(JSON.stringify(this.state.style));
      var style = Object.assign(custom_state,custom_props);
      console.log(this.props.style);
      
      this.setState({
        style:style
      })
  }
  render() {
    return (
      <div style={this.state.style}>
        
      </div>
    )
  }
}

export default Plane
