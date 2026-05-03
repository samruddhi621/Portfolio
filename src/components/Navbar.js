function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px"
    }}>
      <h2>Samruddhi</h2>

     
      <div>
        <a href="#home">Home</a>
        <a href="#about" style={{ marginLeft: "20px" }}>About</a>
        <a href="#projects" style={{ marginLeft: "20px" }}>Projects</a>
        <a href="#contact" style={{ marginLeft: "20px" }}>Contact</a>
      </div>
    </nav>
  );
}export default Navbar;