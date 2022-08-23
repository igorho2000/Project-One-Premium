import '../Animation.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import An from './AnimationElements';
import {TransitionContext} from "../context"

export default function Animation(props) {
    


    return (
        <div className='an-cont' style={{display: (props.position >= 50) ? "flex" : "none"}}>
            <div className='an-main'>
                {/* Scene 2 */}
                <An src={['2-mainscene.svg']} pos={props.position} start={850} end={1260} 
                startSize={100} startOpacity={1} startX={0} startY={0} 
                />
                <An src={['2-mainscene.svg']} pos={props.position} start={800} end={850} 
                startSize={100} startOpacity={0} startX={0} startY={0} 
                endOpacity={1}/>
                <An src={['2-taiwanframe.svg']} pos={props.position} start={850} end={1260} 
                startSize={26} startOpacity={1} startX={45} startY={43.5} 
                />
                <An src={['2-taiwan.svg']} pos={props.position} start={850} end={1260} 
                startSize={10} startOpacity={1} startX={53} startY={45} 
                />
                <An src={['2-taiwanframe.svg']} pos={props.position} start={750} end={850} 
                startSize={100} startOpacity={1} startX={0} startY={30} 
                endSize={26} endX={45} endY={43.5}/>
                <An src={['2-taiwanframe.svg']} pos={props.position} start={700} end={750} 
                startSize={100} startOpacity={0} startX={0} startY={30} 
                endOpacity={1}/>
                <An src={['2-taiwan.svg']} pos={props.position} start={750} end={850} 
                startSize={38.81} startOpacity={1} startX={30} startY={36} 
                endSize={10} endX={53} endY={45}/>
                <An src={['1-twL5.svg']} pos={props.position} start={650} end={750} 
                startSize={77.62} startOpacity={1} startX={6} startY={17.2} 
                endSize={38.81} endX={30} endY={36}/>
                <An src={['1-twL4.svg']} pos={props.position} start={650} end={750} 
                startSize={68.41} startOpacity={1} startX={13.4} startY={17.8} 
                endSize={34.21} endX={33.5} endY={36.5}/>
                <An src={['1-twL3.svg']} pos={props.position} start={650} end={750} 
                startSize={55.05} startOpacity={1} startX={18} startY={23.8} 
                endSize={27.53} endX={36} endY={39}/>
                <An src={['1-twL2.svg']} pos={props.position} start={650} end={750} 
                startSize={43.5} startOpacity={1} startX={24} startY={27.8} 
                endSize={21.75} endX={39} endY={41}/>
                <An src={['1-twL1.svg']} pos={props.position} start={650} end={750} 
                startSize={32.67} startOpacity={1} startX={33} startY={30} 
                endSize={16.34} endX={44} endY={42} />
                <An src={['text-4.svg']} pos={props.position} start={1160} end={1210} 
                startSize={27.98} startOpacity={1} startX={60} startY={49} 
                endOpacity={0}/>
                <An src={['text-4.svg']} pos={props.position} start={1080} end={1160} 
                startSize={27.98} startOpacity={1} startX={60} startY={49} 
                />
                <An src={['text-4.svg']} pos={props.position} start={1030} end={1080} 
                startSize={27.98} startOpacity={0} startX={60} startY={49} 
                endOpacity={1}/>
                <An src={['text-3.svg']} pos={props.position} start={1160} end={1210} 
                startSize={37.55} startOpacity={1} startX={8} startY={24} 
                endOpacity={0} />
                <An src={['text-3.svg']} pos={props.position} start={950} end={1160} 
                startSize={37.55} startOpacity={1} startX={8} startY={24} 
                />
                <An src={['text-3.svg']} pos={props.position} start={900} end={950} 
                startSize={37.55} startOpacity={0} startX={8} startY={24} 
                endOpacity={1}/>
                
                {/* Scene 1 */}
                <An src={['text-2.svg']} pos={props.position} start={550} end={600} 
                startSize={38.27} startOpacity={1} startX={40} startY={70} 
                endOpacity={0}/>
                <An src={['text-1.svg']} pos={props.position} start={550} end={600} 
                startSize={93.68} startOpacity={1} startX={0} startY={10} 
                endOpacity={0}/>
                <An src={['text-2.svg']} pos={props.position} start={420} end={470} 
                startSize={38.27} startOpacity={0} startX={40} startY={70} 
                endOpacity={1}/>
                <An src={['text-2.svg']} pos={props.position} start={470} end={550} 
                startSize={38.27} startOpacity={1} startX={40} startY={70} 
                />
                <An src={['text-1.svg']} pos={props.position} start={290} end={340} 
                startSize={93.68} startOpacity={0} startX={0} startY={10} 
                endOpacity={1}/>
                <An src={['text-1.svg']} pos={props.position} start={340} end={550} 
                startSize={93.68} startOpacity={1} startX={0} startY={10} 
                />
                <An src={['1-twL5.svg']} pos={props.position} start={190} end={240} 
                startSize={77.62} startOpacity={0} startX={6} startY={19.2} 
                endOpacity={1} endY={17.2}/>
                <An src={['1-twL5.svg']} pos={props.position} start={241} end={650} 
                startSize={77.62} startOpacity={1} startX={6} startY={17.2} 
                />
                <An src={['1-twL4.svg']} pos={props.position} start={160} end={210} 
                startSize={68.41} startOpacity={0} startX={13.4} startY={19.8} 
                endOpacity={1} endY={17.8}/>
                <An src={['1-twL4.svg']} pos={props.position} start={211} end={650} 
                startSize={68.41} startOpacity={1} startX={13.4} startY={17.8} 
                />
                <An src={['1-twL3.svg']} pos={props.position} start={130} end={180} 
                startSize={55.05} startOpacity={0} startX={18} startY={25.8} 
                endOpacity={1} endY={23.8}/>
                <An src={['1-twL3.svg']} pos={props.position} start={181} end={650} 
                startSize={55.05} startOpacity={1} startX={18} startY={23.8} 
                />
                <An src={['1-twL2.svg']} pos={props.position} start={100} end={150} 
                startSize={43.5} startOpacity={0} startX={24} startY={29.8} 
                endOpacity={1} endY={27.8}/>
                <An src={['1-twL2.svg']} pos={props.position} start={151} end={650} 
                startSize={43.5} startOpacity={1} startX={24} startY={27.8} 
                />
                <An src={['1-twL1.svg']} pos={props.position} start={70} end={120} 
                startSize={32.67} startOpacity={0} startX={33} startY={32} 
                endOpacity={1} endY={30}/>
                <An src={['1-twL1.svg']} pos={props.position} start={121} end={650} 
                startSize={32.67} startOpacity={1} startX={33} startY={30} 
                />
                
                

                {/* Scene 3 */}
                <An src={['2-mainscene.svg']} pos={props.position} start={1260} end={1310} 
                startSize={100} startOpacity={1} startX={0} startY={0} 
                endOpacity={0} />
                <An src={['2-taiwanframe.svg']} pos={props.position} start={1260} end={1310} 
                startSize={26} startOpacity={1} startX={45} startY={43.5} 
                endOpacity={0} />
                <An src={['2-taiwan.svg']} pos={props.position} start={1260} end={1310} 
                startSize={10} startOpacity={1} startX={53} startY={45} 
                endOpacity={0} />
                <An src={['3-mainscene.svg']} pos={props.position} start={1210} end={1280} 
                startSize={9.4} startOpacity={1} startX={74.2} startY={35.7} 
                />
                <An src={['3-mainscene.svg']} pos={props.position} start={1280} end={1360} 
                startSize={9.4} startOpacity={1} startX={74.2} startY={35.7} 
                endSize={97.11} endX={2.89} endY={4} />
                <An src={['3-mainscene.svg']} pos={props.position} start={1360} end={1900} 
                startSize={97.11} startOpacity={1} startX={2.89} startY={4} 
                 />
                 <An src={['3-shadow.svg']} pos={props.position} start={1340} end={1390} 
                startSize={100} startOpacity={0} startX={1} startY={3} 
                 endOpacity={1} />
                 <An src={['3-shadow.svg']} pos={props.position} start={1390} end={1900} 
                startSize={100} startOpacity={1} startX={1} startY={3} 
                />
                <An src={['text-5.svg']} pos={props.position} start={1490} end={1540} 
                startSize={35} startOpacity={0} startX={32} startY={40} 
                 endOpacity={1} />
                 <An src={['text-5.svg']} pos={props.position} start={1540} end={1620} 
                startSize={35} startOpacity={1} startX={32} startY={40} 
                />
                <An src={['text-5.svg']} pos={props.position} start={1620} end={1670} 
                startSize={35} startOpacity={1} startX={32} startY={40} 
                 endOpacity={0} />
                 <An src={['text-6.svg']} pos={props.position} start={1720} end={1770} 
                startSize={18} startOpacity={0} startX={69} startY={27.5} 
                 endOpacity={1} />
                 <An src={['text-6.svg']} pos={props.position} start={1770} end={1850} 
                startSize={18} startOpacity={1} startX={69} startY={27.5}  
                />
                <An src={['text-6.svg']} pos={props.position} start={1850} end={1900} 
                startSize={18} startOpacity={1} startX={69} startY={27.5}  
                 endOpacity={0} />
                <An src={['3-spotlight.svg']} pos={props.position} start={1390} end={1440} 
                startSize={80} startOpacity={0} startX={10} startY={22} 
                 endOpacity={1} />
                 <An src={['3-spotlight.svg']} pos={props.position} start={1440} end={1670} 
                startSize={80} startOpacity={1} startX={10} startY={22} 
                />
                <An src={['3-spotlight.svg']} pos={props.position} start={1670} end={1720} 
                startSize={80} startOpacity={1} startX={10} startY={22} 
                endSize={60} endX={48} endY={12} />
                <An src={['3-spotlight.svg']} pos={props.position} start={1720} end={1850} 
                startSize={60} startOpacity={1} startX={48} startY={12} 
                />
                <An src={['3-spotlight.svg']} pos={props.position} start={1850} end={1900} 
                startSize={60} startOpacity={1} startX={48} startY={12} 
                endOpacity={0}/>

                {/* Scene 4 */}
                <An src={['3-background.svg']} pos={props.position} start={1901} end={2410} 
                startSize={97.11} startOpacity={1} startX={2.89} startY={4} 
                />
                <An src={['3-background.svg']} pos={props.position} start={2410} end={2460} 
                startSize={97.11} startOpacity={1} startX={2.89} startY={4} 
                endOpacity={0} />
                <An src={['4-wall.svg']} pos={props.position} start={1950} end={2000} 
                startSize={45.67} startOpacity={0} startX={0} startY={2.8} 
                endOpacity={1} />
                <An src={['4-wall.svg']} pos={props.position} start={2000} end={2410} 
                startSize={45.67} startOpacity={1} startX={0} startY={2.8} 
                />
                <An src={['4-wall.svg']} pos={props.position} start={2410} end={2460} 
                startSize={45.67} startOpacity={1} startX={0} startY={2.8} 
                endOpacity={0} />
                <An src={['4-chairs.svg']} pos={props.position} start={2000} end={2050} 
                startSize={51.99} startOpacity={0} startX={32.5} startY={36} 
                endOpacity={1} />
                <An src={['4-chairs.svg']} pos={props.position} start={2050} end={2410} 
                startSize={51.99} startOpacity={1} startX={32.5} startY={36} 
                />
                <An src={['4-chairs.svg']} pos={props.position} start={2410} end={2460} 
                startSize={51.99} startOpacity={1} startX={32.5} startY={36} 
                endOpacity={0} />
                <An src={['4-whiteboard.svg']} pos={props.position} start={2000} end={2050} 
                startSize={32.85} startOpacity={0} startX={7} startY={12} 
                endOpacity={1} />
                <An src={['4-whiteboard.svg']} pos={props.position} start={2050} end={2440} 
                startSize={32.85} startOpacity={1} startX={7} startY={12} 
                />
                <An src={['3-stage.svg']} pos={props.position} start={1901} end={1950} 
                startSize={67.51} startOpacity={1} startX={24.7} startY={52.68} 
                />
                <An src={['3-stage.svg']} pos={props.position} start={1950} end={2000} 
                startSize={67.51} startOpacity={1} startX={24.7} startY={52.68} 
                endX={16} endY={39.5} />
                <An src={['3-stage.svg']} pos={props.position} start={2000} end={2410} 
                startSize={67.51} startOpacity={1} startX={16} startY={39.5} 
                />
                <An src={['3-stage.svg']} pos={props.position} start={2410} end={2460} 
                startSize={67.51} startOpacity={1} startX={16} startY={39.5} 
                endOpacity={0} />
                <An src={['3-wall.svg']} pos={props.position} start={1901} end={1950} 
                startSize={53.07} startOpacity={1} startX={42.7} startY={6.8} 
                endOpacity={0} />
                <An src={['3-microphone.svg']} pos={props.position} start={1901} end={1950} 
                startSize={11.19} startOpacity={1} startX={48.55} startY={40.5} 
                endOpacity={0} />
                <An src={['3-chairs.svg']} pos={props.position} start={1901} end={2410} 
                startSize={51.99} startOpacity={1} startX={12.7} startY={50.5} 
                />
                <An src={['3-chairs.svg']} pos={props.position} start={2410} end={2460} 
                startSize={51.99} startOpacity={1} startX={12.7} startY={50.5} 
                endOpacity={0} />
                
                <An src={['3-shadow.svg']} pos={props.position} start={1901} end={1950} 
                startSize={100} startOpacity={1} startX={1} startY={3} 
                endOpacity={0} />
                <An src={['text-7.svg']} pos={props.position} start={2100} end={2150} 
                startSize={27.26} startOpacity={0} startX={11} startY={22.2} 
                endOpacity={1} />
                <An src={['text-7.svg']} pos={props.position} start={2150} end={2360} 
                startSize={27.26} startOpacity={1} startX={11} startY={22.2} 
                />
                <An src={['text-7.svg']} pos={props.position} start={2360} end={2410} 
                startSize={27.26} startOpacity={1} startX={11} startY={22.2}
                endOpacity={0} />
                <An src={['text-8.svg']} pos={props.position} start={2230} end={2280} 
                startSize={37.55} startOpacity={0} startX={51} startY={17}
                endOpacity={1} />
                <An src={['text-8.svg']} pos={props.position} start={2280} end={2360} 
                startSize={37.55} startOpacity={1} startX={51} startY={17} 
                />
                <An src={['text-8.svg']} pos={props.position} start={2360} end={2410} 
                startSize={37.55} startOpacity={1} startX={51} startY={17}
                endOpacity={0} />

                {/* Scene 5 */}
                <An src={['5-mainscene.svg']} pos={props.position} start={2460} end={2510} 
                startSize={100} startOpacity={0} startX={0} startY={0}  
                endOpacity={1} />
                <An src={['5-mainscene.svg']} pos={props.position} start={2510} end={3050} 
                startSize={100} startOpacity={1} startX={0} startY={0} 
                />
                <An src={['5-mainscene.svg']} pos={props.position} start={3050} end={3100} 
                startSize={100} startOpacity={1} startX={0} startY={0} 
                endOpacity={0} />

                <An src={['5-calendar2.svg']} pos={props.position} start={2460} end={2510} 
                startSize={11.19} startOpacity={0} startX={78} startY={33} 
                endOpacity={1} />
                <An src={['5-calendar2.svg']} pos={props.position} start={2510} end={2870} 
                startSize={11.19} startOpacity={1} startX={78} startY={33} 
                />
                <An src={['5-calendar2.svg']} pos={props.position} start={2870} end={2920} 
                startSize={11.19} startOpacity={1} startX={78} startY={33}
                endOpacity={0} />
                <An src={['5-calendar1.svg']} pos={props.position} start={2460} end={2510} 
                startSize={11.19} startOpacity={0} startX={78} startY={33} 
                endOpacity={1} />
                <An src={['5-calendar1.svg']} pos={props.position} start={2510} end={2690} 
                startSize={11.19} startOpacity={1} startX={78} startY={33} 
                />
                <An src={['5-calendar1.svg']} pos={props.position} start={2690} end={2740} 
                startSize={11.19} startOpacity={1} startX={78} startY={33}
                endOpacity={0} />
                
                <An src={['5-books.svg']} pos={props.position} start={2690} end={2740} 
                startSize={12.45} startOpacity={0} startX={57} startY={11}  
                endOpacity={1} />
                <An src={['5-books.svg']} pos={props.position} start={2740} end={3050} 
                startSize={12.45} startOpacity={1} startX={57} startY={11} 
                />
                <An src={['5-books.svg']} pos={props.position} start={3050} end={3100} 
                startSize={12.45} startOpacity={1} startX={57} startY={11} 
                endOpacity={0} />
                <An src={['5-react.svg']} pos={props.position} start={2870} end={2920} 
                startSize={27.8} startOpacity={0} startX={64} startY={14}  
                endOpacity={1} />
                <An src={['5-react.svg']} pos={props.position} start={2920} end={3050} 
                startSize={27.8} startOpacity={1} startX={64} startY={14} 
                />
                <An src={['5-react.svg']} pos={props.position} start={3050} end={3100} 
                startSize={27.8} startOpacity={1} startX={64} startY={14} 
                endOpacity={0} />

                <An src={['6-computer.svg']} pos={props.position} start={2460} end={2510} 
                startSize={30} startOpacity={0} startX={55} startY={40}  
                endOpacity={1} />
                <An src={['6-computer.svg']} pos={props.position} start={2510} end={3150} 
                startSize={30} startOpacity={1} startX={55} startY={40} 
                />
                
                <An src={['4-whiteboard.svg']} pos={props.position} start={2440} end={2490} 
                startSize={32.85} startOpacity={1} startX={7} startY={12} 
                endSize={11.19} endX={26} endY={40} />
                <An src={['4-whiteboard.svg']} pos={props.position} start={2490} end={3050} 
                startSize={11.19} startOpacity={1} startX={26} startY={40} 
                 />
                 <An src={['4-whiteboard.svg']} pos={props.position} start={3050} end={3100} 
                startSize={11.19} startOpacity={1} startX={26} startY={40} 
                endOpacity={0} />

                <An src={['text-9.svg']} pos={props.position} start={2560} end={2610} 
                startSize={35.2} startOpacity={0} startX={7} startY={8}   
                endOpacity={1} />
                <An src={['text-9.svg']} pos={props.position} start={2610} end={2820} 
                startSize={35.2} startOpacity={1} startX={7} startY={8} 
                />
                <An src={['text-9.svg']} pos={props.position} start={2820} end={2870} 
                startSize={35.2} startOpacity={1} startX={7} startY={8} 
                endOpacity={0} />
                <An src={['text-10.svg']} pos={props.position} start={2690} end={2740} 
                startSize={41.7} startOpacity={0} startX={6} startY={24}  
                endOpacity={1} />
                <An src={['text-10.svg']} pos={props.position} start={2740} end={2820} 
                startSize={41.7} startOpacity={1} startX={6} startY={24} 
                />
                <An src={['text-10.svg']} pos={props.position} start={2820} end={2870} 
                startSize={41.7} startOpacity={1} startX={6} startY={24} 
                endOpacity={0} />
                <An src={['text-11.svg']} pos={props.position} start={2870} end={2920} 
                startSize={23.29} startOpacity={0} startX={17} startY={12}  
                endOpacity={1} />
                <An src={['text-11.svg']} pos={props.position} start={2920} end={3000} 
                startSize={23.29} startOpacity={1} startX={17} startY={12} 
                />
                <An src={['text-11.svg']} pos={props.position} start={3000} end={3050} 
                startSize={23.29} startOpacity={1} startX={17} startY={12}
                endOpacity={0} />

                {/* Scene 6 */}
                <An src={['6-computer.svg']} pos={props.position} start={3150} end={3200} 
                startSize={30} startOpacity={1} startX={55} startY={40} 
                endSize={100} endX={0} endY={10} />
                <An src={['6-computer.svg']} pos={props.position} start={3200} end={3800} 
                startSize={100} startOpacity={1} startX={0} startY={10} 
                />
                <An src={['6-cmd.svg']} pos={props.position} start={3230} end={3280} 
                startSize={53} startOpacity={0} startX={40} startY={15} 
                endOpacity={1} />
                <An src={['6-cmd.svg']} pos={props.position} start={3280} end={3800} 
                startSize={53} startOpacity={1} startX={40} startY={15} 
                />
                <An src={['text-12.svg']} pos={props.position} start={3280} end={3330} 
                startSize={33.21} startOpacity={0} startX={46} startY={20}
                endOpacity={1} />
                <An src={['text-12.svg']} pos={props.position} start={3330} end={3800} 
                startSize={33.21} startOpacity={1} startX={46} startY={20} 
                />
                <An src={['text-14.svg']} pos={props.position} start={3410} end={3460} 
                startSize={44.95} startOpacity={0} startX={45} startY={23}
                endOpacity={1} />
                <An src={['text-14.svg']} pos={props.position} start={3460} end={3800} 
                startSize={44.95} startOpacity={1} startX={45} startY={23} 
                />
                <An src={['text-13.svg']} pos={props.position} start={3540} end={3590} 
                startSize={37.18} startOpacity={0} startX={43.5} startY={30} 
                endOpacity={1} />
                <An src={['text-13.svg']} pos={props.position} start={3590} end={3800} 
                startSize={37.18} startOpacity={1} startX={43.5} startY={30} 
                />
                <An src={['text-15.svg']} pos={props.position} start={3670} end={3720} 
                startSize={42.78} startOpacity={0} startX={43.5} startY={37} 
                endOpacity={1} />
                <An src={['text-15.svg']} pos={props.position} start={3720} end={3800} 
                startSize={42.78} startOpacity={1} startX={43.5} startY={37} 
                />
                <TransitionContext.Consumer>
                    {({toggleEndAnimation}) => (
                        <Link to="/navigation/" onClick={toggleEndAnimation}>
                            <An src={['6-enter.svg']} pos={props.position} start={3670} end={3800} 
                            startSize={13} startOpacity={1} startX={69} startY={67}
                            />
                        </Link>
                    )}
                </TransitionContext.Consumer>
                
                
                

            </div>
        </div>
    )
}

{/* <An src={['.svg']} pos={props.position} start={} end={} 
startSize={} startOpacity={} startX={} startY={} 
endSize={} endOpacity={} endX={} endY={}/> */}