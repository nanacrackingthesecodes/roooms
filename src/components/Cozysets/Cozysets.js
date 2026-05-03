import "./Cozysets.css";

function Cozysets() {
  const sets = [1, 2, 3]; 
  return (
    <section className="cozysets">
      <h2>затишні набори</h2>

      <div className="cozysets-grid">
        {sets.map((num) => (
          <div className="cozysets-item" key={num}>
            <div className="cozysets-grey"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cozysets;