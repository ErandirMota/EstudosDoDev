const delay = (time) => new Promise((resolve) => setTimeout(resolve, time))

const studentsDatabase = (() => {
  let idSequence = 1;
  const students = [];
  const insert = async (aluno) => {
    await delay(400);
    const id = idSequence++;
    const data = { ...aluno, id};
    alunos[id] = data;
    return data;
  };

  const list = async () => {
    await delay(100);
    return Object.values(students);
  };

  const get = async (id) => {
    await delay(200);
    return students[id];
  };

  const update = async (student, id) => {
    await delay(400);
    students[id] = { ...student, id};
    return student;
  };

  const del = async (id) => {
    await delay(500);
    delete alunos[id];
  };

  return {
    insert,
    list,
    get,
    update,
    del,
  }

})

module.exports = {
  studentsDatabase
}

// GET
app.get("/students", (req, res) => {
  res.status(200).send(students)
})

// GET by ID
app.get("/students/:id", (req, res) => {
  const student = students.find((x) => x.id == req.params.id)
  res.status(200).send(student)
})

// POST
app.post("/students", (req, res) => {
  students.push(req.body)
  res.status(200).send("registered student")
})

// PUT
app.put("/students/:id", (req, res) => {
  const student = student.find((x) => x.id == req.params.id)
  const studentId = students.indexOf(student)
  students[studentId] = req.body
  res.status(200).send("student successfully updated")
})

// DELETE
app.delete("/students/:id", (req, res) => {
  const student = student.find((x) => x == req.params.id)
  const studentId = students.indexOf(student)
  students.splice(studentId, 1)
  res.status(200).send("student successfully excluded")
})


