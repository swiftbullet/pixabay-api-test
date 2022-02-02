import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

export default async function fetchData(query: string) {
  try {
    const result = await axios.get(
      `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo`
    );
    return result.data.hits;
  } catch (error: any) {
    console.log(error.message);
  }
}
