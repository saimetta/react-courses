import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ProfileRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { profile: { name: {first,last}} } = this.props;
    const { profile: { picture: { thumbnail: imgUrl}}} = this.props;
    const { profile: { email: id }} = this.props;
    return (
        <div>
          <img src={imgUrl} title={` ${first} ${last}`}/>
          <Link to={`/profiles/${id}`}>
            <span className="profile-name">{` ${first} ${last}`}</span>
          </Link>
        </div>
    );
  }
}
