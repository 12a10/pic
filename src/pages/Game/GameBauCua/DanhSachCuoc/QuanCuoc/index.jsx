import React from 'react';
import { useDispatch } from 'react-redux';
import { datCuoc } from '../../../../../redux/actions/Game/GameBauCuaAction';
import './index.css'

export default function QuanCuoc(props) {
    const dispatch = useDispatch();
    const { quanCuoc } = props;

    return (
        <div className="mt-5 mb-5 text-center">
            <div className="image-container">
                <img src={quanCuoc.img} alt="img.jpg" />
            </div>
            <div className="text-center mt-2" style={{ fontSize: 20 }}>
                <button className="btn btn-danger" onClick={() => {
                    dispatch(datCuoc(quanCuoc, -100));
                }}>
                    <i className="fa fa-minus"></i>
                </button>

                <span className="m-3" style={{ color: 'yellow' }}>{quanCuoc.diemCuoc}</span>

                <button className="btn btn-success" onClick={() => {
                    dispatch(datCuoc(quanCuoc, 100));
                }}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    );
}