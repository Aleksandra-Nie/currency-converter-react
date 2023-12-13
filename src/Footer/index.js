import { StyledFooter } from "./styled";
import { useRatesDay } from "./useRatesDay";

const Footer = (ratesData) => {
    const formattedRatesDay = useRatesDay(ratesData);

    return (
        <StyledFooter>
            Kalkulator przelicza waluty według kursów średnich publikowanych przez Narodowy Bank Polski.
            <br />
            Aktualne na dzień: <strong>{formattedRatesDay}</strong>
        </StyledFooter>
    );
};

export default Footer;