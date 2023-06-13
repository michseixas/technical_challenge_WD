import axios from "axios";
import { useState, useEffect } from "react";


let baseUrl = 'http://localhost:5005'; 

const PhoneDetails = (props) => {
  const [phone, setPhone] = useState({});
  const [loading, setLoading] = useState(true);
//   const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(baseUrl + "/api/phones/" + props.phoneId)
      .then(({ data }) => {
        setPhone(data);
        setTimeout(() => {
          setLoading(false);
        //   setCount((count) => count + 1);
        }, 600);
      })
      .catch((err) => console.log(err));
  }, [props.phoneId]);
  //The list of phones was charging only once at the mounting phase, so I had to remove it to work.
  //props.phoneId is what render in the mounting phase, when clicked.
  return (
    <>
      <h1>This is Phone Details</h1>

      {loading && (
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading phones...</span>
        </div>
      )}

      <h2>{ props.phoneId }</h2>
      {phone.name}
      {phone.manufacturer} 
      {phone.description}
      {phone.color}
      {phone.price} 
      {phone.imageFileName} 
      {phone.screen}
      {phone.processor} 
      {phone.ram}
    </>
  );
};

export default PhoneDetails;
