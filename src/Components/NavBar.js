import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlusSquare,
  faSignOutAlt,
  faPencilAlt,
  faGlasses,
  faTachometerAlt,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../Store/actions/authActions";
import logo from "../Assets/logo.png";
import styled from "styled-components";
import Notifications from "./Notifications";


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
  width: 20%;
  color: white;
`;

const NotificationDropdown = styled.ul`
  position: absolute;
  right: 60px;
  background-color: ${props => props.theme.primaryColor};
  z-index: 1;
  width: 20%;
  color: white;
  height: 40vh;
  overflow-y: scroll;
`;

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: true,
      dropdownShown: false,
      notificationsShown: false,
      photoURL: ""
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.showNotifications = this.showNotifications.bind(this);
    this.closeNotifications = this.closeNotifications.bind(this);
  }

  componentDidMount() {
    this.setState({
      photoURL: this.props.photoURL
    });
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
    console.log(e);
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
  showNotifications(e) {
    e.preventDefault();
    this.setState(
      {
        notificationsShown: true
      },
      () => {
        document.addEventListener("click", this.closeNotifications);
      }
    );
  }

  closeNotifications(e) {
    if (!this.notification.contains(e.target)) {
      this.setState(
        {
          notificationsShown: false
        },
        () => {
          document.removeEventListener("click", this.closeNotifications);
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
                <NavLink className="nav-link" to="/dashboard">
                  <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
                  &nbsp;&nbsp;Dashboard
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/eingabe">
                  <FontAwesomeIcon icon={faPlusSquare} className="icon" />
                  &nbsp;&nbsp;Eingabe
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/bearbeitung">
                  <FontAwesomeIcon icon={faPencilAlt} className="icon" />
                  &nbsp;&nbsp;Bearbeitung
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/kontrollieren">
                  <FontAwesomeIcon icon={faGlasses} className="icon" />
                  &nbsp;&nbsp;Kontrollieren
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Notification onClick={this.showNotifications}>
                  <FontAwesomeIcon icon={faBell} className="icon" />
                </Notification>
              </li>
              <li id="userAccount" className="nav-item">
                <ProfilePicture className="dropdownBtn" onClick={this.showMenu}>
                  <img
                    id="profilePic"
                    src={logo}
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
              <a className="nav-link  no-style" href="/profil">
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
              <a className="nav-link" href="/" onClick={this.props.signOut}>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                &nbsp;&nbsp;Logout
              </a>
            </li>
          </Dropdown>
        ) : null}
        {this.state.notificationsShown ? (
          <NotificationDropdown
            className="nav flex-column"
            ref={e => {
              this.notification = e;
            }}
          >
          <Notifications/>
          </NotificationDropdown>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
