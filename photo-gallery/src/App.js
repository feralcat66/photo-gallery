import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './ImageTag.js';
import images from './data.js';
import Header from './Header.js';
import request from 'superagent'
import Select from './Select.js';



class App extends Component {
  state = {
    data: null,
   }
  // async componentDidMount() {
  //   const data = await request.get('http://www.nokeynoshade.party/api/queens')
  //   this.setState({data: data.body})
  // }
state = { selected: null };
  render() { 
    const imageNode = images.filter(image => {
      if (!this.state.selected) return true; 
      
      return image.keyword === this.state.selected;
    })
    .map(rex => <Container image={rex} />);
    const handleChange = e => {
      this.setState({selected: e.target.value});
    };
  
    
 
  return (

    
    <main>
      {JSON.stringify(this.state.data)}
      <Header />
      <Select handleChangeCallback={handleChange}/>
  
    <ul className="image">{imageNode}</ul>
    
  </main>
    );
  }}
  
export default App;
