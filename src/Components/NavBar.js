import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${props => props.theme.primaryColor};
`;

const ProfilePicture = styled.button`
  background: ${props => props.theme.primaryColor};
  border: none;
`;

const Notification = styled.span`
  font-size: 1.5rem;
  color: white;
  margin-right: 3rem;
`;

const Dropdown = styled.ul`
  position: absolute;
  right: 10px;
  background-color: ${props => props.theme.primaryColor};
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 20%;
`;

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: true,
      dropdownShown: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  showMenu(e) {
    e.preventDefault();
    this.setState(
      {
        dropdownShown: true
      },
      () => {
        document.addEventListener("click", this.closeMenu);
      }
    );
  }

  closeMenu(e) {
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState(
        {
          dropdownShown: false
        },
        () => {
          document.removeEventListener("click", this.closeMenu);
        }
      );
    }
  }
  render() {
    return (
      <>
        <Nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/home">
            <img
              src={logo}
              alt="logo"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
                  &nbsp;&nbsp;Dashboard
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/home">
                  <FontAwesomeIcon icon={faPlusSquare} className="icon" />
                  &nbsp;&nbsp;Eingabe
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/termine">
                  <FontAwesomeIcon icon={faPencilAlt} className="icon" />
                  &nbsp;&nbsp;Bearbeitung
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/einstellungen">
                  <FontAwesomeIcon icon={faGlasses} className="icon" />
                  &nbsp;&nbsp;Kontrollieren
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Notification>
                  <FontAwesomeIcon icon={faBell} className="icon" />
                </Notification>
              </li>
              <li id="userAccount" className="nav-item">
                <ProfilePicture className="dropdownBtn" onClick={this.showMenu}>
                  <img
                    id="profilePic"
                    src={this.props.photoURL}
                    className="rounded-circle"
                    alt="profile"
                    width="40"
                    height="40"
                  />
                </ProfilePicture>
              </li>
            </ul>
          </div>
        </Nav>
        {this.state.dropdownShown ? (
          <Dropdown
            className="nav flex-column"
            ref={e => {
              this.dropdownMenu = e;
            }}
          >
            <li className="nav-item">
              <a className="nav-link  no-style" href="/test">
                <FontAwesomeIcon icon={faUser} className="icon" />
                &nbsp;&nbsp;Profil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/test">
                <FontAwesomeIcon icon={faPlusSquare} className="icon" />
                &nbsp;&nbsp;Redakteur hinzufügen
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={this.props.logout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                &nbsp;&nbsp;Logout
              </a>
            </li>
          </Dropdown>
        ) : null}
      </>
    );
  }
}

export default NavBar;
