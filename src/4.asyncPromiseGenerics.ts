import { ClientRequest } from "http"
import { request } from "https"

// async await
const googling = async () => request({
    hostname: "google.com",
    port: 443
})

async function doGoogle() {
    return await googling()
}

// <Generics>
function isStringAndNotUndefined(thing?: string) {
    return typeof thing !== "undefined"
}

function isNumberAndNotUndefined(thing?: number) {
    return typeof thing !== "undefined"
}

const isNotUndefined = <T>(thing?: T) => typeof thing !== "undefined"

// Promises
const bing = async (): Promise<ClientRequest> => request({
    hostname: "bing.com",
    port: 443
})

bing().then(console.log).catch(console.error)


export {}