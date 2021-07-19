export const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
export const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
export const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/tripopolis`
export const headers = {Authorization: `Bearer ${AIRTABLE_KEY}`};
export const UPLOAD = `https://api.airtable.com/v0/${process.env.REACT_APP_UPLOAD}/Table%201`