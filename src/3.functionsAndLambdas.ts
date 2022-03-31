// function
function hi(mesg: string): string {
    console.log(mesg);
    return mesg
}

// lambda / arrow functions
const hiArrow = (mesg: string): string => mesg

const hiArrowLong = (mesg: string): string => {
    console.log(mesg);
    return mesg
}

export {}