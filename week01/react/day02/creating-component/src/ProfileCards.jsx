const ProfileCard = ({
  name,
  title,
  bio,
  skills = [],
  contact = {},
  view = "detailed" // default value
}) => {
  return (
    <div className={`profile-card ${view}`}>
      <h2>{name}</h2>
      <h4>{title}</h4>
        <p className="bio">{bio}</p>


        <div>
          <strong>Skills:</strong>
          <ul>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <p><strong>Email:</strong> {contact.email}</p>

    </div>
  );
};

export default ProfileCard;
