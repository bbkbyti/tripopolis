import { useState } from "react";
import axios from "axios";
import { BASE_URL, headers } from "../services";
import { useHistory } from "react-router-dom";

const defaultForm = {
  country: "",
  city: "",
  location: "",
  image: "",
  description: "",
};

export default function NewPlace() {
  const [input, setInput] = useState(defaultForm);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(BASE_URL, { fields: input }, { headers });
    console.log(res)
    history.push("/places");
  };

  return (
    <div className="bg-black min-h-screen bg-footer-texture ">
      <div className="flex bg-gray-300 opacity-75">
        <h3>Share your picture</h3>

        <form onSubmit={handleSubmit}>
          <label>country</label>
          <br />
          <input
            name="country"
            value={input.country}
            placeholder="country"
            onChange={handleChange}
          />
          <br />

          <label>city</label>
          <br />
          <input
            name="city"
            value={input.city}
            placeholder="city"
            onChange={handleChange}
          />
          <br />

          <label>location</label>
          <br />
          <input
            name="location"
            value={input.location}
            placeholder="name of location"
            onChange={handleChange}
          />
          <br />

          <label>image</label>
          <br />
          <input
            name="image"
            value={input.image}
            placeholder="paste your image url !"
            onChange={handleChange}
          />
          <br />

          <label>description</label>
          <br />
          <input
            name="description"
            value={input.description}
            placeholder="about this location"
            onChange={handleChange}
          />
          <br />
          <br />
          <button>share</button>
        </form>
      </div>
    </div>
  );
}
