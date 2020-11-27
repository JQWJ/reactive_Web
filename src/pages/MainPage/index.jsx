import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import About from './About'

const Styled = {
    Body: styled.div`
        width:100%;
        overflow-y: hidden;
    `
}

const MainPage = () => {
    
    return (
        <Styled.Body>
            <Header />
            <About />
        </Styled.Body>
    )

}

export default MainPage