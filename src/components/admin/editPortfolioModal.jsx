import React from "react";
import { Modal } from "react-bootstrap";
import Button from "./button";

const EditPortfolioModal = ({
  editModalOpen,
  closeEditModal,
  currentArticle,
  handleEditInputChange,
  handleEditFileChange,
  handleUpdatePortfolio,
}) => {
  return (
    <Modal show={editModalOpen} onHide={closeEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Portfolio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentArticle && (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              name="project_title"
              placeholder="Project Title"
              value={currentArticle.project_title}
              onChange={handleEditInputChange}
            />
            <input
              type="text"
              className="form-control mb-2"
              name="category"
              placeholder="Category"
              value={currentArticle.category}
              onChange={handleEditInputChange}
            />
            <textarea
              className="form-control mb-2"
              name="description"
              placeholder="Description"
              value={currentArticle.description}
              onChange={handleEditInputChange}
            />
            <input
              type="file"
              className="form-control mb-2"
              name="image"
              onChange={handleEditFileChange}
            />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeEditModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdatePortfolio}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPortfolioModal;
