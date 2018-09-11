import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <html>
        <link rel="stylesheet" type="text/css" href="main.css" />
        <body>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </body>
      </html>
    );
  }
}

export default App;
