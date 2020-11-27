import React from 'react'
import styled from 'styled-components'
import BgImg from '../img/enerdot_middle_background.png'

const Styled = {
    Body: styled.div`
        width: 100%;
        height: 450px;
        background: url(${BgImg}) 50% 50% / cover;
        @media(max-width: 768px){
        height : 100%;
        background : none;
        }
    `,
    Container: styled.div`
        max-width: 1000px;
        width: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 3rem;
        height: 100%; 
        @media(max-width: 768px){
        flex-direction : column;
        }
    `,
    Logo: styled.div`
        width: 170px;
    `,
    Left: styled.div`
        display : flex;
        width : 50%;
        height : 100%;
        position: relative;
        @media(max-width: 768px){
        width : 100%;
        background : url(${BgImg}) 40% 50% / cover;
        height : 575px;
    }
    `,
    Right: styled.div`
        display : flex;
        width : 50%;
        height : 100%;
        position: relative;
    `,
    Header: styled.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-top: 4.8rem;
        @media(max-width: 768px) {
            display: none;
        }
    `,
    MobileHeader: styled.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        width: auto;
        margin: 0 auto;
        margin-top: 1.5rem;
        align-items: center;
        @media(min-width: 768px) {
            display: none;
        }
    `,
    Title: styled.div`
        font-size: 1.375rem;
        font-weight: bold;
        color: #0A82FF;
        @media(min-width: 768px) {
            font-size: 1.25rem;
        }
    `,
    FlexRow: styled.div`
        width : 100%;
        margin-bottom : 1.5rem;
        display : flex;
        align-items: center;
    `

}

const SundyIntro = () => {
    return (
        <Styled.Body>
            <Styled.Container>
                <Styled.Left>
                    <Styled.MobileHeader>
                        <a href="https://sundy.co.kr">
                        <Styled.Logo>
                            <img src={require('../img/sundy_blue_logo.svg')} alt="sundy_logo"/>
                        </Styled.Logo>
                        </a>
                        <Styled.FlexRow>
                            <Styled.Title>
                                태양광발전소 {'&'} ESS 토탈케어 서비스
                            </Styled.Title>
                        </Styled.FlexRow>
                    </Styled.MobileHeader>
                </Styled.Left>
                <Styled.Right>
                    <Styled.Header>
                        <a href="https://sundy.co.kr">
                            <Styled.Logo>
                                <img src={require('../img/sundy_blue_logo.svg')} alt="sundy_logo" />
                            </Styled.Logo>
                        </a>
                        <Styled.FlexRow>
                            <Styled.Title>
                                태양광발전소 {'&'} ESS 토탈케어 서비스
                            </Styled.Title>
                        </Styled.FlexRow>
                    </Styled.Header>

                </Styled.Right>
            </Styled.Container>
        </Styled.Body>
    )
}

export default SundyIntro