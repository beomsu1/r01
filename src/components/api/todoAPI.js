import axios from "axios"

export const getList = async() => {
    
    const res = await axios.get(`http://localhost:8080/api/todos/list`)

    return res.data
}

export const postTodo = async (todo) => {

    const res = await axios.post(`http://localhost:8080/api/todos/`, todo)

    return res.data
}