import React, {useState, useEffect} from 'react';
import CardSession from '../../Components/CardSession/CardSession';
import {useParams} from "react-router-dom";
import Error500 from "../../Components/Error/Error500";
import axios from "axios";
import SidebarSession from "../../Components/SidebarSession/SidebarSession";
import Loading from "../../Components/Loading/Loading";
import TableBooking from "../../Components/Table/Booking/TableBooking";
import PageTitle from "../../Components/PageTitle/PageTitle";
import {Breadcrumb} from "react-bootstrap";
import "./Session.css";

function SessionDetailPage(props) {
    let {id} = useParams();
    
    //state for session
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataSession, setDataSession] = useState([]);
    const [error, setError] = useState();

    const handleFetch = async () => {
        let result;
        try {
            const instance = axios.create({
                baseURL: "https://reservaksin-be.herokuapp.com",
            });
            result = await instance.get(`/session/${id}`);
            setIsLoaded(true);
            setDataSession(result.data.data);
        } catch (err) {
            if (err.response.status === 500) {
                return <Error500 />;
            }
            console.log(err);
            setIsLoaded(true);
            setError(err);
        }
    };

    //state for user in this session
    const [isLoadedUser, setIsLoadedUser] = useState(false);
    const [dataSessionUser, setDataSessionUser] = useState([]);
    const [errorUser, setErrorUser] = useState();
    const handleFetchUser = async () => {
        let result;
        try {
            const instance = axios.create({
                baseURL: "https://reservaksin-be.herokuapp.com",
            });
            result = await instance.get(`booking/session/${id}`);
            setIsLoadedUser(true);
            setDataSessionUser(result.data.data);
        } catch (err) {
            if (err.response.status === 500) {
                return <Error500 />;
            }
            console.log(err);
            setIsLoadedUser(true);
            setErrorUser(err);
        }
    };

    useEffect(() => {
        handleFetch();
        handleFetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // booking/session/:id
    console.log("isi data session", dataSession)
    return (
        <div className='page-wrapper'>
            <PageTitle title="Detail Sesi"/>
            <Breadcrumb className="mx-5">
                <Breadcrumb.Item href="/session">Session</Breadcrumb.Item>
                <Breadcrumb.Item active>{dataSession.name_session}</Breadcrumb.Item>
            </Breadcrumb>
            <CardSession data={dataSession}/>
            <section className="t-session-det row mx-auto mt-5">
                <div className="col-md-3">
                    <h5 className="font-weight-bold mb-2 txt-sub" style={{marginLeft:"3vw"}}>Filter</h5>
                    <SidebarSession handleFetch={handleFetch}/>
                </div>
                {!isLoaded ? (
                    <Loading />
                ) : (
                    <div className="col-md-9">
                        <h5 className="font-weight-bold mb-2 txt-sub">Data Pendaftar</h5>
                        <TableBooking data={dataSessionUser} handleFetch={handleFetchUser}/>
                    </div>
                )}
            </section>
        </div>
    );
}

export default SessionDetailPage;