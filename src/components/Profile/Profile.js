import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate()
  const {
    id,
    imageUrl,
    lastName,
    name,
    prefix,
    title,
  } = user;

  const imgSrc = `${imageUrl}?v=${id}`

  const handleClick = () => {
    navigate(`/user/${id}`)
  }

  return (
    <div className='profile' onClick={handleClick}>
      <img className='img' src={imgSrc} />
      <div className='profile-info'>
        <h1>{`${prefix} ${name} ${lastName}`}</h1>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Profile;
