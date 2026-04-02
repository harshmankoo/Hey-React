import React, { createContext, useReducer, useMemo, useContext } from "react";

// Create Context
const AuthContext = createContext();

// Reducer
// Here states provide us with the data and actions actually tell us what to do 
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isAuth: true };

    case "LOGOUT":
      return { ...state, user: null, isAuth: false };

    case "CHANGE_LANG":
      return { ...state, lang: action.payload };

    default:
      return state;
  }
};

// Main Component
function AdvancedContext() {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuth: false,
    lang: "English",
  });

  // Memoized value
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AuthContext.Provider value={contextValue}>
      <div>
        <h3>Context + useReducer</h3>
        <AuthDashboard />
      </div>
    </AuthContext.Provider>
  );
}

// Child Component
function AuthDashboard() {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <div>
      {state.isAuth ? (
        <>
          <p>
            Logged in as: <strong>{state.user}</strong>
          </p>
          <p>Language preference: {state.lang}</p>

          <div>
            <button onClick={() => dispatch({ type: "CHANGE_LANG", payload: "Hindi" })}>
              Hindi
            </button>

            <button onClick={() => dispatch({ type: "CHANGE_LANG", payload: "Punjabi" })}>
              Punjabi
            </button>

            <button onClick={() => dispatch({ type: "LOGOUT" })}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => dispatch({ type: "LOGIN", payload: "Admin User" })}
        >
          Login to Dashboard
        </button>
      )}
    </div>
  );
}

export default AdvancedContext;