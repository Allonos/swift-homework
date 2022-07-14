const UserDescription = ({ user }) => {
  return (
    <div className='profile-content'>
      <div className='profile-header'>
        <img className='profile-img' src={`${user.imageUrl}?v=${user.id}`} />
        <div className='in-profile-info'>
          <div className='in-in-profile-info'>
            <p id="float-info">Info</p>
            <h1 className='name'>{`${user.prefix} ${user.name} ${user.lastName}`}</h1>
            <p>{user.title}</p>
            <div className='informations'>
              <p><span>Email:</span> {user.email}</p>
              <p><span>Ip Adress:</span> {user.ip}</p>
              <p><span>Ip Adress:</span> {user.ip}</p>
              <p><span>Job Area:</span> {user.jobArea}</p>
              <p><span>Job Type:</span> {user.jobType}</p>
            </div>
          </div>

        </div>
        <div className='profile-right-header'>
          <div className='in-profile-right-header'>
            <p id='float-adress'>Adress</p>
            <h1>{user.company?.name} {user.company?.suffix}</h1>
            <div className='right-header-info'>
              <p><span>City:</span> {user.address?.city}</p>
              <p><span>Country:</span> {user.address?.country}</p>
              <p><span>State:</span> {user.address?.state}</p>
              <p><span>Street Adress:</span> {user.address?.streetAddress}</p>
              <p><span>ZIP:</span> {user.address?.zipCode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDescription;
