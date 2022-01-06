import React from 'react';
import UserForm from '../../Components/UserForm/UserForm';
import PageTitle from '../../Components/PageTitle/PageTitle';

function UserPage() {
    return (
        <div className="page-wrapper">
            <PageTitle title="User Management"/>
            <section>
                <UserForm/>
            </section>
        </div>
    );
}

export default UserPage;