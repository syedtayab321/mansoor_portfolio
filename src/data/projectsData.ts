export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  year?: string;
  featured?: boolean;
  achievements?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Neon Nexus: Cyberpunk City",
    category: "Game Development",
    description: "A stunning cyberpunk open-world environment featuring real-time ray tracing, dynamic weather systems, and advanced NPC AI. Includes interactive elements, vehicle systems, and a complex quest structure built entirely in Unreal Engine 5.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800",
    techStack: ["Unreal Engine 5.3", "C++", "Blueprints", "Niagara VFX", "Lumen", "MetaHuman"],
    liveLink: "https://project-demo.com/neon-nexus",
    githubLink: "https://github.com/username/neon-nexus",
    year: "2024",
    featured: true,
    achievements: [
      "Featured on Unreal Engine Marketplace",
      "20K+ downloads",
      "Best Environment Design Award 2024"
    ]
  },
  {
    id: 2,
    title: "Lumina: Architectural Viz",
    category: "Real-time Rendering",
    description: "Revolutionary architectural visualization tool that enables real-time material changes, lighting scenarios, and interactive walkthroughs. Used by top architecture firms for client presentations and design reviews.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    techStack: ["Unreal Engine 5", "Datasmith", "Lumen", "Path Tracer", "VR", "Pixel Streaming"],
    liveLink: "https://project-demo.com/lumina",
    githubLink: "https://github.com/username/lumina",
    year: "2024",
    achievements: [
      "Used by 50+ architecture firms",
      "Featured in Architectural Digest",
      "Best Innovation Award 2024"
    ]
  },
  {
    id: 3,
    title: "MetaHuman Character System",
    category: "Character Animation",
    description: "Advanced character animation system with full-body IK, facial motion capture integration, dynamic cloth physics, and AI-driven emotional responses. Includes a comprehensive animation blueprint library.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyride.mp4",
    thumbnail: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800",
    techStack: ["Unreal Engine 5.2", "Control Rig", "Animation Blueprints", "MetaHuman", "Motion Capture", "Machine Learning"],
    liveLink: "https://project-demo.com/meta-character",
    githubLink: "https://github.com/username/meta-character",
    year: "2023",
    featured: true,
    achievements: [
      "10K+ community downloads",
      "Used in 3 AAA game projects",
      "Epic Games MegaGrant recipient"
    ]
  },
  {
    id: 4,
    title: "VR Museum: Time Traveler",
    category: "Virtual Reality",
    description: "Immersive VR museum experience allowing users to explore historical exhibits across different eras. Features multiplayer support for virtual tours, interactive exhibits, and educational content management system.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800",
    techStack: ["Unreal Engine", "OpenXR", "SteamVR", "Meta Quest", "Multiplayer", "WebRTC"],
    liveLink: "https://project-demo.com/vr-museum",
    githubLink: "https://github.com/username/vr-museum",
    year: "2024",
    achievements: [
      "Featured at VR Expo 2024",
      "Used by 5 major museums",
      "Best Educational VR Experience"
    ]
  },
  {
    id: 5,
    title: "Procedural World Generator",
    category: "Tools & Systems",
    description: "Powerful procedural world generation system that creates vast, detailed landscapes with biomes, rivers, and vegetation. Includes runtime generation and editor tools for level designers.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    techStack: ["Unreal Engine 5", "C++", "PCG Framework", "Landscape System", "Runtime Mesh Generation"],
    liveLink: "https://project-demo.com/procedural-world",
    githubLink: "https://github.com/username/procedural-world",
    year: "2024",
    featured: true,
    achievements: [
      "Top 10 Asset Store - November 2024",
      "5K+ active users",
      "Integration with major game studios"
    ]
  },
  {
    id: 6,
    title: "Particle Physics Simulator",
    category: "VFX & Simulation",
    description: "Real-time particle physics simulator using Niagara VFX system. Includes fluid dynamics, smoke simulation, explosion effects, and interactive particle manipulation tools.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    techStack: ["Unreal Engine 5.3", "Niagara", "C++", "GPU Compute", "Houdini Integration"],
    liveLink: "https://project-demo.com/particle-sim",
    githubLink: "https://github.com/username/particle-sim",
    year: "2024",
    achievements: [
      "VFX Award Nominee 2024",
      "Used in 50+ game trailers",
      "Featured in Unreal Engine Learning"
    ]
  }
];