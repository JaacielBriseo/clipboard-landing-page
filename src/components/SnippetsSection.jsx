import { Computer } from "../images";

export const SnippetsSection = () => {
	return (
		<>
			<div className='section-container my-20'>
				<h3>Keep track of your snippets</h3>
				<p className='section-content mb-24 text-xl'>
					Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on
					all your devices. Our Mac and iOS apps will help you organize everything.
				</p>
			</div>
			<div className='section-container my-20'>
				<div className='relative flex flex-col md:flex-row md:space-x-32'>
					<div className='md:w-1/2'>
						<img src={Computer} alt='computerimg' className='md:absolute top-0 right-[50%]' />
					</div>
					<div className='flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16'>
						<div>
							<h5>Quick Search</h5>
							<p className='max-w-md text-grayishBlue'>
								Easily search your snippets by content, category , web address , application , and more.
							</p>
						</div>
						<div>
							<h5>iCloud Sync</h5>
							<p className='max-w-md text-grayishBlue'>Instantly saves and syncs snippets across all your devices.</p>
						</div>
						<div>
							<h5>Completely History</h5>
							<p className='max-w-md text-grayishBlue'>
								Retrieve any snippets from the first moment you started using the app.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
