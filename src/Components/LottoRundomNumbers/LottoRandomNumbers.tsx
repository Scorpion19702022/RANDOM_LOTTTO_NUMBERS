interface InitialProps {
	isRandomNumbers: number[]
	randomNumbers: () => void
	clearAllNumbers: () => void
}

const LottoRandomNumbers: React.FC<InitialProps> = ({ isRandomNumbers, randomNumbers, clearAllNumbers }) => {
	return (
		<section className='w-[90%] h-[35%] p-[2em] flex flex-col justify-around items-center md:h-[50%] md:justify-between md:pb-24'>
			<h1 className='w-full pb-2 text-center text-gray-300 border-b-2 border-dotted border-b-gray-500 md:w-[50%] md:text-[1.6em]'>
				{'twoje szczęśliwe liczby'.toLocaleUpperCase()}
			</h1>
			<div className='w-full h-[20%] flex justify-between items-center md:w-[50%] md:h-[11%]'>
				<button
					onClick={randomNumbers}
					className='w-[40%] h-full border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'
				>
					{`losuj`.toLocaleUpperCase()}
				</button>
				<button
					onClick={clearAllNumbers}
					className='w-[40%] h-full border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'
				>
					{`wyczyść`.toLocaleUpperCase()}
				</button>
			</div>
			<div className='w-full h-[50%] pt-4 flex justify-center items-center'>
				{isRandomNumbers.map((item, index) => {
					return (
						<span key={index} className=' h-full text-[2em] text-cyan-200 md:text-[3em] lg:text-[4em]'>
							{item}, <span className='opacity-0'>,</span>
						</span>
					)
				})}
			</div>
		</section>
	)
}

export default LottoRandomNumbers
