const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield" ]

function destructivelyAppendKitten(kitten, name) {
 kittens.push("Ralph")
}

function destructivelyPrependKitten(kitten, name) {
 kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(kitten, name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(kitten, name) {
  kittens.shift()
}

function appendKitten(kitten, name) {
  kittens = ["Ralph", ...kittens]
}
