import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task Name</label>
                <input 
                    type='text'
                    placeholder='add Task Name'
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input 
                    type='text' 
                    placeholder='add date & time' 
                    value={day}
                    onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox' 
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input className='btn btn-block' type='submit' value='Save Task'/>
        </form>
    )
}

export default AddTask
