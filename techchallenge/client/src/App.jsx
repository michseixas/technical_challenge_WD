import "./App.css";
import PhoneList from "./components/PhoneList";
import PhoneDetails from "./components/PhoneDetails";
import { useState, useEffect } from "react";

function App() {
  const [phoneId, setPhoneId] = useState([]);

  return (
    <div className="App">
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <PhoneList phoneId={phoneId} setPhoneId={setPhoneId}/>
          </div>
          <div class="col">
            <PhoneDetails phoneId={phoneId} setPhoneId={setPhoneId}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
