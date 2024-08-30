import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Users, Globe } from "lucide-react"

export default function ReleasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Alumni Network Project Release</h1>
          <p className="text-xl text-gray-600">Connecting graduates, fostering opportunities, and building lasting relationships.</p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
              <CardDescription>What our Alumni Network offers</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Professional networking opportunities</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Job board and career resources</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Alumni events and meetups</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Mentorship programs</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Contribute to Our Project</CardTitle>
            <CardDescription> We&apos;re looking for passionate individuals to help grow our alumni community</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Code className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-semibold">Developers</h3>
              <p className="text-sm text-gray-600">Help build and improve our platform</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-semibold">Community Managers</h3>
              <p className="text-sm text-gray-600">Engage and grow our alumni network</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="h-10 w-10 text-primary mb-2" />
              <h3 className="font-semibold">Content Creators</h3>
              <p className="text-sm text-gray-600">Produce valuable content for our community</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Contributing?</h2>
          <p className="text-gray-600 mb-6">Join us in building a thriving alumni community. Your skills and passion can make a difference!</p>
          <Button size="lg">
            Get Involved
          </Button>
        </div>
      </div>
    </div>
  )
}