import currentCount from "./index.js";

export default function decreaseCount  (button, count) {
    button.addEventListener("click", () => {
        //if statement to preven the counter to work if the current count is 0.
        if(currentCount[0] === 0) {
            return;
        } else {
            //Reduce the count by minus 1.
            currentCount[0]-=1;
            count.textContent = 'The current count is "'+currentCount[0]+'."' //single quotation marks
            console.log(currentCount[0]);
            return currentCount;
        }
    })
}