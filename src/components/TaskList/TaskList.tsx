import styles from './taskList.module.scss'
import { Todo } from '../../@types/todo.type'

interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleDoneTodo, startEditTodo } = props

  const onChangeCheckbox = (idTodo: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(idTodo, e.target.checked)
  }
  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Hoan thanh' : 'Chua hoan thanh'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.task} key={todo.id}>
            <input
              type='checkbox'
              className={styles.taskCheckbox}
              checked={todo.done}
              onChange={onChangeCheckbox(todo.id)}
            />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
            <div className={styles.taskAction}>
              <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>
                🖋️
              </button>
              <button className={styles.taskBtn}>♻️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
