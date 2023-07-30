import create from 'zustand';
import { nanoid } from 'nanoid';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const useStore = create((set) => ({
    texture: 'dirt', 
    existStartCube: getLocalStorage('existStartCube') || false,
    existTargetCube: getLocalStorage('existTargetCube') || false,
    cubes: getLocalStorage('cubes') || [],
    addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x, y, z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: (x, y, z) => {
		set((prev) => ({
			cubes: prev.cubes.filter(cube => {
				const [X, Y, Z] = cube.pos
				return X !== x || Y !== y || Z !== z
			})

		}))
	},
    setTexture: (texture) => {
		set(() => ({
			texture
		}))
	},
    saveWorld: () => {
        set((prev) => {
			setLocalStorage('cubes', prev.cubes)
            setLocalStorage('existStartCube', prev.existStartCube)
            setLocalStorage('existTargetCube', prev.existTargetCube)
		})
    },
    resetWorld: () => {
        set(() => ({
			cubes: [],
            existStartCube: false,
            existTargetCube: false,
		}))
    },
    setExistStartCube: (status) => {
        set(() => ({
            existStartCube: status
        }))
    },
    setExistTargetCube: (status) => {
        set(() => ({
            existTargetCube: status,
        }))
    },
}))
