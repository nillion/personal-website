import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Layout from '../components/app/layout';
import TypeWriter from '../components/ui/TypeWriter';

const IndexPage = () => (
    <Layout>
        <section className="intro-title-wrapper">
            <h1 className="heading">Arjun Sawhney</h1>
            <h2 className="sub-heading">
                <TypeWriter text="front-end engineer" speed={100} />
            </h2>
        </section>
        <nav className="main-navigation">
            <ul>
                {/* <li>
                    <a href="#about" className="main-navigation-link">
                        <FontAwesomeIcon icon={faUser} className="main-navigation-link-icon" />
                        <span className="main-navigation-link-label">About</span>
                    </a>
                </li>
                <li>
                    <a href="#resume" className="main-navigation-link">
                        <FontAwesomeIcon icon={faNewspaper} className="main-navigation-link-icon" />
                        <span className="main-navigation-link-label">Resume</span>
                    </a>
                </li> */}
                <li>
                    <a href="https://github.com/nillion/" target="_blank" rel="noopener noreferrer" className="main-navigation-link">
                        <FontAwesomeIcon icon={faGithub} className="main-navigation-link-icon" />
                        <span className="main-navigation-link-label">Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/arjun-sawhney/" target="_blank" rel="noopener noreferrer" className="main-navigation-link">
                        <FontAwesomeIcon icon={faLinkedin} className="main-navigation-link-icon" />
                        <span className="main-navigation-link-label">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:arjun7692@gmail.com" className="main-navigation-link">
                        <FontAwesomeIcon icon={faEnvelope} className="main-navigation-link-icon" />
                        <span className="main-navigation-link-label">Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    </Layout>
)

export default IndexPage;
