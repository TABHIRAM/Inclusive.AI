import LoginForm from "@/components/LoginForm";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: 'black', color: 'white' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: '' }}>
      
        <Link href="/" passHref>
        <span style={{ color: 'white', textDecoration: 'none', display: 'flex' }} className="font-heading"><Sparkles className="h-9 w-8" />&nbsp;Inclusive.AI</span>
        </Link>
      </div>
      <div>
        <Link href="/dashboard">
          <span style={{ backgroundColor: 'white', color: 'black', padding: '0.5rem 1rem', borderRadius: '0.25rem', textDecoration: 'none', transition: 'background-color 0.3s' }}>
            Dashboard
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
<Navbar />
<main style={{ flex: '1' }}>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Badge>This project is developed for participation in the Gemini API Developer Competition 2024 
        <Link href="https://ai.google.dev/competition"  target="_blank" passHref>
          <span>
          &#x2197;
          </span>
        </Link>
        </Badge>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to<b> Inclusive.AI</b>!
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Simplify Event planning with Google Gemini
          </p>
          <div className="space-x-4">
          <LoginForm />
          <div>
      
    </div>
            
          </div>
          Transform stress into celebration🎉
        </div>
      </section>
      </main>

      <footer style={{ backgroundColor: 'black', color: 'white', padding: '1rem 2rem', textAlign: 'center' }}>
        <p style={{ margin: 0 }}><code>Developed by: Abhiram Thimmaraju</code> </p>
        <p style={{ margin: 0 }}><code>Contact: <a href="mailto:abhiramthimmaraju@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>Email</a> <a href="https://www.linkedin.com/in/abhiramthimmaraju" target="_blank">Linkedin</a></code> </p>
      </footer>
    </div>
//     <div className="flex flex-col justify-center items-center m-4">
//       <h1 className="text-xl my-3">Welcome to<b> Inclusive.AI</b>!</h1>
// {/* <h2>
// Simplify event planning with Inclusive.AI Powered by Google Gemini - Transform stress into celebration.
// </h2> */}
// <h1 className="text-l"><b>Simplify</b> event planning with Inclusive.AI powered by <b>Google Gemini🪄</b></h1>
// <h4 className="text-l">Explore timelines, food choices & more! - Transform stress into celebration🎉</h4>
// {/* Benefit: Simplifies event planning
// Solution: Inclusive.AI
// Technology: Powered by Google Gemini
// Outcome: Transforms stress into celebration */}
//       <LoginForm />
//     </div>
  );
}