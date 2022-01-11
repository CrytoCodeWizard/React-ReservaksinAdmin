import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Error500(props) {
    return (
        <div className="full-screen">
          <div className="container cont-error">
            <span className="error-num">5</span>
            <div className="eye" />
            <div className="eye" />
            <p className="sub-text-error mb-4">Oh eyeballs! Something went wrong. We're <i>looking</i> to see what happened.</p>
            <Link className='text-white' to={"/"}>Go Back</Link>
          </div>
        </div>
      );
}

export default Error500;