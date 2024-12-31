// SGPA Calculator
document.getElementById('add-course').addEventListener('click', function () {
  const courseTable = document.getElementById('course-table');

  const newRow = document.createElement('div');
  newRow.classList.add('row', 'input-row');

  newRow.innerHTML = `
    <input type="text" class="course-name" placeholder="Course Name">
    <input type="number" class="credits-allotted" placeholder="Credits" min="1">
    <select class="grade-received">
      <option value="" disabled selected>Select Grade</option>
      <option value="10">AA</option>
      <option value="9">AB</option>
      <option value="8">BB</option>
      <option value="7">BC</option>
      <option value="6">CC</option>
      <option value="5">CD</option>
      <option value="4">DD</option>
      <option value="0">FF</option>
    </select>
  `;

  courseTable.appendChild(newRow);
});

document.getElementById('calculate-sgpa').addEventListener('click', function () {
  const rows = document.querySelectorAll('#course-table .input-row');
  let totalCredits = 0;
  let weightedGradePoints = 0;

  rows.forEach(row => {
    const credits = parseFloat(row.querySelector('.credits-allotted').value);
    const grade = parseFloat(row.querySelector('.grade-received').value);

    if (!isNaN(credits) && !isNaN(grade)) {
      totalCredits += credits;
      weightedGradePoints += credits * grade;
    }
  });

  const sgpa = totalCredits > 0 ? (weightedGradePoints / totalCredits).toFixed(2) : "0.00";
  document.getElementById('sgpa').textContent = sgpa;
});

document.getElementById('clear-sgpa').addEventListener('click', function () {
  document.getElementById('sgpa').textContent = "0.00";
});

// CGPA Calculator
document.getElementById('add-semester').addEventListener('click', function () {
  const cgpaTable = document.getElementById('cgpa-table');

  const newRow = document.createElement('div');
  newRow.classList.add('row', 'input-row');

  newRow.innerHTML = `
    <input type="text" class="semester-name" placeholder="Semester">
    <input type="number" class="sgpa-input" placeholder="SGPA" min="0" max="10" step="0.01">
  `;

  cgpaTable.appendChild(newRow);
});

document.getElementById('calculate-cgpa').addEventListener('click', function () {
  const rows = document.querySelectorAll('#cgpa-table .input-row');
  let totalSGPA = 0;
  let semestersCount = 0;

  rows.forEach(row => {
    const sgpa = parseFloat(row.querySelector('.sgpa-input').value);

    if (!isNaN(sgpa)) {
      totalSGPA += sgpa;
      semestersCount++;
    }
  });

  const cgpa = semestersCount > 0 ? (totalSGPA / semestersCount).toFixed(2) : "0.00";
  document.getElementById('cgpa').textContent = cgpa;
});

document.getElementById('clear-cgpa').addEventListener('click', function () {
  document.getElementById('cgpa').textContent = "0.00";
});
