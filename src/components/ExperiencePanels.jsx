import React from "react";

export const ExperiencePanels = ({ company, active }) => {
  if (!company) return null;

  return (
    <div
      className={`experience-tab ${active ? "active" : ""}`}
      role="tabpanel"
      id={`panel-${company.id}`}
      aria-labelledby={`tab-${company.id}`}
    >
      {company.items.map((item, idx) => (
        <div key={idx} className="experience-item">
          <p className="experience-tab-title">{item.title}</p>
          <span className="experience-tab-lock">{item.location}</span>
          <span className="experience-tab-time">{item.period}</span>

          <div className="experience-tab-tags">
            {item.tags.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>

          <ul className="experience-tab-list">
            {item.bullets.map((b, i) => (
              <li key={i} className="experience-tab-item">
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
