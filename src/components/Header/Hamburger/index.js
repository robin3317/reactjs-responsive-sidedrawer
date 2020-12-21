import './hamburger.scss'

const Hamburger = ({ toggleSideDrawerHandler }) => (
  <div className="hamburger">
    <div className="line-container" onClick={toggleSideDrawerHandler}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <div className="nav">
      <p className="brand">Brand Name</p>
    </div>
  </div>
)

export default Hamburger
