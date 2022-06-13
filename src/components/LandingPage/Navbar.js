// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import styles from "../../styles/Navbar.module.css";
function Navbar() {

  // OPEN SIDEBAR
  const [openNav, setOpenNav] = useState(false);

  // OPEN DuendeWorld LIST
  const [openDuendeWorldList, setOpenDuendeWorldList] = useState(false);

  // OPEN Legal LIST
  const [openLegalList, setOpenLegalList] = useState(false);


  // Change Navbar Bg Color on Scroll
  const [navBar, setNavBar] = useState(false);

  const navBarBg = () => {
    if (window.scrollY >= 10) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", navBarBg);
 

  return (
    <>
    {/* NAVBAR */}
      <nav
        className={
          navBar ? `${styles.D_navbar} ${styles.active}` : `${styles.D_navbar}`
        }
      >
        <div className="container">
          <div
            className={
              navBar ? `${styles.inner} ${styles.active}` : `${styles.inner}`
            }
          >
            {/* LOGO */}
            <div
              className={
                navBar ? `${styles.logo} ${styles.active}` : `${styles.logo}`
              }
            >
              <Link to={`/`}>
              <img src={logo} alt="logo" className="logo_img"/>
              </Link>
            </div>

            <div
              className={
                openNav ? `${styles.links} ${styles.active}` : `${styles.links}`
              }
            >
              {/* LINKS */}
              <ul
                className={
                  navBar
                    ? `${styles.navbar_list} ${styles.active}`
                    : `${styles.navbar_list}`
                }
              >
                <li onClick={
                  () => {
                    //goto about page
                    window.location.href = "/about";
                }}>About
                  {/* <Link to={`/about`}>About</Link> */}
                  </li>
                <li onClick={
                  () => {
                    //goto about page
                    window.location.href = "/faq";
                }}>
                  FAQ
                  {/* <Link to={`/faq`}>FAQ</Link> */}
                </li>
                <li
                  onClick={() => setOpenDuendeWorldList(!openDuendeWorldList)}
                >
                  <span>
                    Duende World<i className="fa fa-angle-down"></i>
                    <div
                      className={
                        openDuendeWorldList
                          ? `${styles.holder_hidden_list} ${styles.active}`
                          : `${styles.holder_hidden_list}`
                      }
                    >
                      {/* HIDDEN LIST */}
                      <ul className={styles.hidden_list}>
                      <li><Link onClick={() => setOpenNav(!openNav)}to={{ pathname: "https://medium.com/duende4world/duende-cryptocurrency-and-its-exclusive-payment-platform-to-facilitate-cryptocurrency-mass-c0a7499d0e81" }} target="_blank" >Whitepaper</Link></li>
                      <li> <Link onClick={() => setOpenNav(!openNav)} to={{ pathname: "https://polygonscan.com/token/0x5e4ab6b3d3b3a8e61b3a58594a4a2ed9d614f604" }} target="_blank">Token Contract Address</Link></li>
                      <li> <Link onClick={() => setOpenNav(!openNav)} to={``}>Three.js</Link></li>
                      <li> <Link onClick={() => setOpenNav(!openNav)}to={``}>Proof of Payment Stream</Link></li>

                      </ul>
                    </div>
                  </span>
                </li>
                <li onClick={() => setOpenLegalList(!openLegalList)}>
                  <span>
                    Legal<i className="fa fa-angle-down"></i>
                    <div
                      className={
                        openLegalList
                          ? `${styles.holder_hidden_list} ${styles.active}`
                          : `${styles.holder_hidden_list}`
                      }
                    >
                      {/* HIDDEN LIST */}
                      <ul className={styles.hidden_list}>
                      <li> <Link onClick={() => setOpenNav(!openNav)} to={`/terms`}>Terms of Services</Link></li>
                      <li> <Link onClick={() => setOpenNav(!openNav)} to={`/policy`}>Privacy Policy</Link></li>
                      </ul>
                    </div>
                  </span>
                </li>
              </ul>
            </div>

            {/* BUTTON */}
            <button className={navBar ? `button ${styles.active}` : `button`}>
              <Link to="signin" target="_blank">Launch App</Link>
            </button>

            {/* HAMBURGER */}
            <div class={styles.hamburger} onClick={() => setOpenNav(!openNav)}>
              <input class={styles.checkbox} type="checkbox" />
              <div
                class={
                  openNav
                    ? `${styles.hamburger_lines} ${styles.active}`
                    : `${styles.hamburger_lines}` && navBar
                    ? `${styles.hamburger_lines} ${styles.color_active}`
                    : `${styles.hamburger_lines}`
                }
              >
                <span class={`${styles.line} ${styles.line1}`}></span>
                <span class={`${styles.line} ${styles.line2}`}></span>
                <span class={`${styles.line} ${styles.line3}`}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
