<script>
	import TodoItem from '$lib/todo-item.svelte';
	let title = 'TODOS | New';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div class="todos">
	<h1>{title}</h1>

	<form action="/todos.json" method="post" class="new">
		<input type="text" name="text" area-label="Add a todo" placeholder="+ Tap to add todo" />
	</form>
	<TodoItem />
	<TodoItem />
	<TodoItem />
</div>

<style>
	.todos {

		width: 100%;
		max-width: 42rem;
		margin: 4rem auto 0 auto;
	}
	.new {
		margin: 0 0 0.5rem 0;
	}
	.new input {
		font-size: 28px;
		width: 100%;
		padding: 0.5rem 1em 0.3em 1em;
		opacity: 0.7;
		box-sizing: border-box;
		background: black;
		border-radius: 8px;
		text-align: center;
	}
	.todos :global(input) {
		border: 1px solid transparent;
	}
	.todos :global(input:focus-visible) {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 5px solid rgb(111, 0, 255);
		outline: none;
	}
</style>
