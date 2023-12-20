import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import NavBar from './component/Navbar';
import News from './component/News';

export default class App extends Component {
  pageSize = 15;
  apiKey= process.env.REACT_APP_NEWS_API
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="/general" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
