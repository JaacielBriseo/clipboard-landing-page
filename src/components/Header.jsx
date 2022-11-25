import { Logo } from "../images"

export const Header = () => {
  return (
    <div className='section-container mb-40 pt-16'>
    <img src={Logo} alt='logoicon' className='mx-auto my-16' />

    <h3>A history of everything you copy</h3>
    <p className='section-content mb-10 text-2xl'>
        Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your
        devices.
    </p>
    <div className='button-container'>
        <a href='#' className='p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80'>
            Download for iOS
        </a>
        <a href='#' className='p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80'>
            Download for Mac
        </a>
    </div>
</div>
  )
}
