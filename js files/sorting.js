const newArrayButton = document.querySelector(".new-array");
const bubbleSortButton = document.querySelector(".bubble-sort");
const selectionSortButton = document.querySelector(".selection-sort");
const quickSortButton = document.querySelector(".quick-sort");
//const mergeSortButton=document.querySelector(".merge-sort");
const insertionSortButton = document.querySelector(".insertion-sort");
const barArraySize = document.querySelector("#arr_sz");
const speedSlider = document.querySelector("#sp_slider");

let delayResult = speedSlider.value
let n = 0;
let barArray = [];

const barCreation = function() {
    n = barArraySize.value;

    barArray = [];
    let barStrips = document.querySelector('#chart');
    barStrips.textContent = '';
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.trunc((Math.random()) * 400 + 1);
        barArray.push(randomNumber);
        let divTag = document.createElement("div");
        divTag.classList.add("bars");
        const width = (10 * (50 / n));
        divTag.style.width = `${width}px`;
        divTag.classList.add(`bar-${i}`);
        divTag.style.height = `${randomNumber}px`;

        barStrips.appendChild(divTag);
    }
}


function Delay(time) {
    // console.log(delayResult);
    return new Promise((resolve) => {
        setTimeout(() => { resolve("") }, time * (800 / delayResult));
    })
}


function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height")
    const transform2 = style2.getPropertyValue("height")

    el1.style.height = transform2;
    el2.style.height = transform1;
    // console.log(el1);
}


const bubbleSort = async function() {
    bubbleSortButton.style.backgroundColor = "green";
    newArrayButton.disabled = true;
    insertionSortButton.disabled = true;
    //mergeSortButton.disabled=true;
    quickSortButton.disabled = true;
    selectionSortButton.disabled = true;
    bubbleSortButton.disabled = true;
    barArraySize.disabled = true;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - i - 1; j++) {
            const el1 = document.querySelector(`.bar-${j}`);
            const el2 = document.querySelector(`.bar-${j+1}`);
            el1.style.backgroundColor = "green";
            el2.style.backgroundColor = "green";
            await Delay(1);
            if (barArray[j] > barArray[j + 1]) {
                let temp = barArray[j];
                barArray[j] = barArray[j + 1];
                barArray[j + 1] = temp;
                // await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
                swap(el1, el2);
            }
            el1.style.backgroundColor = "red";
            el2.style.backgroundColor = "red";
        }
        const finalBar = document.querySelector(`.bar-${n-i-1}`);
        finalBar.style.backgroundColor = "yellow";
    }
    bubbleSortButton.style.backgroundColor = "black";
    newArrayButton.disabled = false;
    insertionSortButton.disabled = false;
    //mergeSortButton.disabled=false;
    quickSortButton.disabled = false;
    selectionSortButton.disabled = false;
    bubbleSortButton.disabled = false;
    barArraySize.disabled = false;
}


const selectionSort = async function() {
    selectionSortButton.style.backgroundColor = "green";
    newArrayButton.disabled = true
    insertionSortButton.disabled = true
        //mergeSortButton.disabled=true
    quickSortButton.disabled = true
    selectionSortButton.disabled = true
    bubbleSortButton.disabled = true;
    barArraySize.disabled = true;
    for (let i = 0; i < n; i++) {
        let ithHeightBar = document.querySelector(`.bar-${i}`);
        let minHeightBar = document.querySelector(`.bar-${i}`);
        let minIndex = i;
        let minHeight = barArray[i];
        minHeightBar.style.backgroundColor = "purple";
        for (let j = i + 1; j < n; j++) {
            let comparingBar = document.querySelector(`.bar-${j}`);
            comparingBar.style.backgroundColor = "purple";
            await Delay(1);
            if (barArray[j] < minHeight) {
                // console.log('check');
                minHeightBar.style.backgroundColor = "red";
                minHeight = barArray[j];
                minHeightBar = document.querySelector(`.bar-${j}`);
                minHeightBar.style.backgroundColor = "purple";
                minIndex = j;
            } else {
                comparingBar.style.backgroundColor = "red";
            }
        }
        const temp = barArray[minIndex];
        barArray[minIndex] = barArray[i];
        barArray[i] = temp;
        swap(ithHeightBar, minHeightBar);
        // ithHeightBar=document.querySelector(`.bar-${i}`);
        ithHeightBar.style.backgroundColor = "purple";
        if (!(ithHeightBar.style.height === minHeightBar.style.height)) minHeightBar.style.backgroundColor = "red";
    }
    selectionSortButton.style.backgroundColor = "black";
    newArrayButton.disabled = false
    insertionSortButton.disabled = false
        //mergeSortButton.disabled=false
    quickSortButton.disabled = false
    selectionSortButton.disabled = false
    bubbleSortButton.disabled = false;
    barArraySize.disabled = false;
}


