import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Profile extends Component {
  constructor(props) {
    super(props);
  }

  renderProfileData(profile) {
    return (
      <table>
        <tr>
          <td>{profile.name.first}</td>
          <td>{profile.name.last}</td>
          <td>{profile.email}</td>
        </tr>
        <tr>
          <td>{profile.location.city}</td>
          <td>{profile.location.state}</td>
          <td>{profile.location.street}</td>
        </tr>
      </table>
    );
  }

  render() {
    const profile = this.props.profiles[this.props.match.params.id];
    return (
      <div>
        <Link to="/profiles">Back to index</Link>
        <table>
          <tr>
            <td>
              <img src={profile.picture.large}/>
            </td>
            <td>
              {this.renderProfileData(profile)}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {profiles: state.profiles};
}

export default connect(mapStateToProps,null)(Profile);
