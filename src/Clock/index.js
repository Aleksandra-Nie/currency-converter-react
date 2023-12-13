import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

const formatDate = {
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest {date.toLocaleString(undefined, formatDate)}
        </StyledClock>
    );
};

export default Clock;