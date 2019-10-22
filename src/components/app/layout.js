import '../../assets/scss/main.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <main
            className="main-container"
        >
            <section className="section-container">{children}</section>
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
