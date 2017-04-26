import React from 'react';

import './style.css';

import Nav from '../nav';
import Footer from '../footer';
import FadingRow from '../primitives/fading-row';
import Header1 from '../primitives/header-1';
import Article from '../primitives/article';

export default function Services() {
  return (
    <div>
      <Nav />

      <div className="container">
        <section>
          <Article>
            <Header1>Web Services</Header1>
            <p>
              Complete the form below to get in touch regarding your project. Alternatively, you can email me directly at <i>mpigsley@gmail.com</i>.
            </p>
            <form action="http://formspree.io/mpigsley@gmail.com" method="post">
              <div className="row">
                <div className="six columns">
                  <label htmlFor="name">Name</label>
                  <input className="u-full-width" type="text" name="name" />
                </div>
                <div className="six columns">
                  <label htmlFor="_replyto">E-mail</label>
                  <input className="u-full-width" type="email" name="_replyto" />
                </div>
              </div>
              <div className="row">
                <div className="six columns">
                  <label htmlFor="company">Company</label>
                  <input className="u-full-width" type="text" name="company" />
                </div>
                <div className="six columns">
                  <label htmlFor="telephone">Telephone</label>
                  <input className="u-full-width" type="tel" name="telephone" />
                </div>
              </div>
              <div className="row">
                <div className="twelve columns">
                  <label htmlFor="project">Tell me about your project</label>
                  <textarea className="u-full-width" name="project" />
                </div>
              </div>
              <div className="row">
                <div className="six columns">
                  <label htmlFor="launch">When would you like to launch?</label>
                  <input className="u-full-width" type="date" name="launch" />
                </div>
                <div className="six columns">
                  <label htmlFor="type">Type of Project</label>
                  <select className="u-full-width" id="type">
                    <option value="mix">Website</option>
                    <option value="master">App</option>
                    <option value="mix_master">Other</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="twelve columns">
                  <label htmlFor="comments">Questions & Comments</label>
                  <textarea className="u-full-width" name="comments" />
                </div>
              </div>
              <input type="hidden" name="_next" value="http://mitchelpigsley.com/" />
              <input type="hidden" name="_subject" value="Web Enquiry" />
              <input className="button-primary Primary-Submit" type="submit" value="Submit" />
              <input type="reset" value="Reset" />
            </form>
          </Article>
          <FadingRow />
          <Article>
            <Header1>Mixing / Mastering Services</Header1>
            <p>
                <b>I am not accepting mixing and mastering client work currently</b>
            </p>
            <p>
                Filling out the form below is the best way to get me all the information I need, but if you just need my email it is <i>logicalmitch@gmail.com</i>.
            </p>
            <p>
                All financial transactions go through PayPal and I require 25% of the total payment before I start work. We can talk about pricing once the below form is filled out and sent.
            </p>
            <form action="http://formspree.io/logicalmitch@gmail.com" method="post">
              <div className="row">
                <div className="six columns">
                  <label htmlFor="name">Name</label>
                  <input className="u-full-width" type="text" name="name" />
                </div>
                <div className="six columns">
                  <label htmlFor="_replyto">E-mail</label>
                  <input className="u-full-width" type="email" name="_replyto" />
                </div>
              </div>
              <div className="row">
                <div className="four columns">
                  <label htmlFor="genre">Genre</label>
                  <input className="u-full-width" type="text" name="genre" />
                </div>
                <div className="four columns">
                  <label htmlFor="track_num">Number of Tracks</label>
                  <input className="u-full-width" type="number" name="track_num" />
                </div>
                <div className="four columns">
                  <label htmlFor="type">Type</label>
                  <select className="u-full-width" id="type">
                    <option value="mix">Mix</option>
                    <option value="master">Master</option>
                    <option value="mix_master">Mix & Master</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="six columns">
                  <label htmlFor="start_date">When will the tracks be ready?</label>
                  <input className="u-full-width" type="date" name="start_date" />
                </div>
                <div className="six columns">
                  <label htmlFor="end_date">When do you need them back?</label>
                  <input className="u-full-width" type="date" name="end_date" />
                </div>
              </div>
              <div className="row">
                <div className="twelve columns">
                  <label htmlFor="comments">Questions & Comments</label>
                  <textarea className="u-full-width" name="comments" />
                </div>
              </div>
              <input type="hidden" name="_next" value="http://mitchelpigsley.com/" />
              <input type="hidden" name="_subject" value="Mixing/Mastering Enquiry" />
              <input className="button-primary Primary-Submit" type="submit" value="Submit" disabled />
              <input type="reset" value="Reset" />
            </form>
          </Article>
          <FadingRow />
        </section>
      </div>

      <Footer />
    </div>
  );
}
