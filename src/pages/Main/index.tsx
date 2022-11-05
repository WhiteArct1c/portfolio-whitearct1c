import {
    Navbar,
    Btn,
    Container,
    Page,
    Image,
    Media,
    Text  
} from "./styles"

import logo from '../../assets/logo.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import { motion } from "framer-motion"

export const Main: React.FC = () => {
    return(
        <Page>
            <Navbar>
                <Btn>About me</Btn>
                <Btn>My Projects</Btn>
                <Btn>Contact me</Btn>
            </Navbar>
            <Container display="flex" direction="column" justify="center" items="center" mt="270px" gap="140px">
                
                <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <Container display="flex" direction="column" justify="center" items="center">
                        <motion.div 
                            transition={{y:{ duration: .9, yoyo: Infinity}}}
                            animate={{y:['0%', '3%']}}
                        >
                            <Image src={logo} alt="logo portfolio whitearct1c" width="350px" height="318px"/>
                        </motion.div>
                        <Text>&lt;WhiteArct1c&gt;</Text>
                    </Container>
                </motion.div>

                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.5, delay: 0.5}}
                >
                    <Container display="flex" direction="row"  justify="center" items="center" width="117px" height="42.46px" gap="30.97px">
                        <Media href="https://www.linkedin.com/in/whitearct1c/" target='_blank'>
                            <Image src={linkedin} alt="linkedin logo" width="" height=""/>
                        </Media>
                        <Media href="https://github.com/WhiteArct1c" target='_blank'>
                            <Image src={github} alt="github logo" width="" height=""/>
                        </Media>
                    </Container>
                </motion.div>
                
            </Container>
        </Page>
    );
}