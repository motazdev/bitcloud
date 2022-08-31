import Logo from '../assets/images/logowtext.svg';
import CarouselImg from '../assets/images/carousle-img.svg';

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SlideShow = () => {
    return (
        <div className="bitc__slideshow">
            <div className="container">
                <div className="bitc__slideshow-header text-center">
                    <div className='bitc__slideshow-header-logo'>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <h1>Stay in the know on crypto with BitCloud</h1>
                    <p>A creative agency that lead and inspire</p>
                </div>
                <div className='bitc__slideshow-wrapper'>
                    <div className='bitc__slideshow-slides'>
                        <div className='bitc__slideshow-slide'>
                            <div className='bitc__slideshow-slide-infos d-flex flex-column justify-content-evenly'>
                                <div className='bitc_slideshow-slide-hero'>
                                    <span className='d-block'>design news</span>
                                    <h3>Be Part of our Global Community</h3>
                                    <p>Stack solves business problems from simple to complex.</p>
                                </div>
                                <div className='bitc__slideshow-slide-info-btn'>
                                    <a href='/' className='bitc__slideshow-slide-info-link'>Join now</a>
                                </div>
                            </div>
                            <img src={CarouselImg} alt="carous" />
                        </div>
                    </div>
                    <button className='bitc__slideshow-controls left-ctrl'><FaArrowLeft /></button>
                    <button className='bitc__slideshow-controls right-ctrl'><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
}
 
export default SlideShow;