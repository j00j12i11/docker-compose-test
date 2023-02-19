import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");

  const onClickGet = async () => {
    const response = await fetch('/api/hi');
    const result = await response.json();
    setContent([<li key={result.msg}>{result.msg}</li>]);
  };
  

  let handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = { name, nickname };
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          <p>
            <button onClick={onClickGet}>getContent</button>
          </p>

          <form id="signupForm" onSubmit={handleSubmit}>
            <p>시스템으로 전송할 값을 입력하세요.</p>
            <ul>
              <li>
                <input
                  value={name}
                  type="text"
                  placeholder="이름"
                  onChange={(event) => setName(event.target.value)}
                />
              </li>
              <li>
                <input
                  value={nickname}
                  type="text"
                  placeholder="닉네임"
                  onChange={(event) => setNickname(event.target.value)}
                />
              </li>
            </ul>

            <button type="submit">submit</button>

            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </span>
        <ul>{content}</ul>
        <form></form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
