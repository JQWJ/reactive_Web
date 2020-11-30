import React from 'react'
import styled from 'styled-components'
import BgImg from '../img/enerdot_bottom_background.jpg'

const Styled = {
    Body: styled.div`
        width: 100%;
        background: url(${BgImg}) 50% 50% / cover;
        height: 450px;
        color: #ffffff;
        @media(max-width: 768px) {
            height: 550px;
        }
    `,
    BgOpactity : styled.div`
        position : absolute;
        width : 100%;
        height : 450px;
        background-color : rgba(0, 0, 0, 0.2);
        @media(max-width:768px){
          height : 550px;
        }
    `,
    container: styled.div`
        display: flex;
        align-items : center;
        justify-content : center;
        padding-top: 3rem;
        height : 100%;
        @media(max-width:768px){
          padding-bottom : 1rem;
          padding-top: 1rem;
        }
    `,
    AbContainer: styled.div`
        position: absolute;
        @media(max-width: 768px) {
            height: 544px;
        }
    `,
    Content: styled.div`
        display : flex;
        align-items : center;
        flex-direction : row;
        align-items : center;
        align-self : center;
        margin : 0 auto;
        padding : 0rem 2rem;
        @media(max-width:768px){
          flex-direction : column;
          padding : 0;
        }
    `,
    Title : styled.div`
        flex-direction : row;
        width : 100%;
        text-align : center;
        font-size : 3.125rem;
        font-weight :bold;
        margin-bottom : 6rem;
        @media (max-width:768px) {
          display : none;
        }
    `,    
    MobileTitle: styled.div`
        text-align: left;
        font-weight: bold;
        font-size: 1.875rem;
        margin-top: 20rem;
        span {
            display: block;
        }
        @media(min-width: 768px) {
            display: none;
        }
    `
}

const Careers = () => {
    
    return (
        <Styled.Body>
            <Styled.BgOpactity />
                <Styled.container>
                    <Styled.AbContainer>
                        <Styled.Content>
                            <Styled.Title>
                                에너지 생태계를 하나로 연결하는<br />
                                미래 에너지 패러다임을 만듭니다.<br />
                            </Styled.Title>
                            <Styled.MobileTitle>
                                에너지 생태계를 하나로<br />
                                연결하는 미래 에너지<br />
                                패러다임을 만듭니다.
                            </Styled.MobileTitle>
                        </Styled.Content>
                    </Styled.AbContainer>
                </Styled.container>
        </Styled.Body>
    )

}

export default Careers