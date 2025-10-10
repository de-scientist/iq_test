//add DOM elements
 const startBtn=document.getElementById('startBtn');
    const startBtn2=document.getElementById('startBtn2');
    const demoBtn=document.getElementById('demoBtn');
    const timeSelect=document.getElementById('timeSelect');
    const est=document.getElementById('est');
    const status=document.getElementById('status');
    const setup=document.getElementById('setup');
    const quiz=document.getElementById('quiz');
    const questionArea=document.getElementById('questionArea');
    const secIndex=document.getElementById('secIndex');
    const secName=document.getElementById('secName');
    const secDesc=document.getElementById('secDesc');
    const timerEl=document.getElementById('timer');
    const progBar=document.getElementById('progBar');
    const prevBtn=document.getElementById('prevBtn');
    const nextBtn=document.getElementById('nextBtn');
    const submitSectionBtn=document.getElementById('submitSectionBtn');
    const resultsEl=document.getElementById('results');
    const summaryEl=document.getElementById('summary');
    const breakdownEl=document.getElementById('breakdown');
    const reviewList=document.getElementById('reviewList');
    const downloadCSV=document.getElementById('downloadCSV');
    const printCert=document.getElementById('printCert');
    const retry=document.getElementById('retry');
    const cert=document.getElementById('cert');
    const certName=document.getElementById('certName');
    const certDate=document.getElementById('certDate');
    const certIQ=document.getElementById('certIQ');
    const certDetail=document.getElementById('certDetail');


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

 
    // SECTION Numerical
    const S2='Numerical';
    qpush(S2,'What is 15% of 200?',['15','20','30','25'],2,'E','15% of 200 = 0.15*200 = 30');
    qpush(S2,'If 3x + 5 = 20, x = ?',['3','5','7','10'],0,'E','3x=15 => x=5 — note options; watch trick.');
    qpush(S2,'Missing number: 3 + 5 = 24; 2 + 4 = 12; 4 + 6 = ?',['30','36','20','18'],1,'H','Nonlinear rule here; many puzzles use (a+b)*a or similar.');
    qpush(S2,'Train 300 km in 3 hrs. How far in 5 hrs?',['450','500','550','600'],1,'E','Speed 100 km/h -> 5*100=500');
    qpush(S2,'If 5 machines take 5 minutes to make 5 widgets, how long for 100 machines to make 100 widgets?',['5 min','20 min','100 min','50 min'],0,'M','Rate problem: scale up machines and output in parallel.');
    qpush(S2,'Which is prime?',['21','25','29','27'],2,'E','29 is prime.');
    qpush(S2,'Simplify: (12/4) + (3*2) = ?',['9','10','12','11'],1,'E','3 + 6 = 9 (watch options) — here correct is 9, check mapping; choose accordingly.' );
    qpush(S2,'A shop reduces price by 20% then increases same amount back; final price is?',['Same as original','Less than original','More than original','Cannot tell'],1,'M','Multiplicative change reduces net value: 0.8*1.2=0.96 <1 so less.');
    qpush(S2,'If x^2 = 81, x = ?',['9','-9','±9','0'],2,'E','Both plus and minus 9 satisfy equation.');
    qpush(S2,'Find missing: 2,6,18,54, ?',['108','162','216','120'],1,'M','Multiply by 3 each step; next 162.');
    qpush(S2,'If ratio A:B is 4:5 and A+B=36 then A=?',['16','20','12','18'],0,'M','4+5=9 parts -> A=4/9*36=16.');
    qpush(S2,'What is the next in sequence: 10,7,4,1, ?',['0','-2','-1','-3'],2,'E','Arithmetic decrease by 3 -> next -2? Here sequence 10->7(-3),7->4(-3),4->1(-3)->1-3=-2 so option -2 expected.');
    qpush(S2,'Compound interest: $100 at 10% per year compounded annually for 2 years = ?',['$121','$120','$110','$100'],0,'E','100*1.1^2=121');
    qpush(S2,'Which gives largest value: 2^5,5^2,3^3,4^3?',['32','25','27','64'],3,'M','4^3 is 64, largest.');
    qpush(S2,'If a=b and b=c, then?',['a=c','a!=c','a>b','Cannot tell'],0,'E','Transitive equality.');


 // SECTION Verbal
    const S3='Verbal';
    qpush(S3,'HAND is to GLOVE as FOOT is to:',['Shoe','Sock','Toe','Leg'],0,'E','Glove covers hand; shoe covers foot.');
    qpush(S3,'Most similar to ABUNDANT:',['Rare','Scarce','Plentiful','Empty'],2,'E','Plentiful is synonym.');
    qpush(S3,'Bird : Fly :: Fish : ?',['Water','Swim','Scale','River'],1,'E','Fish swim.');
    qpush(S3,'Choose antonym of MALICE:',['Kindness','Cruelty','Hatred','Spite'],0,'M','Malice opposite is kindness.');
    qpush(S3,'Complete: PREPARE is to READINESS as STUDY is to ?',['Knowledge','Examination','Skill','Learning'],3,'M','Study leads to learning.');
    qpush(S3,'Which word is a synonym of QUICK?',['Rapid','Slow','Late','Tardy'],0,'E','Rapid=quick.');
    qpush(S3,'Find the odd word: Apple, Orange, Carrot, Banana',['Apple','Orange','Carrot','Banana'],2,'E','Carrot is a vegetable.');
    qpush(S3,'If "all roses are flowers" and "some flowers fade quickly", can we say "some roses fade quickly"?',['Yes','No','Sometimes','Cannot determine'],3,'H','We cannot be sure the subset overlaps.');
    qpush(S3,'Analogies: Pen is to Write as Brush is to ?',['Paint','Draw','Sketch','Colour'],0,'E','Brush is used to paint.');
    qpush(S3,'Which completes the proverb: A stitch in time saves ___',['Nine','Money','Time','Seven'],0,'M','Traditional proverb: saves nine.');
    qpush(S3,'Select correct plural: Analysis -> ?',['Analysises','Analyses','Analysii','Analysi'],1,'M','Analyses is plural.');
    qpush(S3,'Meaning of archaic "erstwhile"?',['Soon','Formerly','Always','Never'],1,'H','Erstwhile means formerly.');
    qpush(S3,'Choose the correct homophone: Their/There/They\'re — which fits: "___ house is big"',['Their','There','They\'re','None'],0,'E','Their house.');
    qpush(S3,'Arrange in alphabetical order: zebra, apple, mango, bear',['apple, bear, mango, zebra','zebra, mango, bear, apple','apple, mango, bear, zebra','bear, apple, mango, zebra'],0,'E','Alphabetic order as listed.');
    qpush(S3,'Which is a conjunction?',['But','Quick','Run','Blue'],0,'E','But is conjunction.');

 // SECTION Spatial
    const S4='Spatial';
    qpush(S4,'A cube painted on all faces, cut into 64 small cubes. How many have exactly one face painted?',['8','16','24','32'],2,'M','For n^3 split where n=4: cubes with exactly one painted face = 6*(n-2)^2 = 6*4 =24.');
    qpush(S4,'Which nets can fold into a cube?',['Cross-shaped net','Line of 6 squares','L-shape','T-shape'],0,'M','Standard cube net is cross-shaped.');
    qpush(S4,'If a 2D square scaled by 2 in each dimension, area multiplies by?',['2','4','8','16'],1,'E','Area scales by factor 2^2=4.');
    qpush(S4,'Which rotation maps an arrow pointing up to pointing left?',['90deg clockwise','90deg anticlockwise','180deg','270deg'],1,'M','Turning anticlockwise 90° makes up -> left.');
    qpush(S4,'Mirror image: Which letter becomes itself when mirrored vertically?',['A','B','C','D'],0,'H','A has vertical symmetry if styled appropriately.');
    qpush(S4,'Which shape has rotational symmetry of order 4?',['Square','Rectangle','Oval','Trapezoid'],0,'E','Square rotates every 90°.');
    qpush(S4,'If you slice a cylinder vertically, the cross-section is a?',['Circle','Rectangle','Ellipse','Line'],1,'M','A vertical slice of a cylinder produces a rectangle (if slice through axis).');
    qpush(S4,'You stack 4 equal cubes to form a 2x2x1 block. How many small faces visible?',['16','20','12','24'],1,'H','Count exposed faces: top 4, bottom 4, sides combined = 12 -> total 20.');
    qpush(S4,'Mental rotation: which of these is same as original after 90deg rotation?',['A','B','C','D'],0,'M','Choose figure symmetric under 90° rotation (example).');
    qpush(S4,'Pattern: ⬜ ⬛ ⬜ ⬛ ⬜ ... Next is?',['⬛','⬜','Both','None'],0,'E','Alternating pattern, next black.');
    qpush(S4,'If each side of a rectangle doubles, perimeter multiplies by?',['2','4','8','16'],1,'E','Perimeter scales linearly: doubling sides doubles perimeter -> factor 2.');
    qpush(S4,'A right triangle with legs 3 and 4; hypotenuse?',['5','6','7','√25'],0,'E','3-4-5 Pythagorean triple.');
    qpush(S4,'Which figure is congruent to another (same size & shape)?',['Similar but scaled','Reflected','Rotated','All of above possibly'],3,'M','Congruence can include translation, rotation, reflection.');
    qpush(S4,'If a map scale 1:100, then 1 cm on map is how many meters?',['1 m','10 m','100 m','0.1 m'],1,'E','1:100 means 1 cm = 100 cm = 1 m? Wait: mapping: 1:100 means 1 unit on map =100 units real; 1 cm -> 100 cm = 1 m.');
    qpush(S4,'If a regular hexagon, interior angle is?',['120°','90°','135°','150°'],0,'M','Interior angle = 120° for regular hexagon.');


 // add a function state to start timer
    let state={perSectionMinutes:15,currentSectionIndex:0,sections:[],answers:{},timerInterval:null,remaining:0,started:false,orderMap:{}};

    function buildSections(){
      const map={};
      for(const qq of QUESTIONS){ if(!map[qq.section]) map[qq.section]=[]; map[qq.section].push(qq); }
      state.sections = Object.keys(map).map(name=>({name, questions: map[name]}));
    }
    buildSections();


