import React, {useState} from 'react'
import axios from "axios";
import { BASE_URL, headers } from "../services";
import { useHistory } from "react-router-dom";

function Devicelibrary() {
    const history= useHistory()
    const [ file , setFile] = useState(null)
    console.log(file)

    const handleChange =(e) => {
        const imageUrl =  URL.createObjectURL(e.target.files[0])
setFile(imageUrl)
    }

    const handleSubmit= async(e) =>{
            e.preventDefault();
            // eslint-disable-next-line
            const res = await axios.post(BASE_URL, { fields: file }, { headers });
            history.push("/places");
        
    }

  



    return (
        <div>
            <input 
            type='file'
            onChange={(e)=>handleChange(e)}
            />

<button onClick={(e)=> handleSubmit(e)}> Upload</button>


            <img src={file}  alt='' />
        </div>
    )
}

export default Devicelibrary
