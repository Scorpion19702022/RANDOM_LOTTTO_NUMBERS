const LottoRandomNumbers = () => {
	return (
		<section className='w-[90%] h-[40%] p-[2em] flex flex-col justify-around items-center md:justify-between md:pb-24'>
			<h1 className='w-full pb-2 text-center text-gray-300 border-b-2 border-dotted border-b-gray-500 md:w-[50%] md:text-[1.6em]'>
				{'twoje szczęśliwe liczby'.toLocaleUpperCase()}
			</h1>
			<div className='w-full h-[25%] flex justify-between items-center md:w-[50%]'>
				<button className='w-[40%] h-[50%] border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'>
					{`losuj`.toLocaleUpperCase()}
				</button>
				<button className='w-[40%] h-[50%] border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'>
					{`wyczyść`.toLocaleUpperCase()}
				</button>
			</div>
			<div className='w-full h-[50%] p-12 flex justify-center items-center'>
				<span>1, 2, 3, 4, 5, 6, 7</span>
			</div>
		</section>
	)
}

export default LottoRandomNumbers
