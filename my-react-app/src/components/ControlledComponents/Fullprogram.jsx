// Controlled vs Uncontrolled Components 
// Topics: Form handling patterns, React Hook Form, Complex form with validation


import { useState, useRef } from 'react';

/* ============================================
   📚 TABLE OF CONTENTS:
   
   1. Controlled vs Uncontrolled - Core Difference
   2. Example 1: Controlled Components
   3. Example 2: Uncontrolled Components
   4. Example 3: React Hook Form Basics
   5. PROJECT: Complex Registration Form
   
   ============================================ */


// ============================================
// 1️⃣ CONTROLLED VS UNCONTROLLED - CORE DIFFERENCE
// ============================================

/* 
CONTROLLED COMPONENTS:
- React state controls the input value
- Value stored in state: value={state}
- Updates via onChange: onChange={(e) => setState(e.target.value)}
- React is the "single source of truth"

UNCONTROLLED COMPONENTS:
- DOM controls the input value (like vanilla HTML)
- Access value using ref: inputRef.current.value
- No state needed for input values
- DOM is the "single source of truth"

WHEN TO USE:
✅ Controlled: Form validation, conditional fields, live feedback
✅ Uncontrolled: Simple forms, file inputs, non-React integrations

COMPARISON:
┌─────────────────┬──────────────┬────────────────┐
│ Feature         │ Controlled   │ Uncontrolled   │
├─────────────────┼──────────────┼────────────────┤
│ State           │ React state  │ DOM state      │
│ Access value    │ state        │ ref.current    │
│ Validation      │ Real-time    │ On submit      │
│ Re-renders      │ On every key │ Minimal        │
│ Complexity      │ More code    │ Less code      │
└─────────────────┴──────────────┴────────────────┘
*/


// ============================================
// 2️⃣ EXAMPLE 1: CONTROLLED COMPONENTS
// ============================================

