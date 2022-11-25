import { Blacklist, Google, Hp, Ibm, Microsoft, Preview, Text, Vector } from "../images"


export const SuperchargeWorkflow = () => {
  return (
    <>
    				<div className='section-container my-20'>
					<h3>Supercharge your workflow</h3>
					<p className='section-content mb-16 text-xl'>We've got the tools to boost your productivity.</p>
					<div className='flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12'>
						<div className='flex flex-col items-center space-y-5'>
							<img src={Blacklist} alt='' className='mb-6' />
							<h5>Create Blacklists</h5>
							<p className='max-w-md text-grayishBlue'>
								Easily search your snippets by content ,category, web address, application , and more.
							</p>
						</div>
						<div className='flex flex-col items-center space-y-5'>
							<img src={Text} alt='textIcon' className='mb-6' />
							<h5>Plain Text Snippets</h5>
							<p className='max-w-md text-grayishBlue'>
								Remove unwanted formatting from copied text for a consistent look.
							</p>
						</div>
						<div className='flex flex-col items-center space-y-5'>
							<img src={Preview} alt='previewIcon' className='mb-6' />
							<h5>Sneak Preview</h5>
							<p className='max-w-md text-grayishBlue'>
								Quick preview of all snippets on your Clipboard for easy access.
							</p>
						</div>
					</div>
				</div>
                <div className='flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0'>
					<img src={Google} alt='logo-google' />
					<img src={Ibm} alt='logo-ibm' />
					<img src={Microsoft} alt='logo-microsoft' />
					<img src={Hp} alt='logo-hp' />
					<img src={Vector} alt='logo-vector-graphics' />
				</div>
    </>
  )
}
