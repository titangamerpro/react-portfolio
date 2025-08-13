import React from "react";

export const ExperienceTabs = ({ tabs, activeId, onChange }) => {
  return (
    <ul className="experience-tabs" role="tablist" aria-label="Experience tabs">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <li
            key={tab.id}
            data-filter={tab.id}
            className={isActive ? "active" : ""}
            role="presentation"
          >
            {/* Кнопка для доступности и управления */}
            <button
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => onChange(tab.id)}
              className="experience-tab-button"
            >
              {tab.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};