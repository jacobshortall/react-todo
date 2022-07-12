export default function checkLineThrough(element) {
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "";
    } else {
        element.style.textDecoration = "line-through";
    }
}
