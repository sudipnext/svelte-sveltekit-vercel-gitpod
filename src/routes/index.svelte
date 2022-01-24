<script>
	import TodoItem from '$lib/todo-item.svelte';
    let title = "TODOS | New";
</script>
<svelte:head>
    <title>{title}</title>
</svelte:head>
<h1>{title}</h1>
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
