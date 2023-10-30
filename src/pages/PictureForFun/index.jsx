import React, {useState} from 'react'
import { Carousel , Segmented, List, Card, Image} from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const segmentOptions = [
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022
]
const data = {
    2015:[
        {
        
          title: 'Title 1',
          imgSrc:"https://images.unsplash.com/photo-1691862879723-39a92b70d3dd?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        },
        {
          title: 'Title 2',
          imgSrc:"https://images.unsplash.com/photo-1691862879723-39a92b70d3dd?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 

        },
        {
          title: 'Title 3',
          imgSrc:"https://images.unsplash.com/photo-1691862879723-39a92b70d3dd?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 

        },
        {
          title: 'Title 4',
          imgSrc:"https://images.unsplash.com/photo-1691862879723-39a92b70d3dd?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 

        },
        {
          title: 'Title 5',
          imgSrc:"https://images.unsplash.com/photo-1691862879723-39a92b70d3dd?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 

        },
        {
          title: 'Title 6',
          imgSrc:"https://images.unsplash.com/photo-1691862879723-39a92b70d3dd?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 

        },
    ]
}
const index = () => {
    const [year, setYear] = useState(2015)
    const onChange = (value) => {
        console.log(value);
        setYear(value)
      };

    const renderImgFromYear = (year)=>{
        return data[year]
    }
  return (
    <div>
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    <div 
    style={{
      width:"100%"
    }}
    
    >
    <Segmented style={{
      marginTop:'20px',       
    width:"100%",
    backgroundColor:"#FFFADD"
}} size="small" options={segmentOptions} onChange={onChange}/>
    <List
      style={{
        marginTop:'20px',
        width:"100%"
      }}
    grid={{
      gutter: 16,
      xs: 3,
      sm: 3,
      md: 4,
      lg: 6,
      xl: 6,
      xxl: 6,
    }}
    dataSource={data[year]}
    renderItem={(item) => (
      <List.Item>
        <Image src={item.imgSrc}></Image>
      </List.Item>
    )}
  />
    </div>
    
    </div>
  )
}

export default index