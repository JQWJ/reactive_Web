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
        height: 330px;
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
    `,
    MoToday: styled.div`
        width: calc(100% / 3);
        height: 100%;
        position: relative;
        padding: 0px 0.5rem;
        font-weight: bold;
        font-size: 1.175rem;
    `,
    Everyday: styled.div`
        width: calc(100% / 3);
        height: 100%;
        position: relative;
        padding: 0px 0.5rem;
        font-weight: bold;
        font-size: 1.175rem;
    `,
    Venture: styled.div`
        width: calc(100% / 3);
        height: 100%;
        position: relative;
        padding: 0px 0.5rem;
        font-weight: bold;
        font-size: 1.175rem;
    `,
    Inquiry: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    Img: styled.img`
        width: 50%;
    `,
    NewsBar: styled.div`
        align-items : baseline;
        flex-direction : column;
    `
}

const NewsIntro = () => {

    return (
        <Styled.Body>
            <Styled.Container>
                <Styled.category>
                    <Styled.MoToday>
                        에너닷, 태양광 발전소<br />
                        어드바이저 ‘썬디’ 출시
                        <Styled.Img 
                            src={MonTo}
                        />
                    </Styled.MoToday>
                    <Styled.Everyday>
                        농협은행, 에너닷과<br />
                        IoT태양광시스템 도입 추진
                        <Styled.NewsBar>
                            
                        </Styled.NewsBar>
                        <Styled.Img 
                            src={maeil}
                        />
                    </Styled.Everyday>
                    <Styled.Venture>
                        태양광발전소,<br />
                        데이터로 유지, 관리한다
                        <Styled.Img 
                            src={venture}
                        />
                    </Styled.Venture>
                </Styled.category>
            </Styled.Container>
        </Styled.Body>
    )

}

export default NewsIntro