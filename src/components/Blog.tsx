import { Badge } from "@/components/ui/badge"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  tags: string[]
  readTime: string
}

export function Blog() {
  const posts: BlogPost[] = [
    {
      title: "Building Scalable Web Applications",
      excerpt: "Learn about best practices for building scalable web applications using modern technologies...",
      date: "2024-03-20",
      tags: ["Web Development", "Architecture", "Performance"],
      readTime: "5 min read"
    },
    // Add more blog posts
  ]

  return (
    <section className="py-20 px-4 animate-fadeIn" id="blog">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="space-y-4 p-6 border rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="flex gap-2 items-center">
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
} 