import React from "react";

export const ExperienceTabs = ({ tabs, activeId, onChange }) => {
  return (
    <div
      className="experience-tabs"
      role="tablist"
      aria-label="Experience tabs"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            data-filter={tab.id}
            className={`experience-tab-button ${isActive ? "active" : ""}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
