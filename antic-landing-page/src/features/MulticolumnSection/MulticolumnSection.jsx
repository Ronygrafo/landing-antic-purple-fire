import "./MulticolumnSection.css";

export const MulticolumnSection = () => {
  return (
    <section className="multicolumn-section full-width-section">
      <div className="multicolumn-container">
        <div className="main-content">
          <h2 className="main-title merriweather-regular">
            We stay by your side to design your projects
          </h2>
          <span className="find-out-more varta-heavy">Find out more</span>
        </div>

        <div className="columns-container">
          <div className="column">
            <h3 className="column-title varta-bold">Our Advices</h3>
            <p className="column-text varta-regular">
              What if you took advantage of this rather special period to
              rethink your interior? You spend more time at home so you might as
              well feel good there.
            </p>
          </div>

          <div className="column">
            <h3 className="column-title varta-bold">Click and Collect</h3>
            <p className="column-text varta-regular">
              Adapted and contactless. Free from € 200 of purchases in stores
              offering the service.
            </p>
          </div>

          <div className="column">
            <h3 className="column-title varta-bold">Conception Service</h3>
            <p className="column-text varta-regular">
              Personalized service with an expert advisor for your interior and
              exterior decoration or layout projects.
            </p>
          </div>

          <div className="column">
            <h3 className="column-title varta-bold">Installation Service</h3>
            <p className="column-text varta-regular">
              Our furniture packaged in flat packs are designed for easy
              assembly. But you can call on our partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
