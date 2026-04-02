import { createContext, useContext, useState } from "react";

// Step 1: Create Context
const ThemeContext = createContext();

// Step 2: Provider Component
function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');

    // Toggle function
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>

            <div
                style={{
                    backgroundColor: theme === 'light' ? '#ffffff' : '#1f2937',
                    color: theme === 'light' ? '#000000' : '#ffffff',
                    padding: "20px",
                    textAlign: "center",
                    minHeight: "100vh"
                }}
            >
                <h2>Theme Switcher using Context API</h2>
                <p>No prop drilling — clean and scalable </p>

                <ThemeToggleChild />
            </div>

        </ThemeContext.Provider>
    );
}

// Step 3: Child Component (Consumer)
function ThemeToggleChild() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === 'light' ? '#1f2937' : '#f9fafb',
                color: theme === 'light' ? '#ffffff' : '#000000',
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px"
            }}
        >
            Switch to {theme === 'light' ? 'Dark' : 'Light'}
        </button>
    );
}

export default ThemeSwitcher;