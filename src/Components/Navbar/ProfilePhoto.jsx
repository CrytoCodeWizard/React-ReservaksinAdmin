import React from 'react';
import {RiUserFill} from 'react-icons/ri';

function ProfilePhoto(props) {
    return (
        <div>
            <div className="rounded-circle text-center">
                <RiUserFill/>
            </div>
        </div>
    );
}

export default ProfilePhoto;