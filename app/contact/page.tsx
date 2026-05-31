export default function ContactPage() {
  return (
    <main className="page">
      <h1 className="section-title">
        Contact
      </h1>

      <div
        className="glass-card"
        style={{
          maxWidth: "700px",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
          />

          <textarea
            placeholder="Message"
            rows={6}
            style={styles.input}
          />

          <button style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </main>
  )
}

const styles = {
  input: {
    padding: "18px",
    background: "#111",
    border: "1px solid #333",
    borderRadius: "12px",
    color: "white",
    fontSize: "16px",
  },

  button: {
    padding: "18px",
    background: "#222",
    border: "none",
    borderRadius: "12px",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
}