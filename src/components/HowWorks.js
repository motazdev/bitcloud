import Stack from '../assets/images/stack.svg';
import cLine from '../assets/images/connect_line.svg'
import hwOne from '../assets/images/howworks_one.svg'
import hwTwo from '../assets/images/howworks_two.svg'
import hwThree from '../assets/images/howworks_three.svg'
import hwFour from '../assets/images/howworks_four.svg'
const HowWorks = () => {
    return (
        <div className="bitc__howworks">
            <div className="container">
                <div className="bitc__howworks-header text-center">
                    <h1>How it work</h1>
                    <p className='bitc__howworks-header-infos'>Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                    <div className='stack-timeline'>

                        <div className='stack-images-timeline'>
                            <img src={hwOne} alt="cline" />
                            <img src={cLine} alt="cline" />
                            <img src={hwTwo} alt="cline" />
                            <img src={cLine} alt="cline" />
                            <img src={hwThree} alt="cline" />
                            <img src={cLine} alt="cline" />
                            <img src={hwFour} alt="cline" />

                        </div>

                        <div className='stack-steps'>
                            <div className='stack-single-step'>
                                <p className='step-title'>Step 1</p>
                                <h6>Download</h6>
                                <p className='step-info'>Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                            </div>
                            <div className='stack-single-step'>
                                <p className='step-title'>Step 2</p>
                                <h6>Connect wallet</h6>
                                <p className='step-info'>Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                            </div>
                            <div className='stack-single-step'>
                                <p className='step-title'>Step 3</p>
                                <h6>Start trading</h6>
                                <p className='step-info'>Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                            </div>
                            <div className='stack-single-step'>
                                <p className='step-title'>Step 4</p>
                                <h6>Earn money</h6>
                                <p className='step-info'>Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HowWorks;