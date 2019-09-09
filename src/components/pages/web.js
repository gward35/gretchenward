import React from 'react';
import ProjectItem from '../project-item';
import ProjectDescription from '../project-description';
import stsci from '../../img/stsci.jpg';
import trilateral from '../../img/trilateral.jpg';
import realtimegrid from '../../img/930.jpg'

const Web = () => (
  <section>
    <div className="web-projects">
      <ProjectItem>
        <img src={stsci} alt="Space Telescope Science Institute" />
        <ProjectDescription 
          className="blue-background description"
          title="STSCI" 
          subtitle="Web Development" 
          description="Redesign for the Space Telescope Science Institute. 
          Development relied heavily on designing and building reusable components 
          for STSCI content editors to use in their CMS. Site focuses on accessibility 
          standards semantic html and jquery." />
      </ProjectItem>
      <ProjectItem>
        <img src={trilateral} alt="North American Cooperation on Energy Information" />
        <ProjectDescription 
          className="description"
          title="Trilateral" 
          subtitle="Web Design | Web Development" 
          description="Crude oil, electricity, and natural gas trade data between the 
          United States, Canada, and Mexico. Built with Angular and Highcharts this site 
          uses Angular Translate to translate content into English, Spanish, and French" />
      </ProjectItem>
      <ProjectItem>
        <img src={realtimegrid} alt="U.S. ELECTRIC SYSTEM OPERATING DATA" />
        <ProjectDescription 
          className="blue-background description"
          title="930" 
          subtitle="Web Development" 
          description="The Realtime Grid is a near real time reporting system of energy 
          demand and consumption throughout the Lower 48 states. The website feature hourly, 
          weekly, monthly, and annual data based on the reporting done by the U.S. Balancing 
          Authorities. Users can get real up to the hour data about the U.S. Eletrical Grid. 
          The sites framework was built on Angular and features a custom Highcharts build for 
          all the graphs and charts as well as a custom Moment library to handle all the 
          timezone and datetime changes." />
      </ProjectItem>
    </div>
  </section>
)

export default Web;