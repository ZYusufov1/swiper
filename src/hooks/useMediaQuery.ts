import { useState, useEffect } from 'react'

const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState(() => {
		if (typeof window !== 'undefined') {
			return window.matchMedia(query).matches
		}
		return false
	})

	useEffect(() => {
		const mediaQuery = window.matchMedia(query)

		const handleChange = () => {
			setMatches(mediaQuery.matches)
		}

		mediaQuery.addEventListener('change', handleChange)

		return () => {
			mediaQuery.removeEventListener('change', handleChange)
		}
	}, [query])

	return matches
}

export default useMediaQuery
