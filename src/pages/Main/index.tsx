import {
    Navbar,
    Btn,
    Container,
    Page,
    Image,
    Media   
} from "./styles"


export const Main: React.FC = () => {
    return(
        <Page>
            <Navbar>
                <Btn>About me</Btn>
                <Btn>My Projects</Btn>
                <Btn>Contact me</Btn>
            </Navbar>
            <Container display="flex-column" justify="center" items="center">
                <Image src="" alt="" width="100px" height="100px"/>
                <Container display="flex-row" justify="center" items="center">
                    <Media href="">
                        <Image src="" alt="linkedin logo" width="" height=""/>
                    </Media>
                    <Media href="">
                        <Image src="" alt="github logo" width="" height=""/>
                    </Media>
                </Container>
            </Container>
        </Page>
    );
}