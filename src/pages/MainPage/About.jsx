import React from 'react'
import styled from 'styled-components'
import ServiceIntro from '../../components/ServiceIntro'
import SundyIntro from '../../components/SundyIntro'
import NewsIntro from '../../components/NewsIntro'
import Careers from '../../components/Careers'
import SlideContents from '../../components/SlideContents'
import Footer from '../../components/Footer'

const Styled = {
    Body: styled.div`

    `,
    Cont: styled.div`
        margin: 0 auto;
    `
}

const About = () => {

    return (
        <Styled.Body>
            <Styled.Cont>
                <div id="go_about">
                    <ServiceIntro />
                </div>
                <SundyIntro />
                <NewsIntro />
                <div id="go_careers">
                    <Careers />
                </div>
                <SlideContents />
                <Footer />
            </Styled.Cont>
        </Styled.Body>
    )

}

export default About