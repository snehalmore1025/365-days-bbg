// SurpriseMe.tsx — opens only on Sundays, pretty design
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// ─── WRITE YOUR SUNDAY SURPRISES HERE ────────────────────────────────────────
// Each Sunday a different one shows (cycles through the list)
const sundaySurprises = [
  {
    emoji: "🎁",
    title: "You're someone's favourite person.",
    message: `Not in a vague, general way.
In a specific, intentional, deeply felt way.
You are THE favourite. The one people think of first.
The one who makes everything better just by being there.
Happy Sunday, bbg. Rest, you've earned it. 💖`,
    color: "#FF6B6B",
  },
  {
    emoji: "🌸",
    title: "A Sunday love letter.",
    message: `Sundays are slow and golden and soft —
and so are you on days like this.
No pressure. No performance. Just you, being whole and worthy and wonderful.
I hope this Sunday gives you everything you need. 🌸`,
    color: "#e8709a",
  },
  {
    emoji: "✨",
    title: "Reminder: you are doing amazing.",
    message: `Not just surviving — actually thriving.
Even when it doesn't feel like it.
Even when the week was hard.
You are still here, still going, still you.
That is more than enough. That is everything. ✨`,
    color: "#b5559e",
  },
  {
    emoji: "🍓",
    title: "Sweet surprise for a sweet person.",
    message: `You are the kind of rare that people write songs about.
The kind of person who changes rooms just by walking into them.
Today I just wanted to say that explicitly, out loud, in pink text on the internet.
You are THAT girl. 🍓`,
    color: "#FF6B6B",
  },
  {
    emoji: "🌙",
    title: "A Sunday night love note.",
    message: `Before this week starts — before the noise returns —
take a breath and remember:
you are loved, you are valued, and whatever comes next,
you are more than equipped to handle it.
Sleep well. Dream big. 🌙`,
    color: "#7c6ba8",
  },
];

// ─── WHAT TO SHOW ON NON-SUNDAYS ─────────────────────────────────────────────
const notSundayVibes = {
  emoji: "💤",
  title: "Psst — come back on Sunday!",
  message: `This little surprise box only opens on Sundays.
Consider it something to look forward to at the end of every week.
A small, sweet reward for making it through.
See you then, bbg. 💌`,
};

