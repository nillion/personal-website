import '../../assets/scss/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';
import React from 'react';

config.autoAddCss = false;

const Layout = ({ children }) => {
    return (
        <React.StrictMode>
            <main
                className="main-container"
            >
                <section className="section-container">{children}</section>
            </main>
        </React.StrictMode>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
