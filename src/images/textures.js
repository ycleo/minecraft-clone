import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

import {
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
	startImg,
	targetImg,
	searchImg,
	pathImg,
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const groundTexture = new TextureLoader().load(grassImg)
const startTexture = new TextureLoader().load(startImg)
const targetTexture = new TextureLoader().load(targetImg)
const searchTexture = new TextureLoader().load(searchImg)
const pathTexture = new TextureLoader().load(pathImg)

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

startTexture.magFilter = NearestFilter;
targetTexture.magFilter = NearestFilter;
searchTexture.magFilter = NearestFilter;
pathTexture.magFilter = NearestFilter;

export {
	dirtTexture,
	logTexture,
	grassTexture,
	glassTexture,
	woodTexture,
	groundTexture,
	startTexture,
	targetTexture,
	searchTexture,
	pathTexture,
}
