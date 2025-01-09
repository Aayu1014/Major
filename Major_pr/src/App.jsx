import React, { useState } from "react";
import Header from "./components/Header"; // Ensure the path is correct
import Welcome from "./components/Welcome"; // Ensure the path is correct

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Tracks login state

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false on logout
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          {/* Pass the handleLogout function to Header */}
          <Header onLogout={handleLogout} />
          {/* Add other components if necessary */}
        </>
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default App;
