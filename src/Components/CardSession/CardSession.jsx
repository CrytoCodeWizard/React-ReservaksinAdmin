import React from "react";
import { FaRegHospital, FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import "./Card.css";
import {GetTime} from "../../Utilities/DateFormatter/GetTime";

function CardSession({data}) {
  var n = new Date(data?.date);
  var date = n.toLocaleString("id-ID", {dateStyle:"full"});
  
  var jm = GetTime(data?.start_session)
  var js = GetTime(data?.end_session)
  const jam = `${jm} - ${js}`;

  return (
    <div className="card mb-3 mx-auto card-session-wrapper">
      <div className="card-body px-5">
        <div className="row">
          <div className="col-md-8">
            <table className="table table-borderless table-session">
              <tbody className="text-session-detail">
                <tr>
                  <td>
                    <FaRegHospital color="#0A508D" size="25" />
                    <span className="px-3">{data?.health_facilities?.name_facilities}</span>
                  </td>
                  <td>
                    <HiOutlineUserGroup color="#0A508D" size="25" />
                    <span className="px-3">{data?.capacity} orang</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaRegCalendarAlt color="#0A508D" size="25" />
                    <span className="px-3">{date}</span>
                  </td>
                  <td>
                    <AiOutlineClockCircle color="#0A508D" size="25" />
                    <span className="px-3">{jam}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4 col-vaccine">
            <div className="text-center container-fluid vaccine-session">
              <h5>{data.vaccine?.nama_vaksin}</h5>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSession;
