import React from 'react';
import CardRiwayatVaksin from '../../Components/CardRiwayatVaksin/CardRiwayatVaksin';
import TimelineContoh from '../../Components/CardRiwayatVaksin/Timeline';
import UserForm from '../../Components/UserForm/UserForm';

function UserPage() {
    return (
        <div>
            <CardRiwayatVaksin/>
            <TimelineContoh/>
            <section>
                <UserForm/>
            </section>
        </div>
    );
}

export default UserPage;