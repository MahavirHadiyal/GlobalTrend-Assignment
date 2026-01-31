import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editingTask, setEditingTask] = useState(null) // for update
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editStatus, setEditStatus] = useState('Pending')

  const token = localStorage.getItem('token')

  // Fetch all tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/api/tasks', {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = await res.json()
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  // Add new task
  const handleAddTask = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, status: 'Pending' }),
    })
    setTitle('')
    setDescription('')
    fetchTasks()
  }

  // Prepare edit
  const handleEdit = (task) => {
    setEditingTask(task._id)
    setEditTitle(task.title)
    setEditDescription(task.description)
    setEditStatus(task.status)
  }

  // Update task
  const handleUpdateTask = async (e) => {
    e.preventDefault()
    await fetch(`http://localhost:5000/api/tasks/${editingTask}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: editTitle,
        description: editDescription,
        status: editStatus,
      }),
    })
    setEditingTask(null)
    setEditTitle('')
    setEditDescription('')
    setEditStatus('Pending')
    fetchTasks()
  }

  // Delete task
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
    fetchTasks()
  }

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Add Task Form */}
      {!editingTask && (
        <form
          onSubmit={handleAddTask}
          className="bg-white p-4 rounded shadow mb-6"
        >
          <input
            type="text"
            placeholder="Task Title"
            className="w-full p-2 border rounded mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Task Description"
            className="w-full p-2 border rounded mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add Task
          </button>
        </form>
      )}

      {/* Edit Task Form */}
      {editingTask && (
        <form
          onSubmit={handleUpdateTask}
          className="bg-yellow-100 p-4 rounded shadow mb-6"
        >
          <input
            type="text"
            placeholder="Task Title"
            className="w-full p-2 border rounded mb-2"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Task Description"
            className="w-full p-2 border rounded mb-2"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            required
          ></textarea>
          <select
            className="w-full p-2 border rounded mb-2"
            value={editStatus}
            onChange={(e) => setEditStatus(e.target.value)}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <div className="flex gap-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Update Task
            </button>
            <button
              type="button"
              onClick={() => setEditingTask(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Task List */}
      <div className="grid gap-4">
        {tasks.length === 0 && <p className="text-gray-500">No tasks yet</p>}

        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
              <p className="text-sm mt-1">
                Status: <span className="font-medium">{task.status}</span>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => handleEdit(task)}
                className="bg-yellow-400 px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="text-red-600 font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
