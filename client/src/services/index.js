export const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
export const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
export const UPLOAD_BASE = process.env.REACT_APP_UPLOAD 
export const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/tripopolis`
export const UPLOAD = `https://api.airtable.com/v0/${UPLOAD_BASE}/favorites`
export const headers = {Authorization: `Bearer ${AIRTABLE_KEY}`};