export default function SurpriseMe() {
  const navigate = useNavigate();
  const today = new Date();
  const isSunday = today.getDay() === 0;

  // Pick which Sunday surprise to show (based on week number)
  const weekNumber = Math.floor(today.getTime() / (1000 * 60 * 60 * 24 * 7));
  const surprise = sundaySurprises[weekNumber % sundaySurprises.length];

  const [revealed, setRevealed] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (isSunday) {
      const timer = setTimeout(() => setRevealed(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isSunday]);

  const handleReveal = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  const accentColor = isSunday ? surprise.color : "#aaa";

  return (
    <div style={{
      minHeight: "100vh",
      background: isSunday
        ? `linear-gradient(135deg, #FFF0F5 0%, #FFF8F0 40%, #FFF0FA 100%)`
        : `linear-gradient(135deg, #f5f5f5, #ececec)`,
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 1.5rem",
      position: "relative",
      overflow: "hidden",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600;700&display=swap');

        @keyframes floatUp {
          0%   { transform: translateY(0) rotate(0deg);  opacity: 1; }
          100% { transform: translateY(-120vh) rotate(720deg); opacity: 0; }
        }
        @keyframes popIn {
          0%   { transform: scale(0.7); opacity: 0; }
          70%  { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.12); }
        }
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .surprise-card {
          animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }
        .emoji-pulse {
          animation: heartbeat 1.5s ease-in-out infinite;
          display: inline-block;
        }
        .back-btn {
          background: transparent;
          border: 2px solid ${accentColor};
          color: ${accentColor};
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          transition: all 0.25s ease;
          font-family: 'Poppins', sans-serif;
        }
        .back-btn:hover {
          background: ${accentColor};
          color: white;
        }
        .open-btn {
          background: linear-gradient(135deg, ${accentColor}, #FF9EAA);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(255,107,107,0.3);
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.5px;
          margin-top: 1rem;
        }
        .open-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255,107,107,0.4);
        }
        .confetti-piece {
          position: fixed;
          pointer-events: none;
          animation: floatUp linear forwards;
          z-index: 9999;
          font-size: 1.5rem;
        }
        .day-badge {
          background: ${accentColor};
          color: white;
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          display: inline-block;
        }
      `}</style>

      {/* Confetti */}
      {confetti && Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 40 + 60}%`,
            animationDuration: `${Math.random() * 2 + 1.5}s`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        >
          {["🌸", "✨", "💖", "🎊", "💕", "🌟", "🎁", "🍓"][Math.floor(Math.random() * 8)]}
        </span>
      ))}

      {/* Back button */}
      <div style={{ alignSelf: "flex-start", marginBottom: "2rem" }}>
        <button className="back-btn" onClick={() => navigate("/")}>
          <ArrowLeft size={16} /> Back Home
        </button>
      </div>

      {/* Main card */}
      <div
        className="surprise-card"
        style={{
          maxWidth: "520px",
          width: "100%",
          background: "white",
          borderRadius: "28px",
          boxShadow: isSunday
            ? `0 20px 60px rgba(255,107,107,0.15), 0 0 0 1px rgba(255,107,107,0.08)`
            : `0 8px 24px rgba(0,0,0,0.08)`,
          padding: "3rem 2.5rem",
          textAlign: "center",
          border: `2px solid ${isSunday ? "#ffe0e0" : "#eee"}`,
        }}
      >
        {/* Sunday badge */}
        {isSunday && (
          <div className="day-badge">
            ☀️ Happy Sunday
          </div>
        )}

        {/* Big emoji */}
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
          <span className="emoji-pulse">
            {isSunday ? surprise.emoji : notSundayVibes.emoji}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: "1.6rem",
          color: isSunday ? accentColor : "#999",
          margin: "0 0 1.5rem",
          lineHeight: 1.4,
        }}>
          {isSunday ? surprise.title : notSundayVibes.title}
        </h1>

        {/* Message box */}
        <div style={{
          backgroundColor: isSunday ? "#FFF8F0" : "#f8f8f8",
          borderRadius: "18px",
          padding: "1.5rem",
          borderLeft: `5px solid ${accentColor}`,
          textAlign: "left",
          marginBottom: "1.5rem",
        }}>
          <p style={{
            margin: 0,
            fontSize: "1.05rem",
            lineHeight: 1.9,
            color: "#4B2C36",
            whiteSpace: "pre-line",
          }}>
            {isSunday ? surprise.message : notSundayVibes.message}
          </p>
        </div>

        {/* Confetti trigger button (Sunday only) */}
        {isSunday && (
          <button className="open-btn" onClick={handleReveal}>
            🎊 Celebrate!
          </button>
        )}

        {/* Countdown to next Sunday (non-Sunday) */}
        {!isSunday && (() => {
          const daysUntilSunday = (7 - today.getDay()) % 7 || 7;
          return (
            <p style={{
              margin: "1rem 0 0",
              fontSize: "0.9rem",
              color: "#aaa",
              fontStyle: "italic",
            }}>
              {daysUntilSunday} day{daysUntilSunday === 1 ? "" : "s"} until the next surprise ✨
            </p>
          );
        })()}
      </div>

      {/* Footer note */}
      <p style={{
        marginTop: "2rem",
        fontSize: "0.85rem",
        color: isSunday ? "#b07080" : "#bbb",
        textAlign: "center",
      }}>
        {isSunday
          ? "A new surprise every Sunday, just for you. 💌"
          : "Good things come to those who wait... specifically until Sunday. 🌸"}
      </p>
    </div>
  );
}
