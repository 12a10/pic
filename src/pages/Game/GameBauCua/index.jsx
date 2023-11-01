import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import DiemCuoc from './DiemCuoc'
import './index.css';

export default function GameBauCua(props) {
    return (
        <div  id="BaiTapGameBauCua">
            <DiemCuoc />
            <DanhSachXucXac />
             <DanhSachCuoc />
          
        </div>
    )
}