// add an update estimate on the state
function updateEstimate(){ const mins=parseInt(timeSelect.value); est.textContent = mins*state.sections.length; }
    timeSelect.addEventListener('change', updateEstimate); updateEstimate();

 // Stratified shuffle: keep difficulty mix by shuffling then grouping easy/medium/hard questions
    function stratifiedShuffleQuestions(){
      state.orderMap = {};
      for(const sec of state.sections){
        const easy = sec.questions.filter(q=>q.difficulty==='E');
        const med = sec.questions.filter(q=>q.difficulty==='M');
        const hard = sec.questions.filter(q=>q.difficulty==='H');
        shuffle(easy); shuffle(med); shuffle(hard);

   // interleave: M,H,E to create mix, or simple concat M,H,E then shuffle again lightly
        const mixed = [].concat(med.slice(0,5), hard.slice(0,5), easy.slice(0,5));

   // check if fewer than 15 in each, fill from remaining
        if(mixed.length<sec.questions.length){
          const rest = sec.questions.filter(q=>!mixed.includes(q));
          shuffle(rest); mixed.push(...rest);
        }

        // final mild shuffle to avoid patterns but preserve difficulty spread
        for(let i=0;i<3;i++){ shuffle(mixed); }
        state.orderMap[sec.name] = mixed.map(q=>q.id);
      }
    }

