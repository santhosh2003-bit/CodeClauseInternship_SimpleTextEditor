const boldsym = document.querySelector('.boldsym');
const inptxt = document.querySelector('#inptxt');
const underlsym=document.querySelector(".underlsym")
const itatorsym=document.querySelector(".itatorsym");
const format_align_center=document.querySelector("#format_align_center")
const format_align_right=document.querySelector("#format_align_right")

const copy_content=document.querySelector("#copy_content")

boldsym.addEventListener("click",()=>{
   let length=window.getComputedStyle(inptxt).fontWeight;
   if(length=="400"){
    inptxt.style.fontWeight="900"
   }
   else{
    inptxt.style.fontWeight="400"
   }
})
underlsym.addEventListener("click",()=>{

let textdecoration=window.getComputedStyle(inptxt).textDecoration;
if(textdecoration.includes("underline")){
    inptxt.style.textDecoration="none";
}
else{
    inptxt.style.textDecoration="underline"
}

})
itatorsym.addEventListener("click",()=>{
    let iterate=window.getComputedStyle(inptxt).fontStyle;
    if(iterate=="normal"){
        inptxt.style.fontStyle="italic"
    }
    else{
        inptxt.style.fontStyle="normal"
    }
})
format_align_center.addEventListener("click",()=>{
    let alignment=window.getComputedStyle(inptxt).textAlign;
    if(alignment=="center"){
        inptxt.style.textAlign="start"
    }
    else{
        inptxt.style.textAlign="center"
    }
})
format_align_right.addEventListener('click', () => {
    let alignmentright = window.getComputedStyle(inptxt).textAlign;
    if (alignmentright === 'center') {
        inptxt.style.textAlign = 'right';
    } else if (alignmentright === 'right') {
        inptxt.style.textAlign = 'start';
    } 
    else if (alignmentright === 'start') {
        inptxt.style.textAlign = 'right';
    }else {
        inptxt.style.textAlign = 'center';
    }


});


copy_content.addEventListener('click', () => {
    // Create a range object to select the text content
    const range = document.createRange();
    range.selectNode(inptxt);

    // Select the text content
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    selection.removeAllRanges();


})



