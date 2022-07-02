// 4, 5
let a = 10
let b = 2
let c = 0

do {
    const i = 1;
    console.log({
        i: a - i,
        a: a,
        b: b,
        c: c,
    })
    if (a === c) {
        console.log("same", {
            I: a - i,
            A: a,
            C: c
        })
    }

    if (a % b === 0) {
        c = c + 2
    } else {
        c = c + 1
    }


    a = a - 1 //or a--
} while (a >= 0);

// 1 fin
// no 1
const bizzbuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        let strLoopNumBizzBuz = `no.${i} `

        i % 3 === 0 && i % 5 === 0 ? strLoopNumBizzBuz += 'bizzbuzz' :
            i % 3 === 0 ? strLoopNumBizzBuz += 'bizz' :
                i % 5 === 0 ? strLoopNumBizzBuz += 'buzz' :
                    strLoopNumBizzBuz

        console.log(strLoopNumBizzBuz)
    }
}

bizzbuzz(100)

const numPrintTriangle = (num) => {
    for (let i = 1; i <= 5; i++) {
        let strNum = ``
        i % 2 === 0 ? strNum += '_' : strNum += `${i}`
        for (let j = 1 + i; j <= num - i; j++) {
            j % 2 === 0 ? strNum += '_' : strNum += `${j}`
        }
        console.log(strNum)
    }
}

numPrintTriangle(10)

const strT1a = '202112SOAL3'
const strT1b = '202111SOAL3'
const strT1c = '202110SOAL3'
const strT2a = 'SOAL3/2112/AB000000011 OD:0001234500CDE5432100 SOAL003 ABCDE12345 XAS SKILL TEST ESSAY .DT'
const strT2b = 'SOAL3/2111/BC000011100 OD:0003452100EFG2451300 SOAL003 EFGHI25134 XAS SKILL TEST ESSAY .DT'
const strT2c = 'SOAL3/2110/DE210031010 OD:0001524300HIJ2145300 SOAL003 JKLMN52431 XAS SKILL TEST ESSAY .DT'

const arrFunc = (str) => {
    let arr = []
    for (let i = 0; i <= str.length - 18; i += 18) {
        const strSub = str.substring(i, 18 + i)
        arr = [...arr, strSub]
        // console.log(arr)
    }
    return arr
}

const arrStrT1a = arrFunc(strT2a)
const arrStrT1b = arrFunc(strT2b)
const arrStrT1c = arrFunc(strT2c)

// console.log(arrFunc(strT2a))

const changePosition = (arrStr, before, after) => {
    arrStr.splice(after, 0, arrStr.splice(before, 1)[0])
    return arrStr
}

const resultChangePosition = (arr) => {
    let result = ''
    let arrReverse = [...arr]
    for (let i = 0; i < 3; i++) {
        arrReverse = changePosition([...arrReverse], i + 2, i)
    }
    return result = arrReverse.join('')
}

console.log('initail', {
    strT1a: strT1a,
    strT2a: strT2a,
    strT1b: strT1b,
    strT2b: strT2b,
    strT1c: strT1c,
    strT2c: strT2c
})

console.log('result', {
    strT1a: strT1a,
    strT2a: resultChangePosition(arrStrT1a),
    strT1b: strT1b,
    strT2b: resultChangePosition(arrStrT1b),
    strT1c: strT1c,
    strT2b: resultChangePosition(arrStrT1c)
})