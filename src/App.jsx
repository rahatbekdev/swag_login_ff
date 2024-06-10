import  { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Token from "./components/Token";

function App() {
  const [token, setToken] = useState("");

  return (
    <div className="App">
      {!token ? (
        <>
          <Register setToken={setToken} />
          <Login setToken={setToken} />
        </>
      ) : (
        <Token token={token} />
      )}
    </div>
  );
}

export default App;
