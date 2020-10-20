import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  async function refresh() {
    window.location.reload();
  }

  React.useEffect(() => {
    let url = "www.google.com";
    fetch(url, { method: 'get' })
      .then(function (response) {
        return response.json();
      }).catch(function (err) {
        console.log(err);
      })
    setInterval(function(){ refresh() }, 600000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         防窺片是三小
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          @@@@@@@@@@@@@@
        </a>
      </header>
    </div>
  );
}

export default App;
