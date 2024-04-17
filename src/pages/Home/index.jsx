import "./Home.scss";
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const onMintNowClick = () => {
    navigate('/mint');
  };

  const onGoodsClick = () => {};

  return (
    <div className="home-wrapper">
      <div className="home-wrapper-bg">
        <div className="bg-item" />
        <div className="bg-item" />
        <div className="bg-item" />
        <div className="bg-item" />
        <div className="bg-item" />
      </div>
      <div className="home-wrapper-top">
        <div className="top-title">Discover, Pursue & For Dreams</div>
        <div className="top-desc">Excavate the Most Premium,<br/> Unique and Exclusive Coin Applications</div>
        <div className="top-btn" onClick={onMintNowClick}></div>
      </div>
      <div className="home-wrapper-discover">
        <div className="discover-title">Discover Digital Art And Creating Wealth</div>
        <div className="discover-goods">
          <div className="discover-goods-item">
            <div className="item-img"></div>
            <div className="item-name">Distributed in non frozen sea areas around the world</div>
            {/* <div className="item-title">
              <span>Bored Bunny</span>
              <span>#2840</span>
            </div> */}
            <div className="item-btn" onClick={onGoodsClick}>Sperm</div>
          </div>
          <div className="discover-goods-item active">
            <div className="item-img"></div>
            <div className="item-name">They are play a Very important role in navigation and migration</div>
            {/* <div className="item-title">
              <span>Bored Bunny</span>
              <span>#2840</span>
            </div> */}
            {/* <div className="item-time">Feb 18,2022 at 4:07pm +06</div> */}
            <div className="item-btn" onClick={onGoodsClick}>Navigation</div>
          </div>
          <div className="discover-goods-item">
            <div className="item-img"></div>
            <div className="item-name">Ferocity is comparable to that of a big shark</div>
            {/* <div className="item-title">
              <span>Bored Bunny</span>
              <span>#2840</span>
            </div> */}
            <div className="item-btn" onClick={onGoodsClick}>Humpback</div>
          </div>
        </div>
      </div>
      <div className="home-wrapper-converts">
        <div className="converts-bg"></div>
        <div className="converts-title">What is Whale Protocol</div>
        <div className="converts-line">
          <div className="line-dots"></div>
          <div className="line-main"></div>
          <div className="line-dots"></div>
        </div>
        <div className="converts-desc">Wahle is a Solana based liquidity guided pool (LBP) that enables projects to raise funds from retail investors and communities in a fair and transparent manner, while introducing innovative retail protection</div>
      </div>
      <div className="home-wrapper-protocol">
        <div className="protocol-img"></div>
        <div className="protocol-main">
          <div className="main-title">What is whale's meaning</div>
          <div className="main-desc">Through Whale, it is possible to achieve fair launch that is friendly to individual investors.which is more in line with the decentralized imagination of the Web3 world.</div>
        </div>
      </div>
      <div className="home-wrapper-protocol diff">
        <div className="protocol-img"></div>
        <div className="protocol-main">
          <div className="main-title">Innovative Mechanisms</div>
          <div className="main-desc">Token holders receive dividends from cross chain fees, can mortgage them for rewards, and can vote on governance decisions.</div>
        </div>
      </div>
      <div className="home-wrapper-converts diff">
        <div className="converts-bg"></div>
        <div className="converts-title">Whale Welcome You</div>
        <div className="converts-line">
          <div className="line-dots"></div>
          <div className="line-main"></div>
          <div className="line-dots"></div>
        </div>
        <div className="converts-desc">If you are optimistic about a certain narrative or ecology, you may want to seek more opportunities for certainty in innovation.Here is your seeking.</div>
      </div>
    </div>
  );
}

export default Home;
