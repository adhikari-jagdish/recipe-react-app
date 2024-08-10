import { useEffect, useState } from "react";

export default function Search() {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "7e5dfdfce2e14ce393bb93d3dba49134";

  const [query, setQuery] = useState("pizza");

  ///useEffect Hook is used in cases where the ui and data should be changed according to remote data

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
