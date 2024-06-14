import { Container, ContainerTitle, Title, Description, WeatherContainer, WeatherTitle, WeatherRange, WeatherDescription, WeatherImage } from "./styles";

import CardBackground from "/../../../assets/imagens/Card-background.png"
import Moon from "/../../../assets/imagens/Moon.png"


export default function Card(){
    return(

        <Container source={CardBackground} imageStyle={{borderRadius: 8}}>

            <ContainerTitle>

                <Title>Porto Alegre, RS</Title>
                <Discription>Segunda-feira, 15 de maio de 2023</Discription>

            </ContainerTitle>

            <ContainerWrapper>
                <WeatherContainer>
                    <WeatherTitle>28ºc</WeatherTitle>
                    <WeatherRange>26ºc / 32ºc</WeatherRange>
                    <WeatherDescription>Poucas nuvens</WeatherDescription>
                    <WeatherImage>{Moon}</WeatherImage>
                
                </WeatherContainer>
            </ContainerWrapper>

        </Container>
    )
}