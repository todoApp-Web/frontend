<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  newTodo: String,
  todos: Array,
  addTodo: Function,
});
const emit = defineEmits(["update:newTodo", "update:todos"]);
</script>
  
  <style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

    <template>
  <div class="container">
    <h1>Todo List</h1>
    <div>
      <input
        id="text-input"
        type="text"
        placeholder="Enter Todo"
        :value="newTodo"
        @input="$emit('update:newTodo', $event.target.value)"
      />
      <button type="button" id="add-button" @click="addTodo">Add</button>
    </div>
    <div>
      <ul id="list">
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </div>
</template>