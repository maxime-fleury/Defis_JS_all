const Max = 100;
const nb_elements =  60;
let x = [];
let sortedbool = false;
const bubble = document.getElementById("bubbleSort") ;
const quick = document.getElementById("quickSort") ;

var numbers = document.getElementById("numbers");
var sorted = document.getElementById("sorted");
bubble.addEventListener("click", function() {
	if(!sortedbool){
		bubbleSort(-1,x);
		sortedbool = true;
	}
	else{
		fillRandomNumbers(nb_elements);
		bubbleSort(-1,x);
		sortedbool = true;
	}
});
quick.addEventListener("click", function() {
	if(!sortedbool){
		x = quickSort(x, 0, x.length - 1);
		sortedbool = true;
	}
	else{
		fillRandomNumbers(nb_elements);
		x = quickSort(x, 0, x.length - 1);
		sortedbool = true;
	}
});
function fillRandomNumbers(nb_elements){
	numbers.innerHTML = "";
	x = [];
	for(i = 0; i < nb_elements; i++){
		x[i] = Math.floor(Math.random() * Max);
	}
	showbar(-1,x);
}
fillRandomNumbers(nb_elements);
function bubbleSort(){
		let len = x.length;
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				setTimeout(function(){
				if (x[j] > x[j + 1]) {
					let tmp = x[j];
					x[j] = x[j + 1];
					x[j + 1] = tmp;
					showbar(j+1,x);
				}
			},10);
		}
		}
}
function showbar(activatedindex = -1,y){
	numbers.innerHTML = "";
	for(i = 0; i < y.length; i++){
		if(i!= activatedindex)
			numbers.innerHTML += "<div class='bar' style='height:" + y[i]*2 + "px'></div>";
		else{
			numbers.innerHTML += "<div class='bar activated' style='height:" + y[i]*2 + "px'></div>";
		}
	}
}
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
	setTimeout(() => {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
	showbar(index,items);
	x = items;
    return items;
	}, 75);
}