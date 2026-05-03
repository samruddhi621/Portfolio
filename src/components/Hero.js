function Hero() {
  return (
    
    <section id="home" style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
        Hi, I'm Samruddhi
      </h1>

      <p style={{ fontSize: "20px", color: "#94a3b8" }}>
        I build modern web applications.
      </p>

   <a href="#projects">
  <button style={{
    marginTop: "20px",
    padding: "12px 25px",
    background: "linear-gradient(45deg, #38bdf8, #6366f1)",
    border: "none",
    borderRadius: "25px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  }}>
    View Work
  </button>
</a>
    </section>
  );
}
export default Hero;