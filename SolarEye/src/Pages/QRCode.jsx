import React from "react";

export default function QRCodePage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Al Khatem Inventory</h1>
        <p style={styles.subtitle}>Quick Links</p>

        <div style={styles.links}>
          <a href="https://alkhateminventory.com" target="_blank" rel="noreferrer">
            🌐 Website
          </a>

          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            📸 Instagram
          </a>

          <a href="https://wa.me/962XXXXXXXXX" target="_blank" rel="noreferrer">
            💬 WhatsApp
          </a>

          <a href="mailto:info@alkhateminventory.com">
            ✉️ Email
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f9",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    width: "350px",
  },
  title: {
    marginBottom: "10px",
  },
  subtitle: {
    marginBottom: "25px",
    color: "#777",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
};
