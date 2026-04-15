function updateTime() {
    var currentTime = new Date().toLocaleString();
    document.getElementById('datetime').textContent = currentTime;
}
setInterval(updateTime, 1000);
updateTime();

var largestZIndex = 1;
function bringToFront(element) {
    largestZIndex++;
    element.style.zIndex = largestZIndex;
}
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("sylable"));
dragElement(document.getElementById("Tic-Tac-Toe"));


// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
    // Step 2: Set up variables to keep track of the element's position.
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    // Step 3: Check if there is a special header element associated with the draggable element.
    if (document.getElementById(element.id + "-header")) {
        // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
        // This allows you to drag the window around by its header.
        document.getElementById(element.id + "-header").onmousedown = startDragging;
    }

    function startDragging(e) {
        bringToFront(element);
        e = e || window.event;
        e.preventDefault();
        // Step 7: Get the mouse cursor position at startup.
        initialX = e.clientX;
        initialY = e.clientY;
        // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    }

    // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        // Step 10: Calculate the new cursor position.
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
function closeWindow(elementid) {
    document.getElementById(elementid).style.display = "none";
}
function openWindow(elementid) {
    document.getElementById(elementid).style.display = "block";
    bringToFront(document.getElementById(elementid));
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const content = document.getElementById("Text").textContent;
    doc.text(content ,10 ,10, {
        fontWeight: 'bold'
    });
    doc.save("ns_syl.pdf");
}


//This function is AI code that I didn't write. I just couldn't figure it out myself
function toggleBold(textarea) {
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed){
        return;
    }
        

    const range = selection.getRangeAt(0);
    const fragment = range.cloneContents();

    // Check if all selected text is already bold
    const walker = document.createTreeWalker(fragment, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    const allBold = textNodes.length > 0 && textNodes.every(node => {
        let el = node.parentElement;
        while (el && el !== fragment) {
            if (el.tagName === 'B' || el.tagName === 'STRONG') return true;
            el = el.parentElement;
        }
        return false;
    });

    // Restore selection and toggle bold using execCommand
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('bold');

    textarea.focus();
} 
//End of AI code
//This is the AI code that I copied and edited to make it do Italic as well
function toggleItalic(textarea) {
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed){
        return;
    }
        

    const range = selection.getRangeAt(0);
    const fragment = range.cloneContents();

    // Check if all selected text is already italic
    const walker = document.createTreeWalker(fragment, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    const allItalic = textNodes.length > 0 && textNodes.every(node => {
        let el = node.parentElement;
        while (el && el !== fragment) {
            if (el.tagName === 'I' || el.tagName === 'EM') return true;
            el = el.parentElement;
        }
        return false;
    });

    // Restore selection and toggle italic using execCommand
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('italic');

    textarea.focus();
}

//This is my code now
function saveToCloud() {
    const content = document.getElementById("Typearea").innerHTML;
    
}