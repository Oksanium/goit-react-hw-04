import axios from "axios";

export default async function getPhotos(q, p, perPage) {
  const BASE_URL = "https://pixabay.com/api/?";
  const params = {
    key: "44040237-e4cc253c6c6f225197cba954d",
    q: q,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: perPage,
    page: p,
  };
  return axios.get(BASE_URL, { params });
}
