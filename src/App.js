import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const changeValue = (e) => {
    e.preventDefault();
    return setEmail(e.target.value);
  };
  return (
    <form>
      <label htmlFor="email-input">Email adresi</label>
      <input
        id="email-input"
        type="email"
        value={email}
        onChange={changeValue}
      />
    </form>
  );
}

export default App;
