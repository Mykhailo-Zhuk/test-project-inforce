export const fetchJSONData = async () => {
  const fetchJSON = await fetch('http://localhost:3000/products');
  const response = await fetchJSON.json();
  return response;
};
