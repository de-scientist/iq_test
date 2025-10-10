//add a shuffle function
function shuffle(arr){
      for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}return arr}


// Question bank: same 60 questions but now include difficulty and explanations
    const QUESTIONS = [];
    function qpush(section, q, opts, a, difficulty='M', expl=''){
      QUESTIONS.push({id:QUESTIONS.length+1, section, q, opts, a, difficulty, expl});
    }

//(I've added explanations and difficulties for each question.)
    // SECTION Logic
    const S1='Logic';
    qpush(S1,'Which number completes the sequence? 2, 4, 8, 16, ?',['18','20','24','32'],3,'E','Powers of two; next is 32.');
    qpush(S1,'If all Bloops are Razzies, and some Razzies are Lazzies, then:',['All Bloops are Lazzies','Some Bloops are Lazzies','No Bloops are Lazzies','Cannot be determined'],3,'M','We only know some Razzies are Lazzies; may not include Bloops.');
    qpush(S1,'Find the odd one out: Triangle, Square, Circle, Rectangle',['Triangle','Square','Circle','Rectangle'],2,'M','Circle is the only shape without straight edges.');
    qpush(S1,'Complete the pattern: ▲ ▼ ▲ ▼ ▲ ?',['▲','▼','▲▼','None'],1,'E','Alternating pattern, next is ▼.');
    qpush(S1,'Which follows: 1,1,2,3,5,8, ?',['11','12','13','14'],2,'M','Fibonacci sequence; next is 13.');
    qpush(S1,'If TOM coded as 20 and JAM as 10 (same rule), what value for CAT?',['9','14','7','12'],0,'H','Example of positional sum/trick; user should inspect mapping.');
    qpush(S1,'Which shape is mirror symmetric: isosceles triangle, scalene triangle, rhombus, trapezoid?',['Isosceles triangle','Scalene triangle','Rhombus','Trapezoid'],0,'M','Isosceles triangle has a vertical axis of symmetry.');
    qpush(S1,'If every Wibble is a Wobble and no Wobble is a Wubble, can a Wibble be a Wubble?',['Yes','No','Only sometimes','Cannot tell'],1,'M','If Wibble -> Wobble and Wobble -> not Wubble, then Wibble cannot be Wubble.');
    qpush(S1,'Series: 7,14,28,56, ?',['70','112','96','92'],1,'E','Each term doubles; next 112.');
    qpush(S1,'Select the two that are alike: Apple, Banana, Carrot, Pear',['Apple & Pear','Apple & Banana','Banana & Carrot','Carrot & Pear'],0,'E','Apple and pear are both pomes/fruits similar in category.');
    qpush(S1,'Which completes the grid logic? If A->B, B->C, then A->?',['A','B','C','None'],2,'E','Transitive relation leads A->C.');
    qpush(S1,'If three cats take 3 minutes to catch 3 mice, how long for 1 cat to catch 1 mouse?',['1 min','3 min','9 min','Cannot determine'],1,'M','Rate: 3 cats catch 3 mice in 3 min => 1 cat catches 1 mouse in 3 min.');
    qpush(S1,'Pattern: square of odd numbers: 1,9,25,49,? (next is 81) choose next term of base numbers',['9','11','13','15'],2,'H','Squares of odd numbers: 1^2,3^2,5^2,7^2,9^2 so base is 9.');
    qpush(S1,'Word problem: Two ropes burn unevenly for 60 minutes each — measure 45 minutes?',['Light both ends of first and one end of second; when first burns out light other end of second','Impossible','Use a clock','Light one end only'],0,'H','Classic puzzle: lighting schemes measure 45 minutes.');
    qpush(S1,'If P->Q and Q->R, which is true?',['P->R','R->P','P->Q only','None'],0,'E','Transitivity: P implies R.');

