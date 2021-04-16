import React, { useState } from 'react';
import ProductInformation from './ProductInformation.jsx';


const ProductCard = () => {

  return(
  <div>
    <section className="slider">
      <ul id="autoWidth" className="cs-hidden">
        <li className="item-a">
          {/* /box-slider */}
          This id the item
          <div className="box">
            {/* <!--img-box----------> */}
            <div className="slide-img">
              <img alt="1" src="images/1.jpg" />
              {/* <!--overlayer----------> */}
              <div className="overlay">
                {/* <!--buy-btn------> */}
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>
            {/* <!--detail-box---------> */}
            <div className="detail-box">
              {/* <!--type--------> */}
              <div className="type">
                <a href="#">Rabbed Cardigan</a>
                <span>Noe Arrival</span>
              </div>
              {/* <!--price--------> */}
              <a href="#" className="price">$23</a>

            </div>

          </div>
        </li>



        {/* <!--2------------------------------------> */}
        <li className="item-b">
          {/* <!--box-slider---------------> */}
          <div className="box">
            {/* <!--img-box----------> */}
            <div className="slide-img">
              <img alt="2" src="images/2.jpg" />
              {/* <!--overlayer----------> */}
              <div className="overlay">
                {/* <!--buy-btn------> */}
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>
            {/* <!--detail-box---------> */}
            <div className="detail-box">
              {/* <!--type--------> */}
              <div className="type">
                <a href="#">Rabbed Cardigan</a>
                <span>Noe Arrival</span>
              </div>
              {/* <!--price--------> */}
              <a href="#" className="price">$20</a>

            </div>

          </div>
        </li>


        {/* <!--3------------------------------------> */}
        <li className="item-c">
          {/* <!--box-slider---------------> */}
          <div className="box">
            {/* <!--img-box----------> */}
            <div className="slide-img">
              <img alt="3" src="images/3.jpg" />
              {/* <!--overlayer----------> */}
              <div className="overlay">
                {/* <!--buy-btn------> */}
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>
            {/* <!--detail-box---------> */}
            <div className="detail-box">
              {/* <!--type--------> */}
              <div className="type">
                <a href="#">Rabbed Cardigan</a>
                <span>Noe Arrival</span>
              </div>
              {/* <!--price--------> */}
              <a href="#" className="price">$26</a>

            </div>

          </div>
        </li>


        {/* <!--4------------------------------------> */}
        <li className="item-d">
          {/* <!--box-slider---------------> */}

          <div className="box">
            {/* <!--img-box----------> */}
            <div className="slide-img">
              <img alt="" src="" />
              {/* <!--overlayer----------> */}
              <div className="overlay">
                {/* <!--buy-btn------> */}
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>
            {/* <!--detail-box---------> */}
            <div className="detail-box">
              {/* <!--type--------> */}
              <div className="type">
                <a href="#">Rabbed Cardigan</a>
                <span>Noe Arrival</span>
              </div>
              {/* <!--price--------> */}
              <a href="#" className="price">$27</a>

            </div>

          </div>
        </li>



        {/* <!--5------------------------------------> */}
        <li className="item-e">
          {/* <!--box-slider---------------> */}
          <div className="box">
            {/* <!--img-box----------> */}
            <div className="slide-img">
              <img alt="5" src="images/5.jpg" />
              {/* <!--overlayer----------> */}
              <div className="overlay">
                {/* <!--buy-btn------> */}
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>
            {/* <!--detail-box---------> */}
            <div className="detail-box">
              {/* <!--type--------> */}
              <div className="type">
                <a href="#">Rabbed Cardigan</a>
                <span>Noe Arrival</span>
              </div>
              {/* <!--price--------> */}
              <a href="#" className="price">$26</a>

            </div>

          </div>
        </li>


        {/* <!--6------------------------------------> */}
        <li className="item-f">
          {/* <!--box-slider---------------> */}
          <div className="box">
            {/* <!--img-box----------> */}
            <div className="slide-img">
              <img alt="6" src="images/6.jpg" />
              {/* <!--overlayer----------> */}
              <div className="overlay">
                {/* <!--buy-btn------> */}
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>
            {/* <!--detail-box---------> */}
            <div className="detail-box">
              {/* <!--type--------> */}
              <div className="type">
                <a href="#">Rabbed Cardigan</a>
                <span>Noe Arrival</span>
              </div>
              {/* <!--price--------> */}
              <a href="#" className="price">$30</a>

            </div>

          </div>

        </li>


        {/* <!--7------------------------------------> */}
        <li className="item-g">
          {/* <!--box-slider---------------> */}
          <div className="box">
            {/* <!--img-box----------> */}
            <div className="slide-img">
              <img alt="7" src="images/7.jfif" />
              {/* <!--overlayer----------> */}
              <div className="overlay">
                {/* <!--buy-btn------> */}
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>
            {/* <!--detail-box---------> */}
            <div className="detail-box">
              {/* <!--type--------> */}
              <div className="type">
                <a href="#">Rabbed Cardigan</a>
                <span>Noe Arrival</span>
              </div>
              {/* <!--price--------> */}
              <a href="#" className="price">$33</a>

            </div>

          </div>
        </li>



        {/* <!--8------------------------------------> */}
        <li className="item-h">
          {/* <!--box-slider---------------> */}
          <div className="box">
            {/* <!--img-box----------> */}
            <div className="slide-img">
              <img alt="" src="" />
              {/* <!--overlayer----------> */}
              <div className="overlay">
                {/* <!--buy-btn------> */}
                <a href="#" className="buy-btn">Add to oufit list</a>
              </div>
            </div>
            {/* <!--detail-box---------> */}
            <div className="detail-box">
              {/* <!--type--------> */}
              <div className="type">
                <a href="#">Detail goes here</a>
                <span>Noe Arrival</span>
              </div>
              {/* <!--price--------> */}
              <a href="#" className="price">$43</a>

            </div>

          </div>
        </li>

      </ul>
    </section>

  </div>

  )
}


export default ProductCard;

