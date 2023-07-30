import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { useStore } from "../hooks/useStore";

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
    }))

    const [
        addCube, 
        texture, 
        existStartCube,
        existTargetCube,
        setExistStartCube, 
        setExistTargetCube, 
    ] = useStore((state) => [
        state.addCube, 
        state.texture, 
        state.existStartCube,
        state.existTargetCube,
        state.setExistStartCube, 
        state.setExistTargetCube, 
    ])

    groundTexture.repeat.set(100, 100);

    return (
        <mesh 
        onClick={(e) => {
            e.stopPropagation()
            if (texture === "start") {
                if (existStartCube) return
                setExistStartCube(true)
            }
            if (texture === "target") {
                if (existTargetCube) return 
                setExistTargetCube(true)
            }
            const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val))
            addCube(x, y, z)
        }}
        ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
			<meshStandardMaterial attach='material' map={groundTexture} />
        </mesh>
    )
} 
