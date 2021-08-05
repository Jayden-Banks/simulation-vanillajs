

let bills = []
const baseURL = `http://localhost:4000/api/bills`
const clearList = _ => {
    let query = document.querySelector('section')
    query.innerHTML = ''

}

const displayList = _ => {
    clearList()
    axios.get(baseURL).then(res => {
        bills = res.data
    })

    bills.forEach(el => {
        const billsCard = document.createElement('div')
        billsCard.innerHTML = `<div><p> ${el.name} $${el.expense}<p><input class="trash-can" type="image" src="../assets/trash_can.svg" value="${el.id}"/></div>`
        document.querySelector('section').appendChild(billsCard)

    })
    const inputs = document.querySelectorAll('.trash-can')
    inputs.forEach(el => {
        el.addEventListener('click', deleteFromList)
    })
    calcTotal()
}

const addToList = e => {
    e.preventDefault()
    const input = document.querySelector('form')
    const name = input[0].value
    const expense = input[1].value
    let body = {
        name,
        expense
    }
    axios.post(baseURL, body).then(res => {
        bills = res.data
        displayList()    
    })
}

const deleteFromList = e => {
    let id = e.target.value

    axios.delete(`${baseURL}/${id}`).then(res => {
        bills = res.data
        e.target.parentNode.remove()
        displayList()
    })
}

const calcTotal = _ => {
    axios.get(baseURL).then(res => {
        console.log(res.data)
        if(res.data[0]) {
            console.log(res.data[0].expense)
        let total = res.data.reduce((ac, el) => {
            return ac + +el.expense}, 0)
        console.log(total)
        //console.log(billArr)
        //console.log('This is the total', total)
    }})

}

displayList()
document.querySelector('button').addEventListener('click', addToList)










// let bills = []
// let id = 0
// //test object
// // let obj = {
// //     name: 'green',
// //     expense: 800
// // }
// //bills.push(obj)

// const clearList = _ => {
//     let query = document.querySelector('section')
//     query.innerHTML = ''

// }


// const displayList = _ => {
//     clearList()
//     bills.forEach(el => {
//         const billsCard = document.createElement('div')
//     //creates billscard along with trash can button
//         // billsCard.innerHTML = `<div><p>name: ${el.name} expense: ${el.expense}<p> <input type="image" src="../assets/trash_can.svg"/></div>`
//         billsCard.innerHTML = `<div><p> ${el.name}   ${el.expense}<p> <input class ="${el.name}" type="image" src="../assets/trash_can.svg"/></div>`
//         //console.log(document.querySelector('input'))
        
        
//         document.querySelector('section').appendChild(billsCard) //Works, but why can't I add to ID specific div?
//         //this listener works, but only if items don't have the same name*update//STUPID work around, but el.nameel.id makes unique
//         document.querySelector(`.${el.name}`).addEventListener('click', deleteFromList)
//     //innerHTML NEEDED FOR TRASH CAN
//     })
    
// }



// if (0) {
//     console.log('yes')
// }



// const addToList = e => {
//     e.preventDefault()
//     const input = document.querySelector('form')
//     const name = input[0].value
//     const expense = input[1].value
//     let newBill = {
//         id,
//         name,
//         expense
//     }
//     id++
//     bills.push(newBill)
//     //console.log(bills)
//     displayList()    
// }

// const deleteFromList = e => {
//     //I cant reference a bill in bills this way
//     console.log(e.currentTarget.value)
//     e.target.parentNode.remove()
//     bills.splice(0,1)
//     //console.log('deleted')
//     displayList()
// }





// displayList()
// document.querySelector('button').addEventListener('click', addToList)