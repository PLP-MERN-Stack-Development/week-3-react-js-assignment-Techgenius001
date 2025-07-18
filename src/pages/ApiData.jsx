import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API_URL}?_limit=10&_page=${page}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">API Data</h2>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {filtered.map((item) => (
          <li key={item.id} className="py-2">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-4">
        <Button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="self-center">Page {page}</span>
        <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
      </div>
    </Card>
  );
};

export default ApiData;