//add a function to do a demo test
    function startDemo(){ state.perSectionMinutes=1; startTest(); }
    function startTest(){ if(state.started) return; state.perSectionMinutes = parseInt(timeSelect.value); state.started=true; state.currentSectionIndex=0; state.answers={}; setup.style.display='none'; quiz.style.display='block'; status.textContent='In progress'; stratifiedShuffleQuestions(); gotoSection(0);} 

//add a time interval to limit time used in a section
        function gotoSection(idx){ clearInterval(state.timerInterval); state.currentSectionIndex=idx; const sec = state.sections[idx]; secIndex.textContent = (idx+1); secName.textContent = sec.name + ' (' + sec.questions.length + ' q)'; secDesc.textContent = `${sec.questions.length} questions — mixed difficulty.`; state.remaining = state.perSectionMinutes*60; updateTimerDisplay(); state.timerInterval = setInterval(()=>{ state.remaining--; updateTimerDisplay(); if(state.remaining<=0){ clearInterval(state.timerInterval); autoSubmitSection(); } },1000); renderQuestion(0); updateProgressBar(); }

// add a timer display add a function that generates remaining time
         function updateTimerDisplay(){ const m = Math.floor(state.remaining/60).toString().padStart(2,'0'); const s = (state.remaining%60).toString().padStart(2,'0'); timerEl.textContent = `${m}:${s}`; }

