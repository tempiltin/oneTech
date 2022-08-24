import React from 'react'
import classes from "./Home.module.css"
import Navbar from "../../components/Navbar/Navbar"
import Header from './Header/Header'
import Services from './Services/Services'
import PopularCategories from '../PopularCategories/PopularCategories'

function Home() {
  return (
    <div className={classes.Home}>
        <Navbar/>
        <Header/>
        <Services/>
        <PopularCategories/>
    </div>
  )
}

export default Home