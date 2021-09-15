
const ToDoItem = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
                <input type="checkbox" defaultChecked={props.completed} />
                {props.task}
            </label>
        </div>
    );
}

export default ToDoItem;