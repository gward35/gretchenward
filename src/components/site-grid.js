import React from 'react';
import SiteBlock from './site-block';
import BlockImg from './block-img';
import BlockDescription from './block-description';

const SiteGrid = () => {
  return (
    <section className="web-grid">
      <SiteBlock>
        <BlockImg src="../../img/stsci.jpg" />
        <BlockDescription title="STCSI" subtitle="Web Development" description="Redesign for the Space Telescope Science Institute website. Development focused and relied heavily on designing and building reusable UI components for STSCI content editors to use in their CMS. Site focuses on accessibility standards semantic html and jQuery." />
      </SiteBlock>
      <SiteBlock>
        <BlockImg src="../../img/trilateral.jpg" />
        <BlockDescription title="Trilateral" subtitle="Web Development | Web Development" description="Crude oil, electricity, and natural gas trade data between the United States, Canada, and Mexico. Built with Angular and Highcharts this site uses Angular Translate to translate content into English, Spanish, and French." />
      </SiteBlock>
      <SiteBlock>
        <BlockImg src="../../img/930.jpg" />
        <BlockDescription title="930" subtitle="Web Development | Web Design" description="The Realtime Grid is a near real time reporting system of energy demand and consumption throughout the Lower 48 states. The website feature hourly, weekly, monthly, and annual data based on the reporting done by the U.S. Balancing Authorities. Users can get real up to the hour data about the U.S. Eletrical Grid. The sites framework was built on Angular and features a custom Highcharts build for all the graphs and charts as well as a custom Moment library to handle all the timezone and datetime changes." />
      </SiteBlock>
    </section>
  )
}

export default SiteGrid;
