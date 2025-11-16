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
		console.log(kind)
	}

	return (
		<LottoContext.Provider value={{ bigLottoNumbers, expressLottoNumbers, handleViewNumbers }}>
			{children}
			<Analytics />
		</LottoContext.Provider>
	)
}

export default LottoContext
