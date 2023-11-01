import React from 'react';
import QuanCuoc from './QuanCuoc';
import { useSelector } from 'react-redux';
import { Card, List } from 'antd';

export default function DanhSachCuoc(props) {

    const danhSachCuoc = useSelector(state => state.GameBauCuaReducer.danhSachCuoc);



    return (
        <div className="row pl-5 pr-5">
            <List
        grid={{
          gutter: 3,
          xs: 3,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}

        dataSource={danhSachCuoc}
          renderItem={(quanCuoc, index) => (
      <List.Item>
        <QuanCuoc quanCuoc={quanCuoc} />
      </List.Item>
    )}
      />
        </div>
    )
}