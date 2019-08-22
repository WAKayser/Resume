<template>
	<div class="post-list">
		<hr class="line" />
		<p class="date" v-html="post.date" />
    	<h4 class="title" v-html="post.title" />
    	<g-link :to="post.path" class="read">Read More...</g-link>
	</div>
</template>

<script>
	export default {
		props: ["post"],
	};
</script>

<!-- <section class="posts">
	<PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
</section> -->