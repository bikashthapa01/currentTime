import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [currentTime,setCurrentTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      const now = new Date();
      document.title = "Current Time is " + now.toLocaleTimeString();
      setCurrentTime(now);
    }, 1000);

    return () => clearInterval(interval);

  },[])
  return (
    <div className="App">
      <p>Your Current Time is:</p>
      <h1><code>{currentTime.toLocaleTimeString()}</code></h1>
    </div>
  );
}

export default App;
