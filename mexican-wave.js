wave('he llo hi');

function wave(str){
  let arr = [];
  let j=0;
  let upperCase, beg, end;
  let space = [];

  for(let i=0; i<str.length; i++){
      
    if(str[i] == ' '){
      space[j] = i;
      j++;
    }
    
      beg = str.substring(0, i);
      end = str.substring(i+1, str.length);
      upperCase = beg + str[i].toUpperCase() + end;
      arr[i] = upperCase;
    }
  
  j=0; 
  for(let k=0; k<space.length; k++){
    arr.splice(space[j] - k, 1);
    j++;
  }
  
  console.log(arr);
}