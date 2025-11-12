import LottoHeader from '../LottoHeader/LottoHeader'
import LottoNumbers from '../LottoNumbers/LottoNumbers'

const Lotto = () => {
	return (
		<main className='w-full h-screen bg-gray-700 flex flex-col items-center'>
			<LottoHeader />
			<LottoNumbers />
		</main>
	)
}

export default Lotto
