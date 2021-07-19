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
        // eslint-disable-next-line
        const res = await axios.post(BASE_URL, { fields: input }, { headers });
        history.push("/places");
    };

    return (
        <div className="min-h-screen bg-gray-400 shadow-2xl  px-10 pt-10 pb-10 mb-4 font-mono">

            <div className="flex justify-center font-bold uppercase">
                <h3>Share your picture</h3>
            </div>
            <div className="flex justify-center bg-gray-300 rounded-lg mt-14 px-6 py-8 shadow-2xl">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="font-bold uppercase">country</label>
                        <br />
                        <input
                            name="country"
                            value={input.country}
                            placeholder="country"
                            onChange={handleChange}
                        />
                        <br />
                        <label className="font-bold uppercase">city</label>
                        <br />
                        <input
                            name="city"
                            value={input.city}
                            placeholder="city"
                            onChange={handleChange}
                        />
                        <br />
                        <label className="font-bold uppercase">location</label>
                        <br />
                        <input
                            name="location"
                            value={input.location}
                            placeholder="name of location"
                            onChange={handleChange}
                        />
                        <br />
                        <label className="font-bold uppercase">image</label>
                        <br />

                        <div  >
                            <input
                                name="image"
                                value={input.image}
                                placeholder="paste your image url !"
                                onChange={handleChange}
                            />
                        </div>
                        <label className="font-bold uppercase">description</label>
                        <br />
                        <input
                            className='description'
                            name="description"
                            value={input.description}
                            placeholder="about this location"
                            onChange={handleChange} />

                    </div>

                    <br />
                    <button className="bg-green-400 hover:bg-gray-400  text-white text-xs  px-6 py-2 mt-6 mb-3 ">share</button>

                </form>
            </div>

        </div>




    );
}
