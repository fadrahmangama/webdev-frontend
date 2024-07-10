import React from "react";

const PortfolioForm = ({
  newPortfolio,
  handleInputChange,
  handleFileChange,
  handleCreatePortfolio,
}) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control mb-2"
        name="project_title"
        placeholder="Project Title"
        value={newPortfolio.project_title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        name="category"
        placeholder="Category"
        value={newPortfolio.category}
        onChange={handleInputChange}
      />
      <textarea
        className="form-control mb-2"
        name="description"
        placeholder="Description"
        value={newPortfolio.description}
        onChange={handleInputChange}
      />
      <input
        type="file"
        className="form-control mb-2"
        name="image"
        onChange={handleFileChange}
      />
      <button className="btn btn-primary" onClick={handleCreatePortfolio}>
        Create Portfolio
      </button>
    </div>
  );
};

export default PortfolioForm;
