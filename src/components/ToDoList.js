import ToDoItem from './ToDoItem';
import items from './Data';


const ToDoList = () => {
    return (
        <div>
            <ToDoItem task={items[0].task} />
            {items.map(elt => <ToDoItem
                key={elt.id}
                completed={elt.completed}
                task={elt.task}
            />)}
        </div>
    );
}

export default ToDoList;