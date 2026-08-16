// TimeTravel.tsx — Pinterest-style masonry gallery
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

// ─── ADD YOUR MEMORIES HERE ──────────────────────────────────────────────────
const memories = [
  {
    id: 1,
    title: "Our First Adventure 🌟",
    image: "/assets/gallery/memory1.jpg",
    date: "March 15, 2023",
    note: "",
  },
  {
    id: 2,
    title: "When You Send Me 47 Memes 😂",
    image: "/assets/gallery/memory2.jpg",
    date: "June 22, 2023",
    note: "",
  },
  {
    id: 3,
    title: "Coffee Date Vibes ☕",
    image: "/assets/gallery/memory3.jpg",
    date: "August 10, 2023",
    note: "",
  },
  {
    id: 4,
    title: "Our Funniest Chat 💬",
    image: "/assets/gallery/memory4.jpg",
    date: "September 5, 2023",
    note: "",
  },
  {
    id: 5,
    title: "Sunset Moments 🌅",
    image: "/assets/gallery/memory5.jpg",
    date: "October 18, 2023",
    note: "",
  },
  {
    id: 6,
    title: "Us Planning Anything 📅",
    image: "/assets/gallery/memory6.jpg",
    date: "November 12, 2023",
    note: "",
  },
];

// Randomize pin heights for masonry feel
const pinHeights = [260, 320, 220, 350, 280, 300, 240, 370, 260, 310];

type Memory = typeof memories[0];

