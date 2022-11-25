import { Devices } from "../images";


export const ClipboardAccess = () => {
	return (
		<div className='section-container my-20'>
			<h3>Access Clipboard Anywhere</h3>
			<p className='section-content mb-24 text-xl'>
				Wheter you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
			</p>
			<img src={Devices} alt='devicesimg' className='mx-auto' />
		</div>
	);
};
