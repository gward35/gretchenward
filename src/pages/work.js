import React from 'react'
import ProjectItem from '../components/project-item'
import ProjectDescription from '../components/project-description'
import RetroButtonExternal from '../components/retroButtonExternal'
import stsci from '../img/stsci.jpg'
import trilateral from '../img/trilateral.jpg'
import realtimegrid from '../img/930.jpg'
import gimmepatterns from '../img/gimmepatterns.png'
import sanjose from '../img/sanjose.png'
import pbskids from '../img/pbskids.png'
import pbs from '../img/pbs.png'

const Work = () => (
  <div className="web-projects">
    <div className="project-container">
      <ProjectDescription
        className="description"
        title="PBS Smart TV Streaming App"
        subtitle="App / API  Development + Video"
        description="The PBS SMART TV Streaming app is currently available on Samsung and VIZIO platforms. It leverages React and HLS.js for video processing."
      ></ProjectDescription>
      <ProjectItem image={pbs} alt="PBS Nova Screen Caption" />
    </div>
    <div className="project-container">
      <ProjectDescription
        className="description"
        title="PBS Kids Smart TV Streaming App"
        subtitle="App / API  Development + Video"
        description="The PBS Kids SMART TV Streaming app is currently available on Samsung and VIZIO platforms. It leverages React and HLS.js for video processing."
      ></ProjectDescription>
      <ProjectItem image={pbskids} alt="PBS Kids Home Screen Caption" />
    </div>
    <div className="project-container">
      <ProjectDescription
        className="description"
        title="Resident Web Assistant"
        subtitle="App / API  Development + Language Processing"
        description="The Resident Web Assistant App features a React and TypeScript front end and aims to assist residents with pertinent questions they may have about city services. Users can pick from suggested questions or submit a query to be pointed to the correct information."
      >
        <RetroButtonExternal
          link="https://sj-assistant-staging.herokuapp.com/iframe/"
          text="View Site"
        />
      </ProjectDescription>
      <ProjectItem image={sanjose} alt="City of San Jose web assistant" />
    </div>
    <div className="project-container">
      <ProjectDescription
        className="description"
        title="Gimme Patterns"
        subtitle="Web / API  Development + Generative Code"
        description="Gimmie patterns used generative code concepts to draw patterns server side via Node.js. We can access the API via an endpoint and create patterns with query parameters or use the ui on the front end site to generate patterns for us. Patterns have several optons such as patter type, color, tile size, canvas size, and seed. There is also a random option which will randomize these parameters."
      >
        <RetroButtonExternal
          link="https://gimmepatterns-staging.herokuapp.com/"
          text="View Site"
        />
      </ProjectDescription>
      <ProjectItem
        image={gimmepatterns}
        alt="Gimme patterns pattern generator"
      />
    </div>
    <div className="project-container">
      <ProjectDescription
        className="description"
        title="STSCI"
        subtitle="Web Development"
        description="Redesign for the Space Telescope Science Institute. 
          Development relied heavily on designing and building reusable components 
          for STSCI content editors to use in their CMS. Site focuses on accessibility 
          standards semantic html and jquery."
      >
        <RetroButtonExternal link="http://www.stsci.edu/" text="View Site" />
      </ProjectDescription>
      <ProjectItem image={stsci} alt="Space Telescope Science Institute" />
    </div>
    <div className="project-container">
      <ProjectDescription
        className="description"
        title="Trilateral"
        subtitle="Web Design | Web Development"
        description="Crude oil, electricity, and natural gas trade data between the 
          United States, Canada, and Mexico. Built with Angular and Highcharts this site 
          uses Angular Translate to translate content into English, Spanish, and French"
      >
        <RetroButtonExternal link="http://www.nacei.org/" text="View Site" />
      </ProjectDescription>
      <ProjectItem
        image={trilateral}
        alt="North American Cooperation on Energy Information"
      />
    </div>
    <div className="project-container">
      <ProjectDescription
        className="description"
        title="930"
        subtitle="Web Development"
        description="The Realtime Grid is a near real time reporting system of energy 
          demand and consumption throughout the Lower 48 states. The website feature hourly, 
          weekly, monthly, and annual data based on the reporting done by the U.S. Balancing 
          Authorities. Users can get real up to the hour data about the U.S. Eletrical Grid. 
          The sites framework was built on Angular and features a custom Highcharts build for 
          all the graphs and charts as well as a custom Moment library to handle all the 
          timezone and datetime changes."
      >
        <RetroButtonExternal
          link="https://www.eia.gov/electricity/gridmonitor/dashboard/electric_overview/US48/US48"
          text="View Site"
        />
      </ProjectDescription>

      <ProjectItem
        image={realtimegrid}
        alt="U.S. ELECTRIC SYSTEM OPERATING DATA"
      />
    </div>
  </div>
)

export default Work
