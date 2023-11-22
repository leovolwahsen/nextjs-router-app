type TodoItemProps = {
    id: string
    titel: string
    compleate: Boolean
}

export default function TodoItem({ id, titel, compleate }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
        <input id={id} type="checkbox" className="cursor-pointer peer" />
        <label htmlFor={id} 
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
            {titel}
        </label>
    </li>
  )
}
