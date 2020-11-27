import React from 'react';
import styled from 'styled-components';

const Styled = {
    Body: styled.div`
        display : flex;
        flex-direction: column;
        justify-content : center;
        align-items : center;
        align-self : center;
        padding : 5rem 0;
        ::after{
          display: block;
          content: "";
          clear: both;
    }
    `,
    Cont: styled.div`
        display : flex;
        width : 100%;
        flex-direction: row;
        justify-content : center;
        align-items : center;
        align-self : center;
        @media(max-width:768px) {
          flex-direction: column;
          width :100%;
    }
    `,
    NoBody: styled.div`
        width : auto;
        display : flex;
        margin : 0 2rem;
        padding-bottom : 1rem;
        border-bottom : 1.8px solid lightgray;
        flex-direction: column;
        @media(max-width:768px) {
          flex-direction: column;
          width : 80vw;
          margin : 1rem 0;
          border-bottom : 0px;
    }
    `,
    NoBar: styled.div`
        padding-bottom : 1rem;
        width : 100%;
        @media(max-width:768px) {
          display : none;
    }
    `,
    MoBar: styled.div`
        padding-bottom : 1rem;
        width : 100%;
        img {
          height : 2px;
        }
        @media(min-width:768px) {
          display : none;
        }
    `,
    NoTitle: styled.div`
        font-size : 1.375rem;
        font-weight : bold;
        margin-bottom: 1rem;
        padding-right : 3rem;
        @media(max-width:768px) {
          padding-right : 0rem;
    }
    `,
    NoContent: styled.div`
        display : flex;
        flex-direction : column;
        font-size : 1rem;
        color : gray;
        padding-right : 3rem;
        @media(max-width:768px) {
          padding-right : 0rem;
    }
    `,
}

const ServiceIntro = () => {
    const programInfos = [
        {
            id: 1,
            title:
                '광범위하게 분산된\n' +
                '에너지 데이터를 수집·관리',
            content:
                '빅데이터 분석, IoT, AI,\n' +
                '블록체인 기술 접목',
        },
        {
            id: 2,
            title:
                '에너닷의 솔루션으로\n' +
                '예측·진단'
            ,
            content:
                '실증 데이터 기반의 발전량,\n' +
                '발전소 예측 진단',
        },
        {
            id: 3,
            title:
                '산업과 고객에게\n' +
                '필요한 서비스를 연결'
            ,
            content:
                '인프라 자산 관리를 위한 O/M,\n' +
                '안전관리, 금융 서비스 선별'
            ,
        },
    ]

    const list = programInfos.map((res) => {
        return (
            <ServiceProgramInfo
                key={res.id}
                info={res}
            />
        )
    })

    return (
        <>
            <Styled.Body>
                <Styled.Cont>
                    {list}
                </Styled.Cont>
            </Styled.Body>

        </>
    );
};

const ServiceProgramInfo = (props) => {
    const { title, content } = props.info
    return (
        <>
            <Styled.NoBody>
                <Styled.NoBar>
                    <img
                        alt="static_bar"
                        src={require('../img/static_active_bar.svg')}
                    />
                </Styled.NoBar>
                <Styled.MoBar>
                    <img
                        alt="static_bar"
                        src={require('../img/mobile_static_active_bar.svg')}
                    />
                </Styled.MoBar>
                <Styled.NoTitle>
                    {
                        title.split('\n').map((res, i) => {
                            return (
                                <span
                                    key={i}
                                >
                                    {res}<br />
                                </span>
                            )
                        })
                    }
                </Styled.NoTitle>
                <Styled.NoContent>
                    {
                        content.split('\n').map((res, i) => {
                            return (
                                <div
                                    key={i}
                                >
                                    {res}
                                </div>
                            )
                        })
                    }
                </Styled.NoContent>
            </Styled.NoBody>
        </>
    )
}


export default ServiceIntro;