import styled from "styled-components";

interface ContainerProps{
    display: string;
    justify: string;
    items: string;
}

interface ImageProps{
    width:string;
    height:string;
}

export const Page = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;

    width: 100vw;
    height: 100vh;

    background-color: #001420;
`

export const Navbar = styled.nav`
    display: flex;
    justify-content: cetner;
    align-items: center;

    

    width: auto;
    height: 110px;
`
export const Btn = styled.button`
    
`

export const Container = styled.div<ContainerProps>`
    
`

export const Image = styled.img<ImageProps>`
    
`

export const Media = styled.a`
    
`