import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  async function refresh() {
    window.location.reload();
  }

  React.useEffect(() => {
    let url =
      "https://www.googleapis.com/youtube/v3/" +
      "playlistItems?part=snippet,contentDetails,status" +
      "&playlistId=" + '8787878787' +
      "&key=123" +
      "&maxResults=100";
    // 第一次Fetch
    fetch(url, { method: 'get' })
      .then(function (response) {
        return response.json();
      }).then((jsonData) => {

      }).catch(function (err) {
        console.log(err);
      })
    setInterval(function () { refresh() }, 600000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          每10分鐘刷新一次頁面
        </p>
      </header>
    </div>
  );
}

export default App;
