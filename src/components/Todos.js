import React from 'react';

const TodoItem=({todo,onToggle,onRemove})=>{
    return(
        <div>
            <input 
            type="checkBox"
            onClick={()=>onToggle(todo.id)}
            checked={todo.done}
            readOnly={true}
            />
            <span style={{textDecoration: todo.done ?'line-through':'none' }}>
                {todo.text}
                </span>
            <button onClick={()=>onRemove(todo.id)}>삭제</button>
        </div>
    );
};

const Todos=({
    input, //인풋에 입력되는 텍스트
    todos, //할 일 목로이 들어있는 객체
    onChnageInput,
    onInsert,
    onToggle,
    onRemove,
})=>{
    const onSubmit=e=>{
        e.preventDefault();
        onInsert(input);
        onChnageInput(''); // 등록 후 인풋 초기화
    };
     const onChange=e=> onChnageInput(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo =>(
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                        />
                ))}
            </div>
        </div>
    );
};

export default Todos;