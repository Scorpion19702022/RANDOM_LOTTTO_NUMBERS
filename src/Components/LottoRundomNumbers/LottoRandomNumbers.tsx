const LottoRandomNumbers = () => {
	return (
		<section className='w-[90%] h-[45%] p-[2em] flex flex-col justify-around items-center md:h-[30%]'>
			<h1 className='w-full pb-2 text-center text-gray-300 border-b-2 border-dotted border-b-gray-500 md:w-[50%] md:text-[1.6em]'>
				{'twoje szczęśliwe liczby'.toLocaleUpperCase()}
			</h1>
			<div className='w-full h-[30%] p-12 flex justify-around items-center'>
				<button>losuj</button>
				<button>wyczyść</button>
			</div>
			<div className='w-full h-[50%] p-12 flex justify-center items-center'>
				<span>1, 2, 3, 4, 5, 6, 7</span>
			</div>
		</section>
	)
}

export default LottoRandomNumbers