const insertionSort = async function() {
    insertionSortButton.style.backgroundColor = "green";
    newArrayButton.disabled = true;
    insertionSortButton.disabled = true;
    //mergeSortButton.disabled=true;
    quickSortButton.disabled = true;
    selectionSortButton.disabled = true;
    bubbleSortButton.disabled = true;
    barArraySize.disabled = true;
    for (let i = 1; i < n; i++) {
        let j = i - 1;
        for (j = i - 1; j >= 0; j--) {
            let el1 = document.querySelector(`.bar-${j}`);
            let el2 = document.querySelector(`.bar-${j+1}`);
            el1.style.backgroundColor = "pink";
            el2.style.backgroundColor = "pink";
            await Delay(1);
            if (barArray[j] > barArray[j + 1]) {
                const temp = barArray[j];
                barArray[j] = barArray[j + 1];
                barArray[j + 1] = temp;
                swap(el1, el2);
            } else {
                el1.style.backgroundColor = "red";
                el2.style.backgroundColor = "red";
                break;
            }
            el2.style.backgroundColor = "red";
        }
        let el3 = document.querySelector(`.bar-${j+1}`);
        el3.style.backgroundColor = "red";
    }
    insertionSortButton.style.backgroundColor = "black";
    newArrayButton.disabled = false
    insertionSortButton.disabled = false
        //mergeSortButton.disabled=false
    quickSortButton.disabled = false
    selectionSortButton.disabled = false
    bubbleSortButton.disabled = false;
    barArraySize.disabled = false;
}


const findPivot = async function(barArray, si, ei) {
    if (si < ei) {
        let pivot = barArray[ei];
        let pivotBar = document.querySelector(`.bar-${ei}`);
        pivotBar.style.backgroundColor = "orange";

        let j = si;
        for (let i = si; i <= ei; i++) {
            let el1 = document.querySelector(`.bar-${i}`);
            el1.style.backgroundColor = "orange";
            await Delay(1);
            if (barArray[i] < pivot) {
                let el2 = document.querySelector(`.bar-${j}`);
                el2.style.backgroundColor = "orange";
                const temp = barArray[i];
                barArray[i] = barArray[j];
                barArray[j] = temp;
                swap(el1, el2);
                el2.style.backgroundColor = "red";
                j += 1;
            }
            el1.style.backgroundColor = "red";
        }
        const elj = document.querySelector(`.bar-${j}`);
        elj.style.backgroundColor = "orange";
        const temp = barArray[ei];
        barArray[ei] = barArray[j];
        barArray[j] = temp;
        swap(elj, pivotBar);
        elj.style.backgroundColor = "red";
        pivotBar.style.backgroundColor = "red";
        return j;
    }
}


const quickSortFunction = async function(barArray, si, ei) {
    if (si < ei) {
        const pivot = await findPivot(barArray, si, ei);
        quickSortFunction(barArray, si, pivot - 1);
        quickSortFunction(barArray, pivot + 1, ei);
    } else {
        return new Promise((resolve) => {
            "promise fullfilled";
        });
    }
}


const quickSort = async function() {
    quickSortButton.style.backgroundColor = "green";
    newArrayButton.disabled = true;
    insertionSortButton.disabled = true;
    // mergeSortButton.disabled=true;
    quickSortButton.disabled = true;
    selectionSortButton.disabled = true;
    bubbleSortButton.disabled = true;
    barArraySize.disabled = true;

    const promise = await quickSortFunction(barArray, 0, n - 1);

    setTimeout(function() {
        quickSortButton.style.backgroundColor = "black";
        newArrayButton.disabled = false;
        insertionSortButton.disabled = false;
        //mergeSortButton.disabled=false;
        quickSortButton.disabled = false;
        selectionSortButton.disabled = false;
        bubbleSortButton.disabled = false;
        barArraySize.disabled = false;
    }, 10000)
}

