import PropTypes  from "prop-types"

const UserInfo = ({user}) => {
  return (
    <>
        <div className='flex flex-row justify-between gap-10 mt-1 pt-3'>
            <div><b>Name:</b> {user.fullname}</div>
            <div><b>Email:</b> {user.email}</div>
            <div><b>Role:</b> {user.role}</div>
        </div>
    </>
  )
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    fullname: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.number
  }).isRequired
}

export default UserInfo