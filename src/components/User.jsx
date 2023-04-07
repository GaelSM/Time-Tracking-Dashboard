import imageUser from "../assets/image-jeremy.png"

function User({handleClick}) {
  return (
    <div className="user-container">
      <div className="user-container__header">
        <img src={imageUser} alt="Jeremy Photo" />
        <div className="order-name">
          <h3> Report for </h3>
          <h1> Jeremy Robson</h1>
        </div>
      </div>
      <div className="user-container__body">
        <h3 onClick={handleClick}>Daily</h3>
        <h3 onClick={handleClick}>Weekly</h3>
        <h3 onClick={handleClick}>Monthly</h3>
      </div>
    </div>
  )
}

export default User