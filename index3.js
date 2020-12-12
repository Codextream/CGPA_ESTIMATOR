const currentCGPA=document.getElementById('current_cg');
const totalPastCredits=document.getElementById('tpastcredits');

function cg() {
    // for current cgpa and total credits cleared in past
    let currentCG = currentCGPA.value;
    let tcredits =  totalPastCredits.value;
//    object for subjectwise grade points
let subjectsGrades={
sub1grade:"",
sub2grade:"",
sub3grade:"",
sub4grade:"",
sub5grade:"",
sub6grade:"",
sub7grade:"",
sub8grade:"",
sub9grade:"",
sub10grade:"",
sub11grade:"",
sub12grade:""
}
// destructuring subjectGrades object
let {sub1grade,sub2grade,sub3grade,sub4grade,sub5grade,sub6grade,sub7grade,sub8grade,sub9grade,sub10grade,sub11grade,sub12grade}=subjectsGrades;

// To assign values of grades to the variableNames in subjectsGrades object
for(let variableName in subjectsGrades){
    subjectsGrades[variableName]=`document.Expected.${variableName}.value`;
}
//    object for subjectwise credits
let subjectsCredits={
    sub1credits:"",
    sub2credits:"",
    sub3credits:"",
    sub4credits:"",
    sub5credits:"",
    sub6credits:"",
    sub7credits:"",
    sub8credits:"",
    sub9credits:"",
    sub10credits:"",
    sub11credits:"",
    sub12credits:""  
}
// destructuring subjectsCredits object
let {sub1credits,sub2credits,sub3credits,sub4credits,sub5credits,sub6credits,sub7credits,sub8credits,sub9credits,sub10credits,sub11credits,sub12credits}=subjectsCredits;

// To assign values of credits to the variableNames in subjectsCredits object
for(let variableName in subjectsCredits){
    subjectsCredits[variableName]=`document.Expected.${variableName}.value`;
}

 let totalcred = Number(tcredits)+Number(sub1credits)+Number(sub2credits)+Number(sub3credits)+Number(sub4credits)+Number(sub5credits)+Number(sub6credits)+Number(sub7credits)+Number(sub8credits)+Number(sub9credits)+Number(sub10credits)+Number(sub11credits)+Number(sub12credits);

 let weightedcredits = (currentCG*tcredits) + (sub1grade*sub1credits)+ (sub2grade*sub2credits) +(sub3grade*sub3credits)+(sub4grade*sub4credits)+ (sub5grade*sub5credits)+(sub6grade*sub6credits)+sub7grade*sub7credits+sub8grade*sub8credits+sub9grade*sub9credits+sub10grade*sub10credits+sub11grade*sub11credits+sub12grade*sub12credits;

 let expected_cg = weightedcredits/totalcred;
 
 alert('Your Expected CGPA is ' + expected_cg.toFixed(2));
}
