const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div>
      <div>
        <img
          className="img"
          src={image}
          width="300px"
          height="300px"
          alt="User avatar"
        />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key}>
            <span>{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;