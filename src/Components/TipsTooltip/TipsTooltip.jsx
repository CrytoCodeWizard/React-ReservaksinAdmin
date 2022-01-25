import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import AddPng from '../../Assets/add.png';
import SubmitPng from '../../Assets/submit.png';
import {MdOutlineTipsAndUpdates} from 'react-icons/md';
import './Tips.css';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function TipsTooltip() {
  return (
    <div className="tips-tooltip">
      <HtmlTooltip
        title={
          <React.Fragment>
            <h5 className="text-center fw-bold mt-2">Tips</h5>
            <ol>
                <li>Jika belum mendaftarkan faskes, silakan daftarkan fakses melalui halaman <a href="/faskes" className="anchor-tooltip">berikut.</a></li>
                <li>Buat session baru melalui tombol <span><img src={AddPng} alt="button" /></span></li>
                <li>Lengkapi formulir dan pilih faskes yang telah Anda daftarkan.</li>
                <li>Simpan perubahan dengan menekan tombol <span><img src={SubmitPng} alt="button" /></span></li>
            </ol>
          </React.Fragment>
        }
      >
        <Button color="primary"><span><MdOutlineTipsAndUpdates size="25"/></span></Button>
      </HtmlTooltip>
    </div>
  );
}
