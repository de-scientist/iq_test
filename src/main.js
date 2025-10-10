//add a shuffle function
function shuffle(arr){
      for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}return arr}


// Question bank: same 60 questions but now include difficulty and explanations
    const QUESTIONS = [];
    function qpush(section, q, opts, a, difficulty='M', expl=''){
      QUESTIONS.push({id:QUESTIONS.length+1, section, q, opts, a, difficulty, expl});
    }
