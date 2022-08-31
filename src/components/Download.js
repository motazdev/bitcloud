import DownloadApp from '../assets/images/download-apps.svg';
import R_Arr from '../assets/images/right-arrow.svg';
import Apple from '../assets/images/apple.svg';
import { FaArrowRight } from "react-icons/fa";
import { TbBrandApple } from "react-icons/tb";

const Download = () => {
    return (
        <div className="bitc__download">
            <div className="container">
                <div className="bitc__download-wrap">
                    <div className="bitc__download-content d-flex flex-column">
                        <div className='bitc__download-content-infos'>
                            <h3>Trade anywhere</h3>
                            <p>Anytime, anywhere. Trade crypto on your terms.</p>
                        </div>
                        <div className='bitc__download-content-apps'>
                            <ul className='bitc__download-content-apps-list'>
                                <li className='bitc__download-content-apps-app d-flex flex-row'>
                                    {/* <img src={Apple} alt="apple-ios"  /> */}
                                    <div className='bitc__download-icon'>
                                        <TbBrandApple />
                                    </div>
                                    <div className='download-content'>
                                        <p className='m-0'>Download from</p>
                                        <h5>Appstore</h5>
                                    </div>
                                </li>
                                <li className='bitc__download-content-apps-app d-flex flex-row'>
                                    <div className='bitc__download-icon-blue'>
                                        <FaArrowRight />
                                    </div>
                                    <div className='download-content'>
                                        <p className='m-0'>Download from</p>
                                        <h5>Google Play</h5>
                                    </div>
                                </li>
                                <li className='bitc__download-content-apps-app d-flex flex-row'>
                                    {/* <img src={Apple} alt="apple-mac"  /> */}
                                    <div className='bitc__download-icon'>
                                        <TbBrandApple />
                                    </div>
                                    <div className='download-content'>
                                        <p className='m-0'>Download for</p>
                                        <h5>Mac OS</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={DownloadApp} alt="download app" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}
 
export default Download;