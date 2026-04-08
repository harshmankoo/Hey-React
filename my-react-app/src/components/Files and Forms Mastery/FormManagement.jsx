// Advanced Forms & File Management Masterclass
// Topics: React Hook Form, Zod Validation, File Uploads, and Dynamic Field Arrays

import { useState, useRef, useEffect } from 'react';



// ============================================
// WHY FORM LIBRARIES?
// ============================================

/* THE PROBLEM WITH NATIVE STATE:
- Re-renders the whole form on every keystroke.
- Validation logic becomes a "spaghetti" of if/else statements.
- Handling 20+ fields manually is error-prone.

THE SOLUTION: REACT HOOK FORM (RHF)
- Uncontrolled components = High performance (no re-renders on type).
- Built-in validation schema support (Zod/Yup).
- Easy integration with UI libraries (MUI, Tailwind, etc.).


*/


// ============================================
// 2️ RHF & SCHEMA VALIDATION
// ============================================

/* ZOD / YUP: 
These are "Schema Validation" libraries. Instead of writing 50 if-statements, 
you define a "Schema" (a blueprint) of what the data should look like.

Example Zod Schema:
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18)
});
*/

function RegistrationForm() {
  const [submittedData, setSubmittedData] = useState(null);

  // Simulated 'useForm' logic for demonstration
  const handleSimulatedSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setSubmittedData(data);
  };

  return (
    <div style={styles.example}>
      <h3>✅ Day 31-32: Professional Form Handling</h3>
      <div style={styles.infoBox}>
        <strong>Note for Interns:</strong> In a real project, use <code>npm install react-hook-form zod</code>.
      </div>

      <form onSubmit={handleSimulatedSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name (Required)</label>
          <input name="fullname" placeholder="John Doe" style={styles.input} required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email (Pattern Validation)</label>
          <input type="email" name="email" placeholder="email@vidyacorp.com" style={styles.input} required />
        </div>

        <button type="submit" style={styles.button}>Submit Registration</button>
      </form>

      {submittedData && (
        <div style={styles.successBox}>
          <h4>Form Data Captured:</h4>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}


// ============================================
// 3️FILE UPLOADS & PREVIEWS
// ============================================

/* FILE HANDLING BASICS:
1. Access file via `e.target.files[0]`.
2. Generate preview via `URL.createObjectURL(file)`.
3. Clear memory using `URL.revokeObjectURL()` to prevent leaks.
*/

function ImageUploadDemo() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file!");
    }
  };

  return (
    <div style={styles.example}>
      <h3>✅ Day 33-34: File Uploads & Drag-and-Drop</h3>
      
      <div 
        style={{
          ...styles.dropZone,
          borderColor: isDragging ? '#3b82f6' : '#ccc',
          backgroundColor: isDragging ? '#eff6ff' : '#fafafa'
        }}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFile(e.dataTransfer.files[0]);
        }}
      >
        {selectedImage ? (
          <img src={selectedImage} alt="Preview" style={styles.previewImage} />
        ) : (
          <p>Drag & Drop an image here or click to upload</p>
        )}
        <input 
          type="file" 
          accept="image/*" 
          onChange={(e) => handleFile(e.target.files[0])}
          style={styles.fileInput}
        />
      </div>
      
      {selectedImage && (
        <button onClick={() => setSelectedImage(null)} style={styles.buttonSecondary}>
          Remove Image
        </button>
      )}
    </div>
  );
}


// ============================================
// DYNAMIC FIELD ARRAYS
// ============================================

/* DYNAMIC FIELDS:
Used when the user needs to add multiple items (e.g., "List your previous jobs" 
or "Add multiple skills"). In RHF, we use the `useFieldArray` hook.
*/

function DynamicJobForm() {
  const [skills, setSkills] = useState(['React', 'Node.js']);

  const addSkill = () => setSkills([...skills, '']);
  const removeSkill = (index) => setSkills(skills.filter((_, i) => i !== index));
  const updateSkill = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  return (
    <div style={styles.example}>
      <h3>✅ Day 35: Dynamic Fields (Field Arrays)</h3>
      <p>Add your technical skills:</p>
      
      {skills.map((skill, index) => (
        <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input 
            value={skill} 
            onChange={(e) => updateSkill(index, e.target.value)} 
            style={styles.input}
            placeholder="e.g. JavaScript"
          />
          <button onClick={() => removeSkill(index)} style={styles.removeBtn}>×</button>
        </div>
      ))}

      <button onClick={addSkill} style={styles.navButton}>+ Add Skill</button>
    </div>
  );
}


// ============================================
// MAIN TUTORIAL WRAPPER
// ============================================

export default function AdvancedFormsTutorial() {
  const [tab, setTab] = useState('forms');

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Forms & Files Mastery (Days 31–35)</h1>
        <p style={styles.subtitle}>Vidya Corporation Training Module</p>
      </header>
      
      <div style={styles.navigation}>
        <button onClick={() => setTab('forms')} style={styles.tab(tab === 'forms')}>Registration (RHF)</button>
        <button onClick={() => setTab('files')} style={styles.tab(tab === 'files')}>File Uploads</button>
        <button onClick={() => setTab('dynamic')} style={styles.tab(tab === 'dynamic')}>Dynamic Fields</button>
      </div>

      <div style={styles.content}>
        {tab === 'forms' && <RegistrationForm />}
        {tab === 'files' && <ImageUploadDemo />}
        {tab === 'dynamic' && <DynamicJobForm />}
      </div>

      <footer style={styles.recommendationBox}>
        💡 <strong>Intern Challenge:</strong> Try to implement "Form Persistence" 
        using <code>localStorage</code> so the data remains even after a page refresh.
      </footer>
    </div>
  );
}

// ============================================
// STYLES OBJECT
// ============================================

const styles = {
  app: { maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Inter, system-ui, sans-serif', color: '#1f2937' },
  header: { textAlign: 'center', marginBottom: '30px' },
  mainTitle: { fontSize: '2rem', marginBottom: '5px' },
  subtitle: { color: '#6b7280', fontSize: '1rem' },
  navigation: { display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '25px' },
  tab: (active) => ({
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    backgroundColor: active ? '#2563eb' : '#e5e7eb',
    color: active ? 'white' : '#4b5563',
    transition: '0.2s'
  }),
  content: { backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
  example: { marginBottom: '30px' },
  infoBox: { backgroundColor: '#eff6ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #3b82f6', marginBottom: '20px', fontSize: '0.9rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  formGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: { fontWeight: '600', fontSize: '0.9rem' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' },
  button: { padding: '12px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  buttonSecondary: { marginTop: '10px', padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  navButton: { padding: '8px 16px', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '6px', cursor: 'pointer' },
  removeBtn: { backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '4px', padding: '0 12px', cursor: 'pointer', fontSize: '1.2rem' },
  successBox: { marginTop: '20px', padding: '15px', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0', color: '#166534' },
  dropZone: {
    border: '2px dashed #ccc',
    borderRadius: '12px',
    padding: '40px',
    textAlign: 'center',
    position: 'relative',
    cursor: 'pointer',
    transition: '0.3s'
  },
  previewImage: { maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' },
  fileInput: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' },
  recommendationBox: { marginTop: '40px', padding: '20px', backgroundColor: '#fffbeb', borderRadius: '12px', border: '1px solid #fde68a', textAlign: 'center' }
};