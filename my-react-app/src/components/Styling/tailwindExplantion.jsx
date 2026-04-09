function TailwindExplanation() {
  return (
    <div>
      <h3>Tailwind</h3>

      {/* Display code snippets inside text */}
      <code>
        {`<div className="flex flex-col md:flex-row gap-4">`}
      </code>

      <div>
        <code>
          {`className="bg-white dark:bg-slate-800 text-black dark:text-white"`}
        </code>
      </div>
    </div>
  );
}

export default TailwindExplanation;