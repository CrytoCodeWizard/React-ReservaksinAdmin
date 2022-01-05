import React from 'react';

function TableSession({data}) {
    return (
        <div>
            <thead style={{height:"25px"}}>
                    <tr className="bg-green text-white py-3">
                        <th scope="col">#</th>
                        <th scope="col">Sesi</th>
                        <th scope="col">Tanggak</th>
                        <th scope="col">Mulai</th>
                        <th scope="col">Selesai</th>
                        <th scope="col">Lokasi</th>
                        <th scope="col">Vaksin</th>
                        <th scope="col">Kapasitas</th>
                    </tr>
                </thead>
        </div>
    );
}

export default TableSession;