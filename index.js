function countFroyoFlavors() {
    const input = prompt("Enter a list of comma-separated froyo flavors:")
    const flavors = input.split(",")
    const flavorCounts = {}
    flavors.forEach((flavor) => {
        if (flavor in flavorCounts) {
            flavorCounts[flavor]++
        } else {
            flavorCounts[flavor] = 1
        }
    })
    console.table(flavorCounts)
}

window.addEventListener("load", countFroyoFlavors)