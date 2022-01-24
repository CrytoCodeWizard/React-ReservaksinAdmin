import React from 'react';
import './Unauth.css';
import {useNavigate} from 'react-router-dom';
import UnauthIllustration from "./UnauthIllustration";

function Unauthorized(props) {
    const navigate = useNavigate();
    return (
        <div>
          {/* <div className="gandalf">
            <div className="fireball" />
            <div className="skirt" />
            <div className="sleeves" />
            <div className="shoulders">
              <div className="hand left" />
              <div className="hand right" />
            </div>
            <div className="head">
              <div className="hair" />
              <div className="beard" />
            </div>
          </div> */}
          <div className="text-center mt-4"><UnauthIllustration/></div>
          <div className="message mt-4">
            <h1>Waduh, tujuamu gak ada!</h1>
            <p>Mungkin kamu salah jalan atau alamat. Ayo balik sebelum gelap!</p>
            <button className="btn btn-primary mb-3 mt-3" style={{width:"25%", margin:"0 auto"}} onClick={() => navigate('/login')}>Login</button>
          </div>
        </div>
      );
}

export default Unauthorized;