"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Terminal,
  Shield,
  Code,
  Lock,
  Eye,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = ["Cybersecurity Student", "Ethical Hacker", "Security Researcher", "Digital Guardian"]

  useEffect(() => {
    const text = texts[currentTextIndex]
    let index = 0
    const timer = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index))
        index++
      } else {
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setTypedText("")
        }, 2000)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [currentTextIndex])

  const projects = [
    {
      title: "SecureVault",
      description: "Application de chiffrement de fichiers avec authentification multi-facteurs",
      tags: ["Python", "Cryptography", "Flask", "SQLite"],
      status: "Completed",
      link: "#",
    },
    {
      title: "NetworkScanner",
      description: "Outil de scan réseau pour détecter les vulnérabilités et ports ouverts",
      tags: ["Python", "Nmap", "Scapy", "Threading"],
      status: "In Progress",
      link: "#",
    },
    {
      title: "PhishGuard",
      description: "Extension navigateur pour détecter les tentatives de phishing",
      tags: ["JavaScript", "Chrome API", "Machine Learning", "TensorFlow"],
      status: "Completed",
      link: "#",
    },
    {
      title: "LogAnalyzer",
      description: "Système d'analyse de logs pour détecter les intrusions",
      tags: ["Python", "ELK Stack", "RegEx", "Docker"],
      status: "Planning",
      link: "#",
    },
  ]

  const skills = {
    languages: ["Python", "JavaScript", "C/C++", "Bash", "PowerShell", "SQL"],
    tools: ["Wireshark", "Metasploit", "Burp Suite", "Nmap", "John the Ripper", "Hashcat"],
    domains: ["Penetration Testing", "Network Security", "Web Security", "Malware Analysis", "Forensics", "OSINT"],
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-x-hidden">
      {/* Custom cursor effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div
          className="absolute w-4 h-4 bg-green-400 rounded-full opacity-20 animate-pulse"
          style={{
            left: "var(--mouse-x, 0px)",
            top: "var(--mouse-y, 0px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-400/20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-green-400">
              <span className="text-cyan-400">0x</span>Badie
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "projects", "skills", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${
                    activeSection === section ? "text-cyan-400" : ""
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-green-400/20">
            <div className="px-4 py-2 space-y-2">
              {["home", "projects", "skills", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-cyan-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-cyan-900/10" />
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-cyan-400">0x</span>
              <span className="text-green-400">Badie</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl h-12 flex items-center justify-center">
              <Terminal className="mr-2" />
              <span className="text-gray-300">~/$ </span>
              <span className="text-green-400 ml-2">{typedText}</span>
              <span className="animate-pulse text-cyan-400">|</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionné par la <span className="text-cyan-400">cybersécurité</span> et le
            <span className="text-green-400"> développement sécurisé</span>. Je protège le monde numérique, un code à la
            fois.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-green-600 hover:bg-green-700 text-black font-semibold px-8 py-3 rounded-none border border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all"
            >
              <Code className="mr-2 h-4 w-4" />
              Voir mes projets
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-none hover:shadow-lg hover:shadow-cyan-400/20 transition-all"
            >
              <Mail className="mr-2 h-4 w-4" />
              Me contacter
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-green-400" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-cyan-400">&lt;</span>
            Projets
            <span className="text-cyan-400">/&gt;</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-green-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-green-400 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant={
                        project.status === "Completed"
                          ? "default"
                          : project.status === "In Progress"
                            ? "secondary"
                            : "outline"
                      }
                      className={
                        project.status === "Completed"
                          ? "bg-green-600 text-black"
                          : project.status === "In Progress"
                            ? "bg-yellow-600 text-black"
                            : "border-gray-400 text-gray-400"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="border-green-400/30 text-green-400 hover:bg-green-400/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-cyan-400 hover:text-black hover:bg-cyan-400 p-0 h-auto"
                    asChild
                  >
                    <Link href={project.link}>
                      Voir le projet <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-cyan-400">{"{"}</span>
            Compétences
            <span className="text-cyan-400">{"}"}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-green-400/20">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Code className="mr-2" />
                  Langages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang, index) => (
                    <Badge key={index} className="bg-green-600/20 text-green-400 border-green-400/30">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-400/20">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center">
                  <Shield className="mr-2" />
                  Outils
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <Badge key={index} className="bg-cyan-600/20 text-cyan-400 border-cyan-400/30">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-400/20">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center">
                  <Lock className="mr-2" />
                  Domaines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.domains.map((domain, index) => (
                    <Badge key={index} className="bg-yellow-600/20 text-yellow-400 border-yellow-400/30">
                      {domain}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-cyan-400">/*</span>À propos
            <span className="text-cyan-400">*/</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full flex items-center justify-center border border-green-400/30">
                <Eye className="h-24 w-24 text-green-400" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-400">Salut, je suis Badie 👋</h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Étudiant passionné en <span className="text-cyan-400">cybersécurité</span>, je me spécialise dans la
                  protection des systèmes d'information et l'analyse des vulnérabilités.
                </p>

                <p>
                  Mon parcours m'a mené à explorer différents domaines : du
                  <span className="text-green-400"> pentesting</span> à l'analyse de malwares, en passant par la{" "}
                  <span className="text-cyan-400">forensique numérique</span>.
                </p>

                <p>
                  Ma vision ? Créer un monde numérique plus sûr en combinant
                  <span className="text-green-400"> expertise technique</span> et
                  <span className="text-cyan-400"> éthique professionnelle</span>.
                </p>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-cyan-400">$</span>
            Contact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-6">Restons connectés</h3>

              <div className="space-y-4">
                <p className="text-gray-300">
                  Intéressé par une collaboration ou simplement envie de discuter cybersécurité ? N'hésitez pas à me
                  contacter !
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">badie@0xbadie.dev</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">github.com/0xbadie</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">linkedin.com/in/0xbadie</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-900/50 border-green-400/20">
              <CardHeader>
                <CardTitle className="text-green-400">Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Votre nom"
                    className="bg-black/50 border-green-400/30 text-green-400 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="bg-black/50 border-green-400/30 text-green-400 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Votre message"
                    rows={4}
                    className="bg-black/50 border-green-400/30 text-green-400 placeholder:text-gray-500"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-black font-semibold">
                  <Terminal className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-400/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 <span className="text-cyan-400">0x</span>
            <span className="text-green-400">Badie</span>. Tous droits réservés. | Fait avec ❤️ et beaucoup de ☕
          </p>
        </div>
      </footer>
    </div>
  )
}
