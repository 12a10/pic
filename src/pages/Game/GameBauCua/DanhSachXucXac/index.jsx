import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playGame } from '../../../../redux/actions/Game/GameBauCuaAction';
import XucXac from './XucXac';
import './index.css'
export default function DanhSachXucXac(props) {

    const mangXucXac = useSelector(state => state.GameBauCuaReducer.mangXucXac);

    const dispatch = useDispatch();

    return (
        <div className="mt-5 pt-5 text-center">
            <div className="text-center" >

                <div className="dice-container text-center">
                        <div className="col-6  text-center">
                            <div className="mr-5">
                                <XucXac xucXac={mangXucXac[1]} />
                            </div>
                        </div>
                        <div className="col-6  text-center">
                            <div className="ml-5">
                                <XucXac xucXac={mangXucXac[1]} />
                            </div>
                        </div>
                        <div className="col-6  text-center">
                            <div className="mr-5">
                                <XucXac xucXac={mangXucXac[2]} />
                            </div>
                        </div>
                </div>
                <div className="mt-15">
                    <button className="btn btn-danger pl-5 pr-5" 
                        onClick={() => {
                            let count = 0;
                            var playGameInterval = setInterval(() => {
                                count++;
                                dispatch(playGame(count === 50));
                                if (count === 50) {
                                    clearInterval(playGameInterval);
                                }
                            }, 20);
                        }}>
                        Xốc
                    </button>
                </div>
            </div>
        </div>
    )
}