// throw (lançar)

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário")
    }

    console.log('depois do erro')
}

// try...catch (tentar...pegar)
try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após o try/catch')