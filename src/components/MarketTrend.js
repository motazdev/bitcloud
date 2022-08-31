import BitCoin from '../assets/images/bitcoin-icon.svg';
import Ethereum from '../assets/images/ethereum.svg';
import BitcoinCash from '../assets/images/bitcoin_cash.svg';
import ChainLink from '../assets/images/chanlink-icon.svg';
import Xrp from '../assets/images/xrp-icon.svg';

import TChartOne from '../assets/images/table-chart1.svg';
import TChartTwo from '../assets/images/table-chart2.svg';
import TChartThree from '../assets/images/table-chart3.svg';
import TChartFour from '../assets/images/table-chart4.svg';
import TChartFive from '../assets/images/table-chart5.svg';

const MarketTrend = () => {
    return (
        <div className="bitc__mtrend">
            <div className="container">
                <div className="bitc__mtrend-heading">
                    <div className="bitc__mtrend-heading-title">
                        <h1>Market trend</h1>
                    </div>
                    <div className="bitc__mtrend-heading-btn">
                        <a href="/" className="mtrend-more-btn">View more</a>
                    </div>
                </div>
                <div className="bitc__mtrend-navs">
                    <ul className="bitc__mtrend-navs-list">
                        <li className="bitc__mtrend-nav-item bitc__mtrend-active-item">All</li>
                        <li className="bitc__mtrend-nav-item">DeFi</li>
                        <li className="bitc__mtrend-nav-item">Innovation</li>
                        <li className="bitc__mtrend-nav-item">POS</li>
                        <li className="bitc__mtrend-nav-item">NFT</li>
                        <li className="bitc__mtrend-nav-item">POW</li>
                        <li className="bitc__mtrend-nav-item">Storage</li>
                    </ul>
                </div> 

                {/* Small Screens Nav */}
                <div className="bitc__mtrend-sm-navs justify-content-center">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>All</option>
                        <option value="1">DeFi</option>
                        <option value="2">Innovation</option>
                        <option value="3">POS</option>
                        <option value="3">NFT</option>
                        <option value="3">POW</option>
                        <option value="3">Storage</option>
                    </select>
                </div> 


                <div className="bitc__mtrend-table">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">24h change</th>
                                <th scope="col">Chart</th>
                                <th scope="col">Trade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className='align-middle'>1</th>
                                <td className='align-middle'>
                                    <div className="bitc__table-coins-names d-flex flex-row align-items-center">
                                        <img src={BitCoin} alt="bitcoin" className='me-2 me-md-4' />
                                        <div className='table-coin-name me-2 me-md-4'>Bitcoin</div>
                                        <div className='table-coin-abrev me-2 me-md-4'>BTC</div>
                                    </div>
                                </td>
                                <td className='align-middle'>$36,201.34</td>
                                <td className='align-middle'>+1.71%</td>
                                <td className='align-middle'><img src={TChartOne} alt="bc chart" /></td>
                                <td className='align-middle'><a href='/' className='bitc__table-trade-btn'>Trade</a></td>
                            </tr>
                            
                            <tr className='bitc__table-active-td'>
                                <th scope="row" className='align-middle'>2</th>
                                <td className='align-middle'>
                                    <div className="bitc__table-coins-names d-flex flex-row align-items-center">
                                        <img src={Ethereum} alt="ethereum" className='me-2 me-md-4' />
                                        <div className='table-coin-name me-2 me-md-4'>Ethereum</div>
                                        <div className='table-coin-abrev me-2 me-md-4'>ETH</div>
                                    </div>                                    
                                </td>
                                <td className='align-middle'>$2,605.95</td>
                                <td className='align-middle'>+2.04%</td>
                                <td className='align-middle'><img src={TChartTwo} alt="Eth chart" /></td>
                                <td className='align-middle'><a href='/' className='bitc__table-trade-btn'>Trade</a></td>
                            </tr>

                            <tr>
                                <th scope="row" className='align-middle'>3</th>
                                <td className='align-middle'>
                                    <div className="bitc__table-coins-names d-flex flex-row align-items-center">
                                        <img src={BitcoinCash} alt="bitcoincash" className='me-2 me-md-4' />
                                        <div className='table-coin-name me-2 me-md-4'>Bitcoin Cash</div>
                                        <div className='table-coin-abrev me-2 me-md-4'>BCH</div>
                                    </div>                                      
                                </td>
                                <td className='align-middle'>$939.20</td>
                                <td className='align-middle'>-0.74%</td>
                                <td className='align-middle'><img src={TChartThree} alt="bccash chart" /></td>
                                <td className='align-middle'><a href='/' className='bitc__table-trade-btn'>Trade</a></td>
                            </tr>

                            <tr>
                                <th scope="row" className='align-middle'>4</th>
                                <td className='align-middle'>
                                    <div className="bitc__table-coins-names d-flex flex-row align-items-center">
                                        <img src={Xrp} alt="xrp" className='me-2 me-md-4' />
                                        <div className='table-coin-name me-2 me-md-4'>Ripple</div>
                                        <div className='table-coin-abrev me-2 me-md-4'>XRP</div>
                                    </div>                                       
                                </td>
                                <td className='align-middle'>$939.20</td>
                                <td className='align-middle'>+1.20%</td>
                                <td className='align-middle'><img src={TChartFour} alt="xrp chart" /></td>
                                <td className='align-middle'><a href='/' className='bitc__table-trade-btn'>Trade</a></td>
                            </tr>

                            <tr>
                                <th scope="row" className='align-middle'>5</th>
                                <td className='align-middle'>
                                    <div className="bitc__table-coins-names d-flex flex-row align-items-center">
                                        <img src={ChainLink} alt="chainlink" className='me-2 me-md-4' />
                                        <div className='table-coin-name me-2 me-md-4'>Chainlink</div>
                                        <div className='table-coin-abrev me-2 me-md-4'>LINK</div>
                                    </div>                                       
                                </td>
                                <td className='align-middle'>$939.20</td>
                                <td className='align-middle'>-3.84%</td>
                                <td className='align-middle'><img src={TChartFive} alt="chainlink chart" /></td>
                                <td className='align-middle'><a href='/' className='bitc__table-trade-btn'>Trade</a></td>
                            </tr>
                        </tbody>
                    </table>                    
                </div>       
                <div className='bitc__table-view-more'>
                    <a href="/" className="bitc__table-more-btn">View more</a>
                </div>        
            </div>
        </div>
    );
}
 
export default MarketTrend;