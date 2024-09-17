import { useEffect, useState } from "react";


function parseTime ():{days:number, hours:number, minutes:number, seconds:number}{
    const partyDate: Date = new Date('2024-09-22T14:00:00');
    const date: Date = new Date();
    const rest: number = partyDate.getTime() - date.getTime();
    
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    
    // Calculamos los días, horas, minutos y segundos restantes
    const days: number = Math.floor(rest / msInDay);
    const hours: number = Math.floor((rest % msInDay) / msInHour);
    const minutes: number = Math.floor((rest % msInHour) / msInMinute);
    const seconds: number = Math.floor((rest % msInMinute) / msInSecond);
    return {days, hours, minutes, seconds};
}

function Counter() {
    const initialState = parseTime()
    const [time, setTime] = useState(initialState)
    
    // Aseguramos que restamos los valores numéricos (milisegundos)
   
    useEffect(()=>{
        const interval= setInterval(()=>{
            setTime(parseTime())
        },1000)
        return ()=> clearInterval(interval)
    },[])

    return (
        <section className="grid md:grid-cols-2 gap-5 px-8 md:px-15 mb-[50px] ">
            <section className="flex flex-col justify-center items-center gap-2 h-[150px] md:h-full ">
                <h2 className="text-white text-2xl">horarios</h2>
                <div className="bg-primary h-[100px] md:h-full  w-full rounded-xl text-white text-center flex justify-center items-center p-2">
                    <p className="text-lg">El cumple se ralizara el dia domingo 22 de sepiembre desde las 14:00 hs hasta las 18:00 hs</p>
                </div>

            </section>
            <section className="flex flex-col justify-center items-center gap-2">
                <h2 className="text-white text-2xl">Cuanto falta?</h2>
                <div className="bg-primary h-[150px] grid grid-cols-4 gap-4 items-center px-4 py-5 rounded-lg w-full">
                    <div className=" h-full bg-black rounded-xl flex justify-center items-center p-2 flex-col text-white gap-2">
                        <p>Dias</p>
                        <p className="text-white text-[45px]">{time.days}</p>
                    </div>
                    <div className=" h-full bg-black rounded-xl flex justify-center items-center p-2 flex-col text-white gap-2">
                        <p>Horas</p>
                        <p className="text-white text-[45px]">{time.hours}</p>
                    </div>
                    <div className=" h-full bg-black rounded-xl flex justify-center items-center p-2 flex-col text-white gap-2">
                        <p>Min</p>
                        
                        <p className="text-white text-[45px]">{time.minutes}</p>
                    </div>
                    <div className=" h-full bg-black rounded-xl flex justify-center items-center p-2 flex-col text-white gap-2">
                        <p>Seg</p>
                        <p className="text-white text-[45px]">{time.seconds}</p>
                    </div>
                </div>

            </section>
        </section>
    );
}

export default Counter;