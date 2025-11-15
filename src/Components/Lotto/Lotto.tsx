import LottoHeader from '../LottoHeader/LottoHeader'
import LottoNumbers from '../LottoNumbers/LottoNumbers'
import LottoRandomNumbers from '../LottoRundomNumbers/LottoRandomNumbers'

const Lotto = () => {
	return (
		<main className='w-full h-screen bg-gray-700 flex flex-col items-center'>
			<LottoHeader />
			<LottoNumbers />
			<LottoRandomNumbers />
		</main>
	)
}

export default Lotto
