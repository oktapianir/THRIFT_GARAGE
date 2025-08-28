import React, { useState } from "react";
import bgThrift from "../assets/image-login.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate(); 
    const handleSubmit = (e) => {
    e.preventDefault();

  if (email === "user@gmail.com" && password === "123456"){
    navigate("/");
  } else if(email === "admin@gmail.com" && password === "654321"){
    navigate("/admin/dashboard");
  }else {
    alert("Email dan password salah!");
  }
};
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* KIRI: FORM LOGIN */}
      <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Selamat Datang !</h2>
          <p style={{ marginBottom: '1.5rem', color: '#6B7280' }}>
            Silakan login untuk melanjutkan
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Email address</label>
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  marginTop: '0.25rem',
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.5rem',
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  marginTop: '0.25rem',
                  width: '100%',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.5rem',
                }}
              />
              <a href="#" style={{ fontSize: '0.875rem', color: '#2563eb', marginTop: '0.5rem', display: 'inline-block' }}>
                Lupa password?
              </a>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#2B3723',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </form>

          <div style={{ textAlign: 'center', margin: '1rem 0', color: '#9CA3AF' }}>atau</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* <button style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              border: '1px solid #D1D5DB',
              padding: '0.5rem',
              borderRadius: '0.5rem'
            }}>
              <span>🔵</span> Sign in with Google
            </button> */}
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.875rem', marginTop: '1rem' }}>
            Belum punya akun? <a href="/register" style={{ color: '#2563eb' }}>Sign up</a>
          </p>
        </div>
      </div>

      {/* KANAN: GAMBAR */}
      <div
        style={{
          width: '50%',
          backgroundImage: `url(${bgThrift})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
};

export default Login;
