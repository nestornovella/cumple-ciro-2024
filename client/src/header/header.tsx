import octane from '../assets/octaneSinFondo.png'
import dialog from '../assets/dialogo sin fondo.png'
import pathFinder from '../assets/pathFinder.png'
import Styles from './header.module.css'

function Header() {

    

    return (
        <div>
            <div className="bg-primary w-full h-[60px]">
                <div className="flex justify-center items-center h-full gap-5">
                    <h2 className="text-white  font-frikiFont">Vos venis?</h2>
                    {/* <input className='p-2 rounded-lg' type="text" placeholder='confirmar asistencia ' /> */}
                </div>
            </div>
            <div className='relative z-[10]'>
                <div className=" flex flex-col gap-10 bg-primary min-h-[600px] mt-[350px] mb-[100px] rounded-lg relative z-[2] shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] justify-center items-center ">
                <div className='bg-[#FF0990] rounded-lg animate-bounce'>
                   <h2 className='p-2 text-xl text-white font-bold 
                   '>Upss, se suspendio por las probabilidades de lluvia y se pasara para el domingo 29 de septiembre</h2>
                </div>
                    <img className='w-[200px] animate-pulse' src="https://cdn.pixabay.com/animation/2023/11/11/18/15/18-15-55-407_512.gif" alt="" />
                    <h2 className='text-[40px] font-bold text-white text-center mb-10'>LOS ESPERO FESTEJAREMOS MI CUMPLE VENGAN TODOS EL DOMINGO 29</h2>
                    {/* <p className='text-white'>se suspende si no venis!</p> */}
                </div>
                <div className={`${Styles.octane} absolute -top-0 z-[1] flex opacity-0`}>
                    <div className=''>
                        <img className='w-[500px] ' src={octane} alt="" />
                    </div>
                    <div className='relative hidden md:block'>
                        <img className='w-[500px] relative -top-[100px] ' src={pathFinder} alt="" />
                        <div className={`${Styles.dialog2} absolute -top-[340px] z-[1] opacity-0`}>
                            <div className='relative  font-bold  top-[200px]'>
                                <img className='w-[250px]' src={dialog} alt="" />
                                <h1 className='text-white absolute top-[calc(25%)] right-[100px] text-3xl font-frikiFont'>YO</h1>
                                <h1 className='text-white absolute top-[calc(35%)] right-[30px] text-3xl font-frikiFont'>TAMBIEN</h1>
                                <h1 className='text-white absolute top-[calc(45%)] right-20 text-3xl font-frikiFont'>VOY</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.dialog} absolute -top-[340px] z-[1] opacity-0`}>
                    <div className='relative  font-bold  ;'>
                        <img className='w-[250px]' src={dialog} alt="" />
                        <h1 className='text-white absolute top-[calc(25%)] right-[50px] text-[26px] font-frikiFont'>CUMPLE</h1>
                        <h1 className='text-white absolute top-[calc(35%)] right-24 text-[26px] font-frikiFont'>DE</h1>
                        <h1 className='text-white absolute top-[calc(45%)] right-20 text-[26px] font-frikiFont'>CIRO</h1>
                    </div>
                </div>
            </div>

        </div>);
}

export default Header;
