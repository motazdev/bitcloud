import cboxone from '../assets/images/ctrade_one.svg';
import cboxtwo from '../assets/images/ctrade_two.svg';

const CTrader = () => {
    return (
        <div className="bitc__ctrader">
            <div className="container">
                <div className="bitc__ctrader-heading">
                    <h1>Become a crypto trader in seconds</h1>
                    <p>Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                </div>
                <div className="bitc__ctrader-feats-boxes content">
                    <div className="bitc__ctrader-box d-flex flex-column justify-content-center">
                        <img src={cboxone} alt="ctrade box" />
                        <div className='bitc__ctrader-box-title'>
                        Buy & Sell Crypto
                        </div>
                        <p className='bitc__ctrader-box-exp'>
                        We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.
                        </p>
                    </div>
                    <div className="bitc__ctrader-box d-flex flex-column justify-content-center">
                        <img src={cboxtwo} alt="ctrade box" />
                        <div className='bitc__ctrader-box-title'>
                        Trade Assets
                        </div>
                        <p className='bitc__ctrader-box-exp'>
                        We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.
                        </p>
                    </div>
                    <div className="bitc__ctrader-box d-flex flex-column justify-content-center">
                        <img src={cboxone} alt="ctrade box" />
                        <div className='bitc__ctrader-box-title'>
                        Earn Rewards for Trading
                        </div>
                        <p className='bitc__ctrader-box-exp'>
                        We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.
                        </p>
                    </div>
                </div>
                <div className='bitc__ctrader-contact'>
                    <a href="/" className="bitc__ctrader-contact-btn">Contact Us</a>
                </div>
            </div>
        </div>
    );
}
 
export default CTrader;