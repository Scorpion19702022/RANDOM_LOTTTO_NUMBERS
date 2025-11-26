const LottoPopupError = () => {
	return (
		<section className='absolute w-full h-[70%] bg-gray-950 border-[0.04em] border-gray-100 flex justify-center items-center shadow-[0px_0px_12px_3px_cyan] lg:w-[70%] invisible'>
			<h1 className='text-gray-100 text-[1.4em] p-[2em] text-center md:text-[1.8em] lg:text-[2.8em]'>
				{`musisz wybrać losowanie i odkryć liczby!!!`.toLocaleUpperCase()}
			</h1>
		</section>
	)
}

export default LottoPopupError
