import logo from '../../assetsbennet/logoBennet.png'
import './loader.css'
function Loader(){


    return (
        <div className='loader__container'>
            <div className='loader__inner'>
                <img src={logo} alt="logo" className='loader__image animation-grow'/>
            </div>
        </div>
    )
}


export default Loader