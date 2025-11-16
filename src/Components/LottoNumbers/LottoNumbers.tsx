interface InitialProps {
	viewNumbers: (kind: string) => void
}

const LottoNumbers: React.FC<InitialProps> = ({ viewNumbers }) => {
	return (
		<section className='w-[90%] h-[35%] flex flex-col justify-between items-center p-[2em] border-b-2 border-gray-400'>
			<h2 className='w-full h-[30%] flex items-center justify-center text-center text-cyan-200 md:text-[1.4em]'>
				wybierz losowanie klikając w odpowiedni przycisk i odkryj cyfry
			</h2>
			<div className='w-full h-[17%] flex justify-between md:w-[50%]'>
				<button
					onClick={() => viewNumbers('bigLotto')}
					className='w-[40%] border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'
				>
					{`duży lotek`.toLocaleUpperCase()}
				</button>
				<button
					onClick={() => viewNumbers('expressLotto')}
					className='w-[40%] border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'
				>
					{`express lotek`.toLocaleUpperCase()}
				</button>
			</div>
			<div className='w-full h-[45%] flex justify-center items-center'>
				<span className='w-full text-gray-400 text-center'>
					1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2,
					3, 4, 5, 6, 2, 3, 4, 5, 6
				</span>
			</div>
		</section>
	)
}

export default LottoNumbers
