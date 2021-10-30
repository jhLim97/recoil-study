import { selector } from "recoil";

import todoListFilterState from "./todoListFilterState";
import todoListState from "./todoList";

// filteredTodoListState는 내부적으로 2개의 의존성 todoListFilterState와 todoListState을 추적한다.
// 그래서 둘 중 하나라도 변하면 filteredTodoListState는 재실행된다.
const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default filteredTodoListState;
