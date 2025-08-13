import React, { useState, useMemo } from "react";
import { experienceData } from "../utils/experienceData";
import { ExperienceTabs } from "./ExperienceTabs";
import { ExperiencePanels } from "./ExperiencePanels";

const ExperienceSection = () => {
  // По умолчанию активен первый таб из данных
  const [activeId, setActiveId] = useState(experienceData[0]?.id || "");

  // Быстрый доступ к активной записи
  const activeCompany = useMemo(
    () => experienceData.find((c) => c.id === activeId),
    [activeId]
  );

  return (
    <section className="experience">
      <div className="container">
        <span className="iner-subtitle experience-subtitle">career path</span>
        <p className="iner-title experience-title">Work Experices</p>

        <div className="experience-wrapper">
          <ExperienceTabs
            tabs={experienceData}
            activeId={activeId}
            onChange={setActiveId}
          />

          <div className="experience-content">
            <ExperiencePanels
              company={activeCompany}
              active
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
