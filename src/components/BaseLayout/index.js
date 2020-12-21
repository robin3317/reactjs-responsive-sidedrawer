import { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './baseLayout.scss'
import SideDrawer from '../SideDrawer'
import Backdrop from '../Backdrop'

const BaseLayout = (props) => {
  const [isOpenSideDrawer, setIsOpenSideDrawer] = useState(false)

  const toggleSideDrawerHandler = () => {
    setIsOpenSideDrawer(!isOpenSideDrawer)
  }

  return (
    <>
      <SideDrawer
        isOpen={isOpenSideDrawer}
        toggleSideDrawerHandler={toggleSideDrawerHandler}
      />
      {isOpenSideDrawer ? (
        <Backdrop toggleSideDrawerHandler={toggleSideDrawerHandler} />
      ) : null}
      <Header toggleSideDrawerHandler={toggleSideDrawerHandler} />
      <main className={`base-layout ${props.className ? props.className : ''}`}>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default BaseLayout
