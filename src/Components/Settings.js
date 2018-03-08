import React, { Component } from "react";
import Filter from './Filter';

const Setting = props => {
  return (
    <div className="Setting">
      <label>
        <div>{props.name}</div>
        <div>{props.value}</div>
      </label>
      <input
        min={props.min}
        max={props.max}
        step="1"
        onChange={props.onChange}
        id={props.name}
        type="range"
        value={props.value}
      />
    </div>
  );
};

const Image = ( props ) => {
  return (
      <div className="Image" style={{backgroundImage: 'url(' + props.image + ')'}}></div>
  )
}


class Settings extends Component {
  constructor() {
    super();
    this.state = {
      contrast: 100,
      hue: 0,
      brightness: 100,
      saturate: 100,
      sepia: 0
    };
  }

  handleChange = e => {
    let filter = e.target.id;
    let value = e.target.value;
    this.setState((prevState, props) => {
      prevState[filter] = value;
      return prevState;
    });
  };

  

  updateSettings = (nextFilterState)=>{
    this.setState(nextFilterState);
  }

  render() {
    return (
      <div className="Settings">
        <div className="MainWrapper">
          <div className="Sidebar">
            <div className="Title">Reactagram v1.0</div>
            <Setting name="contrast"   min={0} max={200} value={this.state.contrast} onChange={this.handleChange}></Setting>
            <Setting name="hue"        min={-360} max={360} value={this.state.hue} onChange={this.handleChange}></Setting>
            <Setting name="brightness" min={0} max={200} value={this.state.brightness} onChange={this.handleChange}></Setting>
            <Setting name="saturate"   min={0} max={100} value={this.state.saturate} onChange={this.handleChange}></Setting>
            <Setting name="sepia"      min={0} max={100} value={this.state.sepia} onChange={this.handleChange}></Setting>
          </div>
          <div className="ImageContainer">
            <Filter key="Default" filterFunctions={this.state}><Image image={this.props.image}/></Filter>          
          </div>  
      </div>
       <div className="FilterList">
            <Filter key="Noir" filterFunctions={{'contrast':138,'hue':0,'brightness':122,'saturate':0,'sepia':0}} onClick={this.updateSettings}><Image image={this.props.image}/></Filter>
            <Filter key="Aged" filterFunctions={{'contrast':94,'hue':-54,'brightness':92,'saturate':100,'sepia':44}} onClick={this.updateSettings}><Image image={this.props.image}/></Filter>
            <Filter key="Whiteout" filterFunctions={{'contrast':32,'hue':0,'brightness':173,'saturate':0,'sepia':0}} onClick={this.updateSettings}><Image image={this.props.image}/></Filter>
            <Filter key="Vintage" filterFunctions={{'contrast':164,'hue':0,'brightness':47,'saturate':0,'sepia':100}} onClick={this.updateSettings}><Image image={this.props.image}/></Filter>
        </div>
      </div>
    );
  }
}

export default Settings;
