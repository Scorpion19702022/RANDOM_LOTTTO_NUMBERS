const LottoNumbers = () => {
	return (
		<section className='w-[90%] h-[30%] flex flex-col justify-around items-center p-6 border-b-2 border-gray-400'>
			<div className='w-full h-[20%] flex justify-between'>
				<button className=''>{`duży lotek`.toLocaleUpperCase()}</button>
				<button className=''>{`express lotek`.toLocaleUpperCase()}</button>
			</div>
			<div>
				<span>1, 2, 3, 4, 5, 6</span>
			</div>
		</section>
	)
}

export default LottoNumbers
