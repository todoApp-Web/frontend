<script setup>
import { ref } from "vue";
import Todo from "./components/Todo/Todo.vue";
import { getTodos, postTodos } from "./services/";

var apiUrl = "http://localhost:3000";

const newTodo = ref("");
const todos = ref([]);

async function getAllTodos() {
  try {
    const { data } = await getTodos(apiUrl);
    todos.value = data.data;
  } catch (error) {
    alert(error.message);
  }
}

async function addNewTodo() {
  if (newTodo.value.length > 0) {
    try {
      await postTodos(apiUrl, { text: newTodo.value });
      todos.value.push({ text: newTodo.value, completed: true });
      newTodo.value = "";
    } catch (error) {
      alert(error.message);
    }
  } else {
    alert("Todo cannot be empty");
  }
}

getAllTodos();
</script>     
  
  <template>
  <div>
    <Todo
      v-model:newTodo="newTodo"
      v-model:todos="todos"
      :addTodo="addNewTodo"
    />
  </div>
</template>