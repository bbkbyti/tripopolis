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
        history.push("/places");
    };

    return (
        <div className="bg-black min-h-screen bg-footer-texture ">
            <div className="flex bg-gray-300 ">
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

                    <div  >
                    <input 
                        name="image"
                        value={input.image}
                        placeholder="paste your image url !"
                        onChange={handleChange}
                    />

                    </div>
                    
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
                    <button className="bg-green-400 text-white px-6 py-2 mt-3 ">share</button>

                </form>
            </div>
        </div>
    );
}
