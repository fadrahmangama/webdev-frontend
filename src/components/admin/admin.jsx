import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import ContactList from "./contactList";
import EditPortfolioModal from "./editPortfolioModal";
import PortfolioForm from "./portfolioForm";
import PortfolioList from "./portfolioList";

const Admin = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [newPortfolio, setNewPortfolio] = useState({
    project_title: "",
    category: "",
    description: "",
    image: null,
  });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  useEffect(() => {
    fetchPortfolios();
    fetchContacts();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/getArticles");
      const items = response.data.data.map((item) => ({
        ...item,
        image2: item.image_url,
      }));
      setPortfolios(items);
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/getContacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPortfolio({ ...newPortfolio, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewPortfolio({ ...newPortfolio, image: e.target.files[0] });
  };

  const handleCreatePortfolio = async () => {
    const formData = new FormData();
    formData.append("project_title", newPortfolio.project_title);
    formData.append("category", newPortfolio.category);
    formData.append("description", newPortfolio.description);
    formData.append("image", newPortfolio.image);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/createArticle",
        formData
      );
      const newPortfolioItem = {
        ...response.data.data.article,
        image2: response.data.data.image_url,
      };
      setPortfolios([...portfolios, newPortfolioItem]);
    } catch (error) {
      console.error("Error creating portfolio:", error);
    }
  };

  const handleDeletePortfolio = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/deleteArticle/${id}`);
      setPortfolios(portfolios.filter((portfolio) => portfolio.id !== id));
    } catch (error) {
      console.error("Error deleting portfolio:", error);
    }
  };

  const openEditModal = (article) => {
    setCurrentArticle(article);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setCurrentArticle(null);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentArticle({ ...currentArticle, [name]: value });
  };

  const handleEditFileChange = (e) => {
    setCurrentArticle({ ...currentArticle, image: e.target.files[0] });
  };

  const handleUpdatePortfolio = async () => {
    const formData = new FormData();
    formData.append("project_title", currentArticle.project_title);
    formData.append("category", currentArticle.category);
    formData.append("description", currentArticle.description);
    if (currentArticle.image instanceof File) {
      formData.append("image", currentArticle.image);
    }
    formData.append("_method", "PUT");

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/updateArticle/${currentArticle.id}`,
        formData
      );
      const updatedPortfolio = {
        ...response.data.data.article,
        image2: response.data.data.image_url,
      };
      setPortfolios(
        portfolios.map((portfolio) =>
          portfolio.id === updatedPortfolio.id ? updatedPortfolio : portfolio
        )
      );
      window.location.reload();
      closeEditModal();
    } catch (error) {
      console.error("Error updating portfolio:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Panel</h2>

      <div className="portfolio-section mb-5">
        <h3>Portfolios</h3>
        <PortfolioForm
          newPortfolio={newPortfolio}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
          handleCreatePortfolio={handleCreatePortfolio}
        />
        <PortfolioList
          portfolios={portfolios}
          handleDeletePortfolio={handleDeletePortfolio}
          openEditModal={openEditModal}
        />
      </div>

      <div className="contact-section">
        <h3>Contact Messages</h3>
        <ContactList contacts={contacts} />
      </div>

      <EditPortfolioModal
        editModalOpen={editModalOpen}
        closeEditModal={closeEditModal}
        currentArticle={currentArticle}
        handleEditInputChange={handleEditInputChange}
        handleEditFileChange={handleEditFileChange}
        handleUpdatePortfolio={handleUpdatePortfolio}
      />
    </div>
  );
};

export default Admin;
