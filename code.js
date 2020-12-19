
function AddSubject(num){
    
    if(num.value==0){
        var fir = document.querySelector('#First');
        var sec = document.querySelector('#Second');
        var thi = document.querySelector('#Third');
        var Gra = document.querySelector('#Grade');
        var Cre = document.querySelector('#Credit');
        
        
        fir.innerHTML='';
        sec.innerHTML='';
        thi.innerHTML='';
        Gra.innerHTML='';
        Cre.innerHTML='';
    }
    if(num.value > 0){
    var fir = document.querySelector('#First');
    fir.innerHTML='';
    var sec = document.querySelector('#Second');
    sec.innerHTML='';
    var thi = document.querySelector('#Third');
    thi.innerHTML='';
    var Gra = document.querySelector('#Grade');
    document.getElementById('Grade').style.visibility="visible";
    Gra.innerHTML = 'Gradepoint';
    var Cre = document.querySelector('#Credit');
    document.getElementById('Credit').style.visibility="visible";
    Cre.innerHTML = 'Credit';
    
    
    for (var i = 1; i <= parseInt(num.value); i++) {
        
        var fir1 = document.createElement('div');
        fir1.innerHTML = '<Label>Subject '+i+'</Label>';
        var sec2 = document.createElement('div');
        sec2.innerHTML = '<input type="number" name="sub'+i+'grade" id="sub'+i+'grade" min="0" >'
        var thi3 = document.createElement('div');
        thi3.innerHTML = '<input type="number" name="sub'+i+'credits" id="sub'+i+'credits" min="0" >'
        fir.appendChild(fir1);
        sec.appendChild(sec2);
        thi.appendChild(thi3);
        }
    }
}

function cg(){
    var number = document.Sub.Subject.value;
    var currentCG = document.PresentCG.current_cg.value;
    var tcredits =  document.PresentCG.tpastcredits.value;
    var totalcred = Number(tcredits);
    var weightedcredits = currentCG*tcredits;
    for(var i=1;i<=number;i++){
        totalcred = totalcred + Number(document.getElementById("sub"+i+"credits").value);
        var weightedcredits = weightedcredits + Number((document.getElementById("sub"+i+"grade").value)*(document.getElementById("sub"+i+"credits").value))
        var expected_cg = (weightedcredits/totalcred).toFixed(2);
    }
    if(expected_cg === undefined){
        if(currentCG == 0){
          if(tcredits==0){
            alert('Your Expected CGPA is NaN');
        }
    else{
        alert('Your Expected CGPA is 0.00');
    }}
        else{
            alert('Your Expected CGPA is ' + currentCG)
        }
    }
    else{
    alert('Your Expected CGPA is ' + expected_cg);}
}
