const dogBreeds = require('dog-breeds');
const dogNames = require('dog-names');
const parameterize = require('./parameterize')

const dogBreed = () => {
    return dogBreeds.random();
}

const dogName = () => {
    return dogNames.allRandom();    
}

const dogInfo = () => {
    return {
        breed: dogBreed(),
        name: dogName()
    }
}

const normalize = (input) => {
    return parameterize(input.toLowerCase().replace(/ /g, '-'));
}

const username = (dogInfo) => {
    return { 
        username: `${normalize(dogInfo.name)}-the-${normalize(dogInfo.breed.name)}`,
        imageURL: dogInfo.breed.imageURL
    }
} 


exports.main = async () => {
    return username(dogInfo());
}