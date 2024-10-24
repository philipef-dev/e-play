import styled from "styled-components";
import bannerImg from "../../assets/images/banner-homem-aranha.png"

export const ImageBanner = styled.div`
    height: 560px;
    max-width: 100%;
    display: block;
    background-image: url(${bannerImg});
    background-size: cover;
    background-repeat: no-repeat;
`