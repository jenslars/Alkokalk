import { StyledAboutContainer, StyledAboutLinks } from "./styles";

const AboutContent = () => {
    return (
        <StyledAboutContainer>
            <h1>Om Alkokalk</h1>
            <p>Alkokalk byggdes som del av kursen Flerplattformsapplikationer med webbtekniker 
                på Malmö Universitet 2024. Tjänsten byggdes av <StyledAboutLinks href="HPerssn">Henrik Persson</StyledAboutLinks>, <StyledAboutLinks href="elsagrufstedt">Elsa Grufstedt</StyledAboutLinks> och <StyledAboutLinks href="https://github.com/jenslars">Jens Larsen</StyledAboutLinks> </p>

            <p>Syftet med Alkokalk är erbjuda möjligheten att räkna ut APK (Alkohol Per Krona) 
                för alla drycker som säljs på Systembolaget med hjälp av olika sorterings, filtrerings och sökindex.</p>
            
            <p>Programmet är byggt i Next.js och använder sig av data hämtad från <a href="https://github.com/C4illin/systembolaget-data">https://github.com/C4illin/systembolaget-data</a> </p>


        </StyledAboutContainer>
        )
    
}

export default AboutContent;