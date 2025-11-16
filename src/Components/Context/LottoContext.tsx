import { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type ContextProviderProps = {
	children: React.ReactNode
}

type InitialStateType = {
	bigLottoNumbers: number[]
	expressLottoNumbers: number[]
	handleViewNumbers: (kind: string) => void
}

const InitialState: InitialStateType = {
	bigLottoNumbers: [],
	expressLottoNumbers: [],
	handleViewNumbers: () => {},
}

const LottoContext = createContext(InitialState)

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [bigLottoNumbers, setBigLottoNumbers] = useState<number[]>([])
	const [expressLottoNumbers, setExpressLottoNumbers] = useState<number[]>([])

	const handleViewNumbers = (kind: string) => {
		if (kind === 'bigLotto') {
			const bigLotto: number[] = []

			for (let i = 0; i < 49; i++) {
				bigLotto.push(i)
			}

			setBigLottoNumbers(bigLotto)
			setExpressLottoNumbers([])
		}

		if (kind === 'expressLotto') {
			setBigLottoNumbers([])
			setExpressLottoNumbers([45])
		}
	}

	console.log(bigLottoNumbers)
	console.log(expressLottoNumbers)

	return (
		<LottoContext.Provider value={{ bigLottoNumbers, expressLottoNumbers, handleViewNumbers }}>
			{children}
			<Analytics />
		</LottoContext.Provider>
	)
}

export default LottoContext
