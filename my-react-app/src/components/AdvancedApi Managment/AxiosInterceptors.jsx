import { useState } from "react";

const MockAxiosWrapper = {
  get: async (url) => {
    console.log(`[Request Interceptor] Adding Auth Token to ${url}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { id: 1, status: "Connected", latency: "24ms" } });
      }, 800);
    });
  }
};

function ApiClientDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await MockAxiosWrapper.get('/api/v1/status');
    setData(response.data);
    setLoading(false);
  };

  return (
    <div>
      <h3>Day 36-37: Axios & Interceptors</h3>

      <div>
        <strong>Interceptors:</strong> Use them to globally handle 401 Unauthorized errors or attach JWT tokens to every header.
      </div>

      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Intercepting...' : 'Fetch with Mock Axios'}
      </button>

      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default ApiClientDemo;