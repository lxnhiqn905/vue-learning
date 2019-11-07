<template>
    <!-- w3-content defines a container for fixed size centered content, and is wrapped around the whole page content, except for the footer in this example -->
    <div class="w3-content" style="max-width:1400px">
        <!-- Grid -->
        <div class="w3-row">
            <!-- Blog entries -->
            <div class="w3-col l8 s12">
                <!-- Blog entry -->
                <BlogList />
            </div>
            
            <!-- Introduction menu -->
            <div class="w3-col l4">
                <!-- About Card -->
                <Author />
                <hr>
                <!-- TopPosts -->
                <TopPosts />
                <hr>
                <!-- Labels / tags -->
                <Tags />
            </div>
        <!-- END GRID -->
        </div><br>
    <!-- END w3-content -->
    </div>
</template>

<script>
import Author       from "@/components/Author.vue";
import TopPosts     from "@/components/TopPosts.vue";
import Tags         from "@/components/Tags.vue";

import BlogList     from "@/components/blog/List.vue";

export default {
    components: {
        Author,
        TopPosts,
        Tags,
        BlogList
    }
}
</script>