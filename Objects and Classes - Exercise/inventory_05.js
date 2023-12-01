function registerForHeroes(array) {

    let arrOfHeroesObjects = [];

    for (const rowInfo of array) {

        let [hero, level, items] = rowInfo.split(" / ");

        let heroObject = {
            hero,
            level: Number(level),
            items
        }

        arrOfHeroesObjects.push(heroObject);
    }

    arrOfHeroesObjects.sort((a, b) => a.level - b.level);

    for (const heroObj of arrOfHeroesObjects) {
        console.log(`Hero: ${heroObj.hero}\nlevel => ${heroObj.level}\nitems => ${heroObj.items}`);
    }

}

registerForHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);