import LandingImg from '../assets/images/landing_img.svg';
import DownArrow from '../assets/images/down-arr.svg';
import Bitcoin from '../assets/images/bitcoin-icon.svg';
import ChainLink from '../assets/images/chanlink-icon.svg';
import Xrp from '../assets/images/xrp-icon.svg';
import CoinIcon from '../assets/images/coin-icon.svg';

const Landing = () => {
    return (
        <div className="bitc__landing">
            <div className="container">
                <div className="bitc__landing-hero">
                    <div className="bitc__landing-infos mt-5 mt-lg-0">
                        <h1>Buy & sell <br />crypto in minutes</h1>
                        <p>Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto asset exchange.</p>
                        <button className="btn btn-primary">Get Started Now</button>
                        <br />
                        <img src={DownArrow} alt="down arrow" className='bitc__landing-hero-down-arr' />
                    </div>
                    <div className="bitc__landing-img">
                        <img src={LandingImg } alt="bitc__landing-hero-img"/>
                    </div>
                </div>
                <div className='bitc__landing-hero-news'>
                    <div className='bitc__landing-hero-news-boxes d-flex justify-content-center'>

                        <div className='bitc__landing-hero-news-box-content'>
                            <img src={Bitcoin} alt="bitcoin" />
                            <div className='coin-infos'>
                                <div className='currence-format-range d-flex align-items-center'>
                                    <div className='curr-format'>BTC/USDT</div>
                                    <div className='curr-range low-curr-range'>-0.79%</div>
                                </div>  
                                <div className='currence-ammount'>36,641.20</div>                         
                                <div className='currence-ammount-info'>36,641.20</div>                                 
                            </div>                        
                        </div>

                        <div className='bitc__landing-hero-news-box-content higher-curr-news-box'>
                            <img src={ChainLink} alt="bitcoin" />
                            <div className='coin-infos'>
                                <div className='currence-format-range d-flex align-items-center'>
                                    <div className='curr-format'>BTC/USDT</div>
                                    <div className='curr-range'>+0.96%</div>
                                </div>   
                                <div className='currence-ammount'>36,641.20</div>                         
                                <div className='currence-ammount-info'>36,641.20</div>                                 
                            </div>                        
                        </div>

                        <div className='bitc__landing-hero-news-box-content'>
                            <img src={CoinIcon} alt="bitcoin" />
                            <div className='coin-infos'>
                                <div className='currence-format-range d-flex align-items-center'>
                                    <div className='curr-format'>BTC/USDT</div>
                                    <div className='curr-range'>+0.19%</div>
                                </div>   
                                <div className='currence-ammount'>36,641.20</div>                         
                                <div className='currence-ammount-info'>36,641.20</div>                              
                            </div>                       
                        </div>

                        <div className='bitc__landing-hero-news-box-content'>
                            <img src={Xrp} alt="bitcoin" />
                            <div className='coin-infos'>
                                <div className='currence-format-range d-flex align-items-center'>
                                    <div className='curr-format'>BTC/USDT</div>
                                    <div className='curr-range'>+0.42%</div>
                                </div>   
                                <div className='currence-ammount'>36,641.20</div>                         
                                <div className='currence-ammount-info'>36,641.20</div>                              
                            </div>                       
                        </div>

                    </div>
                </div>            
            </div>
        </div>
    );
}
 
export default Landing;