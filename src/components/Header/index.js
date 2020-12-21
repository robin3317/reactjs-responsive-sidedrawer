import Hamburger from './Hamburger'
import RouteData from '../../routeData'
import './header.scss'

const Header = ({ toggleSideDrawerHandler }) => (
  <header className="header">
    <Hamburger toggleSideDrawerHandler={toggleSideDrawerHandler} />
    <div className="header-container">
      <p className="brand">Brand Name</p>
      <nav className="nav">
        <ul>
          {RouteData.map((item, index) => (
            // You may use Link or a tag for navigation
            <li key={index}>{item.route}</li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
