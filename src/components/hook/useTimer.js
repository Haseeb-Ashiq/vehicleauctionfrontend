import { useEffect, useState } from "react";

function useTimer({ future }) {
    // const [futureTime, SetFutureTime] = useState(future);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [secs, setSecs] = useState(0);
    let id = '';
    console.log('from useTimer hook ',future)
    const Counter = () => {
        id = setInterval(() => {
            const futures = new Date(String(future)).getTime();
            const now = new Date().getTime();
            const distance = futures - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minut = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let sec = Math.floor((distance % (1000 * 60)) / (1000))

            if (distance < 0) {
                clearInterval(id);
            }
            else {
                setDays(days);
                setHours(hours);
                setMinutes(minut);
                setSecs(sec);
            }
        }, 1000);
    }

    return [days, hours, minutes, secs,Counter];
}
export default useTimer;