let numberContent = 0;

document.getElementById("demo").innerHTML = numberContent;

const increase  = function() {
  return (document.getElementById("demo").innerHTML = ++numberContent);
};

const decrease  = function() {
  if(numberContent > 0){
      return (document.getElementById("demo").innerHTML = --numberContent);
  }

};

const reset  = function() {
  numberContent = 0;
  document.getElementById("demo").innerHTML = numberContent;
};