import React from "react";
import { servicesData } from "../utils/data";

const Specialized = () => {
  return (
    <section className="services">
      <span className="iner-subtitle services-subtitle">SERVICES</span>
      <p className="iner-title services-title">Specialized in</p>
      <div className="services-wrapper container">
        {servicesData &&
          servicesData.map((item) => (
            <div key={item.id} className="services-block">
              <figure>
                {/* <img src={item.icon} alt={item.title} /> */}
                <item.icon/>
              </figure>
              <span className="services-block-title">{item.title}</span>
              <p className="services-block-text">
                {item.description}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Specialized;