// const merge=async function(si,ei,mid){
// if(si<ei){
//     let leftIndex=mid-si+1;
//     let rightIndex=ei-mid;
//     let leftArray=[];
//     let rightArray=[];
//     for(let i=0;i<leftIndex;i++){
//         leftArray[i]=barArray[i+si];
//     }
//     for(let j=0;j<rightIndex;j++){
//         rightArray[j]=barArray[mid+1+j];
//     }
//     let i=0,j=0,k=si;
//     while(i<leftIndex && j<rightIndex){
//         await Delay(1);
//        const elem1=document.querySelector(`.bar-${k}`)
//         if(leftArray[i]<rightArray[j]){
//             const elem2=document.querySelector(`.bar-${i+si}`);
//             elem2.style.backgroundColor="blue";
//            swap(elem1,elem2);

//             elem1.style.backgroundColor="blue";

//             barArray[k]=leftArray[i++];   
//             elem2.style.backgroundColor="red";
//         }else{
//             const elem2=document.querySelector(`.bar-${mid+1+j}`);
//             elem2.style.backgroundColor="blue";
//             const height1=window.getComputedStyle(elem2).getPropertyValue("height");
//             elem1.style.backgroundColor="blue";
//             elem1.style.height=height1;

//             barArray[k]=rightArray[j++];
//             elem2.style.backgroundColor="red";
//         }

//         elem1.style.backgroundColor="green";
//         k++;
//     }
//     while(i<leftIndex){
//         const elem2=document.querySelector(`.bar-${k}`);
//             elem2.style.backgroundColor="blue";
//             const height1=window.getComputedStyle(elem2).getPropertyValue("height");
//             const elem1=document.querySelector(`.bar-${k}`)
//             elem1.style.height=height1;
//         barArray[k]=leftArray[i++];

//         elem1.style.backgroundColor="green";
//         k++;
//     }
//     while(j<rightIndex){
//         const elem2=document.querySelector(`.bar-${j}`);
//             elem2.style.backgroundColor="blue";
//             const height1=window.getComputedStyle(elem2).getPropertyValue("height");
//             const elem1=document.querySelector(`.bar-${k}`)
//             elem1.style.height=height1;
//         barArray[k]=rightArray[j++];

//         elem1.style.backgroundColor="green";
//         k++;
//     }
// }
// }
// const mergeSortFunc=async function(barArray,si,ei){
//     if(si===ei) return;
//     if(si<ei){
//         const mid=Math.floor((si+ei)/2);

//        await mergeSortFunc(barArray,si,mid);
//        await mergeSortFunc(barArray,mid+1,ei);
//         return merge(barArray,si,ei,mid);
//     }
// }

// const mergeSort=async (barArray) => {
//     mergeSortButton.style.backgroundColor = "green";
//     newArrayButton.disabled = true;
//     insertionSortButton.disabled = true;
//     mergeSortButton.disabled = true;
//     quickSortButton.disabled = true;
//     selectionSortButton.disabled = true;
//     bubbleSortButton.disabled = true;
//     barArraySize.disabled = true;
//    if(barArray.length<1) {
//        return new Promise((resolve)=>{
//        "promise fullfilled";
//    });
// }
//     const promise = await mergeSortFunc(barArray,0,barArray.length-1);

//     // console.log(barArray);
//     newArrayButton.disabled = false;
//     insertionSortButton.disabled = false;
//     mergeSortButton.disabled = false;
//     quickSortButton.disabled = false;
//     selectionSortButton.disabled = false;
//     bubbleSortButton.disabled = false;
//     barArraySize.disabled = false;
// }

newArrayButton.addEventListener("click", barCreation);
bubbleSortButton.addEventListener("click", bubbleSort);
selectionSortButton.addEventListener("click", selectionSort);
insertionSortButton.addEventListener("click", insertionSort);
quickSortButton.addEventListener("click", quickSort);
//mergeSortButton.addEventListener("click",mergeSort(barArray));
barArraySize.addEventListener("input", barCreation);
speedSlider.addEventListener("input", function() {
    delayResult = speedSlider.value;

})