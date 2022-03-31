
// type vs interface
// just forget about interface
// use type 

// any
function show(thing: any) {
    console.log(thing)
}

// void
function hello(): void {
    console.log("hi");
}

// undefined
let undef = undefined

function printName(name?: string) {
    isString(name) 
        ? console.log(name)
        : console.log("default name");
}

// never
function panic(message: string): never {
    throw new Error(message)
}

// Union types
type UserSimple = {
    id: number
}

type UserDetailed = UserSimple & {
    name: string
}

type Input<T> = T | undefined

// Utility Types
type UserNameQuery = Pick<UserDetailed, "name">

// unknown, type guards
function isString<T>(thing: unknown): thing is string {
    return typeof thing === "string"
}

function isNotUndefined<T>(thing: Input<T>): thing is T {
    return typeof thing !== "undefined"
}

// Function or arrows
type Filterer<T> = (toBeFiltered: T) => boolean

let stringFilters: Filterer<string>[] = [];

function addStringFilter(filter: Filterer<string>) {
    stringFilters.push(filter)
}

function executeStringFilters(input: Input<string>): boolean | never {
    if (!isNotUndefined(input)) throw new Error("argument is not a string")
    return stringFilters.every(stringFilter => stringFilter(input))
}

let masukan = "sayyid"
let filterHurufPertamaS: Filterer<string> = (input: string) => input[0] === "S" || input[0] === "s"
let filterMaxLength6: Filterer<string> = (input: string) => input.length <= 6

addStringFilter(filterHurufPertamaS)
addStringFilter(filterMaxLength6)

try {
    let output = executeStringFilters(masukan)
    console.log(`hasil: ${output}`)
} catch (error) {
    console.log(error)
}

export {}