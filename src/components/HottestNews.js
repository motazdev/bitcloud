import FeatNewsOne from '../assets/images/news11.png';
import FeatNewsTwo from '../assets/images/news1.png';
import SmNews2 from '../assets/images/sm-news2.png';
import NewsTwo from '../assets/images/news2.png'
import NewsThree from '../assets/images/news3.png'
import NewsFour from '../assets/images/news4.png'
const HottestNews = () => {
    return (
        <div className="bitc__hotnews">
            <div className="container">
                <div className="bitc__hotnews-heading d-flex align-items-center">
                    <div className="bitc__hotnews-heading-title">
                        <h1>Learn crypto</h1>
                    </div>
                    <div className="bitc__hotnews-heading-btn">
                        <a href="/" className="hotnews-more-btn">View more</a>
                    </div>
                </div>
                <div className="bitc__hotnews-navs">
                    <ul className="bitc__hotnews-navs-list">
                        <li className="bitc__hotnews-nav-item bitc__hotnews-active-item">All</li>
                        <li className="bitc__hotnews-nav-item">Bitcoin</li>
                        <li className="bitc__hotnews-nav-item">Blockchain</li>
                        <li className="bitc__hotnews-nav-item">Tutorial</li>
                    </ul>
                </div>
                <div className="bitc__hotnews-news-section d-flex">
                    {/* Large Screens News */}
                    <div className="bitc__hotnews-features-news flex-column">
                        <img src={FeatNewsOne} alt="featured news" className='hotnews-img' />
                        <div className='bitc__hotnews-features-news-content'>
                            <div className='bitc__hotnews-features-news-infos d-flex flex-column'>
                                <h1>Leveraged Tokens Now Available</h1>
                                <p>Good things come in 3s. Get 3x Leveraged tokens now.</p>
                            </div>
                            <div className='bitc__hotnews-features-news-infos-btn'>
                                <button>Learn more 	<span>&gt;</span></button>
                            </div>
                        </div>
                    </div>
                    <div className='bitc__hotnews-recent-news flex-column'>
                        <div className='mb-5 bitc__hotnews-recent-news-box d-flex'>
                            <img src={NewsTwo} alt="news2"/>
                            <div className='bitc__hotnews-recent-news-box-content d-flex flex-column justify-content-between'>
                                <div className='recent-news-box-infos'>
                                    <h3>Praesent id ante eget leo rhoncus aliquet</h3>
                                    <p>Good things come in 3s. Get 3x Leveraged tokens now.</p>
                                </div>
                                <div className='recent-news-box-date'>Jun 1, 2021</div>
                            </div>
                        </div>
                        <div className='mb-5 bitc__hotnews-recent-news-box d-flex flex-row-reverse'>
                            <img src={NewsThree} alt="news2"/>
                            <div className='bitc__hotnews-recent-news-box-content d-flex flex-column justify-content-between'>
                                <div className='recent-news-box-infos'>
                                    <h3>Leveraged Tokens Now Available</h3>
                                    <p>Good things come in 3s. Get 3x Leveraged tokens now.</p>
                                </div>
                                <div className='recent-news-box-date'>Jun 1, 2021</div>
                            </div>
                        </div>
                        <div className='mb-5 bitc__hotnews-recent-news-box d-flex flex-row-reverse'>
                            <img src={NewsFour} alt="news2"/>
                            <div className='bitc__hotnews-recent-news-box-content d-flex flex-column justify-content-between'>
                                <div className='recent-news-box-infos'>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                    <p>Good things come in 3s. Get 3x Leveraged tokens now.</p>
                                </div>
                                <div className='recent-news-box-date'>Jun 1, 2021</div>
                            </div>
                        </div>
                    </div>


                    {/* Medium / Small Screens News */}
                    <div className='bitc__hotnews-sm-features-news flex-column'>
                        <img src={FeatNewsTwo} alt="Featured News" className='img-fluid' />
                        <div className='bitc__hotnews-sm-box-content d-flex flex-column justify-content-between'>
                            <h3>Praesent id ante eget leo rhoncus aliquet</h3>
                            <p>Good things come in 3s. Get 3x Leveraged tokens now.</p>
                        </div>
                    </div>
                    <div className='bitc__hotnews-sm-recent-news flex-column'>
                        <img src={SmNews2} alt="news" className='img-fluid' />
                        <div className='bitc__hotnews-sm-box-content d-flex flex-column justify-content-between'>
                            <h3>Praesent id ante eget leo rhoncus aliquet</h3>
                            <p>Good things come in 3s. Get 3x Leveraged tokens now.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
 
export default HottestNews;