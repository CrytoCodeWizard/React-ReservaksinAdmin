import React from 'react';
import {MdSort} from 'react-icons/md';
import {IoMdAddCircle} from 'react-icons/io';
import './ActionBtn.css';

function ActionButtonFaskes(props) {
    return (
        <div className='container-fluid action-wrapper'>
            <div className="search col-md-4 py-2">
                <form action="" className='d-flex'>
                    <input type="text" className='form-control mx-2' placeholder='Cari berdasarkan nama..'/>
                    <button className='btn btn-outline-primary mx-2 text-dark' type='submit'>Cari</button>
                </form>
            </div>
            <div className="sort-and-add col-md-4 py-2">
                <button type="button" className='btn btn-sort mx-2'>
                    Sort <MdSort color='#0A3E66'/>
                </button>
                <button type="button" className='btn btn-primary mx-2'>
                    Add <IoMdAddCircle color='white' size={20}/>
                </button>
            </div>

            
        </div>
    );
}

export default ActionButtonFaskes;