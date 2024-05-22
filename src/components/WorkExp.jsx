import './WorkExp.css';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ershops from '../images/49ershops.jpg';
import optum from '../images/optum.jpg';
import accenture from '../images/accenture.jpg';

const WorkExp = () => {
    return (
      <div id="workexp" className="workexp-outer">
        <h1>Work Expereince</h1>
        <VerticalTimeline>
        <VerticalTimelineElement className='workexp-desc' date="Dec '22 - May '24" iconStyle={{ background: 'rgb(0, 255, 255)', color: '#fff'}}>
          <h2 className='timeline-title'> Student Assistant </h2>
          <h3><img src={ershops} alt="49er Shops"/>49er Shops INC</h3>
          <ol>
            <li>Supported Changes in the websites.</li>
            <li>Resolved customer Queries within established SLA's</li>
          </ol>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='workexp-desc' date="Feb '22 - Jul '22" iconStyle={{ background: 'rgb(0, 255, 255)', color: '#fff' }}>
            <h2 className='timeline-title'>Associate Software Engineer - II </h2>
            <h3><img src={optum} alt="optum" />Optum</h3>
            <ol>
              <li>Revamped and implemented responsive user interfaces with React, Angular leading to a 15% improvement in user satisfaction scores.</li>
              <li>Executed server maintenance and updates using BASH, leading to a noteworthy 70% increase in server up time and an impressive 80% boost in processing speed.</li>
              <li>Created a Python application for XML file processing and data storing in Oracle, achieving a 90% speed boost.</li>
              <li>Administered file maintenance and execution in the production system.</li>
            </ol>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='workexp-desc' date="Jun '21 - Feb '22" iconStyle={{ background: 'rgb(30, 255, 255)', color: '#fff' }}>
            <h2 className='timeline-title'> Application Development Associate </h2>
            <h3><img src={accenture} alt="Accenture"/>Accenture </h3>
            <ol>
              <li>Engaged in collaboration with a proficient group of ETL (Datastage) Developers.</li>
              <li>Supported changes and outages in the production environment.</li>
              <li>Resolved 100% of incidents and failures within established service level agreements.</li>
              <li>Produced analytical reports and interactive dashboards reducing 80% of worktime for comprehensive insights utilizing Tableau and Excel.</li>
            </ol>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
}
export default WorkExp;