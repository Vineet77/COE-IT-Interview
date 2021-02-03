import React, {useState, useEffect} from "react";

function PublicationsForm() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(2020);
    const [student, setStudent] = useState({});
    const [studentOptions, setStudentOptions] = useState([])

    async function getStudentOptions() {
        console.log("Fetching Students")
        const response = await fetch("/user/");
        const data = await response.json();
        setStudentOptions(data);
    }

    useEffect(() => {
        getStudentOptions();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(student)
        const data = {title, year, student: student.id}
        console.log("Posting new publication");
        console.log(data);
        const response = await fetch('/publication/', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        });
        if (response.status === 400) {
            const body = await response.json();
            console.error(body);
        } else if (response.status === 200) {
            console.log("Successfully posted");
        }
    }

    function handleStudentSelect(event) {
        console.log(event.target.value);
        console.log(studentOptions);
        const s = studentOptions.find(v => v.id == event.target.value);
        console.log(s)
        setStudent(s);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Add Publications Form</p>
            <label htmlFor="title">Title of Publication</label>
            <input
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <label htmlFor="title">Year of Publication</label>
            <input
                id="year"
                type="number"
                placeholder={0}
                value={year}
                onChange={(event) => setYear(event.target.value)}
            />
            <label htmlFor="student">Student: </label>
            <select id="student" onChange={handleStudentSelect}>
                <option value={null}></option>
                {studentOptions.map((s) => (
                    <option value={s.id}>{s.first_name} {s.last_name}</option>
                ))}
            </select>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default PublicationsForm