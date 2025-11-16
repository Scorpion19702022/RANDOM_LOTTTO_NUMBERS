import { useContext } from 'react'
import LottoContext from '../Context/LottoContext'
import LottoHeader from '../LottoHeader/LottoHeader'
import LottoNumbers from '../LottoNumbers/LottoNumbers'
import LottoRandomNumbers from '../LottoRundomNumbers/LottoRandomNumbers'

const Lotto = () => {
	const { bigLottoNumbers, expressLottoNumbers, handleViewNumbers } = useContext(LottoContext)

	return (
		<main className='w-full h-screen bg-gray-700 flex flex-col items-center relative md:justify-around'>
			<LottoHeader />
			<LottoNumbers
				viewBigLottoNumbers={bigLottoNumbers}
				viewExpressLottoNumbers={expressLottoNumbers}
				viewNumbers={handleViewNumbers}
			/>
			<LottoRandomNumbers />
		</main>
	)
}

export default Lotto
