import React from 'react';
import './Title.css';

function PageTitle({title}) {
    return (
        <div 
            className="p-3 mx-4 title"
           >
            {title}
        </div>
    );
}

export default PageTitle;