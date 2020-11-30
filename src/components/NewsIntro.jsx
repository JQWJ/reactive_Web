import React from 'react'
import styled from 'styled-components'
import maeil from '../img/maekyung_news.jpg'
import MonTo from '../img/money_today.png'
import venture from '../img/venture.png'

const Styled = {
    Body: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        padding: 6rem 0px;
        @media(max-width:768px) {
            padding-bottom : 3rem;
        }
    `,
    Container: styled.div`
        max-width: 1000px;
        width: 100%;
        margin: auto;
        @media(max-width:768px) {
            max-width : 100%;
        }
    `,
    category: styled.div`
        display: flex;
        width: 100%;
        margin-bottom: 5rem;
        align-items: center;
        @media(max-width:768px) {
            flex-direction : column;
            margin-bottom: 1rem;
        }
        
    `,
    Article: styled.div`
        display: flex;
        width: 33%;
        height: 100%;
        flex-direction: column;
        padding: 2rem;
        border-radius: 1rem;
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 10px 0px;
        margin: 0 10px 0 10px;
        @media(max-width: 768px) {
            width: 87%;
            margin-bottom: 2rem;
        }
    `,
    Img: styled.img`
        display : flex;
        width: 50%;
        margin-top: 1rem;
        align-items : center;
        height : 44px;
        @media(max-width: 768px) {
            display : flex;
            width: 145px;
            margin-top: 1rem;
            align-items : center;
            height : 44px;
        }
    `,
    MyImg: styled.img`
        display : flex;
        width: 50%;
        margin-top: 1rem;
        align-items : center;
        height : 40px;
        @media(max-width: 768px) {
            display : flex;
            width: 145px;
            margin-top: 1rem;
            align-items : center;
            height : 32px;
        }
    `,
    MoneyBar: styled.div`
        width: 40%;
        background-color: rgb(204, 0, 0);
        height: 2px;
    `,
    MaeilBar: styled.div`
        width: 40%;
        background-color: rgb(255, 153, 0);
        height: 2px;
    `,
    VentureBar: styled.div`
        width: 40%;
        background-color: rgb(0, 102, 255);
        height: 2px;
    `,
    Font: styled.div`
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 2.25rem;
        margin-bottom: 1rem;
        color: rgb(0, 0, 0);
    `,
    Inquiry: styled.div`
        width : 100%;
        margin-bottom : 1rem;
        display : flex;
        align-items: center;
        justify-content : center;
    `,
    InquiryBtn: styled.button`
        display: flex;
        align-items: center;
        border-radius: 2rem;
        padding: 0.5rem 4rem;
        padding-top: 0.7rem;
        color: #ffffff;
        font-size: 1.25rem;
        font-weight: bold;
        background-color: rgb(255, 153, 0);
        box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 10px 0px;
        border: none;
    `,
}

const NewsIntro = () => {

    return (
        <Styled.Body>
            <Styled.Container>
                <Styled.category>
                    <Styled.Article>
                        <a href="https://news.mt.co.kr/mtview.php?no=2020072214124315759"
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                        >
                            <Styled.Font>
                                에너닷, 태양광 발전소<br />
                            어드바이저 ‘썬디’ 출시
                        </Styled.Font>
                            <Styled.MoneyBar>
                            </Styled.MoneyBar>
                            <Styled.MyImg
                                src={MonTo}
                            />
                        </a>
                    </Styled.Article>

                    <Styled.Article>
                        <a href="https://www.mk.co.kr/news/economy/view/2019/09/697657"
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                        >
                            <Styled.Font>
                                농협은행, 에너닷과<br />
                        IoT태양광시스템 도입 추진
                        </Styled.Font>
                            <Styled.MaeilBar>
                            </Styled.MaeilBar>
                            <Styled.Img
                                src={maeil}
                            />
                        </a>
                    </Styled.Article>

                    <Styled.Article>
                        <a href="https://www.venturesquare.net/788854"
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                        >
                            <Styled.Font>
                                태양광발전소,<br />
                        데이터로 유지, 관리한다
                        </Styled.Font>
                            <Styled.VentureBar>
                            </Styled.VentureBar>
                            <Styled.Img
                                src={venture}
                            />
                        </a>
                    </Styled.Article>
                </Styled.category>
                <Styled.Inquiry>
                    <Styled.InquiryBtn>
                        사업 제휴 문의
                    </Styled.InquiryBtn>
                </Styled.Inquiry>
            </Styled.Container>
        </Styled.Body>
    )

}

export default NewsIntro