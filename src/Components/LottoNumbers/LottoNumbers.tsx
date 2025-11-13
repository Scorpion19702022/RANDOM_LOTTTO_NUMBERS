const LottoNumbers = () => {
	return (
		<section className='w-[90%] h-[35%] flex flex-col justify-between items-center p-[2em] border-b-2 bg-gray-300 border-gray-400'>
			<div className='w-full h-[25%] flex justify-between md:w-[50%]'>
				<button className='w-[40%] h-[70%] border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'>
					{`duży lotek`.toLocaleUpperCase()}
				</button>
				<button className='w-[40%] h-[70%] border-2 border-gray-200 text-gray-200 cursor-pointer transition duration-300 md:w-[40%] lg:w-[45%] hover:bg-gray-800'>
					{`express lotek`.toLocaleUpperCase()}
				</button>
			</div>
			<div className='w-full h-[65%] flex justify-center items-center'>
				<span>1, 2, 3, 4, 5, 6</span>
			</div>
		</section>
	)
}

export default LottoNumbers
