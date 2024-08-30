import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, MessageCircle, User } from "lucide-react"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4">
      <Link href="/" className="text-xl font-bold">AlumniConnect</Link>
      <Input className="w-64" placeholder="Search alumni..." />
      <div className="flex-1" />
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <MessageCircle className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
      </Button>
    </nav>
  )
}