import { useEffect, useState } from "react"
import { useStore } from "../hooks/useStore"
import { useKeyboard } from "../hooks/useKeyboard"
import { 
    dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
	startImg,
	targetImg, 
} from '../images/images'

const images = {
	dirt: dirtImg,
	grass: grassImg,
	glass: glassImg,
	wood: woodImg,
	log: logImg,
    start: startImg,
    target: targetImg,
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {  
        dirt, // dirt: boolean
        grass,
        glass,
        wood,
        log,
        start, 
        target,
    } = useKeyboard() 

    useEffect(() => {
        const textures = {
            dirt, 
            grass,
            glass,
            wood,
            log,
            start, 
            target,
        } 
        const pressedTexture = Object.entries(textures).find(([k,v]) => v)
        if (pressedTexture) {
            setTexture(pressedTexture[0])
        }
    }, [setTexture, dirt, grass, glass, wood, log, start, target])

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 1000)
        setVisible(true)
        return () => {
            clearTimeout(visibilityTimeout)
        }
    }, [activeTexture])

    return visible && (
        <div className='absolute centered texture-selector'>
			{Object.entries(images).map(([k, src]) => {
				return (<img
					key={k}
					src={src}
					alt={k}
					className={`${k === activeTexture ? 'active' : ''}`}
				/>)
			})}
		</div>
    )
}
