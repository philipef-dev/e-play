import styled from "styled-components";
import bannerImg from "../../assets/images/banner-homem-aranha.png"

export const ImageBanner = styled.div`
    height: 560px;
    max-width: 100%;
    display: block;
    background-image: url(${bannerImg});
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 56px;
    padding-top: 32px;
`

export const Titulo = styled.h2`
    font-size: 36px;
    max-width: 450px;
    margin-top: 340px;
`

export const Precos = styled.p`
    font-size: 24px;
    margin-top: 24px;
    font-weight: bold;
    line-height: 28px;

    span {
        text-decoration: line-through;
    }
`