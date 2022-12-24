class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = new Date().toLocaleDateString();
    this.text = todoText;
  }
}

export default Todo;

// 타입스크립트에서는 위의 id, text 처럼 클래스 안에 타입을 꼭 지정해줘야 한다.
