import TodoItem from "./TodoItem";
function TodoItems({items}){
    return <>
            <div className="item-container">
                {items.map((item)=>  (
                    <TodoItem todoDate={item.todoDate} todoName={item.todoName}></TodoItem>
                ))}
            </div>
    </>
}
export default TodoItems;