import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfiles } from '../actions';
import _ from 'lodash';
import ProfileRow from '../components/profile-row';




class ProfileList extends Component {

  componentDidMount() {
    this.props.fetchProfiles(10);
  }

  renderProfiles() {
    const rows = [];
    _.map(this.props.profiles, profile => {
      rows.push(
        <li key={profile.email} className="list-group-item">
          <ProfileRow profile={profile}/>
        </li>
      );
    });
    return rows;
  }

  render() {
    return (
      <div>
        <h1>Profile list here</h1>
        <ul className="list-group">
          {this.renderProfiles()}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {profiles: state.profiles};
}

export default connect(mapStateToProps,{ fetchProfiles })(ProfileList);
