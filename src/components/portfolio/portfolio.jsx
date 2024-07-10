import axios from "axios";
import React, { useEffect, useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/getArticles"
        );
        console.log(response.data); // Logging respons API
        if (Array.isArray(response.data.data)) {
          // Map the response data to include image_url
          const items = response.data.data.map((item) => ({
            ...item,
            image2: item.image_url, // Use the complete image URL
          }));
          setPortfolioItems(items);

          // Extract categories
          const allCategories = items.map((item) => item.category);
          setCategories(["all", ...new Set(allCategories)]);
        } else {
          console.error("API response is not an array");
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <>
      <div id="portfolio"></div>
      <section className="portfolio section">
        <div className="container">
          <h2 className="section_title">Portfolio</h2>
          <span className="section_subtitle">My Projects</span>

          {/* Category Filter */}
          <div className="categories">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="row">
            {filteredItems.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="card card-portfolio">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.project_title}
                    onError={(e) => console.error("Image failed to load:", e)}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.project_title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a
                      href="https://github.com/fadrahmangama?tab=repositories"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
