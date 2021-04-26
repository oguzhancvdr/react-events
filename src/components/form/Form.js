import { useState } from "react";
import {setInput} from '../../helper/inputHelper'
import "./styles.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  // const handleName = (e) => setName(e.target.value);
  // const handleEmail = (e) => setEmail(e.target.value);
  // const handlePassword = (e) => setPassword(e.target.value);
  // const handleCountry = (e) => setCountry(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    userName: ${name}
    email: ${email}
    password: ${password}
    country: ${country};    
    `);
    setName("");
    setEmail("");
    setPassword("");
    setCountry("");
  };
  // const setInput = (setter) => (e) => setter(e.target.value);

  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p>{name}</p>
          <label>
            <strong>Username:</strong>{" "}
          </label>
          <br />
          <input
            value={name}
            type="text"
            placeholder="name"
            onChange={setInput(setName)}
          />
        </div>
        <div>
          <p>{email}</p>
          <label>
            <strong>E-mail:</strong>{" "}
          </label>
          <br />
          <input
            value={email}
            type="email"
            placeholder="email"
            onChange={setInput(setEmail)}
          />
        </div>
        <div>
          <p>{password}</p>
          <label>
            <strong>Password: </strong>
          </label>
          <br />
          <input
            value={password}
            type="password"
            placeholder="pass"
            onChange={setInput(setPassword)}
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p>{country}</p>
          <label>
            <strong>Country: </strong>
          </label>
          <select
            value={country}
            onChange={setInput(setCountry)}
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
