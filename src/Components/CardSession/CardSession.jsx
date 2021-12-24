import React from "react";
import { FaRegHospital, FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import "./Card.css";

function CardSession({data}) {
  var n = new Date(data.tanggal);
  var date = n.toLocaleString("id-ID", {dateStyle:"full"});

  // var waktu = data.start + " - " + data.end;
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
                    <span className="px-3">{data.lokasi}</span>
                  </td>
                  <td>
                    <HiOutlineUserGroup color="#0A508D" size="25" />
                    <span className="px-3">{data.kapasitas} orang</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaRegCalendarAlt color="#0A508D" size="25" />
                    <span className="px-3">{date}</span>
                  </td>
                  <td>
                    <AiOutlineClockCircle color="#0A508D" size="25" />
                    <span className="px-3">10:00 - 12:00 WITA</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4 col-vaccine">
            <div className="text-center container-fluid vaccine-session">
              <h5>Sinovac</h5>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSession;
