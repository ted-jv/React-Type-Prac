import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = props => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;

// 8. React.FC 만 하면 props.text 같은 거 하면 에러남

// -> but React.FC<> 제네릭 해주면 children이랑 그외의 것들을 합쳐줌 so 에러 사라짐 <{}> 안에 객체를 꼭 넣어줘야함

// => becasuse React 기본 함수는 children이랑 속성을 갖고 그외의 props를 추가하므로
