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
    {
      id:3,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/370283115_657238453062877_39292853787326623_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=3SX9kO_cQk8AX-D5KAF&_nc_ht=scontent.fsgn5-15.fna&oh=03_AdTa-msrG0nyeEEZeKaFwWpcnkg2wc-yHBOoJ57E7kEdLA&oe=6567613E",
    },
    {

      id:4,
      title: "Title 2",
      imgSrc:
        "https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.18169-9/12191509_618497758291052_4544357410031042250_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=GE-Dn1-yEh4AX_OIkKo&_nc_oc=AQnxqzKHbuiZVKSzmSKDe15-He7cYzdA__04R0aD81ka_o5CFFBZKBMhA4p6ahXffgI&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfCWfvjlhfZsFwO3hE_51bkJm06ou8j0MOczztHaS5ercA&oe=65672DC4",
    },
    {
      id:5,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.18169-9/12187780_618497944957700_3132166531398700960_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=uLWB_KVAkOMAX9MRjAY&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDobGITBGd-13S00BR5e5Yc1gCkPGAbWvJQD4AlcQC3fg&oe=65678175",
    },
    {

      id:6,
      title: "Title 2",
      imgSrc:
        "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.18169-9/12196037_618498018291026_4751682801860543123_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=RCOVUEw_Ed8AX_ZtsD4&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDCoxqr3jbY-v2VbpE-F4HIZ8F1vqPacpVkdcDBSAd6dQ&oe=65677FA2",
    },
    {
      id:7,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.18169-9/11261030_618498568290971_5881563160334490300_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Fd9NIvBDKU4AX_1AyNa&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAdULPHMEaKF-vDvzFWMDZzlidWU0YGOiOI7jtHbelaFA&oe=65677D37",
    },
    {

      id:8,
      title: "Title 2",
      imgSrc:
        "https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.18169-9/12036382_608035806003914_2908708552109883954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_ohc=TTZUAw0QTYwAX8K4XgO&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfCHTP-YrfaY5G76DqLzL8E5rNR9GZ0CPUHtD-8mWOgwuA&oe=656785E3",
    },
    {

      id:9,
      title: "Title 2",
      imgSrc:
        "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.18169-9/13241300_695724847235009_4106457786192449095_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=4dc865&_nc_ohc=tq_Z7iE1WyUAX-HNLoE&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCBRtR5DbRCJ05sh6yyx8Q61MsmtJmdTziTmr3UwjthMQ&oe=6567516E",
    },
    
    // {
    //   title: "Title 3",
    //   imgSrc:
    //     "https://images.unsplash.com/photo-1691862879723-39a92b70d3dd?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },

  ],
  2016:[
    {
      id:1,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.18169-9/14947880_778158135658346_4108134641839780930_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=HQBbNUOGNZoAX_34fd7&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDYQk3qey5QY4XfWFZ2OWdCt2vO2EkZV4pU5sAajE-pXA&oe=656757A1",
    },
    
    {
      id:3,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.18169-9/14963189_778158505658309_8050093022596274142_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_ohc=0RYlDJkCV_gAX-xVqiF&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfAlMXl_ldomtJdYNMR1fcEKpen9eIz4QSndRLAijwMTDQ&oe=656760F3",
        
    },
    {
      id:4,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.18169-9/14908370_778158775658282_3914485141019372511_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_ohc=ghmNMhq4BYIAX-PcJoD&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfDtaUYyvCfCMrRcpGzMhGOwt5o-1KWHBun1KaH7SbhDow&oe=6567861D",
    },
    
    {
      id:5,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.18169-9/14963290_778158258991667_4553870871901864824_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_ohc=q06fOd_cggYAX_WakVj&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfDlcAE33PMi5BRgfKpihxdvARbMCVSfxuR5M1qAxbGPgw&oe=656782E2",

    },

    {
      id:6,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.18169-9/14900517_778158342324992_5473029239573355227_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=4dc865&_nc_ohc=aEwGoaOdh6IAX_HciJX&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfCOZ4PD-lvgBFBPnCjainVzmVDf3LxzvIZWuJmaL_Tf7w&oe=65676C0A",
        
    },


    {
      id:7,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.18169-9/14963189_778158505658309_8050093022596274142_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_ohc=0RYlDJkCV_gAX-xVqiF&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfAlMXl_ldomtJdYNMR1fcEKpen9eIz4QSndRLAijwMTDQ&oe=656760F3",
        
    },

    {
      id:8,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.18169-9/14947430_778158688991624_237787125452602738_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=RVVvGOv89GUAX_oMp-4&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDWD-h3GRQLRLZoUo9Tv2pLwSDQFjkmYiVuwGvDxHINaQ&oe=656769B3",
    },

    {
      id:8,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.18169-9/14639875_778158995658260_6670062980577944585_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=4dc865&_nc_ohc=h4IXsvCMT7gAX_Q8l6Y&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfD7F3Wfn68yyTxw6Zm6_9rV3IiLgpi3wTYBEzW1zyqNVA&oe=65677E2A",
    },
  ],
  2017:[
    {
      id:1,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.18169-9/15873267_813145415492951_7339309478057768899_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=qnCSMsBMsWQAX8FZVny&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCKxEd9ZGz4jWSdmE-Xou8_gtORW41Fa0RKsPovFGHkMA&oe=656771D2",
    },
    {
      id:2,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.18169-9/15871650_813145468826279_108473906277814858_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_ohc=NWCPQLbme20AX-2_WgK&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDJ-EFTkVzBVm5imeZbCd30_PSut3n_cWr6-Ud84aYwgA&oe=65675740",
    },
    
    {
      id:3,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.18169-9/15873346_1817416165173031_2880139183683633342_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=4dc865&_nc_ohc=XW-7zDEF6UIAX8IBubX&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBGugZbED-XZ-YTPY8H6fLUxMu4dpcUmXYM3yQ6BNqTIQ&oe=656758AF",
    },

    {
      id:4,
      title: "Title 1",
      imgSrc:
        "https://f14-zpc.zdn.vn/9045466110836196639/ec3282ed874850160959.jpg",
    },

    {
      id:5,
      title: "Title 1",
      imgSrc:
        "https://f9-zpc.zdn.vn/2219768813931270082/46e73ca73802ef5cb613.jpg",
    },


    {
      id:6,
      title: "Title 1",
      imgSrc:
        "https://b-f17-zpc.zdn.vn/1472224486383561263/8f8342c04665913bc874.jpg",
    },


    {
      id:7,
      title: "Title 1",
      imgSrc:
        "https://f21-zpc.zdn.vn/1296982884371893254/2c680c940c31db6f8220.jpg",
    },


    {
      id:8,
      title: "Title 1",
      imgSrc:
        "https://f18-zpc.zdn.vn/5591506263920296163/f409f7faf75f2001794e.jpg",
    },


    {
      id:9,
      title: "Title 1",
      imgSrc:
        "https://f17-zpc.zdn.vn/5104983814219532488/348075207585a2dbfb94.jpg",
    },

    {
      id:10,
      title: "Title 1",
      imgSrc:
        "https://f28-zpc.zdn.vn/4050128574987322982/be8bf327f38224dc7d93.jpg",
    },

    {
      id:11,
      title: "Title 1",
      imgSrc:
        "https://f4-zpc.zdn.vn/5086272868204389155/1819ebb7172dc073993c.jpg",
    },
  ],
  2018:[
    {
      id:1,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/43743491_1355841014556719_8236347526706364416_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0bb214&_nc_ohc=vxCdjn6YRIkAX8iGxir&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfCUDD4O8RdKWLkfdvkU99b07tovjqQA0AmMxJoL9SNmRg&oe=65675E78",
    },
    {
      id:2,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/33610098_1994963450766544_2934281030531547136_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0bb214&_nc_ohc=dOA6924DcPoAX_yBom8&_nc_oc=AQlHlahWX49tWabXYLgPX0atsft42X8BYgVbPXaAutIYHTgVpUg1hLVvoUN-aQ7CMjE&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfB98hEf6gGZHeLns9jVX6m5PaFGJa2n-AcZTD0D3IagkQ&oe=65679075",
    },
    {
      id:3,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/33677388_2054112784836700_3582633573955403776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=UgVlSE54uSgAX88_dpP&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCuNtWoBu69LT8vINRttX_1hDE7XaJ4UM9Qjjg7lze7Kw&oe=65678B46",
    },
    {
      id:4,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/34258795_2056186934629285_1428408081431134208_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0bb214&_nc_ohc=FYBn0kR3ufkAX8AvFj2&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDiwQrvcklazV8-Q6fQZ7u8Ns1rFdccsHgym2v22Jbz_Q&oe=65678F5F",
    },
    {
      id:5,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/35474096_2066102453637733_1758721414732447744_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_ohc=csVawYhjgYEAX_StX_7&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfAxtxLqVN3JwPgBuHf6BkeySt0PfGZ54SpKtdYgIwF75w&oe=65676D00",
    },
    {
      id:6,
      title: "Title 1",
      imgSrc:
        "https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/35694832_1102097569931066_3239635149234634752_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=4dc865&_nc_ohc=JGATD24EcNUAX-ccjf_&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfBgvQcBcfQYKPq0FXBUTGDQTT-Wl-hWhwnDSfu80Pl-BQ&oe=65678D0E",
    },

  ]

};
const index = () => {
  const [year, setYear] = useState(2015);
  const onChange = (value) => {
    console.log(value);
    setYear(value);
  };

  const renderImgFromYear = (year) => {

    return <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data[year]}
    renderItem={(item) => (
      <List.Item>
       <Image key={item.id} src={item.imgSrc} />
      </List.Item>
    )}
  />




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
    {/* <div style={contentStyle}>
    <Image
    src="https://f4-zpc.zdn.vn/5086272868204389155/1819ebb7172dc073993c.jpg"
    style={{
      width: '100%', 
      height: '100%',
    }}
  />
    </div> */}
   
    
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
            backgroundColor: "#FF6978",
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
       renderImgFromYear(year)}
     </Image.PreviewGroup>
      </div>
      
    </div>
  );
};

export default index;


