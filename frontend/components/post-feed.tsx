import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Share2 } from "lucide-react"

export function PostFeed() {
  const posts = [
    {
      id: 1,
      author: "Jane Doe",
      avatar: "/placeholder-user.jpg",
      content: "Just got promoted at my new job! So grateful for the skills I learned at our alma mater.",
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      author: "John Smith",
      avatar: "/placeholder-user.jpg",
      content: "Organizing an alumni meetup next month. Who's interested?",
      likes: 18,
      comments: 12,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <Textarea placeholder="What's on your mind?" />
        </CardHeader>
        <CardFooter>
          <Button>Post</Button>
        </CardFooter>
      </Card>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="flex flex-row items-center space-x-4">
            <Avatar>
              <AvatarImage src={post.avatar} alt={post.author} />
              <AvatarFallback>{post.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{post.author}</h3>
              <p className="text-sm text-muted-foreground">2 hours ago</p>
            </div>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              <Heart className="mr-2 h-4 w-4" />
              {post.likes} Likes
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              {post.comments} Comments
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}