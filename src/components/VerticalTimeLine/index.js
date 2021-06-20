import React from "react";
import champions from "../../championsjson";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../VerticalTimeLine/styles.css'
import LeagueLogo from'../../images/LeagueLogo.png'
import 'react-vertical-timeline-component/style.min.css';


const LegendsVerticalTimeLine = () => {
    const goToBio = (champ) => {    
        let champName = champ.toLowerCase().split(' ').join('').replace(/[.,’]/, '')

        window.open(`https://universe.leagueoflegends.com/pt_BR/story/champion/${champName}/`);
    }

    return (
        <VerticalTimeline>
        {champions.map((element, index) => {
            return(
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ 
                            backgroundColor:'transparent', 
                            color: '#fff' 
                        }}
                        contentArrowStyle={{ 
                            borderRight: '20px solid  green' 
                        }}
                        iconStyle={{ 
                            backgroundImage: `url(${LeagueLogo})`, 
                            backgroundRepeat: 'no-repeat', 
                            backgroundSize: 'cover', color: '#fff'
                        }}
                        date={'Data de lançamento: ' + element.releaseDate}
                        >
                        <img className='champ-image' 
                            src={element.squareImage} 
                            alt={element.name + '_image'}
                            onClick={() => goToBio(element.name)}
                        />
                        <div className="champ-desc">
                            <h2 
                                className="vertical-timeline-element-title"> {element.name}
                            </h2>
                            <h5 
                                className="vertical-timeline-element-subtitle"> {element.title}
                            </h5>
                        </div>
                    </VerticalTimelineElement>
                </React.Fragment>
            )}
        )}    
        </VerticalTimeline>
    );
}

export default LegendsVerticalTimeLine;
