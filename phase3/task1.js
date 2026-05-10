//even\odd 
function isEven(number)
{
    return number % 2 === 0;
}
function isOdd(number) {
    return number % 2 !== 0;
}
function checkEvenOdd(number) {
    if (typeof number !== 'number' || isNaN(number))
        {
            return "Invalid input. Please provide a number.";
        }
        if (isEven(number))
            {
                return `${number} is Even`;
            }
            else 
                {
                    return `${number} is Odd`;
                }
            }
//display arrays
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
const numbers = [10, 23, 45, 18, 27, 32];
const mixedItems = ["Pen", "Book", 42, "Laptop", true, "Phone"];
function displayArrayItems(array, containerId)
{
    const container = document.getElementById(containerId);
    if (!container) return;
    if (array.length === 0)
        {
            container.innerHTML = "<p>No items to display</p>";
            return;
        }
        let html = "<ul>";
        array.forEach((item, index) =>
            {
                html += `<li>${index + 1}. ${item}</li>`;
            });
            html += "</ul>";
            container.innerHTML = html;
        }
function displayItemsWithDetails(array)
{
    console.log("=== ITEMS LIST ===");
    console.log(`Total items: ${array.length}`);
 array.forEach((item, index) => 
    {
         console.log(`${index + 1}. ${item} (Type: ${typeof item})`);
    });
return array;
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));
displayItemsWithDetails(fruits);
displayItemsWithDetails(numbers);
displayItemsWithDetails(mixedItems);