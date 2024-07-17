import Slider from 'react-infinite-logo-slider'
import Rust from 'react-icons/fi'

export const LogoSlider = () => {
    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
            className="bg-black"
        >
            <Slider.Slide>
                <img src="/slider/any.png" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/any2.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/any3.png" alt="any3" className='w-36' />
            </Slider.Slide>
        </Slider>
    )
}              
                     
