import React, { useState } from "react";
import { Carousel, Segmented, List, Card, Image } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  width:"100% !important", 
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const segmentOptions = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
const data = {
  2015: [
    {
      id:1,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn10-1.fna.fbcdn.net/v/t39.30808-6/397331911_988588348879990_4807793489358715737_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WFQxFXvWWqcAX9Xpi21&_nc_ht=scontent.fsgn10-1.fna&oh=00_AfAcqNYYI0Oo8azFwpXogND1hMO9fJZ0_-Q6R60OtMzbUw&oe=65445A24",
    },
    {

      id:2,
      title: "Title 2",
      imgSrc:
        "https://scontent.fsgn10-2.fna.fbcdn.net/v/t39.30808-6/397362884_988588935546598_159253819703341697_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lrI0Q5NYn34AX_4SHER&_nc_ht=scontent.fsgn10-2.fna&oh=00_AfASZbvUl6FbyXJ5Lpx3KPixErbrAULZ9BiG031GnSLh3g&oe=654396C9",
    },
    // {
    //   title: "Title 3",
    //   imgSrc:
    //     "https://images.unsplash.com/photo-1691862879723-39a92b70d3dd?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },

  ],
};
const index = () => {
  const [year, setYear] = useState(2015);
  const onChange = (value) => {
    console.log(value);
    setYear(value);
  };

  const renderImgFromYear = (year) => {
    return data[year]?.map((item)=>{
      return <Image key={item.id} width={200} src={item.imgSrc} />
     })
  };

  renderImgFromYear(2015);

  return (
    <div>
        <Carousel style={{
    margin:"0 auto"
  }} autoplay>
    <div style={contentStyle}>
  <Image
    src="https://scontent.fsgn10-2.fna.fbcdn.net/v/t39.30808-6/397479040_988583238880501_2448480137781234895_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rJfQkIHTh-AAX8p4yxM&_nc_ht=scontent.fsgn10-2.fna&oh=00_AfB6_3QZM1PyAXNkxXF9vH0E-_KNLas7SbJPRpsI7VooXQ&oe=6544FBA9"
    style={{
      width: '100%', 
      height: '100%',
    }}
  />
  </div>
    {/* <div style={contentStyle}>
    <Image
    src="https://scontent.fsgn10-2.fna.fbcdn.net/v/t39.30808-6/397479040_988583238880501_2448480137781234895_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rJfQkIHTh-AAX8p4yxM&_nc_ht=scontent.fsgn10-2.fna&oh=00_AfB6_3QZM1PyAXNkxXF9vH0E-_KNLas7SbJPRpsI7VooXQ&oe=6544FBA9"
    style={{
      width: '100%', 
      height: '100%',
    }}
  />
    </div> */}
    <div style={contentStyle}>
    <Image
    src="https://scontent.fsgn10-1.fna.fbcdn.net/v/t39.30808-6/397347759_988586715546820_7586304365945532144_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QQ8xO_lFEmEAX9hDseZ&_nc_ht=scontent.fsgn10-1.fna&oh=00_AfBkygFCoFuz-ZI-YK7nsuj9ZHMULgNjCgRaFxxrs5viyQ&oe=6544C31C"
    style={{
      width: '100%', 
      height: '100%',
    }}
  />
    </div>
    <div style={contentStyle}>
    <Image
    src="https://scontent.fsgn10-2.fna.fbcdn.net/v/t39.30808-6/397328177_988586958880129_7001060401156248144_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N1NMT84Hh8sAX-LQkwJ&_nc_ht=scontent.fsgn10-2.fna&oh=00_AfCNc72Jgc3UZMCR3TYagr_QQJCZAjGrYrHequsNAutFNg&oe=65451C3F"
    style={{
      width: '100%', 
      height: '100%',
    }}
  />
    </div>
  </Carousel>

   
      <div
        style={{
          width: "100%",
        }}
      >
        <Segmented
          style={{
            marginTop: "20px",
            width: "100%",
            backgroundColor: "#FFFADD",
          }}
          size="small"
          options={segmentOptions}
          onChange={onChange}
        />
      
      </div>
      <div
       style={{
        marginTop: "20px",
     
      }}
      >
      <Image.PreviewGroup
       
       preview={{
         onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
       }}
     >
       {
       renderImgFromYear(2015)}
     </Image.PreviewGroup>
      </div>
      
    </div>
  );
};

export default index;


