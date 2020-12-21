import './backdrop.scss'

const Backdrop = ({ toggleSideDrawerHandler }) => (
  <div className="backdrop" onClick={toggleSideDrawerHandler}></div>
)

export default Backdrop
