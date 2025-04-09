"use client";
import { useState } from "react";
import {
  Book,
  Server,
  Network,
  Clock,
  Users,
  Shield,
  Brain,
  Database,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DistributedAlgorithmsBlog() {
  const [activeSection, setActiveSection] = useState("intro");

  // Navigation sections
  const sections = [
    { id: "intro", name: "Introduction", icon: Book },
    { id: "models", name: "Models", icon: Server },
    { id: "problems", name: "Fundamental Problems", icon: Brain },
    { id: "applications", name: "Applications", icon: Network },
  ];

  // Content for quick navigation
  const problemsSubsections = [
    { id: "leader", name: "Leader Election", icon: Users },
    { id: "consensus", name: "Consensus", icon: Users },
    { id: "mutex", name: "Mutual Exclusion", icon: Shield },
    { id: "clock", name: "Clock Synchronization", icon: Clock },
  ];

  // Define content sections
  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="mb-4 text-gray-700">
              In today's hyper-connected digital landscape, computing no longer
              happens in isolation. From global data centers to peer-to-peer
              networks and IoT ecosystems, systems are increasingly distributed.
              In these environments, multiple computers (or nodes) work together
              to solve problems, often without centralized control.
            </p>
            <p className="mb-4 text-gray-700">
              What makes distributed algorithms unique—and challenging—is that
              they must operate under constraints like partial information,
              unreliable communication, latency, and the possibility of node
              failures. Unlike centralized algorithms, where a single entity has
              access to the complete system state, nodes in distributed systems
              typically have limited, local views of the system.
            </p>
          </>
        );
      case "models":
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Models of Distributed Computing
            </h2>
            <p className="mb-4 text-gray-700">
              Before diving into specific algorithms, it's essential to
              understand the computational models that form the foundation of
              distributed systems.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2 text-gray-900">
                  <Server className="w-5 h-5 text-blue-600" />
                  Message Passing
                </h3>
                <p className="text-sm text-gray-700">
                  Nodes communicate by sending and receiving messages over a
                  network, mirroring real-world systems like cloud servers and
                  microservices.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2 text-gray-900">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Sync vs Async
                </h3>
                <p className="text-sm text-gray-700">
                  Systems may operate with global clocks, bounded timing
                  guarantees, or completely unpredictable execution speeds.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2 text-gray-900">
                  <Network className="w-5 h-5 text-blue-600" />
                  Network Topology
                </h3>
                <p className="text-sm text-gray-700">
                  The structure of connections between nodes impacts algorithm
                  design - from fully connected networks to rings, trees, and
                  arbitrary graphs.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center gap-2 text-gray-900">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Failure Models
                </h3>
                <p className="text-sm text-gray-700">
                  Systems must handle crash faults, omission faults, or even
                  Byzantine faults where nodes behave arbitrarily or
                  maliciously.
                </p>
              </div>
            </div>
          </>
        );
      case "problems":
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Fundamental Problems
            </h2>
            <p className="mb-4 text-gray-700">
              Several core problems appear repeatedly in distributed computing,
              each with its own challenges and solutions:
            </p>

            <ul className="list-disc pl-5 mb-6 text-gray-700">
              <li className="mb-2">
                <strong className="text-gray-900">Leader Election:</strong>{" "}
                Designating a single process to coordinate actions or make
                decisions.
              </li>
              <li className="mb-2">
                <strong className="text-gray-900">Consensus:</strong> Ensuring
                all non-faulty processes agree on a single value.
              </li>
              <li className="mb-2">
                <strong className="text-gray-900">Mutual Exclusion:</strong>{" "}
                Guaranteeing that only one process accesses a shared resource at
                a time.
              </li>
              <li className="mb-2">
                <strong className="text-gray-900">
                  Clock Synchronization:
                </strong>{" "}
                Establishing a common notion of time across distributed
                processes.
              </li>
              <li className="mb-2">
                <strong className="text-gray-900">
                  Spanning Tree Construction:
                </strong>{" "}
                Connecting all nodes efficiently without creating cycles.
              </li>
              <li className="mb-2">
                <strong className="text-gray-900">
                  Broadcasting and Gossiping:
                </strong>{" "}
                Distributing information through the network efficiently.
              </li>
            </ul>

            <p className="text-gray-700 italic mb-4">
              "The FLP impossibility result shows that deterministic consensus
              is impossible in a fully asynchronous system with even a single
              faulty process."
            </p>
          </>
        );
      case "applications":
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="mb-4 text-gray-700">
              Distributed algorithms aren't just theoretical—they form the
              invisible backbone of the systems we use every day:
            </p>

            <div className="grid md:grid-cols-3 gap-3 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900">
                  Cloud Infrastructure
                </h4>
                <p className="text-xs text-gray-700 mt-2">
                  AWS, Azure, GCP rely on distributed algorithms for resource
                  management
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Network className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900">Blockchain</h4>
                <p className="text-xs text-gray-700 mt-2">
                  Consensus protocols enable decentralized trust
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900">
                  Distributed Databases
                </h4>
                <p className="text-xs text-gray-700 mt-2">
                  Systems like Cassandra use gossip protocols and eventual
                  consistency
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              From microservices orchestration with Kubernetes to real-time
              collaborative editing in Google Docs, distributed algorithms solve
              complex coordination problems in the systems we rely on daily.
            </p>

            <p className="text-gray-700 italic">
              "Distributed computing is a study of collaboration under
              uncertainty. It asks: How can independent agents—each with limited
              information and no global control—work together to solve complex
              problems reliably?"
            </p>
          </>
        );
      default:
        return <p>Select a section to view content</p>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold">
              Distributed Systems
            </h1>
            <div className="hidden md:flex space-x-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-md transition-colors ${
                    activeSection === section.id
                      ? "bg-white/20"
                      : "hover:bg-white/10"
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.name}</span>
                </button>
              ))}
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-2">
            Models of Distributed Algorithms
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Understanding the foundations and challenges of computing across
            networks
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4 md:px-8 grid md:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-3 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-3 text-gray-800">
              Quick Navigation
            </h3>
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-2 p-2 rounded-md text-left ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <section.icon className="w-4 h-4" />
                    <span>{section.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-3 text-gray-800">
              Key Problems
            </h3>
            <ul className="space-y-1">
              {problemsSubsections.map((subsection) => (
                <li key={subsection.id}>
                  <button
                    onClick={() => setActiveSection("problems")}
                    className="w-full flex items-center space-x-2 p-2 rounded-md text-left hover:bg-gray-50 text-gray-700"
                  >
                    <subsection.icon className="w-4 h-4" />
                    <span>{subsection.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-9">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <AlertTitle className="text-blue-800">
                Why This Matters
              </AlertTitle>
              <AlertDescription className="text-blue-700">
                Distributed algorithms power everything from cloud
                infrastructure to blockchain networks, making them essential
                knowledge for modern systems design.
              </AlertDescription>
            </Alert>

            <div className="prose max-w-none text-gray-800">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4 md:px-8 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 Distributed Systems Blog</p>
          <p className="text-gray-400 mt-2">
            Built with Next.js, Tailwind CSS and shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}
