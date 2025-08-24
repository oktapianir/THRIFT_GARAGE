import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import bgThrift from '../assets/bg_thrift.png';

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'white'
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 3rem',
      backgroundColor: 'white'
    },
    navLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '3rem'
    },
    navLink: {
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '500',
      fontSize: '0.875rem',
      transition: 'color 0.3s'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'black'
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
      minHeight: 'calc(100vh - 88px)'
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
    clothingRack: {
      position: 'relative',
      width: '450px',
      height: '400px'
    },
    rackPole: {
      position: 'absolute',
      left: '50%',
      top: '0',
      width: '0.75rem',
      height: '5rem',
      backgroundColor: '#d97706',
      borderRadius: '9999px',
      transform: 'translateX(-50%)'
    },
    rackBar: {
      position: 'absolute',
      top: '4rem',
      left: '2rem',
      right: '2rem',
      height: '0.75rem',
      backgroundColor: '#d97706',
      borderRadius: '9999px'
    },
    clothesContainer: {
      position: 'absolute',
      top: '5rem',
      left: '3rem',
      right: '3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    },
    clothingItem: {
      width: '3.5rem',
      height: '6rem',
      borderTopLeftRadius: '0.5rem',
      borderTopRightRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s'
    },
    hangerContainer: {
      position: 'absolute',
      top: '3rem',
      left: '3.5rem',
      right: '3.5rem',
      display: 'flex',
      justifyContent: 'space-between'
    },
    hanger: {
      width: '0.5rem',
      height: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '0.125rem',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    },
    brandSection: {
      backgroundColor: '#2B3723',
      padding: '3rem 0'
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5rem'
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

  const clothes = [
    { color: '#16a34a', transform: 'rotate(-1deg)' }, // Green
    { color: '#d1d5db', transform: 'rotate(1deg)' },  // Light gray
    { color: '#9ca3af', transform: 'rotate(0deg)' },  // Medium gray
    { color: '#6b7280', transform: 'rotate(-1deg)' }, // Darker gray
    { color: '#4b5563', transform: 'rotate(1deg)' },  // Dark gray
    { color: '#374151', transform: 'rotate(0deg)' },  // Very dark gray
    { color: '#1f2937', transform: 'rotate(-1deg)' }  // Almost black
  ];

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/About" style={styles.navLink}>About</a>
          <a href="#" style={styles.navLink}>Katalog</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </div>

        <div style={styles.logo}>Thrift.Garage</div>

        <div style={styles.navRight}>
          <div style={styles.searchContainer}>
            <Search style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for products..."
              style={styles.searchInput}
            />
          </div>
          <ShoppingCart style={styles.navIcon} />
          <User style={styles.navIcon} />
        </div>
      </nav>

      {/* Main Hero Section */}
      <div style={styles.hero}>
        {/* Left Side Content */}
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>
            Second chances,
            <br />
            first class style
          </h1>

          <div>
            <p style={styles.heroText}>
              Step into a world where fashion finds new meaning, every piece carries a
            </p>
            <p style={styles.heroText}>
              story and every style gets a second chance. Our thrift collections are
            </p>
            <p style={styles.heroText}>
              carefully curated to bring you unique and affordable fashion that never
            </p>
            <p style={styles.heroText}>
              goes out of style.
            </p>
          </div>

          <p style={styles.heroSubtext}>
            Made to be loved again......
          </p>

          <button 
            style={styles.shopButton}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2B3723'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2B3723'}
          >
            Shop Now
          </button>
        </div>

        {/* Right Side - Clothing Rack */}
        <div style={styles.heroRight}>
          <img
            src={bgThrift}
            alt="Clothing Rack with various colored clothes"
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
              maxHeight: '500px'
            }}
          />
        </div>
      </div>

      {/* Brand Logos Section */}
      <div style={styles.brandSection}>
        <div style={styles.brandContainer}>
          <div style={styles.brandText}>Adidas</div>
          <div style={styles.brandText}>ZARA</div>
          <div style={{...styles.brandText, ...styles.brandItalic}}>Champion</div>
          <div style={styles.brandText}>NIKE</div>
          <div style={styles.brandText}>H&M</div>
        </div>
      </div>
    </div>
  );
};

export default Home;