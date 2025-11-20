import { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type ContextProviderProps = {
	children: React.ReactNode
}

type InitialStateType = {
	bigLottoNumbers: number[]
	expressLottoNumbers: number[]
	randomLottoNumbers: number[]
	handleViewNumbers: (kind: string) => void
	handleRandomLottoNumbers: () => void
}

const InitialState: InitialStateType = {
	bigLottoNumbers: [],
	expressLottoNumbers: [],
	randomLottoNumbers: [],
	handleViewNumbers: () => {},
	handleRandomLottoNumbers: () => {},
}

const LottoContext = createContext(InitialState)

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [bigLottoNumbers, setBigLottoNumbers] = useState<number[]>([])
	const [expressLottoNumbers, setExpressLottoNumbers] = useState<number[]>([])

	const [randomLottoNumbers, setRandomLottoNumbers] = useState<number[]>([])

	const handleViewNumbers = (kind: string) => {
		if (kind === 'bigLotto') {
			const bigLotto: number[] = []

			for (let i = 1; i <= 49; i++) {
				bigLotto.push(i)
			}

			setBigLottoNumbers(bigLotto)
			setExpressLottoNumbers([])
		}

		if (kind === 'expressLotto') {
			const expressLotto: number[] = []

			for (let i = 1; i <= 45; i++) {
				expressLotto.push(i)
			}

			setBigLottoNumbers([])
			setExpressLottoNumbers(expressLotto)
		}
	}

	const handleRandomLottoNumbers = () => {
		console.log('klik')
	}

	return (
		<LottoContext.Provider
			value={{ bigLottoNumbers, expressLottoNumbers, randomLottoNumbers, handleViewNumbers, handleRandomLottoNumbers }}
		>
			{children}
			<Analytics />
		</LottoContext.Provider>
	)
}

export default LottoContext