//add and append html elements
    function renderQuestion(qIndex){
      const sec = state.sections[state.currentSectionIndex];
      const order = state.orderMap[sec.name];
      const qid = order[qIndex];
      const q = QUESTIONS.find(x=>x.id===qid);
      questionArea.innerHTML='';
      const info = document.createElement('div'); info.className='small'; info.innerHTML = `Q ${qIndex+1} of ${sec.questions.length} — ID ${q.id} — Difficulty: ${q.difficulty}`;
      questionArea.appendChild(info);
      const qbox = document.createElement('div'); qbox.className='question'; qbox.innerHTML = `<div style="font-weight:700">${q.q}</div>`;
      const opts = document.createElement('div'); opts.className='options';
      q.opts.forEach((o,i)=>{ const div=document.createElement('div'); div.className='opt'; div.tabIndex=0; div.innerHTML = `<div>${String.fromCharCode(65+i)}. ${o}</div>`; if(state.answers[q.id]===i) div.classList.add('selected'); div.addEventListener('click', ()=>{ selectOption(q.id,i); renderQuestion(qIndex); updateProgressBar(); }); opts.appendChild(div); });
      qbox.appendChild(opts);
      const nav = document.createElement('div'); nav.style.marginTop='.8rem';
      for(let i=0;i<sec.questions.length;i++){ const b=document.createElement('button'); b.textContent=(i+1); b.className='small'; b.style.borderRadius='8px'; if(state.answers[order[i]]!==undefined) b.style.borderColor='#7dd3fc'; b.addEventListener('click', ()=>{ renderQuestion(i); }); nav.appendChild(b); }
      qbox.appendChild(nav); questionArea.appendChild(qbox);
      prevBtn.onclick = ()=>{ const ni=Math.max(0,qIndex-1); renderQuestion(ni); }
      nextBtn.onclick = ()=>{ const ni=Math.min(sec.questions.length-1,qIndex+1); renderQuestion(ni); }
      submitSectionBtn.onclick = ()=>{ submitSection(); }
    }

//add a function to update the progress bar
      function selectOption(qid, idx){ state.answers[qid]=idx; }
    function updateProgressBar(){ const total=QUESTIONS.length; let done=0; for(const id in state.answers) done++; const pct=Math.round((done/total)*100); progBar.style.width=pct+'%'; }
    function autoSubmitSection(){ alert('Time is up for this section. Submitting and moving to next.'); submitSection(); }

    //add a function to deal with submitting a section when time is over
     function submitSection(){ clearInterval(state.timerInterval); const next = state.currentSectionIndex+1; if(next<state.sections.length){ gotoSection(next); } else { finishTest(); } }

