import { useState } from "react";

// Protected Route
function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) return <h3>❌ Please login first</h3>;
  return children;
}

// Blog
function Blog() {
  const [postId, setPostId] = useState(null);

  return (
    <div>
      <h2>Blog</h2>
      <button onClick={() => setPostId(null)}>Home</button>
      <button onClick={() => setPostId(1)}>Post 1</button>
      <button onClick={() => setPostId(2)}>Post 2</button>

      {postId ? <h3>Post {postId}</h3> : <p>Welcome</p>}
    </div>
  );
}

// Filter
function Filter() {
  const [filter, setFilter] = useState("All");

  const items = [
    { name: "iPhone", category: "Electronics" },
    { name: "Mug", category: "Home" },
  ];

  const result =
    filter === "All"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <div>
      <h2>Filter</h2>

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>
      <button onClick={() => setFilter("Home")}>Home</button>

      {result.map((item) => (
        <p key={item.name}>
          {item.name} - {item.category}
        </p>
      ))}
    </div>
  );
}

// MAIN COMPONENT
export default function RoutingTutorial() {
  const [page, setPage] = useState("home");
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <h1>Routing Demo</h1>

      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("blog")}>Blog</button>
      <button onClick={() => setPage("admin")}>Admin</button>
      <button onClick={() => setPage("filter")}>Filter</button>

      <hr />

      {page === "home" && <h2>Home Page</h2>}
      {page === "blog" && <Blog />}
      {page === "filter" && <Filter />}

      {page === "admin" && (
        <>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Logout" : "Login"}
          </button>

          <ProtectedRoute isAuth={isLogin}>
            <h2>Admin Panel</h2>
          </ProtectedRoute>
        </>
      )}
    </div>
  );
}