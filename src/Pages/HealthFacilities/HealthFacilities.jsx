import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux"
import TableFrame from "../../Components/Table/TableFrame";
import { FaskesData } from "../Models/StaticFaskes";
import ActionButtonFaskes from "../../Components/ActionButton/ActionButtonFaskes";
import PageTitle from "../../Components/PageTitle/PageTitle";
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import _ from "lodash";

function HealthFacilities() {
    
    //get user id from persist
    const USER_ID = useSelector((state) => state.auth.id)

    //state for health facilites
    const [isLoaded, setIsLoaded] = useState(false)
    const [dataFaskes, setDataFaskes] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        const handleFetch = async () => {
            let result;
            try{
                const instance = axios.create({baseURL: 'http://localhost:9090'})
                result = await instance.get(`/health-facilities/admin/${USER_ID}`)
                setIsLoaded(true);
                setDataFaskes(result.data.data)
            }
            catch(err){
                console.log(err)
                setIsLoaded(true)
                setError(err)
            }
        }
        handleFetch();
    }, [USER_ID])

    //filter data with lodash:
    
    return (
        <div className="page-wrapper">
                <PageTitle title="Health Facilities" />
                <section>
                    <ActionButtonFaskes />
                </section>
                {!isLoaded ?
                    <Loading/>
                :
                <section className="t-faskes">
                    <TableFrame data={dataFaskes} domain="faskes" />
                </section>
 }
        </div>
    );
}

export default HealthFacilities;
