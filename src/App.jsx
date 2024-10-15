import { useState, useEffect } from "react";

import "./App.css";

// - Mount/Birth
// - Update/Life
// - Unmount/Death

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <LogoutButton setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginButton setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

const LoginButton = ({ setIsLoggedIn }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  console.log("Outside of LoginButton Component");
  // Mount/Birth
  useEffect(() => {
    // Write the statememts that you want to run when the component mounts
    //alert("Login Component Mounted");
    console.log("LoginButton Component Mounted");
  }, []);

  // Update/Life is dependent on count state
  useEffect(() => {
    // Write the statememts that you want to run when the component mounts
    //alert("Login Component Mounted");
    console.log("LoginButton Component Rendered due to update count state");
  }, [count]);

  // Update/Life is dependent on count1 state
  useEffect(() => {
    // Write the statememts that you want to run when the component mounts
    //alert("Login Component Mounted");
    console.log("LoginButton Component Rendered due to update count1 state");
  }, [count1]);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount1(count1 + 1)}>Increase Count1</button>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </>
  );
};

const LogoutButton = ({ setIsLoggedIn }) => {
  console.log("Outside of LogoutButton Component");
  // Mount/Birth
  useEffect(() => {
    // Write the statememts that you want to run when the component mounts
    //alert("Logout Component Mounted");
    console.log("LogoutButton Component Mounted");
  }, []);
  return <button onClick={() => setIsLoggedIn(false)}>Logout</button>;
};

export default App;
