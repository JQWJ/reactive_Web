import React from 'react'
import styled from 'styled-components'
import BlogImg from '../img/blog.png'

const Styled = {
    Body: styled.div`
        width: 100%;
        padding-top: 2rem;
        padding-bottom: 30px;
        background-color: rgb(51, 51, 51);
        color: #ffffff;
    `,
    Container: styled.div`
        max-width: 1000px;
        width: 100%;
        margin : auto;
        @media(max-width:768px) {
          max-width : 100%;
        }
    `,
    content: styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        border-bottom: 1px solid rgb(153, 153, 153);
        margin: 0px 1rem;
        padding-bottom: 1.5rem;
        @media(max-width: 768px) {
            margin: 0 2rem;
        }
    `,
    LogoBox: styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
        @media(max-width: 768px) {
            margin-bottom: 1rem;
        }
    `,
    DotLogo: styled.div`
        width: 114px;
        height: 22px;
    `,
    BlogLogo: styled.img`
        width: 2rem;
        height: 2rem;
        margin-left: 1rem;
    `,
    SecBody: styled.div`
        display: flex;
        align-items: center;
        align-self: center;
        margin: 1rem;        
    `,
    LeftC: styled.div`
        display: flex;
        width: 50%;
        align-items: center;
        align-self: center;
        color: rgb(153, 153, 153);
        font-size: 0.75rem;
    `,
    Right: styled.div`
        display: flex;
        justify-content: flex-end;
        width: 50%;
        margin-right: 1rem;     
        @media(max-width: 768px) {
            justify-content: flex-start;
            margin-top: 1rem;
        }   
    `,
    TextBox: styled.div`
        width: auto;
        flex-direction: column;
        word-spacing: 0.1rem;
        line-height: 1.25rem;
        font-size: 0.7rem;
    `,
    MidRow: styled.div`
        width : 100%;
        display : flex;
        align-items: center;
        @media(max-width:768px) {
          flex-direction : column;
          align-items : baseline;
        }
    `,
    Col: styled.div`
        display : flex;
        width : 50%;
        height : 100%;
        position: relative;
    `,
    Row: styled.div`
        width : 100%;
        margin-bottom : 0.5rem;
        display : flex;
        align-items: center;
    `,
}

const Footer = () => {

    return (
        <Styled.Body>
            <Styled.Container>
                <Styled.content>
                    <Styled.LogoBox>
                        <Styled.DotLogo>
                            <img src={require('../img/enerdot_logo_gray.svg')} alt="Enerdot_Logo" />
                        </Styled.DotLogo>
                        <a href="https://blog.naver.com/enerdot">
                            <Styled.BlogLogo src={BlogImg} alt="Blog_Logo" />
                        </a>
                    </Styled.LogoBox>

                    <Styled.MidRow>
                        <Styled.Col>
                            <Styled.TextBox>
                                <Styled.Row>
                                    <b>(주)에너닷</b>
                                </Styled.Row>
                                <div>
                                    <b>사업자 등록번호 : 715-88-01147 | 대표 : 이동영</b>
                                </div>
                                <div>
                                    <b>서울특별시 서초구 남부순환로350길 12, 7층(서울특별시 서초구 양재동 12-7)</b>
                                </div>
                            </Styled.TextBox>
                        </Styled.Col>
                    <Styled.Right>
                            <Styled.TextBox>
                                <Styled.Row>
                                    <b>문의</b>
                                </Styled.Row>
                                <div>
                                    <b>이메일 : energysolution@enerdot.co.kr</b>
                                </div>
                                <div>
                                    <b>전화 : 02-584-9602</b>
                                </div>
                            </Styled.TextBox>
                    </Styled.Right>
                    </Styled.MidRow>
                </Styled.content>
                <Styled.SecBody>
                    <Styled.LeftC>
                        <b>©Enerdot Co., Ltd. All Rights Reserved.</b>
                    </Styled.LeftC>
                </Styled.SecBody>
            </Styled.Container>
        </Styled.Body>
    )
}

export default Footer