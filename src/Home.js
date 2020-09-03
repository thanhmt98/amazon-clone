import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
                alt=""
            />
            {/* {Product id, title, price, rating, image} */}
            <div className="home_row">
                <Product 
                    id = "1"
                    title = "SNAPTAIN S5C WiFi FPV Drone with 720P HD Camera, Voice Control, Gesture Control RC Quadcopter for Beginners with Altitude Hold, Gravity Sensor, RTF One Key Take Off/Landing, Compatible w/VR Headset"
                    price = {66.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71-LV9vYPmL._AC_UL320_.jpg"
                />  
                <Product 
                    id = "2"
                    title = "Growsland Remote Control Car, RC Cars Xmas Gifts for kids 1/18 Electric Sport Racing Hobby Toy Car Yellow Model Vehicle for Boys Girls Adults with Lights and Controller"
                    price = {17.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/61ZqMNrCoWL._AC_UL320_.jpg"
                />  
            </div>
            <div className="home_row">
                <Product 
                    id = "3"
                    title = "Remote Control Car, ORRENTE RC Cars Stunt Car Toy, 4WD 2.4Ghz Double Sided 360° Rotating RC Car with Headlights, Kids Xmas Toy Cars for Boys/Girls"
                    price = {25.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71jwlXVIixL._AC_UL320_.jpg"
                />  
                <Product 
                    id = "4"
                    title = "LEGO Harry Potter and The Chamber of Secrets Hogwarts Whomping Willow 75953 Magic Toys Building Kit, Prisoner of Azkaban, Hedwig, Hermoine Granger and Severus Snape (753 Pieces)"
                    price = {88.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/91EFX2g2X6L._AC_UL320_.jpg"
                />
                <Product 
                    id = "5"
                    title = "Remote Control Boats - SHARKOOL H106 Rc Self Righting Racing Boats for Boys & Girls, 2.4Ghz High Speed Remote Control Boat Toys for Kids Or Adults, Green"
                    price = {69.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/61hKkv8qNXL._AC_UL320_.jpg"
                />  
            </div>
            <div className="home_row">
                <Product 
                    id = "6"
                    title = "Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
                    price = {12.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/81ZB62prn-L._AC_UL320_.jpg"
                />    
            </div>
            {/* {Product} */}
        </div>
    )
}

export default Home
