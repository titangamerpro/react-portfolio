import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { experienceData } from "../utils/experienceData";
import { ExperienceTabs } from "./ExperienceTabs";
import { ExperiencePanels } from "./ExperiencePanels";

const ids = experienceData.map((c) => c.id);
const normalizeId = (id) => (ids.includes(id) ? id : experienceData[0]?.id || "");

const ExperienceSection = ({ initialActiveId }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const fromQuery = searchParams.get("tab");
  const initial = normalizeId(initialActiveId || fromQuery || "");

  const [activeId, setActiveId] = useState(initial);

  // В запись URL
  const setActive = useCallback(
    (id) => {
      const valid = normalizeId(id);
      setActiveId(valid);
      const next = new URLSearchParams(searchParams);
      next.set("tab", valid);
      setSearchParams(next, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  // Реакция на изменение URL извне (назад/вперёд)
  useEffect(() => {
    const qId = normalizeId(searchParams.get("tab") || "");
    if (qId !== activeId) setActiveId(qId);
  }, [searchParams, activeId]);

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
          <ExperienceTabs tabs={experienceData} activeId={activeId} onChange={setActive} />
          <div className="experience-content">
            <ExperiencePanels company={activeCompany} active />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
