import React, { useState } from 'react'
import styled from 'styled-components'

const Styled = {
    Body: styled.div`
        width: 100%;
        height: 573px;
        @media(max-width: 768px) {
            padding: 2rem 0;
        }
    `,
    Container: styled.div`
        max-width: 1000px;
        width: 100%;
        height: 100%;
        margin: auto;
    `,
    ImgBox: styled.div`
        display: flex;
        height: 450px;
        flex-flow: row-wrap;
        align-items: center;
        justify-content: center;
    `,
    Img: styled.img`
        width: 350px;
        height: 450px;
        @media(max-width: 768px) {
            width: 180px;
            height: 180px;
        }
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

const SlideContents = () => {

    // const [addSlideIn, setAddSlideIn] = useState(1)
    // const [isSlideIn, setIsSlideIn] = useState(false)
    // const fadeInInfos = [
    //     {},
    //     {
    //         id: 1,
    //         title: '성장',
    //         contents: '<div>빠르게 성장하고 있는 에너지 시장에 큰 변화를 일으키는</div>' +
    //         '<div>일에 집중하고 있습니다. 하나의 목표를 향해 다양한</div>' + 
    //         '아이디어를 제안하고 빠르게 실행될 수 있도록 도전합니다.',
    //     {
    //         id: 2,
    //         title: '협업',
    //         contents: '<div>열린 소통과 공감, 그 연결고리에서 시너지를 만듭니다.</div>' +
    //         '<div>협업의 과정에서 불필요하고 비효율적인 걸림돌은 제거하고</div>' +
    //         '<div>서로에 대한 신뢰와 존중을 바탕으로 업무 효율을 높이는</div>' +
    //         '진정한 협업을 추구합니다.',
    //     },
    //     {
    //         id: 3,
    //         title: '혁신',
    //         contents: '<div>시행착오를 두려워하지 않습니다. 동료들과 함께  건설적인</div>' +
    //         '<div>대안을 만들어가는 과정에서 크고 작은 혁신을 창출합니다.</div>' +
    //         '<div>모두가 주도적으로 자신의 일에 몰입하는 동시에 일과 삶의</div>' +
    //         '밸런스를 지향하는 혁신 조직을 지향합니다.',
    //     }
    // ]

    return (
        <Styled.Body>
            <Styled.Container>
                <Styled.ImgBox>
                    <Styled.Img src={require('../img/fade_intro_1.svg')} />
                </Styled.ImgBox>
                <a href="https://www.rocketpunch.com/companies/enerdot" style={{textDecoration: 'none'}}>
                <Styled.Inquiry>
                    <Styled.InquiryBtn>
                        함께 하기
                    </Styled.InquiryBtn>
                </Styled.Inquiry>
                </a>
            </Styled.Container>
        </Styled.Body>
    )
}

export default SlideContents