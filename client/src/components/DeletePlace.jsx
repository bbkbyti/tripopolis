import axios from "axios";
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/tripopolis`

const config = {
  headers: {
    Authorization: `Bearer ${AIRTABLE_KEY}`,
  },
};

export const DeletePlace = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/${id}`, config);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
