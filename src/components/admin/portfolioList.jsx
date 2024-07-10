import React from "react";
import Button from "./button";

const PortfolioList = ({
  portfolios,
  handleDeletePortfolio,
  openEditModal,
}) => {
  return (
    <div className="row">
      {portfolios.map((portfolio) => (
        <div className="col-md-4 mb-4" key={portfolio.id}>
          <div className="card">
            <img
              src={portfolio.image}
              className="card-img-top"
              alt={portfolio.project_title}
            />
            <div className="card-body">
              <h5 className="card-title">{portfolio.project_title}</h5>
              <p className="card-text">{portfolio.category}</p>
              <p className="card-text">{portfolio.description}</p>
              <Button
                variant="danger"
                onClick={() => handleDeletePortfolio(portfolio.id)}
              >
                Delete
              </Button>
              <Button
                variant="secondary"
                onClick={() => openEditModal(portfolio)}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
