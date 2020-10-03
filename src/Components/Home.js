import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div class="container">
        <h1>Home</h1>
        <div class="container card">
          <p>Follow below steps to create the project</p>
          <ol>
            <li>create project with npx create-react-app react-route-app</li>
            <li>cd react-route-app</li>
            <li>npm install react-router-dom –save</li>
            <li>delete all the files inside "src" folder of your project</li>
            <li>
              copy "Components folder, App.js, index.js" files to your "src"
              folder.
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Home;
