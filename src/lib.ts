import { lerp } from "@samual/lib/lerp"

export const generateRandomInteger = (max: number) => Math.floor(Math.random() * (max + 1))

export function setTheme() {
	const backgroundColour = sessionStorage.getItem(`backgroundColour`)
	const textColour = sessionStorage.getItem(`textColour`)
	const titleTextColour = sessionStorage.getItem(`titleTextColour`)

	if (backgroundColour && textColour && titleTextColour) {
		document.documentElement.style.setProperty(`--background-colour`, backgroundColour)
		document.documentElement.style.setProperty(`--text-colour`, textColour)
		document.documentElement.style.setProperty(`--title-text-colour`, titleTextColour)
	} else {
		const backgroundColour = `rgb(${generateRandomInteger(15)}, ${generateRandomInteger(31)}, ${generateRandomInteger(15)})`
		const textColourRed = 255 - generateRandomInteger(127)
		const textColourGreen = 255 - generateRandomInteger(63)
		const textColourBlue = 255 - generateRandomInteger(127)
		const textColour = `rgb(${textColourRed}, ${textColourGreen}, ${textColourBlue})`
		const titleTextColour = `rgb(${lerp(textColourRed, 255, .5)}, ${lerp(textColourGreen, 255, .5)}, ${lerp(textColourBlue, 255, .5)})`

		document.documentElement.style.setProperty(`--background-colour`, backgroundColour)
		document.documentElement.style.setProperty(`--text-colour`, textColour)
		document.documentElement.style.setProperty(`--title-text-colour`, titleTextColour)

		sessionStorage.setItem(`backgroundColour`, backgroundColour)
		sessionStorage.setItem(`textColour`, textColour)
		sessionStorage.setItem(`titleTextColour`, titleTextColour)
	}
}
