<script>
	import TodoItem from '$lib/todo-item.svelte';
</script>

<h1>TODOS</h1>
<div class="form-input">
	<form action="" method="">
		<input type="text" name="text" area-label="Add a todo" placeholder="+ Tap to add todo" />
	</form>
	<TodoItem />
	<TodoItem />
	<TodoItem />
</div>

<style>
	.form-input,
	h1 {
		display: flex;
		flex-direction: column;
		flex-wrap: column wrap;
		align-items: center;
	}
</style>
