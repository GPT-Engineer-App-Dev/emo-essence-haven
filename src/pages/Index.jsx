import { Music, Scissors, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-8 px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Embrace the Emo Culture</h1>
        <p className="text-xl md:text-2xl text-gray-400">Explore the world of emotion, music, and self-expression</p>
      </header>

      <main className="container mx-auto px-4 md:px-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">What is Emo?</h2>
          <p className="text-lg text-gray-300 mb-4">
            Emo, short for "emotional hardcore," is a subculture that emerged from the punk rock scene in the 1980s. 
            It's characterized by expressive, often confessional lyrics, distinctive fashion, and a strong emphasis on emotional experiences.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Learn More
          </Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <Music className="h-8 w-8 mb-2" />
              <CardTitle>Music</CardTitle>
              <CardDescription className="text-gray-400">The heart of emo culture</CardDescription>
            </CardHeader>
            <CardContent>
              Explore emotional lyrics, powerful melodies, and raw energy in emo music.
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <Scissors className="h-8 w-8 mb-2" />
              <CardTitle>Fashion</CardTitle>
              <CardDescription className="text-gray-400">Express yourself</CardDescription>
            </CardHeader>
            <CardContent>
              Discover the iconic emo style, from band tees to studded accessories.
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <Heart className="h-8 w-8 mb-2" />
              <CardTitle>Emotions</CardTitle>
              <CardDescription className="text-gray-400">Feel deeply</CardDescription>
            </CardHeader>
            <CardContent>
              Embrace and express your emotions through art, music, and community.
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <Users className="h-8 w-8 mb-2" />
              <CardTitle>Community</CardTitle>
              <CardDescription className="text-gray-400">Find your people</CardDescription>
            </CardHeader>
            <CardContent>
              Connect with like-minded individuals who share your passion for emo culture.
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Join the Movement</h2>
          <p className="text-lg text-gray-300 mb-4">
            Whether you're new to emo culture or a long-time fan, there's always more to explore and experience. 
            Join our community and dive deeper into the world of emo.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200">Sign Up Now</Button>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-8 text-center text-gray-400">
        <p>&copy; 2023 Emo Culture Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
