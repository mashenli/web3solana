import "./index.scss";
import { useState } from 'react';

import Avatar1 from '@/assets/about_us/avatar1.png';
import Avatar2 from '@/assets/about_us/avatar2.png';
import Avatar3 from '@/assets/about_us/avatar3.png';

function AboutUs() {
    const [currentBlock, setCurrentBlock] = useState('market');

    const onIntellectualClick = (path) => { };

    const goOurCard = (path) => { };

    const onTalk = () => { };

    const onService = () => { };

    return (
        <div className="about-wrapper">
            <div className="about-wrapper-bg">
                <div className="bg-item" />
                <div className="bg-item" />
                <div className="bg-item" />
                <div className="bg-item" />
                <div className="bg-item" />
            </div>
            <div className="about-wrapper-top">
                <div className="top-title">Wise & Acute <span>Brainstorming</span></div>
                <div className="top-desc">Discover the Most Premium, <br/>Unique and Exclusive Block ideas</div>
            </div>
            <div className="about-wrapper-intellectual">
                <div className="intellectual-title">Intellectual Property <br />on the Blockchanin</div>
                <div className="intellectual-cards">
                    <div className="intellectual-cards-item" onClick={() => onIntellectualClick('')}>
                        <div className="item-img"></div>
                        <div className="item-title">The Blockchain is a New Technology of Trust</div>
                        <div className="item-desc">You can't ignore the blockchain anymore. You'd better start learning</div>
                        <div className="item-bottom">
                            <div className="item-bottom-text">Read More</div>
                            <div className="item-bottom-icon"></div>
                        </div>
                    </div>
                    <div className="intellectual-cards-item" onClick={() => onIntellectualClick('')}>
                        <div className="item-img"></div>
                        <div className="item-title">Whale ecology is becoming the new darling of crypto</div>
                        <div className="item-desc">Whale Coin will be a shining star in the cryptocurrency market</div>
                        <div className="item-bottom">
                            <div className="item-bottom-text">Read More</div>
                            <div className="item-bottom-icon"></div>
                        </div>
                    </div>
                    <div className="intellectual-cards-item" onClick={() => onIntellectualClick('')}>
                        <div className="item-img"></div>
                        <div className="item-title">Depends on it, changes with it, creates for it</div>
                        <div className="item-desc">In the new era,  and new challenges, we will usher in a new world</div>
                        <div className="item-bottom">
                            <div className="item-bottom-text">Read More</div>
                            <div className="item-bottom-icon"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-wrapper-blockchain">
                <div className="blockchain-title">Whalechain-Establish a comprehensive ecological application system</div>
                <div className="blockchain-content">
                    <div className="content-left">
                        <div className={`content-left-item ${currentBlock === 'market' ? 'active' : ''}`} onClick={() => setCurrentBlock('market')}>
                            <div className="icon icon-1"></div> Market Data
                        </div>
                        <div className={`content-left-item ${currentBlock === 'weather' ? 'active' : ''}`} onClick={() => setCurrentBlock('weather')}>
                            <div className="icon icon-2"></div> Transactions
                        </div>
                        <div className={`content-left-item ${currentBlock === 'sports' ? 'active' : ''}`} onClick={() => setCurrentBlock('sports')}>
                            <div className="icon icon-3"></div> Profit Data
                        </div>
                        <div className={`content-left-item ${currentBlock === 'keepers' ? 'active' : ''}`} onClick={() => setCurrentBlock('keepers')}>
                            <div className="icon icon-4"></div>  Keepers
                        </div>
                        <div className={`content-left-item ${currentBlock === 'random' ? 'active' : ''}`} onClick={() => setCurrentBlock('random')}>
                            <div className="icon icon-5"></div> Ecology
                        </div>
                        <div className={`content-left-item ${currentBlock === 'ang' ? 'active' : ''}`} onClick={() => setCurrentBlock('ang')}>
                            <div className="icon icon-6"></div> Whale API
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="content-right-img"></div>
                    </div>
                </div>
            </div>
            <div className="about-wrapper-road">
                <div className="road-title">Roadmap</div>
                <div className="road-content">
                    <div className="road-content-line">
                        <div className="line-active">
                            <div className="line-active-round"></div>
                            <div className="line-active-round"></div>
                        </div>
                        <div className="line-steps">
                            <div className="line-steps-item">
                                <div className="item-year"></div>
                                <div className="item-main">✓Research & validation<br/>✓Validation of market need<br/>Comprehensive data analysis</div>
                            </div>
                            <div className="line-steps-item">
                                <div className="item-year"></div>
                                <div className="item-main">✓Launch InscripSync beta test<br/>✓Whale governance portal<br/>✓Portfolio tracker</div>
                            </div>
                            <div className="line-steps-item">
                                <div className="item-year"></div>
                                <div className="item-main">✓Establishment of developer community and ecosystem support<br/>✓Launch InscripSync v2</div>
                            </div>
                            <div className="line-steps-item">
                                <div className="item-year"></div>
                                <div className="item-main">✓Bridge smart routing<br/>✓Cross inscription analytics<br/>✓Bridge aggregator</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-wrapper-our">
                <div className="our-title">
                Excellent Team
                </div>
                <div className="our-cards">
                    <div className="our-cards-item" onClick={() => goOurCard('')}>
                        <img className="item-img" src={Avatar1} />
                        <div className="item-title">Daniel cuper</div>
                        <div className="item-desc">User Interface Desinger</div>
                        <div className="item-desc">Co founder and chief developer of Heron Coin, with over 20 years of experience in developing highly scalable software.</div>
                        <div className="item-bottom">
                            <div className="item-bottom-text">Read More</div>
                            <div className="item-bottom-icon"></div>
                        </div>
                    </div>
                    <div className="our-cards-item" onClick={() => goOurCard('')}>
                        <img className="item-img" src={Avatar2} />
                        <div className="item-title">Jason benni</div>
                        <div className="item-desc">User Interface Desinger</div>
                        <div className="item-desc">Founder, Chief Developer, and Project Leader of AMR Coin, with a background in Informatics and Logistics</div>
                        <div className="item-bottom">
                            <div className="item-bottom-text">Read More</div>
                            <div className="item-bottom-icon"></div>
                        </div>
                    </div>
                    <div className="our-cards-item" onClick={() => goOurCard('')}>
                        <img className="item-img" src={Avatar3} />
                        <div className="item-title">Jerome Bell</div>
                        <div className="item-desc">User Interface Desinger</div>
                        <div className="item-desc">Graduated from Cornell University. Founder and CEO of Mars Coin, the project developed Zecos public blockchain.</div>
                        <div className="item-bottom">
                            <div className="item-bottom-text">Read More</div>
                            <div className="item-bottom-icon"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-wrapper-bottom">
                <div className="bottom-left">
                    <div className="bottom-left-tips">BLOCKCHAIN IN ACTION</div>
                    <div className="bottom-left-title">Blockchain - the Next Internet Technology</div>
                    <div className="bottom-left-talk" onClick={onTalk}></div>
                    <div className="bottom-left-service" onClick={onService}>As-A-Service Us</div>
                </div>
                <div className="bottom-right">
                    <div className="bottom-right-img"></div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
