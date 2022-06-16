<script setup>
import { getDatabase, ref, onValue, set, remove } from "firebase/database";

function insert() {
    const name = document.getElementById('name').value;
    const studentId = document.getElementById('studentId').value;
    const course = document.getElementById('course').value;

    if ([name, studentId, course].includes('')) {
        alert('One of the student info is null or empty');
        return;
    }

    set(ref(getDatabase(), 'student/' + studentId), {
        name: name,
        studentId: studentId,
        course: course
    });
}

function retrieveAll() {
    onValue(ref(getDatabase(), 'student'), (snapshot) => {
        const studentList = snapshot.val();
        console.log(studentList);
        addTableRow(studentList);
    });
}

function deleteById(studentId) {
    remove(ref(getDatabase(), `student/${studentId}`));
}

function updateById(id) {
    const name = document.getElementById(`${id}-name`).value;
    const studentId = document.getElementById(`${id}-studentId`).value;
    const course = document.getElementById(`${id}-course`).value;

    if ([name, studentId, course].includes('')) {
        alert('One of the student info is null or empty');
        return;
    }

    set(ref(getDatabase(), 'student/' + studentId), {
        name: name,
        studentId: studentId,
        course: course
    });

    deleteById(id);
}

// UI
function addTableRow(studentList) {
    // clean data
    const existingRow = document.querySelectorAll('.student-data');

    for (let i = 0, max = existingRow.length; i < max; i++) {
        const row = existingRow[i];
        row.remove();
    }

    // add data
    for (let key in studentList) {
        const student = studentList[key];

        const table = document.querySelector('#student-table > tbody');
        const row = document.createElement('tr');

        row.classList.add('student-data');

        const colName = document.createElement('td');
        const colStudentId = document.createElement('td');
        const colCourse = document.createElement('td');
        const colAction = document.createElement('td');

        // Column name, student id, course
        colName.textContent = student['name'];
        colStudentId.textContent = student['studentId'];
        colCourse.textContent = student['course'];

        // Column action (last column)
        const btnUpdate = document.createElement('button');
        const btnDelete = document.createElement('button');

        btnUpdate.addEventListener('click', () => allowModify(student['studentId']));
        btnDelete.addEventListener('click', () => deleteById(student['studentId']));

        const icoEdit = document.createElement('i');
        const icoTrash = document.createElement('i');

        icoEdit.classList.add('fa');
        icoEdit.classList.add('fa-pencil-square-o');

        icoTrash.classList.add('fa');
        icoTrash.classList.add('fa-trash-o');

        btnUpdate.appendChild(icoEdit);
        btnDelete.appendChild(icoTrash);

        colAction.appendChild(btnUpdate);
        colAction.appendChild(btnDelete);

        // Add all column to table row
        row.appendChild(colName);
        row.appendChild(colStudentId);
        row.appendChild(colCourse);
        row.appendChild(colAction);

        row.id = student['studentId'];

        // Add row to table body
        table.appendChild(row);
    }
}

function allowModify(studentId) {
    const row = document.getElementById(studentId);
    const name = document.querySelector(`#${studentId} > td:nth-child(1)`).textContent;
    const course = document.querySelector(`#${studentId} > td:nth-child(3)`).textContent;

    row.innerHTML = '';

    const colName = document.createElement('td');
    const colStudentId = document.createElement('td');
    const colCourse = document.createElement('td');
    const colAction = document.createElement('td');

    const tbName = document.createElement('input');
    tbName.setAttribute('type', 'text');
    tbName.setAttribute('id', `${studentId}-name`);
    tbName.setAttribute('placeholder', 'Student Name');
    tbName.setAttribute('value', name);

    const tbStudentId = document.createElement('input');
    tbStudentId.setAttribute('type', 'text');
    tbStudentId.setAttribute('id', `${studentId}-studentId`);
    tbStudentId.setAttribute('placeholder', 'Student ID');
    tbStudentId.setAttribute('value', studentId);

    const tbCourse = document.createElement('input');
    tbCourse.setAttribute('type', 'text');
    tbCourse.setAttribute('id', `${studentId}-course`);
    tbCourse.setAttribute('placeholder', 'Student Course');
    tbCourse.setAttribute('value', course);

    const btnUpdate = document.createElement('button');
    btnUpdate.addEventListener('click', () => updateById(studentId));
    btnUpdate.textContent = 'Update';

    colName.appendChild(tbName);
    colStudentId.appendChild(tbStudentId);
    colCourse.appendChild(tbCourse);
    colAction.appendChild(btnUpdate);

    row.append(colName);
    row.append(colStudentId);
    row.append(colCourse);
    row.append(colAction);
}

retrieveAll(); 
</script>

<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/foundation/5.5.0/css/foundation.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css" />
    <div class="row">
        <div class="large-12 columns">
            <h1>CRUD Table</h1>
            <table id="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Student ID</th>
                        <th>Course</th>
                        <th></th>
                    </tr>
                </thead>
                <tfoot></tfoot>
                <tbody>
                    <tr>
                        <td> <input type="text" id="name" placeholder="Student Name" /> </td>
                        <td> <input type="text" id="studentId" placeholder="Student ID" /> </td>
                        <td> <input type="text" id="course" placeholder="Student Course" /> </td>
                        <td><button class="" v-on:click="insert()">Submit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
table {
    width: 100%;
}
</style>