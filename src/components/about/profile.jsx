const Profile = (props) => {
  const { fullName, occasion, email, phone } = props;
  return (
    <>
      <p>
        <strong>Name: </strong> <span>{fullName}</span>
      </p>
      <p>
        <strong>Profile: </strong> <span>{occasion}</span>
      </p>
      <p>
        <strong>Email: </strong> <span>{email}</span>
      </p>
      <p>
        <strong>Phone: </strong> <span>{phone}</span>
      </p>
    </>
  );
};

export default Profile;
