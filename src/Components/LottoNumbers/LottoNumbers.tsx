interface InitialProps {
	viewBigLottoNumbers: number[]
	viewExpressLottoNumbers: number[]
	randomNumbers: number[]
	viewNumbers: (kind: string) => void
}

const LottoNumbers: React.FC<InitialProps> = ({
	viewBigLottoNumbers,
	viewExpressLottoNumbers,
	randomNumbers,
	viewNumbers,
}) => {
	return (
		<section className='w-[90%] h-[55%] flex flex-col justify-between items-center p-[2em] border-b-2 border-gray-400 md:h-[40%]'>
			<h2 className='w-full h-[35%] flex items-center justify-center text-center text-cyan-200 md:text-[1.4em] '>
				wybierz losowanie klikając w odpowiedni przycisk i odkryj cyfry
			</h2>
			<div className='w-full h-[12%] mb-4 flex justify-between md:w-[50%]'>
				<button
					onClick={() => viewNumbers('bigLotto')}
					className={
						viewBigLottoNumbers.length === 0
							? 'w-[40%] h-full border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'
							: 'w-[40%] h-full border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 bg-gray-800 md:w-[40%] lg:w-[45%] hover:bg-gray-900 '
					}
				>
					{`duży lotek`.toLocaleUpperCase()}
				</button>
				<button
					onClick={() => viewNumbers('expressLotto')}
					className={
						viewExpressLottoNumbers.length === 0
							? 'w-[40%] h-full border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'
							: 'w-[40%] h-full border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 bg-gray-800 md:w-[40%] lg:w-[45%] hover:bg-gray-900'
					}
				>
					{`express lotek`.toLocaleUpperCase()}
				</button>
			</div>
			<div className='w-full h-[55%] flex flex-wrap justify-center items-center md:h-[30%]'>
				{viewBigLottoNumbers.map((item, index) => {
					const isRandom = randomNumbers.includes(item)
					return (
						<span
							className={
								!isRandom
									? 'text-[1em] text-gray-400 md:text-[1.2em]'
									: 'text-[1em] text-cyan-300 md:text-[1.2em] font-semibold'
							}
							key={index}
						>
							{item}, <span className='opacity-0'>,</span>
						</span>
					)
				})}
				{viewExpressLottoNumbers.map((item, index) => {
					const isRandom = randomNumbers.includes(item)
					return (
						<span
							className={
								!isRandom
									? 'text-[1em] text-gray-400 md:text-[1.2em]'
									: 'text-[1em] text-cyan-300 md:text-[1.2em] font-semibold'
							}
							key={index}
						>
							{item}, <span className='opacity-0'>,</span>
						</span>
					)
				})}
			</div>
		</section>
	)
}

export default LottoNumbers
