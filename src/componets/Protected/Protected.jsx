import React, { useEffect, useState } from 'react'
import "./Protected.css"
import { useNavigate } from 'react-router-dom'
import c1 from "../assets/country-1.jpg"
import c2 from "../assets/country-2.jpg"
import c3 from "../assets/country-3.jpg"
import c4 from "../assets/country-4.jpg"
import c5 from "../assets/country-5.jpg"
import g1 from "../assets/grid-1.jpg"
import g2 from "../assets/grid-2.jpg"
import g3 from "../assets/grid-3.jpg"
import { FaEarthAfrica } from "react-icons/fa6";
import { RiRoadMapLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

function Protected() {
  const navigation = useNavigate();
  const [name,SetName] = useState('your Name')
  const check = async ()=>{
    const Token = Cookies.get("Token")
    if(Token){
      const jwt =await jwtDecode(Token)
      if(jwt.user.status){
          SetName(jwt.user.username)
      }
      else{
        navigation('/')
      }
    }else{
      navigation('/')
    }
  }
  useEffect(
    ()=>{
      check()
    },[Cookies.get("Token")])
  return (
    <>
      <nav>
        <div className="nav__logo">
          <a href="#">Travel.co</a>
        </div>
        <div className="nav__links">
          <p style={{color:'white',fontSize:'25px'}}>Welcome {name}</p>
          <FaUserCircle size={30} color='white' style={{cursor:'pointer'}}/>
        </div>
      </nav>
      <header>
        <div className="section__container">
          <div className="header__content">
            <h1>Travel</h1>
            <p>
              Embark on a journey of a lifetime and explore the world's most
              breathtaking destinations with our expert travel advice. From exotic
              beaches to cultural wonders, we've got you covered with our
              comprehensive travel guides and insider tips.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </header>
      <section className="journey__container">
        <div className="section__container">
          <h2 className="section__title">Start Your Journey</h2>
          <p className="section__subtitle">The most searched countries in March</p>
          <div className="journey__grid">
            <div className="country__card">
              <img src={c1} alt="country" />
              <div className="country__name">
               <FaMapMarkerAlt/>
                <span>Santorini, Greece</span>
              </div>
            </div>

            <div className="country__card">
              <img src={c2} alt="country" />
              <div className="country__name">
                <FaMapMarkerAlt/>
                <span>Vernazza, Italy</span>
              </div>
            </div>

            <div className="country__card">
              <img src={c3} alt="country" />
              <div className="country__name">
                <FaMapMarkerAlt/>
                <span>Vernazza, Italy</span>
              </div>
            </div>

            <div className="country__card">
              <img src={c4} alt="country" />
              <div className="country__name">
                <i className="ri-map-pin-2-fill"></i>
                <span>Vernazza, Italy</span>
              </div>
            </div>

            <div className="country__card">
              <img src={c5} alt="country" />
              <div className="country__name">              
              <FaMapMarkerAlt/>
                <span>Vernazza, Italy</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className="banner__container">
        <div className="section__container">
          <div className="banner__content">
            <h2>Discount 10-30% Off</h2>
            <p>
              Travel the world on a budget with our unbeatable discounted travel
              deals. Whether you're looking for a last-minute escape or planning
              ahead, we've got you covered with incredible discounts on flights,
              hotels, and packages. Don't wait, book now and experience the
              adventure of a lifetime without breaking the bank.
            </p>
            <button>See Tours</button>
          </div>
        </div>
      </section>
      <section className="display__container">
        <div className="section__container">
          <h2 className="section__title">Why Choose Us</h2>
          <p className="section__subtitle">
            The gladdest moment in human life, is a departure into unknown lands.
          </p>
          <div className="display__grid">
            <div className="display__card grid-1">
              <img src={g1} alt="grid" />
            </div>
            <div className="display__card">
            <FaEarthAfrica size={40} color='#669ccb'/>
              
              <h4>Passionate Travel</h4>
              <p>Fuel your passion for adventure and discover new horizons</p>
            </div>
            <div className="display__card">
              <img src={g2} alt="grid" />
            </div>
            <div className="display__card">
              <img src={g3} alt="grid" />
            </div>
            <div className="display__card">
            <RiRoadMapLine size={40} color='#669ccb'/>
              <h4>Beautiful Places</h4>
              <p>Uncover the world's most breathtakingly beautiful places</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="section__container">
          <h4>Travel.co</h4>
          <div className="social__icons">
            <span><i className="ri-facebook-fill"></i></span>
            <span><i className="ri-twitter-fill"></i></span>
            <span><i className="ri-instagram-line"></i></span>
            <span><i className="ri-linkedin-fill"></i></span>
          </div>
          <p>
            Travel makes one modest. You see what a tiny place you occupy in the
            world.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Protected