export default function TimeTravel() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Memory | null>(null);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#FFF8F0",
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      color: "#4B2C36",
    }}>

      {/* ── Header ── */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#FFF8F0",
        borderBottom: "1px solid #f0d5d5",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 12px rgba(255,107,107,0.08)",
      }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "#FF6B6B",
            padding: "10px 18px",
            borderRadius: "50px",
            color: "white",
            fontWeight: "bold",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
            fontSize: "0.9rem",
            boxShadow: "0 4px 12px rgba(255,107,107,0.3)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4B2C36")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#FF6B6B")}
        >
          <ArrowLeft size={16} /> Back Home
        </button>

        <div style={{ textAlign: "center", flex: 1 }}>
          <h1 style={{
            fontSize: "2.2rem",
            fontFamily: "'Pacifico', cursive",
            color: "#FF6B6B",
            margin: 0,
            letterSpacing: "0.5px",
          }}>
            📸 Time Travel Gallery
          </h1>
          <p style={{ margin: "0.2rem 0 0", fontSize: "0.9rem", color: "#a07080" }}>
            {memories.length} memories & counting 💌
          </p>
        </div>

        <div style={{ width: "120px" }} />
      </div>

      {/* ── Pinterest Masonry Board ── */}
      <div style={{
        padding: "2rem 1.5rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}>
        <div style={{
          columnCount: 4,
          columnGap: "16px",
          // Responsive via inline won't work perfectly — see note below
        }}>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600&display=swap');
            .masonry-board { column-count: 4; column-gap: 16px; }
            @media (max-width: 1100px) { .masonry-board { column-count: 3; } }
            @media (max-width: 750px)  { .masonry-board { column-count: 2; } }
            @media (max-width: 480px)  { .masonry-board { column-count: 1; } }
            .pin-card {
              break-inside: avoid;
              margin-bottom: 16px;
              border-radius: 18px;
              overflow: hidden;
              background: white;
              box-shadow: 0 4px 16px rgba(0,0,0,0.08);
              cursor: pointer;
              transition: transform 0.25s ease, box-shadow 0.25s ease;
              position: relative;
            }
            .pin-card:hover {
              transform: translateY(-6px) scale(1.01);
              box-shadow: 0 12px 32px rgba(255,107,107,0.2);
            }
            .pin-card:hover .pin-overlay {
              opacity: 1;
            }
            .pin-overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(to bottom, transparent 40%, rgba(75,44,54,0.75) 100%);
              opacity: 0;
              transition: opacity 0.3s ease;
              border-radius: 18px;
              display: flex;
              align-items: flex-end;
              padding: 1rem;
              box-sizing: border-box;
            }
            .pin-overlay-text {
              color: white;
              font-size: 0.85rem;
              font-weight: 600;
            }
            .modal-backdrop {
              position: fixed;
              inset: 0;
              background: rgba(0,0,0,0.6);
              z-index: 999;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1.5rem;
              backdrop-filter: blur(4px);
              animation: fadeIn 0.2s ease;
            }
            .modal-card {
              background: white;
              border-radius: 24px;
              max-width: 520px;
              width: 100%;
              overflow: hidden;
              box-shadow: 0 24px 64px rgba(0,0,0,0.3);
              animation: slideUp 0.3s ease;
            }
            @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
            @keyframes slideUp { from { transform: translateY(30px); opacity:0 } to { transform: translateY(0); opacity:1 } }
            .save-btn {
              background: #FF6B6B;
              color: white;
              border: none;
              padding: 0.6rem 1.4rem;
              border-radius: 50px;
              font-weight: bold;
              cursor: pointer;
              font-size: 0.85rem;
              transition: background 0.2s;
            }
            .save-btn:hover { background: #4B2C36; }
          `}</style>

          <div className="masonry-board">
            {memories.map((memory, i) => (
              <div
                key={memory.id}
                className="pin-card"
                onClick={() => setSelected(memory)}
              >
                <img
                  src={memory.image}
                  alt={memory.title}
                  style={{
                    width: "100%",
                    display: "block",
                    minHeight: `${pinHeights[i % pinHeights.length]}px`,
                    objectFit: "cover",
                    backgroundColor: "#f7dad9",
                  }}
                  onError={e => {
                    (e.target as HTMLImageElement).style.minHeight = `${pinHeights[i % pinHeights.length]}px`;
                    (e.target as HTMLImageElement).style.background =
                      `linear-gradient(135deg, #F7DAD9, #ffc5c5)`;
                    (e.target as HTMLImageElement).src = "";
                  }}
                />

                {/* Hover overlay */}
                <div className="pin-overlay">
                  <span className="pin-overlay-text">View Memory 💖</span>
                </div>

                {/* Card footer */}
                <div style={{
                  padding: "0.85rem 1rem 1rem",
                  borderTop: "1px solid #ffeaea",
                }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                  }}>
                    <div>
                      <p style={{
                        margin: 0,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#4B2C36",
                        lineHeight: 1.4,
                      }}>
                        {memory.title}
                      </p>
                      <p style={{
                        margin: "0.3rem 0 0",
                        fontSize: "0.75rem",
                        color: "#a07080",
                      }}>
                        📅 {memory.date}
                      </p>
                    </div>
                    <button
                      className="save-btn"
                      onClick={e => { e.stopPropagation(); setSelected(memory); }}
                    >
                      💾 Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Modal Lightbox ── */}
      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-card"
            onClick={e => e.stopPropagation()}
          >
            <div style={{ position: "relative" }}>
              <img
                src={selected.image}
                alt={selected.title}
                style={{
                  width: "100%",
                  maxHeight: "380px",
                  objectFit: "cover",
                  display: "block",
                  backgroundColor: "#f7dad9",
                }}
              />
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
              >
                <X size={18} color="#4B2C36" />
              </button>
            </div>

            <div style={{ padding: "1.5rem" }}>
              <h2 style={{
                margin: "0 0 0.4rem",
                fontSize: "1.3rem",
                color: "#4B2C36",
                fontFamily: "'Pacifico', cursive",
              }}>
                {selected.title}
              </h2>
              <p style={{ margin: "0 0 0.8rem", fontSize: "0.85rem", color: "#a07080" }}>
                📅 {selected.date}
              </p>
              {selected.note && (
                <p style={{
                  margin: 0,
                  fontSize: "1rem",
                  color: "#5f2e3e",
                  lineHeight: 1.7,
                  backgroundColor: "#FFF8F0",
                  padding: "0.8rem 1rem",
                  borderRadius: "12px",
                  borderLeft: "4px solid #FF6B6B",
                }}>
                  {selected.note}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
