import React, { useState } from 'react';
import { supabase } from './supabaseClient'; // Ensure this file exists in your src folder

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  
  const [formData, setFormData] = useState({
    employeeId: '',
    email: '',
    password: '',
    role: 'Employee'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Made the function async to handle Supabase network requests
  const handleSubmit = async (e) => { 
    e.preventDefault();
    setError('');
    setMessage('');

    if (isLogin) {
      // 3.1.2 REAL SIGN IN LOGIC (Supabase)
      if (formData.email === '' || formData.password === '') {
        setError('Please enter both email and password.');
        return;
      }
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setError(error.message); // Displays actual Supabase errors (e.g., wrong password)
      } else {
        // Retrieve the role we saved during Sign Up
        const userRole = data.user?.user_metadata?.role || 'Employee';
        alert(`Logged in successfully! Redirecting to ${userRole === 'HR' ? 'HR' : 'Employee'} Dashboard...`);
        window.location.href = userRole === 'HR' ? '/HR/index.html' : '/Emp/suraj.html';
      }
      
    } else {
      // 3.1.1 REAL SIGN UP LOGIC (Supabase)
      if (formData.password.length < 8) {
        setError('Security Rule: Password must be at least 8 characters long.');
        return;
      }
      if (!formData.employeeId || !formData.email) {
        setError('Please fill out all fields.');
        return;
      }
      
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { // Saves custom HRMS fields to the user's Supabase profile
            employee_id: formData.employeeId,
            role: formData.role
          }
        }
      });

      if (error) {
        setError(error.message);
      } else {
        setMessage('Registration successful! Please check your email to verify your account.');
        setFormData({ employeeId: '', email: '', password: '', role: 'Employee' });
      }
    }
  };

  // Basic inline styles for a quick, clean hackathon UI
  const styles = {
    container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'sans-serif' },
    card: { backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' },
    title: { textAlign: 'center', color: '#333', marginBottom: '24px' },
    formGroup: { marginBottom: '16px' },
    label: { display: 'block', marginBottom: '8px', color: '#666', fontSize: '14px' },
    input: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', marginTop: '10px' },
    error: { color: '#d9534f', fontSize: '14px', marginBottom: '16px', textAlign: 'center' },
    message: { color: '#5cb85c', fontSize: '14px', marginBottom: '16px', textAlign: 'center' },
    toggleBtn: { background: 'none', border: 'none', color: '#0056b3', cursor: 'pointer', textDecoration: 'underline', width: '100%', marginTop: '16px' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Dayflow HRMS</h2>
        
        {error && <div style={styles.error}>{error}</div>}
        {message && <div style={styles.message}>{message}</div>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Employee ID</label>
              <input style={styles.input} type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} />
            </div>
          )}

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input style={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          {!isLogin && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Role</label>
              <select style={styles.input} name="role" value={formData.role} onChange={handleChange}>
                <option value="Employee">Employee</option>
                <option value="HR">HR / Admin</option>
              </select>
            </div>
          )}

          <button style={styles.button} type="submit">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <button style={styles.toggleBtn} onClick={() => { setIsLogin(!isLogin); setError(''); setMessage(''); }}>
          {isLogin ? "Need an account? Sign Up" : "Already have an account? Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Login;