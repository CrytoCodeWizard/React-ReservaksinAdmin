import React from 'react';
import {RiUserFill} from 'react-icons/ri';

function ProfilePhoto(props) {
    return (
        <div>
            <img className="rounded-circle" 
            style={{
                border:"2px solid navy",
                width:"50px",
                height:"50px",
                marginLeft:"2vw"
            }}
            src="https://kerma.widyatama.ac.id/wp-content/uploads/2021/05/blank-profile-picture-973460_1280.png"
            alt="profile">
            </img>
        </div>
    );
}

export default ProfilePhoto;