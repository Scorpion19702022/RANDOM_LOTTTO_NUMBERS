interface InitialProps {
	viewBigLottoNumbers: number[]
	viewExpressLottoNumbers: number[]
	randomNumbers: number[]
	// randomNumbersExpress: number[]
	viewNumbers: (kind: string) => void
}

const LottoNumbers: React.FC<InitialProps> = ({
	viewBigLottoNumbers,
	viewExpressLottoNumbers,
	randomNumbers,
	// randomNumbersExpress,
	viewNumbers,
}) => {
	return (
		<section className='w-[90%] h-[55%] flex flex-col justify-between items-center p-[2em] border-b-2 border-gray-400 md:h-[40%]'>
			<h2 className='w-full h-[35%] flex items-center justify-center text-center text-cyan-200 md:text-[1.4em]'>
				wybierz losowanie klikając w odpowiedni przycisk i odkryj cyfry
			</h2>
			<div className='w-full h-[12%] mb-4 flex justify-between md:w-[50%]'>
				<button
					onClick={() => viewNumbers('bigLotto')}
					className='w-[40%] h-full border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'
				>
					{`duży lotek`.toLocaleUpperCase()}
				</button>
				<button
					onClick={() => viewNumbers('expressLotto')}
					className='w-[40%] h-full border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'
				>
					{`express lotek`.toLocaleUpperCase()}
				</button>
			</div>
			<div className='w-full h-[55%] flex flex-wrap justify-center items-center md:h-[30%]'>
				{viewBigLottoNumbers.map((item, index) => {
					const isRandom = randomNumbers.includes(item)
					return (
						<span className={!isRandom ? 'text-gray-400 md:text-[1.4em]' : 'text-blue-400 md:text-[1.4em]'} key={index}>
							{item}, <span className='opacity-0'>,</span>
						</span>
					)
				})}
				{viewExpressLottoNumbers.map((item, index) => {
					const isRandom = randomNumbers
					return (
						<span className='text-gray-400 md:text-[1.4em]' key={index}>
							{item}, <span className='opacity-0'>,</span>
						</span>
					)
				})}
			</div>
		</section>
	)
}

export default LottoNumbers
