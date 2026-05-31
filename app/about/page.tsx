export default function AboutPage() {
  return (
    <main className="page">
      <h1 className="section-title">
        About Me
      </h1>

      <div
        className="glass-card"
        style={{
          display: "flex",
          gap: "50px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/images/me.png"
          alt="Me"
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        <div style={{ flex: 1 }}>
          <p
            style={{
              color: "#aaa",
              lineHeight: "35px",
              fontSize: "18px",
            }}
          >
            I am a BSIT student passionate about
            programming, web development, and
            modern technologies. I enjoy building
            responsive and visually appealing
            systems while continuously improving
            my development skills.
          </p>

          <div
            style={{
              marginTop: "30px",
              lineHeight: "40px",
              color: "#ccc",
            }}
          >
            <p>Email: diyomolina@gmail.com</p>
            <p>Phone: 09633274795</p>
            <p>Address: San Pablo City, Laguna</p>
          </div>
        </div>
      </div>
    </main>
  )
}


