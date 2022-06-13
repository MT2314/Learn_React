import currentCount from "./index.js";

export default function changeCount  (button, count) {
    button.addEventListener("click", () => {
        console.log(count)
        // The next line will add +1 to the current count
        // currentCount[0]+=1 is a shortcut, is the same as writing currentCount[0] = currentCount[0] + 1
        currentCount[0]+=1
        count.innerHTML = 'The current count is "'+currentCount[0]+'."'; //single quotation marks
        // log on console to check if the sum worked
        console.log(currentCount[0])
        return currentCount;
    })
}