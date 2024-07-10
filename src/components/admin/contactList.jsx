import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div className="list-group">
      {contacts.map((contact) => (
        <div key={contact.id} className="list-group-item">
          <h5>{contact.name}</h5>
          <p>{contact.email}</p>
          <p>{contact.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
