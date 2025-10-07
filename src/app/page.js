export default function Home() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      background: "#111"
    }}>
      <button
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          borderRadius: "1rem",
          background: "#22c55e",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        Commencer
      </button>
      <button
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          borderRadius: "1rem",
          background: "#3b82f6",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        Infos
      </button>
    </div>
  );
}
