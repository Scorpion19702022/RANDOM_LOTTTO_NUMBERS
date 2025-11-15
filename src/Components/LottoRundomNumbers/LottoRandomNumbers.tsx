const LottoRandomNumbers = () => {
	return (
		<section className='w-[90%] h-[45%] p-[2em] flex flex-col justify-between items-center md:h-[30%]'>
			<h1 className='w-full pb-2 text-center text-gray-300 border-b-2 border-dotted border-b-gray-500'>
				{'twoje szczęśliwe liczby'.toLocaleUpperCase()}
			</h1>
			<div>
				<button>losuj</button>
				<button>wyczyść</button>
			</div>
			<div>
				<span>1, 2, 3, 4, 5, 6, 7</span>
			</div>
		</section>
	)
}

export default LottoRandomNumbers
