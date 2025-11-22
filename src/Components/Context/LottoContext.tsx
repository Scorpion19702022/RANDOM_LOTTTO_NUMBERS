import { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type ContextProviderProps = {
	children: React.ReactNode
}

type InitialStateType = {
	bigLottoNumbers: number[]
	expressLottoNumbers: number[]
	randomBigLottoNumbers: number[]
	randomExpressLottoNumbers: number[]
	handleViewNumbers: (kind: string) => void
	handleRandomLottoNumbers: () => void
	handleClearAllNumbers: () => void
}

const InitialState: InitialStateType = {
	bigLottoNumbers: [],
	expressLottoNumbers: [],
	randomBigLottoNumbers: [],
	randomExpressLottoNumbers: [],
	handleViewNumbers: () => {},
	handleRandomLottoNumbers: () => {},
	handleClearAllNumbers: () => {},
}

const LottoContext = createContext(InitialState)

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [bigLottoNumbers, setBigLottoNumbers] = useState<number[]>([])
	const [expressLottoNumbers, setExpressLottoNumbers] = useState<number[]>([])

	const [randomBigLottoNumbers, setRandomBigLottoNumbers] = useState<number[]>([])
	const [randomExpressLottoNumbers, setRandomExpressLottoNumbers] = useState<number[]>([])

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

	const handleRandomLottoBigNumbers = () => {
		const randomBig: number[] = []
		if (bigLottoNumbers.length === 0) {
			return
		} else {
			console.log('fukcja przeszła')
		}

		while (randomBig.length < 6) {
			const randomIndexBig = Math.floor(Math.random() * bigLottoNumbers.length)

			const drawnBigRandomNumbers = bigLottoNumbers[randomIndexBig]

			if (!randomBig.includes(drawnBigRandomNumbers)) {
				randomBig.push(drawnBigRandomNumbers)
			}

			setRandomBigLottoNumbers([...randomBig].sort((a, b) => a - b))
		}
	}

	const handleRadomLottoExpessNumbers = () => {
		const randomExpress: number[] = []

		if (expressLottoNumbers.length === 0) {
			return
		} else {
			console.log('fukcja przeszła')
		}

		while (randomExpress.length < 5) {
			const randomIndexExpress = Math.floor(Math.random() * expressLottoNumbers.length)

			const drawnExpressRandomNumers = expressLottoNumbers[randomIndexExpress]

			if (!randomExpress.includes(drawnExpressRandomNumers)) {
				randomExpress.push(drawnExpressRandomNumers)
			}

			setRandomExpressLottoNumbers([...randomExpress].sort((a, b) => a - b))
		}
	}

	const handleRandomLottoNumbers = () => {
		if (bigLottoNumbers.length !== 0) {
			handleRandomLottoBigNumbers()
		} else if (expressLottoNumbers.length !== 0) {
			handleRadomLottoExpessNumbers()
		}
	}

	console.log(randomBigLottoNumbers)
	console.log(randomExpressLottoNumbers)

	const handleClearAllNumbers = () => {
		setBigLottoNumbers([])
		setExpressLottoNumbers([])
		setRandomBigLottoNumbers([])
		setRandomExpressLottoNumbers([])
	}

	return (
		<LottoContext.Provider
			value={{
				bigLottoNumbers,
				expressLottoNumbers,
				randomBigLottoNumbers,
				randomExpressLottoNumbers,
				handleViewNumbers,
				handleRandomLottoNumbers,
				handleClearAllNumbers,
			}}
		>
			{children}
			<Analytics />
		</LottoContext.Provider>
	)
}

export default LottoContext
