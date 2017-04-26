import React from 'react';

import mitch from './mitch.jpg';

export default function Home() {
  return (
    <div>
      <section id="about">
        <div className="row">
          <article className="seven columns">
            <h1>About</h1>
            <img src={mitch} alt="Mitchel Pigsley" />
            <p>Hi there, I'm Mitchel Pigsley</p>
            <p>I spend my days as a software developer for senior living community platform called <a href="https://ourlifeloop.com/">Lifeloop</a> based out of Omaha, Nebraska where I primarily develop using Node.js, Express.js, React, and Redux. My evenings and weekends I spend as a freelance web developer and amateur audio engineer.</p>
            <p>I offer a freelance web development service where I focus on giving a custom experience that matches the needs of the client. If you are interested in inquiring about these services, send me a message at <a href="mailto:mpigsley@gmail.com" target="_top">mpigsley@gmail.com</a> or see the <a href="/services">services page</a> to make an online inquiry.</p>
          </article>
          <article className="five columns">
            <h2>Skills</h2>
            <p>
              Node.js | Express.js | React | Redux | Reflux | Webpack | Backbone.js | Marionette.js | C# | .NET | Ruby | Rails | Java | C
            </p>
            <h2>Recent Work</h2>
            <div className="link-dialog">
              <a href="http://www.besweetomaha.com">Be Sweet Bakery</a>
              <p>Be Sweet Bakery in Omaha Nebraska serving custom cheesecakes, cupcakes, cookies, and much more.</p>
            </div>
            <div className="link-dialog">
              <a href="http://www.tudorarms.org">Tudor Arms</a>
              <p>Historic condo style apartment complex site with forum, questions & answers, and blog.</p>
            </div>
          </article>
        </div>
        <hr />
      </section>

      <section id="experience">
        <div className="row">
          <article className="ten columns offset-by-one">
            <h1>Experience</h1>
            <div className="link-dialog">
              <a href="https://ourlifeloop.com/">Lead Software Developer - Lifeloop</a>
              <p className="date-range">Jan 2017 - Present</p>
              <p>Work with a small agile team to build tools to help manage senior living communities, connect families with their loved ones, and track and report on individuals.</p>
              <p>Our team uses many technologies including Node.js, Express.js, and Mongoose on our back-end and React, Redux, Babel, Webpack, Marionette.js, Backbone.js, and more on our front-end.</p>
            </div>
            <div className="link-dialog">
              <a href="https://www.hudl.com/">Web Developer - Hudl</a>
              <p className="date-range">Jan 2014 - Jan 2017</p>
              <p>Developed in a highly distributed and parallel environment utilizing queues, notifications, and object storage in AWS.</p>
              <p>Maintained a sport-agnostic, client-side analytics platform with modern web technologies and frameworks (React, Redux, ES6, D3js, CSS modules).</p>
              <p>Continually improved multi-layer caching, data consolidation, and lazy loading to optimize the mass of data the analytics platform used.</p>
              <p>Helped coordinate developer intern on-boarding and managed full-time interns.</p>
            </div>
            <div className="link-dialog">
              <a href="https://www.hudl.com/">Web Developer Intern - Hudl</a>
              <p className="date-range">May 2014 - Dec 2014</p>
              <p>Learned to work in a very quick agile team environment. Helped to enhance and maintain Hudl’s first microserver cluster.</p>
              <p>Used Elasticsearch to build a fast, scalable, and maintainable multifaceted search engine for recruiters looking for football and basketball athletes.</p>
            </div>
            <div className="link-dialog">
              <a href="https://www.up.com">Web Developer Intern - Union Pacific</a>
              <p className="date-range">May 2013 - May 2014</p>
              <p>Designed web services and applications for desktop, tablet, and mobile devices.</p>
              <p>The software development involves leveraging new design paradigms including Responsive UX and RESTful services. Many tools and software packages are used including JQuery Mobile, PhoneGap, HTML5, CSS3, Javascript, and Java for deployment and back-end services.</p>
              <p>Team collaboration, application deployment, interface design, and application security are all valuable experiences gained as a software developer at Union Pacific Railroad.</p>
            </div>
          </article>
        </div>
        <hr />
      </section>

      <section id="logicalmitch">
        <div className="row">
          <article className="ten columns offset-by-one">
            <h1>Logical Mitch</h1>
            <p>
                Outside of technology, web design, and development, another passion of mine is music. Specifically the production and science of music. One day I began creating tutorials in Logic Pro on youtube that began gaining traction and here I am.
            </p>
            <p>
                If you would like more information on a topic or would like to make an inquiry into mixing or mastering services, please feel free to contact me by <a href="/services" target="_top">filling out this handy form</a>, messaging me at <a href="mailto:logicalmitch@gmail.com" target="_top">logicalmitch@gmail.com</a> or any of the social media sites in the contact section below.
            </p>
            <p>
                If you'd like to vote on the next tutorial, feel free to check out <a href="https://docs.google.com/spreadsheet/viewform?usp=drive_web&formkey=dEktcEhTZy02RFVhR212VG5VaWV2T1E6MQ#gid=0">this Google form</a>. I take it all into consideration when picking my next tutorial. 
            </p>
          </article>
        </div>
        <div className="row">
          <article className="six columns">
            <h2>Latest Videos</h2>
            <p>
              Want to keep up to date? These links auto-update as new videos are released.
            </p>
            <div id="latest_videos"></div>
          </article>
          <article className="six columns">
              <h2>Playlists</h2>
              <p>
                Don't know in which order to watch the videos? Help me help you. Here are some playlists that can help you dive into the the huge world of audio production and Logic Pro.
              </p>
              <div className="link-dialog">
                <a href="http://www.youtube.com/playlist?list=PLRKaAL-HJnRj7S6s8JF_ufVna0bpUjzvf">Logic Pro X</a>
                <p>Collection of all tutorials in LPX</p>
              </div>
              <div className="link-dialog">
                <a href="https://www.youtube.com/playlist?list=PL1EB2F72E01B137EE">Logic Pro 9</a>
                <p>Collection of all tutorials in LP9 (Still applicable in LPX)</p>
              </div>
              <div className="link-dialog">
                <a href="https://www.youtube.com/playlist?list=PL35AD05F5FCD0FB1A">Tips &amp; Tricks</a>
                <p>Collection of quick tips and tricks in Logic Pro</p>
              </div>
              <div className="link-dialog">
                <a href="https://www.youtube.com/playlist?list=PLRKaAL-HJnRhwuALERWgK16C0J3CXaSvZ">Mitch Talks</a>
                <p>Collection of some universal audio production ideas or talks not completely associated with Logic Pro</p>
              </div>
          </article>
        </div>  
        <hr />
      </section>
    </div>
  );
}