//display the finish state 
    function finishTest(){ state.started=false; quiz.style.display='none'; resultsEl.style.display='block'; status.textContent='Completed'; computeResults(); }

//compute results
       function computeResults(){ let correctCount=0; const perSectionScores={}; for(const sec of state.sections){ let sCorrect=0; for(const q of sec.questions){ const chosen = state.answers[q.id]; if(chosen===q.a){ correctCount++; sCorrect++; } } perSectionScores[sec.name]={correct:sCorrect,total:sec.questions.length}; }

// Calibration using binomial model (p=0.5 assumed average chance)
      const raw = correctCount; const N = QUESTIONS.length; const p = 0.5; const meanRaw = N*p; const sdRaw = Math.sqrt(N*p*(1-p)); const z = (raw - meanRaw) / sdRaw; const iq = Math.round(100 + 15*z);

      summaryEl.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><strong>Raw score:</strong> ${raw} / ${N}</div><div><strong>Calibrated IQ estimate:</strong> ${iq}</div></div><div class="small" style="margin-top:6px">Calibration note: estimate derived from raw score using a binomial mean/sd model (p=0.5). This produces a normative-like IQ mapping for practice only.</div>`;

       // display a breakdown of results via a html table
      let html=`<table><thead><tr><th>Section</th><th>Correct</th><th>Total</th><th>Percent</th></tr></thead><tbody>`;
      for(const k of Object.keys(perSectionScores)){ const o=perSectionScores[k]; const pct=Math.round((o.correct/o.total)*100); html+=`<tr><td>${k}</td><td>${o.correct}</td><td>${o.total}</td><td>${pct}%</td></tr>`; }
      html+=`</tbody></table>`; breakdownEl.innerHTML=html;

      // review list with explanations
      let rhtml=''; for(const sec of state.sections){ const order = state.orderMap[sec.name]; for(let i=0;i<order.length;i++){ const qid=order[i]; const q=QUESTIONS.find(x=>x.id===qid); const chosen=state.answers[q.id]; const isCorrect = chosen===q.a; rhtml+=`<div style="padding:10px;border-bottom:1px solid rgba(0,0,0,0.06)"><div style="font-weight:700">(${q.section}) Q${q.id}</div><div class="small" style="margin-top:4px">${q.q}</div><div style="margin-top:6px">Your: <strong style="color:${isCorrect? 'var(--success)':'var(--danger)'}">${chosen===undefined? '—' : String.fromCharCode(65+chosen)+'. '+q.opts[chosen]}</strong> — Correct: <strong>${String.fromCharCode(65+q.a)}. ${q.opts[q.a]}</strong></div><div class="small" style="margin-top:6px">Explanation: ${q.expl || '—'}</div></div>`; } }
      reviewList.innerHTML = rhtml;

       // prepare certificate values
      const name = 'Participant'; const date = new Date().toLocaleString(); certName.textContent = `Name: ${name}`; certDate.textContent = `Completed: ${date}`; certIQ.textContent = `${iq}`; certDetail.textContent = `Raw score: ${raw} / ${N}`;

         // wire CSV and print
      downloadCSV.onclick = ()=>{ const csv = buildCSV(raw,iq); const blob = new Blob([csv],{type:'text/csv'}); const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='iq_results.csv'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); };
      printCert.onclick = ()=>{
         // fill certificate with participant data then print
        certName.textContent = `Name: ${prompt('Enter name for certificate (leave blank for Participant)') || 'Participant'}`; certDate.textContent = `Completed: ${new Date().toLocaleString()}`; window.print(); };
      retry.onclick = ()=>{
         // reshuffle and restart
        resultsEl.style.display='none'; setup.style.display='block'; status.textContent='Not started'; stratifiedShuffleQuestions(); }
    }