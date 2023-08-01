

const Scores = [20,50,65,90,85,96,74,51,99,85];
function calculateAverage(Scores){
  let sum =0;
  for(let i =0; i <Scores.length; i++){
    sum += Scores[i];
  }
  return sum/Scores.length;
}


// b
function findHighestGrade(Scores){
  let highest = Scores[0];
  for (let i =1; i<Scores.length; i++){
    if(Scores[i]>highest){
      highest=Scores[i];
    }
  }
  return highest;
}


// c

function findSecondHighestGrade(Scores){
  let highest = Scores[0];
  let secondHighest  = Scores [1];

  if(secondHighest>highest){
    [highest,secondHighest]=[secondHighest,highest]
  }

  for(let i =2; i<Scores.length;i++){
    if(Scores[i]>highest){
      secondHighest=highest;
      highest = Scores[i];
    }else if(Scores[i]>secondHighest){
      secondHighest = Scores[i];
    }
  }
  return secondHighest;
}

const averageGrade = calculateAverage(Scores);
console.log("הציון הממוצע הוא:", averageGrade);

const highestGrade = findHighestGrade(Scores);
console.log("הציון הגבוה ביותר הוא:", highestGrade);

const secondHighestGrade = findSecondHighestGrade(Scores);
console.log("הציון השני בגובהו הוא:", secondHighestGrade);


const Loren =['moshe','rel','rami','eli','jok','pro'];
console.log(Loren);
Loren [6]="loren";
console.log(Loren);
console.log(Loren[6]);

function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

const reversedStudents = reverseArray(Loren);
console.log(reversedStudents);


const Array2=["oren",2,true,31,8,false,90,"deve",true,64,0,null,undefined,0];
for(let i=0; i<Array2.length; i++){
  if(typeof Array2[i] ==="number"){
    console.log(Array2[i])
  }
}

const nonNumberAndNonStringArray = Array2.filter(item => typeof item !== 'number' && typeof item !== 'string');
console.log(nonNumberAndNonStringArray);

const numbersArray = Array2.filter(item => typeof item === 'number');
const otherArray = Array2.filter(item => typeof item !== 'number');
console.log(numbersArray);
console.log(otherArray);
for (let i = 0; i < Array2.length - 1; i++) {
  if (typeof Array2[i] === 'boolean') {
    console.log(Array2[i + 1]);
  }
}