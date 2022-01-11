import React from 'react';
import CardRiwayatVaksin from '../../Components/CardRiwayatVaksin/CardRiwayatVaksin';
import TimelineContoh from '../../Components/CardRiwayatVaksin/Timeline';
import UserForm from '../../Components/UserForm/UserForm';
import PageTitle from '../../Components/PageTitle/PageTitle';

function UserPage() {
    return (
        <div className="page-wrapper">
            <PageTitle title="User Management" />
            <div>
                <CardRiwayatVaksin />
                <TimelineContoh />
                <section>
                    <UserForm />
                </section>
            </div>
        </div>
    );
}

export default UserPage;