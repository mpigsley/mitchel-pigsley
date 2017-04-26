import React from 'react';

import './style.css';

import mitch from './mitch.jpg';
import Footer from '../footer';
import FadingRow from '../primitives/fading-row';
import Header1 from '../primitives/header-1';
import Header2 from '../primitives/header-2';
import Article from '../primitives/article';
import Anchor from '../primitives/anchor';
import LinkDialog from '../primitives/link-dialog';

export default function Home() {
  return (
    <div>
      <div className="container">
        <section id="about">
          <div className="row">
            <Article className="seven columns">
              <Header1>About</Header1>
              <img className="Home-Img" src={mitch} alt="Mitchel Pigsley" />
              <p>Hi there, I'm Mitchel Pigsley</p>
              <p>I spend my days as a software developer for senior living community platform called <Anchor href="https://ourlifeloop.com/">Lifeloop</Anchor> based out of Omaha, Nebraska where I primarily develop using Node.js, Express.js, React, and Redux. My evenings and weekends I spend as a freelance web developer and amateur audio engineer.</p>
              <p>I offer a freelance web development service where I focus on giving a custom experience that matches the needs of the client. If you are interested in inquiring about these services, send me a message at <Anchor href="mailto:mpigsley@gmail.com" target="_top">mpigsley@gmail.com</Anchor> or see the <Anchor href="/services">services page</Anchor> to make an online inquiry.</p>
            </Article>
            <Article className="five columns">
              <Header2>Skills</Header2>
              <p>
                Node.js | Express.js | React | Redux | Reflux | Webpack | Backbone.js | Marionette.js | C# | .NET | Ruby | Rails | Java | C
              </p>
              <Header2>Recent Work</Header2>
              <LinkDialog href="http://www.besweetomaha.com" linkText="Be Sweet Bakery">
                Be Sweet Bakery in Omaha Nebraska serving custom cheesecakes, cupcakes, cookies, and much more.
              </LinkDialog>
              <LinkDialog href="http://www.tudorarms.org" linkText="Tudor Arms">
                Historic condo style apartment complex site with forum, questions & answers, and blog.
              </LinkDialog>
            </Article>
          </div>
          <FadingRow topMargin />
        </section>

        <section id="experience">
          <div className="row">
            <Article className="ten columns offset-by-one">
              <Header1>Experience</Header1>
              <LinkDialog href="https://ourlifeloop.com/" linkText="Lead Software Developer - Lifeloop">
                <p className="Home-DateRange">Jan 2017 - Present</p>
                <p>Work with a small agile team to build tools to help manage senior living communities, connect families with their loved ones, and track and report on individuals.</p>
                <p>Our team uses many technologies including Node.js, Express.js, and Mongoose on our back-end and React, Redux, Babel, Webpack, Marionette.js, Backbone.js, and more on our front-end.</p>
              </LinkDialog>
              <LinkDialog href="https://www.hudl.com/" linkText="Web Developer - Hudl">
                <p className="Home-DateRange">Jan 2014 - Jan 2017</p>
                <p>Developed in a highly distributed and parallel environment utilizing queues, notifications, and object storage in AWS.</p>
                <p>Maintained a sport-agnostic, client-side analytics platform with modern web technologies and frameworks (React, Redux, ES6, D3js, CSS modules).</p>
                <p>Continually improved multi-layer caching, data consolidation, and lazy loading to optimize the mass of data the analytics platform used.</p>
                <p>Helped coordinate developer intern on-boarding and managed full-time interns.</p>
              </LinkDialog>
              <LinkDialog href="https://www.hudl.com/" linkText="Web Developer Intern - Hudl">
                <p className="Home-DateRange">May 2014 - Dec 2014</p>
                <p>Learned to work in a very quick agile team environment. Helped to enhance and maintain Hudl’s first microserver cluster.</p>
                <p>Used Elasticsearch to build a fast, scalable, and maintainable multifaceted search engine for recruiters looking for football and basketball athletes.</p>
              </LinkDialog>
              <LinkDialog href="https://www.up.com" linkText="Web Developer Intern - Union Pacific">
                <p className="Home-DateRange">May 2013 - May 2014</p>
                <p>Designed web services and applications for desktop, tablet, and mobile devices.</p>
                <p>The software development involves leveraging new design paradigms including Responsive UX and RESTful services. Many tools and software packages are used including JQuery Mobile, PhoneGap, HTML5, CSS3, Javascript, and Java for deployment and back-end services.</p>
                <p>Team collaboration, application deployment, interface design, and application security are all valuable experiences gained as a software developer at Union Pacific Railroad.</p>
              </LinkDialog>
            </Article>
          </div>
          <FadingRow topMargin />
        </section>

        <section id="logicalmitch">
          <div className="row">
            <Article className="ten columns offset-by-one">
              <Header1>Logical Mitch</Header1>
              <p>
                  Outside of technology, web design, and development, another passion of mine is music. Specifically the production and science of music. One day I began creating tutorials in Logic Pro on youtube that began gaining traction and here I am.
              </p>
              <p>
                  If you would like more information on a topic or would like to make an inquiry into mixing or mastering services, please feel free to contact me by <Anchor href="/services" target="_top">filling out this handy form</Anchor>, messaging me at <Anchor href="mailto:logicalmitch@gmail.com" target="_top">logicalmitch@gmail.com</Anchor> or any of the social media sites in the contact section below.
              </p>
              <p>
                  If you'd like to vote on the next tutorial, feel free to check out <Anchor href="https://docs.google.com/spreadsheet/viewform?usp=drive_web&formkey=dEktcEhTZy02RFVhR212VG5VaWV2T1E6MQ#gid=0">this Google form</Anchor>. I take it all into consideration when picking my next tutorial. 
              </p>
            </Article>
          </div>
          <div className="row">
            <Article className="six columns">
              <Header2>Latest Videos</Header2>
              <p>
                Want to keep up to date? These links auto-update as new videos are released.
              </p>
              <div id="latest_videos"></div>
            </Article>
            <Article className="six columns">
                <Header2>Playlists</Header2>
                <p>
                  Don't know in which order to watch the videos? Help me help you. Here are some playlists that can help you dive into the the huge world of audio production and Logic Pro.
                </p>
                <LinkDialog href="http://www.youtube.com/playlist?list=PLRKaAL-HJnRj7S6s8JF_ufVna0bpUjzvf" linkText="Logic Pro X">
                  Collection of all tutorials in LPX
                </LinkDialog>
                <LinkDialog href="https://www.youtube.com/playlist?list=PL1EB2F72E01B137EE" linkText="Logic Pro 9">
                  Collection of all tutorials in LP9 (Still applicable in LPX)
                </LinkDialog>
                <LinkDialog href="https://www.youtube.com/playlist?list=PL35AD05F5FCD0FB1A" linkText="Tips & Tricks">
                  Collection of quick tips and tricks in Logic Pro
                </LinkDialog>
                <LinkDialog href="https://www.youtube.com/playlist?list=PLRKaAL-HJnRhwuALERWgK16C0J3CXaSvZ" linkText="Mitch Talks">
                  Collection of some universal audio production ideas or talks not completely associated with Logic Pro
                </LinkDialog>
            </Article>
          </div>  
          <FadingRow topMargin />
        </section>
      </div>

      <Footer />
    </div>
  );
}
