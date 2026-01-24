import { useState } from "react";
import icon1 from '/image/icon/icon-5.png'
import icon2 from '/image/icon/icon-6.png'
import icon3 from '/image/icon/icon-7.png'
import icon4 from '/image/icon/icon-8.png'
import './style.css'

const cards = [
  { id: 1, subtitle: "01", icon: icon1, title: "Daily ROI", desc: "Generate Consistent passive income through daily return on your investment, designed to reward long-term participation." },
  { id: 2, subtitle: "02", icon: icon2, title: "Direct Referrel", desc: "Earn instanct sponsorship commission when you personally refer new members who active a package." },
  { id: 3, subtitle: "03", icon: icon3, title: "Matching Income", desc: "Receive ongoing leadership by building, supporting, and balancing a strong team work." },
  { id: 4, subtitle: "04", icon: icon4, title: "Rank Achievements", desc: "Achieve higher ranks to unlock milestone bounses, rewards, and recognition for your performance and growth." },
];

export default function Features() {
  const [activeId, setActiveId] = useState(2);

  return (
    <div className="features-section">
      {/* Header Section */}
      <div className="features-header">
        <div className="heading-container">
          <h1 className="features-main-title">
            A New Layer of Intelligence
          </h1>
          <p className="features-subtitle">
            Each AI Capability works independently and seamlessly together to support your entire workflow.
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="features-cards-wrapper">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setActiveId(card.id)}
            className={`feature-card ${activeId === card.id ? "card-active" : "card-inactive"}`}
          >
            <div className="card-content">
              <div className="card-subtitle-box">
                <div className="subtitle-number">{card.subtitle}</div>
              </div>

              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}