import styled from "styled-components";

export const Items = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`

export const Action = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 98%;
        background: rgba(0, 0, 0, 0.73);
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;   
        
        opacity: 0;
        transition: opacity .5s ease;
        cursor: pointer;
`

export const Item = styled.li`
    position: relative;

    > img {
        width: 150px;
        height: 150px;
        border-radius: 8px;
        border: 2px solid var(--white);
        object-fit: cover;        
    }    

    &:hover {
        ${Action} {
            opacity: 1;
            transition: opacity .5s ease;
        }
    }
`

export const Modal = styled.div`    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;

    z-index: 1;    

    &.visible {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }`

export const ModalContent = styled.div`
    max-width: 960px;
    position: relative;
    z-index: 1;
    
    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        img {
            cursor: pointer;
        }
    }

    h4 {
        font-size: 18px;
        font-weight: bold;
    }    

    img, frame {
        display: block;
        max-width: 100%;
    }

    iframe {
        width: 100%;
        height: 480px;
        border: 0;
    }
`