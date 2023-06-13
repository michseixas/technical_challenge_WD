import axios from "axios";
import { useState, useEffect } from "react";

let baseUrl = 'http://localhost:5005'; 

const PhoneList = (props) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(baseUrl + "/api/phones/")
      .then(({ data }) => {
        setPhones(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePhoneDetail = (phoneId) => {
    props.setPhoneId(phoneId);
  };

  return (
    <>
      <h1>All Phones</h1>

      {loading && (
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading phones...</span>
        </div>
      )}

      <div className="list-group">
        {phones.map((phone) => (
            <button className="list-group-item" type="button"
                    onClick={() => handlePhoneDetail(phone.id)}>
                {phone.name}
            </button>
        ))}
      </div>
    </>
  );
};

export default PhoneList;
