import React, { useState } from "react";
import {
  AiOutlineAppstoreAdd,
  AiOutlineCode,
  AiOutlineLayout,
} from "react-icons/ai";
import Modal from "../services/modal"; // Impor komponen modal
import ServiceCard from "./serviceCard";
import "./services.css";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", details: [] });

  const handleCardClick = (title, details, desc) => {
    setModalContent({ title, details, desc });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="services section" id="services">
        <div className="container">
          <h2 className="section_title">Services</h2>
          <span className="section_subtitle">What I offer</span>
          <div className="row">
            <ServiceCard
              title="Frontend design"
              onClick={() =>
                handleCardClick(
                  "Frontend design",
                  [
                    "~ Membuat desain responsif",
                    "~ Melakukan desain user interface",
                    "~ Mengoptimalkan performa UI",
                  ],
                  "Berpengalaman dalam menggunakan berbagai frontend library dan framework seperti react, bootstrap, tailwind, dan mui"
                )
              }
            >
              <AiOutlineLayout className="service_icon" />
            </ServiceCard>
            <ServiceCard
              title="Backend Engineering"
              onClick={() =>
                handleCardClick(
                  "Backend Engineering",
                  [
                    "~ Mengembangkan API",
                    "~ Mengelola database",
                    "~ Mengembangkan konsep MVC",
                  ],
                  "Pengalaman terlibat dalam proyek dosen membangun sistem informasi dashboard inovasi di Telkom University"
                )
              }
            >
              <AiOutlineCode className="service_icon" />
            </ServiceCard>
            <ServiceCard
              title="Internet of Things"
              onClick={() =>
                handleCardClick(
                  "Internet of Things",
                  [
                    "~ Mengintegrasikan perangkat IoT",
                    "~ Membuat dashboard IoT",
                    "~ Mengelola data sensor",
                  ],
                  "Berpengalaman sebagai asisten laboratorium IoT Studio Fakultas Informatika Telkom University sebagai modal dalam pengembangan IoT"
                )
              }
            >
              <AiOutlineAppstoreAdd className="service_icon" />
            </ServiceCard>
          </div>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        desc={modalContent.desc}
      >
        {modalContent.details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </Modal>
    </>
  );
};

export default Services;
