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
    </Layout>
)

export default IndexPage;
