import { StyledFooter } from "./styled";

const Footer = (ratesData) => (
    <StyledFooter
        $hidden={!ratesData.status === "success"}
    >
        Kalkulator przelicza waluty według kursów średnich publikowanych przez Narodowy Bank Polski.
    </StyledFooter>
);

export default Footer;