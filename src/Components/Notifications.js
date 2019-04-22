import React, {Component} from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from 'moment';
import styled from 'styled-components';

const Username = styled.span`
    color:  ${props => props.theme.primaryColor};
`;

class Notifications extends Component {
   render(){
       const { notifications } = this.props;
       return(
            <>
            <ul className="list-group ml-1 mr-1">
               {
                   notifications && notifications.map(item => {
                    return (
                        <li key={item.id} className="list-group-item text-secondary">
                            <Username>{item.user} </Username>
                            <span>{item.content}</span><br/>
                            <span className="text-black-50"><small>{moment(item.time.toDate()).fromNow()}</small></span>
                        </li>
                    )
                   })
               } 
            </ul>
            </>
       );
   }
};

const mapStateToProps = state => {
    console.log("Notificatiosn", state);
    return {
      notifications: state.firestore.ordered.notifications,
    };
  };

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "notifications", limit: 3 }])
  )(Notifications);