import { useState } from "react";

function ControlledForm() {
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
    <div>
      <h3>Controlled Components</h3>

      <form onSubmit={handleSubmit}>
        
        {/* Name */}
        <div>
          <label>Name *</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        {/* Email */}
        <div>
          <label>Email *</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        {/* Password */}
        <div>
          <label>Password *</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Min 6 characters"
          />
          {errors.password && <span>{errors.password}</span>}
          <br />
          <small>Current length: {formData.password.length}</small>
        </div>

        {/* Country */}
        <div>
          <label>Country *</label><br />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
          </select>
          {errors.country && <span>{errors.country}</span>}
        </div>

        {/* Gender */}
        <div>
          <label>Gender *</label><br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange}
            />
            Other
          </label>

          {errors.gender && <span>{errors.gender}</span>}
        </div>

        {/* Checkbox */}
        <div>
          <label>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            Subscribe to newsletter
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Result */}
      {submitted && (
        <div>
          <h4>Form Submitted!</h4>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ControlledForm;