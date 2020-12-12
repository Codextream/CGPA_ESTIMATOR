function calculateGPA() {
 let gpa_value = 0;
 const cgpa_value = document.getElementById('gpa').value;
 if (cgpa_value >= 8.5)
     gpa_value = 4;
 if (cgpa_value >= 8.0 && cgpa_value <= 8.4)
     gpa_value = 3.7;
 if (cgpa_value >= 7.5 && cgpa_value <= 7.9)
     gpa_value = 3.3;
 if (cgpa_value >= 7.0 && cgpa_value <= 7.4)
     gpa_value = 3.0;
 if (cgpa_value >= 6.5 && cgpa_value <= 6.9)
     gpa_value = 2.7;
 if (cgpa_value >= 6.0 && cgpa_value <= 6.4)
     gpa_value = 2.3;
 if (cgpa_value >= 5.5 && cgpa_value <= 5.9)
     gpa_value = 2.0;
 if (cgpa_value >= 5.0 && cgpa_value <= 5.4)
     gpa_value = 1.7;
 if (cgpa_value >= 4.5 && cgpa_value <= 4.9)
     gpa_value = 1.3;
 if (cgpa_value >= 4.0 && cgpa_value <= 4.4)
     gpa_value = 1.0;
 if (cgpa_value >= 0.0 && cgpa_value <= 3.9)
     gpa_value = 0;

 alert('Your GPA is ' + gpa_value);
 
}