import { createContext, useState } from 'react'

type ContextProviderProps = {
	children: React.ReactNode
}

type InitialStateType = {
	bigLottoNumbers: number[]
}

const InitialState: InitialStateType = {
	bigLottoNumbers: [],
}

const LottoContext = createContext(InitialState)

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [bigLottoNumbers, setBigLottoNumbers] = useState<number[]>([])

	// setBigLottoNumbers([1, 2])
	console.log(bigLottoNumbers)

	return <LottoContext.Provider value={{ bigLottoNumbers }}>{children}</LottoContext.Provider>
}

export default LottoContext
