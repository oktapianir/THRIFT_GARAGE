import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import bgThrift from '../assets/bg_thrift.png'; 

const Home = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'white',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 3rem',
      backgroundColor: 'white',
      borderBottom: '1px solid #E5E7EB'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2B3723'
    },
    navRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem'
    },
    searchContainer: {
      position: 'relative'
    },
    searchInput: {
      paddingLeft: '2.5rem',
      paddingRight: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      width: '15rem',
      fontSize: '0.875rem',
      outline: 'none'
    },
    searchIcon: {
      position: 'absolute',
      left: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      width: '1rem',
      height: '1rem'
    },
    navIcon: {
      width: '1.25rem',
      height: '1.25rem',
      color: '#374151',
      cursor: 'pointer'
    },
    hero: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 88px)',
      backgroundImage: `URL(${bgThrift})` 

    },
    heroLeft: {
      width: '50%',
      paddingLeft: '4rem',
      paddingRight: '2rem',
      paddingTop: '4rem',
      paddingBottom: '4rem'
    },
    heroTitle: {
      fontSize: '3.75rem',
      fontWeight: 'bold',
      color: 'black',
      lineHeight: '1.1',
      marginBottom: '2rem'
    },
    heroText: {
      color: '#374151',
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '0.25rem'
    },
    heroSubtext: {
      color: 'black',
      fontSize: '1rem',
      fontWeight: '500',
      marginTop: '1.5rem',
      marginBottom: '2.5rem'
    },
    shopButton: {
      backgroundColor: '#2B3723',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      fontWeight: '500',
      fontSize: '0.875rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    heroRight: {
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: '4rem'
    },
    brandSection: {
      backgroundColor: '#2B3723',
      padding: '3rem 0'
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5rem',
      flexWrap: 'wrap'
    },
    brandText: {
      color: 'white',
      fontSize: '1.875rem',
      fontWeight: 'bold'
    },
    brandItalic: {
      fontStyle: 'italic'
    }
  };

  return (
    <div style={styles.container}>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>
            Second chances,<br />first class style
          </h1>
          <p style={styles.heroText}>Step into a world where fashion finds new meaning, every piece carries a</p>
          <p style={styles.heroText}>story and every style gets a second chance. Our thrift collections are</p>
          <p style={styles.heroText}>carefully curated to bring you unique and affordable fashion that never</p>
          <p style={styles.heroText}>goes out of style.</p>
          <p style={styles.heroSubtext}>Made to be loved again......</p>
          <button style={styles.shopButton}>Shop Now</button>
        </div>
      </div>

      {/* Brand Section */}
      <div style={styles.brandSection}>
        <div style={styles.brandContainer}>
          <div style={styles.brandText}>Adidas</div>
          <div style={styles.brandText}>ZARA</div>
          <div style={{ ...styles.brandText, ...styles.brandItalic }}>Champion</div>
          <div style={styles.brandText}>NIKE</div>
          <div style={styles.brandText}>H&M</div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '3rem 1rem',
        backgroundColor: '#ffffff',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        {[
          {
            title: "100% Dijamin kebersihan pakaian",
            description: "Barang thrift dijamin kebersihan pakaiannya",
            icon: "🧥"
          },
          {
            title: "Pengemasan berkualitas",
            description: "Selain bersih produk akan mendapatkan free packaging",
            icon: "📦"
          },
          {
            title: "Harga & promo menarik",
            description: "Tersedia paket bundling & paket usaha",
            icon: "💸"
          },
          {
            title: "Customer Support",
            description: "Layanan customer online 24/7",
            icon: "🧑‍🤝‍🧑"
          }
        ].map((item, idx) => (
          <div key={idx} style={{
            width: '200px',
            textAlign: 'center',
            border: idx === 5 ? '2px solid #000' : 'none',
            padding: '1rem',
            borderRadius: '1rem',
            boxShadow: idx === 2 ? '0 0 10px rgba(0,0,0,0.1)' : 'none'
          }}>
            <div style={{ fontSize: '2rem' }}>{item.icon}</div>
            <h4 style={{ fontWeight: 'bold', marginTop: '1rem' }}>{item.title}</h4>
            <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{item.description}</p>
          </div>
        ))}
      </div>

      {/* New Arrivals */}
      <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>NEW ARRIVALS</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={{
              border: '1px solid #E5E7EB',
              borderRadius: '1rem',
              padding: '1rem',
              width: '200px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#F3F4F6',
                borderRadius: '1rem',
                marginBottom: '1rem'
              }}>
                <span style={{
                  lineHeight: '200px',
                  color: '#9CA3AF'
                }}>Gambar Produk</span>
              </div> 
              <h3 style={{ fontWeight: 'bold' }}>Ziprem Adidas</h3>
              <p style={{ color: '#6B7280' }}>Rp 175.000</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ backgroundColor: '#F9FAFB', padding: '3rem 1rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>TESTIMONI</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              width: '300px'
            }}>
              <div style={{ marginBottom: '1rem' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ color: '#4B5563', fontSize: '0.875rem' }}>
                Barangnya bagus, sesuai deskripsi, pengiriman cepat dan pelayanan ramah!
              </p>
              <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>- Pelanggan</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

