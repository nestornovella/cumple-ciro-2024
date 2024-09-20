import mapa from '../assets/mapa.png'


function Map() {
    return ( 
        <section className="h-100px p-8 rounded-lg flex flex-col justify-center items-center gap-2">
            <h2 className="text-white text-2xl">Donde es el cumple?</h2>
            <h2 className="text-white text-xl">(provincia de buenos aires 2267)</h2>
            <a className="text-white" href="https://www.google.com/maps/place/Pcia+de+Buenos+Aires+2316,+B1660EGR+Del+Viso,+Provincia+de+Buenos+Aires/@-34.4865824,-58.7858305,17z/data=!4m6!3m5!1s0x95bc99535757ee0b:0xd5d4dadb05f8458!8m2!3d-34.4869167!4d-58.7860714!16s%2Fg%2F11pv2kdr3h?entry=ttu">
                <img className='size-full rounded-lg'  src={mapa} alt="" />
            </a>
        </section>
     );
}

export default Map;