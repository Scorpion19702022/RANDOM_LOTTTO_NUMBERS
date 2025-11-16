import { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type ContextProviderProps = {
	children: React.ReactNode
}

type InitialStateType = {
	bigLottoNumbers: number[]
	expressLottoNumbers: number[]
}

const InitialState: InitialStateType = {
	bigLottoNumbers: [],
	expressLottoNumbers: [],
}

const LottoContext = createContext(InitialState)

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [bigLottoNumbers, setBigLottoNumbers] = useState<number[]>([])
	const [expressLottoNumbers, setExpressLottoNumbers] = useState<number[]>([])

	// setBigLottoNumbers([1, 2])
	console.log(bigLottoNumbers)

	return (
		<LottoContext.Provider value={{ bigLottoNumbers, expressLottoNumbers }}>
			{children}
			<Analytics />
		</LottoContext.Provider>
	)
}

export default LottoContext
