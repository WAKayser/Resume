<template>
  <Layout>
  	<div class="mb-5"/>
    <header class="header mb-5">
      <h3>Summaries and Various Projects</h3>
    </header>
    <section class="posts">
 		<PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>


<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "A simple blog"
  }
};
</script>

<page-query>
	query {
		allPost {
			totalCount 
			edges {
				node {
					id
					title
					date
					path
			}
		}
	}
}
</page-query>
