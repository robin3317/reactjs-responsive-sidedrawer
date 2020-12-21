import RouteData from '../../routeData'
import './side-drawer.scss'

const SideDrawer = ({ isOpen, toggleSideDrawerHandler }) => (
  <nav className={`side-drawer ${isOpen ? 'show' : ''}`}>
    <span className="close" onClick={toggleSideDrawerHandler}>
      &#x274C;
    </span>
    <p className="brand">Brand Name</p>
    <ul>
      {RouteData.map((item, index) => (
        // You may use Link or a tag for navigation
        <li key={index}>{item.route}</li>
      ))}
    </ul>
  </nav>
)

export default SideDrawer
