import React from 'react'
import styled from 'styled-components'
import BgImg from '../../img/enerdot_header_background.png'
import '../../App.css'

const Styled = {
    Body: styled.div`
        width: 100%;
        background: url(${BgImg}) 50% 50% no-repeat;
        color: #ffffff;
        background-size: cover;
        height: 650px;
        @media(max-width:768px){
          height: 550px;
        }
    `,
    Opacity: styled.div`
        position : absolute;
        width : 100%;
        height : 650px;
        background-color : #000000;
        opacity : 0.6;
        @media(max-width:768px){
          height : 550px;
        }
    `,
    Logo: styled.img`
        width: 9em        
    `,
    OutLogo: styled.div`
        display : flex;
        justify-content : center;
        align-items : center;
        align-self : center;
        margin : 0 auto;
        padding : 0 2rem;
    `,
    LinkBox: styled.div`
        width: 50%;
        font-size: 18px;
        font-weight: bold;
        text-align: right;
        span {
      cursor: pointer;
    }
    a, span {
      color : #ffffff;
      margin-left : 5rem;
      font-size : 1rem;
    }
    @media(max-width:768px){
      a, span{
        margin-left : 1rem;
        width : 50%;
      }
    }
    `,
    LogoBox: styled.div`
        width: 50%
    `,
    Container: styled.div`
        max-width: 1000px;
        width: 100%;
        margin : auto;
        display : flex;
        align-items : center;
        justify-content : center;
        padding-top: 3rem;
        height : 100%;
        @media(max-width:768px){
            max-width: 100%;
            width: 100%;
            padding-bottom : 1rem;
            padding-top: 1rem;
        }    
    `,
    AbsoluteContainer: styled.div`
        position: absolute;
        max-width: 1000px;
        width: 100%;
        height: 80%;
        margin : auto;
        @media (max-width: 768px) {
            width: 100%;
            height: 550px;
        }
    `,
    Content: styled.div`
        display: flex;
        height: 100%;
        align-items: center;
        flex-direction: row;
        align-self: center;
        margin: 0 auto;
        padding: 0rem 2rem;
        @media(max-widt: 768px) {
            flex-direction: column;
            padding: 0;
        }
    `,
    Title: styled.div`
        flex-direction: row;
        margin: 0 auto;
        font-weight: bold;
        font-size: 4.375rem;
        width: 100%;
        text-align: center;
        margin-bottom: 6rem;
        @media(max-width: 768px) {
            display: none;
        }
    `,
    MobileTitle: styled.div`
        text-align: left;
        font-size: 2.4rem;
        font-weight: bold;
        margin: auto;
        margin-top: 9.8rem;
        span {
            display: block;
        }
        @media(min-width: 768px) {
            display: none;
        }
    `
}

const Header = () => {

    return (
        <Styled.Body>
            <Styled.Opacity />
            <Styled.Container>
                <Styled.AbsoluteContainer>
                    <Styled.OutLogo>
                        <Styled.LogoBox>
                            <Styled.Logo
                                src={require('../../img/enerdot_logo.svg')}
                                alt="enerdot_logo"
                            >
                            </Styled.Logo>
                        </Styled.LogoBox>
                        <Styled.LinkBox>
                            <a href="#go_about" style={{ textDecoration: 'none', color: 'white' }}>about</a>
                            <a href="#go_careers" style={{ textDecoration: 'none', color: 'white' }}>careers</a>
                        </Styled.LinkBox>
                    </Styled.OutLogo>

                    <Styled.Content>
                        <Styled.Title>
                            에너지와 데이터,
                            <span> 서비스가 <br /> 연결된 </span>
                            스마트 솔루션
                        </Styled.Title>
                        <Styled.MobileTitle>
                            에너지와 데이터,
                            <span>서비스가 연결된</span>
                            스마트 솔루션
                        </Styled.MobileTitle>
                    </Styled.Content>
                </Styled.AbsoluteContainer>
            </Styled.Container>
        </Styled.Body>
    )

}

export default Header