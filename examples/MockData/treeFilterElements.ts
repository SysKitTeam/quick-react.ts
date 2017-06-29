const RANDOM_WORDS = ['abstrusity', 'advertisable', 'bellwood', 'benzole', 'disputative', 'djilas', 'ebracteate', 'zonary'];

function createFlatList(numOfItems) {
    let data = [];
    for (let i = 0; i < numOfItems; i++) {
        let name = RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];
        data.push({ id: i, value: i + ' ' + name });
    }
    return data;
}

function createRandomizedData(numOfItems) {
    let data = [];
    for (let i = 0; i < numOfItems; i++) {
        data.push(createRandomizedItem(i, 0));
    }
    return data;
}

function createRandomizedItem(key, depth) {
    let children = [];
    let name = RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];

    let numChildren = depth < 2 ? 4 : 0;
    for (let i = 0; i < numChildren; i++) {
        children.push(createRandomizedItem(key + '-' + i, depth + 1));
    }
    let expanded = numChildren > 0 && Math.random() < .25;
    return {
        id: key,
        value: key + ' ' + name,
        expanded: expanded,
        children: children
    };
}

export const treeData = createRandomizedData(2000);
export const flatData = createFlatList(2000);
