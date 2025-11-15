const LottoRandomNumbers = () => {
	return (
		<section className='w-[90%] h-[45%] p-[2em] flex flex-col justify-between items-center'>
			<h1>{'twoje szczęśliwe liczby'.toLocaleUpperCase()}</h1>
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