function ControlledForm() {
  // State for each input - React controls the value
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    subscribe: false,
    gender: '',
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  // Validate form
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    
    return newErrors;
  };
  
  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setSubmitted(formData);
    console.log('Submitted:', formData);
  };
  
  return (
    <div style={styles.example}>
      <h3>✅ Controlled Components</h3>
      
      <div style={styles.infoBox}>
        <strong>Key Point:</strong> React state controls input values. 
        Every keystroke updates state → triggers re-render.
      </div>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        
        {/* Text Input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your name"
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>
        
        {/* Email Input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            placeholder="your@email.com"
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>
        
        {/* Password Input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            placeholder="Min 6 characters"
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}
          <small style={styles.hint}>Current length: {formData.password.length}</small>
        </div>
        
        {/* Select Dropdown */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Country *</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Select country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
          </select>
          {errors.country && <span style={styles.error}>{errors.country}</span>}
        </div>
        
        {/* Radio Buttons */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Gender *</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
          {errors.gender && <span style={styles.error}>{errors.gender}</span>}
        </div>
        
        {/* Checkbox */}
        <div style={styles.formGroup}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            Subscribe to newsletter
          </label>
        </div>
        
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      
      {submitted && (
        <div style={styles.successBox}>
          <h4>✅ Form Submitted!</h4>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
      
      <div style={styles.explanation}>
        💡 <strong>Controlled Component Pattern:</strong><br/>
        1. Store values in state: <code>useState</code><br/>
        2. Set value prop: <code>value={'{state}'}</code><br/>
        3. Handle changes: <code>onChange={'{handleChange}'}</code><br/>
        4. Validate in real-time<br/>
        <br/>
        <strong>Pros:</strong> Real-time validation, conditional logic, full control<br/>
        <strong>Cons:</strong> More code, re-renders on every keystroke
      </div>
    </div>
  );
}


// ============================================
// 3️⃣ EXAMPLE 2: UNCONTROLLED COMPONENTS
// ============================================

function UncontrolledForm() {
  // Refs to access DOM values - no state for input values!
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const countryRef = useRef(null);
  const subscribeRef = useRef(null);
  const genderRefs = useRef({});
  
  const [submitted, setSubmitted] = useState(null);
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get values from DOM directly
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      country: countryRef.current.value,
      subscribe: subscribeRef.current.checked,
      gender: Object.keys(genderRefs.current).find(
        key => genderRefs.current[key]?.checked
      ) || ''
    };
    
    // Validate
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setSubmitted(formData);
    setErrors({});
    
    // Reset form
    e.target.reset();
  };
  
  return (
    <div style={styles.example}>
      <h3>✅ Uncontrolled Components</h3>
      
      <div style={styles.infoBox}>
        <strong>Key Point:</strong> DOM controls input values. 
        Access values using refs only when needed (on submit).
      </div>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Name *</label>
          <input
            ref={nameRef}
            type="text"
            defaultValue=""
            style={styles.input}
            placeholder="Enter your name"
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Email *</label>
          <input
            ref={emailRef}
            type="email"
            defaultValue=""
            style={styles.input}
            placeholder="your@email.com"
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Password *</label>
          <input
            ref={passwordRef}
            type="password"
            defaultValue=""
            style={styles.input}
            placeholder="Min 6 characters"
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Country *</label>
          <select ref={countryRef} style={styles.select}>
            <option value="">Select country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
          </select>
          {errors.country && <span style={styles.error}>{errors.country}</span>}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Gender *</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                ref={el => genderRefs.current['male'] = el}
                type="radio"
                name="gender"
                value="male"
              />
              Male
            </label>
            <label style={styles.radioLabel}>
              <input
                ref={el => genderRefs.current['female'] = el}
                type="radio"
                name="gender"
                value="female"
              />
              Female
            </label>
            <label style={styles.radioLabel}>
              <input
                ref={el => genderRefs.current['other'] = el}
                type="radio"
                name="gender"
                value="other"
              />
              Other
            </label>
          </div>
          {errors.gender && <span style={styles.error}>{errors.gender}</span>}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.checkboxLabel}>
            <input
              ref={subscribeRef}
              type="checkbox"
            />
            Subscribe to newsletter
          </label>
        </div>
        
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      
      {submitted && (
        <div style={styles.successBox}>
          <h4>✅ Form Submitted!</h4>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
      
      <div style={styles.explanation}>
        💡 <strong>Uncontrolled Component Pattern:</strong><br/>
        1. Use refs: <code>useRef(null)</code><br/>
        2. Attach ref: <code>ref={'{nameRef}'}</code><br/>
        3. Use defaultValue (not value)<br/>
        4. Access on submit: <code>ref.current.value</code><br/>
        <br/>
        <strong>Pros:</strong> Less code, better performance, simpler<br/>
        <strong>Cons:</strong> No real-time validation, less control
      </div>
    </div>
  );
}


// ============================================
// 4️⃣ EXAMPLE 3: REACT HOOK FORM BASICS
// ============================================

/* 
React Hook Form is a library that makes form handling easier:
- Less re-renders (uses uncontrolled approach)
- Built-in validation
- Easy error handling
- Less boilerplate code

Installation: npm install react-hook-form

Note: This example shows the API without actually installing the library.
In real use, you'd import: import { useForm } from 'react-hook-form';
*/

function ReactHookFormExample() {
  // Simulate React Hook Form API
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  
  // Simulated register function
  const register = (name, rules = {}) => ({
    name,
    onChange: (e) => {
      setFormData(prev => ({ ...prev, [name]: e.target.value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    },
    ref: () => {}
  });
  
  // Simulated handleSubmit
  const handleSubmit = (onValid) => (e) => {
    e.preventDefault();
    
    // Validate
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age < 18) {
      newErrors.age = 'Must be 18 or older';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      onValid(formData);
    }
  };
  
  const onSubmit = (data) => {
    setSubmitted(data);
    console.log('Form data:', data);
  };
  
  return (
    <div style={styles.example}>
      <h3>✅ React Hook Form Pattern</h3>
      
      <div style={styles.infoBox}>
        <strong>React Hook Form:</strong> Less code, better performance, 
        built-in validation. Best of both worlds!
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Name *</label>
          <input
            {...register('name', { required: true })}
            style={styles.input}
            placeholder="Your name"
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Email *</label>
          <input
            {...register('email', { 
              required: true,
              pattern: /\S+@\S+\.\S+/
            })}
            style={styles.input}
            placeholder="your@email.com"
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Age *</label>
          <input
            type="number"
            {...register('age', { 
              required: true,
              min: 18
            })}
            style={styles.input}
            placeholder="Must be 18+"
          />
          {errors.age && <span style={styles.error}>{errors.age}</span>}
        </div>
        
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      
      {submitted && (
        <div style={styles.successBox}>
          <h4>✅ Submitted!</h4>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
      
      <div style={styles.explanation}>
        💡 <strong>React Hook Form API:</strong><br/>
        <br/>
        <code>const {'{register, handleSubmit, formState}'} = useForm();</code><br/>
        <br/>
        • <strong>register:</strong> Connects input to form<br/>
        • <strong>handleSubmit:</strong> Validation + submission<br/>
        • <strong>formState.errors:</strong> Validation errors<br/>
        <br/>
        <strong>Validation rules:</strong><br/>
        • required, min, max, minLength, maxLength<br/>
        • pattern (regex), validate (custom function)
      </div>
      
      <div style={styles.codeBox}>
        <h4>Real React Hook Form Code:</h4>
        <pre style={styles.code}>{`import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /\\S+@\\S+\\.\\S+/,
            message: 'Invalid email'
          }
        })} 
      />
      {errors.email && <p>{errors.email.message}</p>}
      
      <button type="submit">Submit</button>
    </form>
  );
}`}</pre>
      </div>
    </div>
  );
}


// ============================================
// 5️⃣ PROJECT: COMPLEX REGISTRATION FORM
// ============================================

function ComplexRegistrationForm() {
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    
    // Account Info
    username: '',
    password: '',
    confirmPassword: '',
    
    // Address
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'india',
    
    // Preferences
    interests: [],
    newsletter: false,
    terms: false,
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'interests') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(i => i !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    // Clear error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone must be 10 digits';
      }
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    }
    
    if (step === 2) {
      if (!formData.username.trim()) {
        newErrors.username = 'Username is required';
      } else if (formData.username.length < 4) {
        newErrors.username = 'Username must be at least 4 characters';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    if (step === 3) {
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = 'ZIP code is required';
      } else if (!/^\d{6}$/.test(formData.zipCode)) {
        newErrors.zipCode = 'ZIP code must be 6 digits';
      }
    }
    
    if (step === 4) {
      if (!formData.terms) newErrors.terms = 'You must accept the terms';
    }
    
    return newErrors;
  };
  
  const handleNext = () => {
    const newErrors = validateStep(currentStep);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setCurrentStep(currentStep + 1);
  };
  
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateStep(4);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setSubmitted(true);
    console.log('Registration complete:', formData);
  };
  
  if (submitted) {
    return (
      <div style={styles.example}>
        <div style={styles.successPage}>
          <div style={styles.successIcon}>✅</div>
          <h2>Registration Successful!</h2>
          <p>Welcome, <strong>{formData.firstName} {formData.lastName}</strong>!</p>
          <div style={styles.summaryBox}>
            <h4>Account Summary:</h4>
            <p><strong>Username:</strong> {formData.username}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Location:</strong> {formData.city}, {formData.state}</p>
            <p><strong>Interests:</strong> {formData.interests.join(', ') || 'None'}</p>
          </div>
          <button 
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(1);
              setFormData({
                firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '',
                username: '', password: '', confirmPassword: '',
                address: '', city: '', state: '', zipCode: '', country: 'india',
                interests: [], newsletter: false, terms: false,
              });
            }}
            style={styles.button}
          >
            Register Another User
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div style={styles.example}>
      <h3>🎯 PROJECT: Complex Registration Form</h3>
      
      <div style={styles.projectInfo}>
        <strong>Features:</strong> Multi-step form, validation, various input types
      </div>
      
      {/* Progress Indicator */}
      <div style={styles.progressBar}>
        {[1, 2, 3, 4].map(step => (
          <div
            key={step}
            style={{
              ...styles.progressStep,
              ...(step <= currentStep ? styles.progressStepActive : {})
            }}
          >
            {step}
          </div>
        ))}
      </div>
      
      <div style={styles.stepLabels}>
        <span>Personal</span>
        <span>Account</span>
        <span>Address</span>
        <span>Review</span>
      </div>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        
        {/* STEP 1: Personal Information */}
        {currentStep === 1 && (
          <div style={styles.formStep}>
            <h4>Personal Information</h4>
            
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>First Name *</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="John"
                />
                {errors.firstName && <span style={styles.error}>{errors.firstName}</span>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Last Name *</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Doe"
                />
                {errors.lastName && <span style={styles.error}>{errors.lastName}</span>}
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="john@example.com"
              />
              {errors.email && <span style={styles.error}>{errors.email}</span>}
            </div>
            
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone (10 digits) *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="9876543210"
                  maxLength={10}
                />
                {errors.phone && <span style={styles.error}>{errors.phone}</span>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Date of Birth *</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  style={styles.input}
                />
                {errors.dateOfBirth && <span style={styles.error}>{errors.dateOfBirth}</span>}
              </div>
            </div>
          </div>
        )}
        
        {/* STEP 2: Account Information */}
        {currentStep === 2 && (
          <div style={styles.formStep}>
            <h4>Account Information</h4>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Username (min 4 chars) *</label>
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={styles.input}
                placeholder="johndoe"
              />
              {errors.username && <span style={styles.error}>{errors.username}</span>}
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Password (min 8 chars) *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                placeholder="••••••••"
              />
              {errors.password && <span style={styles.error}>{errors.password}</span>}
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={styles.input}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <span style={styles.error}>{errors.confirmPassword}</span>}
            </div>
          </div>
        )}
        
        {/* STEP 3: Address */}
        {currentStep === 3 && (
          <div style={styles.formStep}>
            <h4>Address Information</h4>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Street Address *</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                style={styles.input}
                placeholder="123 Main Street"
              />
              {errors.address && <span style={styles.error}>{errors.address}</span>}
            </div>
            
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>City *</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Mohali"
                />
                {errors.city && <span style={styles.error}>{errors.city}</span>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>State *</label>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Punjab"
                />
                {errors.state && <span style={styles.error}>{errors.state}</span>}
              </div>
            </div>
            
            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>ZIP Code (6 digits) *</label>
                <input
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="140301"
                  maxLength={6}
                />
                {errors.zipCode && <span style={styles.error}>{errors.zipCode}</span>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        {/* STEP 4: Preferences & Review */}
        {currentStep === 4 && (
          <div style={styles.formStep}>
            <h4>Preferences & Review</h4>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Interests (Select all that apply)</label>
              <div style={styles.checkboxGroup}>
                {['Technology', 'Sports', 'Music', 'Travel', 'Reading'].map(interest => (
                  <label key={interest} style={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest.toLowerCase()}
                      checked={formData.interests.includes(interest.toLowerCase())}
                      onChange={handleChange}
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
                Subscribe to newsletter
              </label>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                I accept the Terms and Conditions *
              </label>
              {errors.terms && <span style={styles.error}>{errors.terms}</span>}
            </div>
            
            <div style={styles.reviewBox}>
              <h4>Review Your Information</h4>
              <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Username:</strong> {formData.username}</p>
              <p><strong>Location:</strong> {formData.city}, {formData.state} {formData.zipCode}</p>
            </div>
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div style={styles.buttonRow}>
          {currentStep > 1 && (
            <button type="button" onClick={handleBack} style={styles.buttonSecondary}>
              ← Back
            </button>
          )}
          
          {currentStep < 4 ? (
            <button type="button" onClick={handleNext} style={styles.button}>
              Next →
            </button>
          ) : (
            <button type="submit" style={styles.buttonSuccess}>
              Complete Registration
            </button>
          )}
        </div>
      </form>
      
      <div style={styles.explanation}>
        💡 <strong>Complex Form Features:</strong><br/>
        ✅ Multi-step wizard (4 steps)<br/>
        ✅ Various input types (text, email, password, date, tel, select, checkbox)<br/>
        ✅ Step-by-step validation<br/>
        ✅ Progress indicator<br/>
        ✅ Review before submit<br/>
        ✅ Success page
      </div>
    </div>
  );
}


// ============================================
// MAIN APP
// ============================================

function FormsCompleteTutorial() {
  const [activeTab, setActiveTab] = useState('intro');
  
  const tabs = [
    { id: 'intro', label: 'Introduction', component: IntroSection },
    { id: 'controlled', label: 'Controlled', component: ControlledForm },
    { id: 'uncontrolled', label: 'Uncontrolled', component: UncontrolledForm },
    { id: 'rhf', label: 'React Hook Form', component: ReactHookFormExample },
    { id: 'project', label: '🎯 Project', component: ComplexRegistrationForm },
  ];
  
  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;
  
  return (
    <div style={styles.app}>
      <h1 style={styles.mainTitle}>Form Handling - Complete Guide</h1>
      
      <div style={styles.navigation}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...styles.navButton,
              backgroundColor: activeTab === tab.id ? '#3b82f6' : '#e5e7eb',
              color: activeTab === tab.id ? 'white' : '#1f2937',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div style={styles.content}>
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div style={styles.intro}>
      <h2>Controlled vs Uncontrolled Components 📝</h2>
      
      <div style={styles.comparisonTable}>
        <div style={styles.comparisonHeader}>
          <div></div>
          <div><strong>Controlled</strong></div>
          <div><strong>Uncontrolled</strong></div>
        </div>
        
        <div style={styles.comparisonRow}>
          <div><strong>Value Source</strong></div>
          <div>React state</div>
          <div>DOM</div>
        </div>
        
        <div style={styles.comparisonRow}>
          <div><strong>Access Value</strong></div>
          <div>From state</div>
          <div>Using ref</div>
        </div>
        
        <div style={styles.comparisonRow}>
          <div><strong>Update Value</strong></div>
          <div>onChange handler</div>
          <div>Direct DOM update</div>
        </div>
        
        <div style={styles.comparisonRow}>
          <div><strong>Validation</strong></div>
          <div>Real-time</div>
          <div>On submit</div>
        </div>
        
        <div style={styles.comparisonRow}>
          <div><strong>Code Amount</strong></div>
          <div>More</div>
          <div>Less</div>
        </div>
        
        <div style={styles.comparisonRow}>
          <div><strong>Re-renders</strong></div>
          <div>Every keystroke</div>
          <div>Minimal</div>
        </div>
        
        <div style={styles.comparisonRow}>
          <div><strong>Best For</strong></div>
          <div>Complex forms, validation</div>
          <div>Simple forms, file inputs</div>
        </div>
      </div>
      
      <div style={styles.section}>
        <h3>Quick Decision Guide:</h3>
        
        <div style={styles.decisionBox}>
          <h4>Use Controlled When:</h4>
          <ul>
            <li>✅ Need real-time validation</li>
            <li>✅ Conditional form fields</li>
            <li>✅ Live character count</li>
            <li>✅ Complex interdependent fields</li>
            <li>✅ Need to disable submit based on values</li>
          </ul>
        </div>
        
        <div style={styles.decisionBox}>
          <h4>Use Uncontrolled When:</h4>
          <ul>
            <li>✅ Simple forms (login, contact)</li>
            <li>✅ File inputs (must be uncontrolled)</li>
            <li>✅ Performance is critical</li>
            <li>✅ Integrating non-React code</li>
            <li>✅ Form libraries handle it (React Hook Form)</li>
          </ul>
        </div>
      </div>
      
      <div style={styles.recommendationBox}>
        <h3>💡 Recommendation</h3>
        <p>
          For most forms, use <strong>React Hook Form</strong>. It combines the 
          best of both approaches: uses uncontrolled internally (performance) but 
          provides a controlled-like API (easy validation).
        </p>
      </div>
    </div>
  );
}

// Styles
const styles = {
  app: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
  },
  mainTitle: {
    textAlign: 'center',
    color: '#1f2937',
    marginBottom: '30px',
  },
  navigation: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  navButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'all 0.3s',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  intro: {
    lineHeight: '1.8',
  },
  comparisonTable: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '1px',
    backgroundColor: '#e5e7eb',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '30px',
  },
  comparisonHeader: {
    display: 'contents',
  },
  comparisonRow: {
    display: 'contents',
  },
  comparisonTable: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    marginBottom: '30px',
  },
  comparisonHeader: {
    display: 'contents',
  },
  comparisonRow: {
    display: 'contents',
  },
  section: {
    marginBottom: '30px',
  },
  decisionBox: {
    backgroundColor: '#f0f9ff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  recommendationBox: {
    backgroundColor: '#fef3c7',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid #f59e0b',
  },
  example: {
    padding: '20px',
  },
  infoBox: {
    backgroundColor: '#dbeafe',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  form: {
    backgroundColor: '#f9fafb',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #e5e7eb',
    borderRadius: '6px',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #e5e7eb',
    borderRadius: '6px',
  },
  error: {
    color: '#ef4444',
    fontSize: '14px',
    display: 'block',
    marginTop: '5px',
  },
  hint: {
    color: '#6b7280',
    fontSize: '13px',
    display: 'block',
    marginTop: '5px',
  },
  radioGroup: {
    display: 'flex',
    gap: '15px',
    marginTop: '5px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '5px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  buttonSecondary: {
    padding: '12px 24px',
    backgroundColor: '#6b7280',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  buttonSuccess: {
    padding: '12px 24px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  successBox: {
    backgroundColor: '#d1fae5',
    padding: '20px',
    borderRadius: '8px',
    border: '2px solid #10b981',
  },
  explanation: {
    backgroundColor: '#fef3c7',
    padding: '20px',
    borderRadius: '8px',
    lineHeight: '1.8',
  },
  codeBox: {
    marginTop: '20px',
  },
  code: {
    backgroundColor: '#1f2937',
    color: '#10b981',
    padding: '15px',
    borderRadius: '8px',
    fontSize: '14px',
    overflow: 'auto',
    lineHeight: '1.6',
  },
  projectInfo: {
    backgroundColor: '#d1fae5',
    padding: '10px 15px',
    borderRadius: '6px',
    marginBottom: '20px',
  },
  progressBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  progressStep: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#6b7280',
  },
  progressStepActive: {
    backgroundColor: '#3b82f6',
    color: 'white',
  },
  stepLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#6b7280',
    marginBottom: '20px',
  },
  formStep: {
    minHeight: '300px',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  reviewBox: {
    backgroundColor: '#f0f9ff',
    padding: '15px',
    borderRadius: '8px',
    marginTop: '20px',
  },
  successPage: {
    textAlign: 'center',
    padding: '40px',
  },
  successIcon: {
    fontSize: '64px',
    marginBottom: '20px',
  },
  summaryBox: {
    backgroundColor: '#f9fafb',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
    textAlign: 'left',
  },
};

export default FormsCompleteTutorial;
