const Card = (props) => {
  const { children, title } = props;
  return (
    <div className="col-md-2 m-2 jusitify-content-center">
      <div className="card card_body" style={{ width: "10rem" }}>
        <div className="card-body text-center">
          {children}
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
