import { useEffect } from "react"
import { useStore } from "../hooks/useStore"

export const Menu = () => {
	const [
		saveWorld, 
		resetWorld, 
		existStartCube, 
		existTargetCube
	] = useStore((state) => [
		state.saveWorld, 
		state.resetWorld, 
		state.existStartCube, 
		state.existTargetCube
	])

	useEffect(() => {
		if (existStartCube && existTargetCube) {
			document.getElementById('path-finding-button').disabled = false
		} else {
			document.getElementById('path-finding-button').disabled = true
		}
	}, [existStartCube, existTargetCube])

	return (<div className="menu absolute">
		<button
			onClick={() => saveWorld()}
		>Save</button>
		<button
			onClick={() => resetWorld()}
		>Reset</button>
		<button id='path-finding-button' disabled
		>Find the Shortest Path</button>
	</div>)
}
