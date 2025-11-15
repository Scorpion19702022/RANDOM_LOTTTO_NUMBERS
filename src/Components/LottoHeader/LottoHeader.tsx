const LottoHeader = () => {
	return (
		<section className='w-[90%] h-[10%] p-12 flex justify-center items-center border-b-4 border-gray-200'>
			<h1 className='text-[1.2em] font-thin text-gray-200 text-center md:text-[1.4em] lg:text-[1.8em] xl:text-[2.4em]'>
				{`wylosuj swoje szczęśliwe liczby i wygraj fortunę`.toLocaleUpperCase()}
			</h1>
		</section>
	)
}

export default LottoHeader
