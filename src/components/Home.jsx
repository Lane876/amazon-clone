import React from "react";
import banner from "../images/1.jpg";
import Product from "./Product";
import cart1 from "../images/cart1.jpg";

const Home = () => {
  return (
    <div className="home">
      <img src={banner} alt="banner" className="banner" />

      <div className="home_row">
        <Product id="1" title="Oculus Rift S PC-Powered VR Gaming Headset" img="https://images-na.ssl-images-amazon.com/images/I/31i3tpuXxxL._AC_SY200_.jpg" price={399} rating={4} />
        <Product id="2" title="Honor MagicWatch 2 Smart Watch,1.39 AMOLED 5ATM Waterproof 14 Days Standby Smart Bracelet with Bluetooth Calling, 46mm Fitness Tracker Activity Tracker with Blood Oxygen Heart Rate Stress Monitor" img='https://m.media-amazon.com/images/I/71s5euSrOsL._AC_UY327_FMwebp_QL65_.jpg' price={160} rating={3} />
      </div>
      <div className="home_row">
        <Product id="3" title="Apple AirPods Pro" img="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY327_FMwebp_QL65_.jpg" price={216} rating={4} />
        <Product id="4" title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds w/improved battery and call quality (Wireless Charging Case included), Black – US Version, SM-R175NZKAXAR" img="https://m.media-amazon.com/images/I/51ryw1he7xL._AC_UY327_FMwebp_QL65_.jpg" price={139} rating={4} />
        <Product id="5" title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U,Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver" img="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg" price={350} rating={4} />
      </div>
      <div className="home_row">
        <Product id="6" title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler" img="https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SX679_.jpg" price={155} rating={4} />
      </div>
    </div>
  );
};

export default Home;
