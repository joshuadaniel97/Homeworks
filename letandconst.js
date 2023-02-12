function main(){
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    let r = readline("2.6");
    r = parseFloat(r);
    let area = PI * r * r
    let perimeter = 2 * PI * r
    // print the are of the cirle:
    console.log(area)
    // print the perimeter of the circle:
    console.log(perimeter)
}