import styled from "styled-components";

interface ContainerProps{
    display: string;
    direction: string;
    justify: string;
    items: string;
    width?:string;
    height?:string;
    gap?:string;
}

interface ImageProps{
    width:string;
    height:string;
}

interface BtnProps{
    width?:string;
    height?:string;
    bg?:string;
}

export const Page = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-color: #001420;
`

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position:absolute;

    border-bottom: 2px solid #FFFFFF;
    border-radius: 0px 0px 100px 100px;

    width: 100%;
    height: 110px;
`
export const Btn = styled.button<BtnProps>`
    
    padding: 10px 20px;
    width: ${props => props.width ? props.width : null};
    height: ${props => props.height ? props.height : null};

    border: none;
    cursor: pointer;

    background-color: ${props => props.bg ? props.bg : 'transparent'};

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;

    text-align: center;
    color: #FFFFFF;

    transition: .3s;

    &:hover{
        transform: scale(1.1);
        background-color: white;
        border-radius: 100px;
        color: #001420;
    }
`

export const Container = styled.div<ContainerProps>`
    
    display: ${props => props.display};
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.items};  

    gap: ${props => props.gap}; 

    width: ${props => props.width ? props.width : null};
    height: ${props => props.height ? props.height : null};

`

export const Image = styled.img<ImageProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-top: 279px;
`

export const Media = styled.a`
    display: flex;
    margin-top: 100px;
`

export const Text = styled.h1`
    color: white;

    margin-top: 32px;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 500;
    font-size: 65px;
    text-align: center;

    color: #FFFFFF;
`