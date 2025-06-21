import React, { useState, useEffect } from "react";
import "./App.css";

// Dark mode hook
function useDarkMode() {
  const [dark, setDark] = useState(() => {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);
  return [dark, setDark];
}

// Utility to load blog posts from a folder (e.g., /posts/*.md)
function useBlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace with your logic to fetch and parse markdown files
    const fetchPosts = async () => {
      const response = await import.meta.globEager("/posts/*.md");
      const posts = Object.values(response).map((mod) => mod.metadata);
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return posts;
}

// Inline component: About
function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am a passionate developer with experience in building dynamic web
        applications and 3D modeling.
      </p>
    </section>
  );
}

// Inline component: Skills
function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Three.js</li>
        <li>CSS</li>
      </ul>
    </section>
  );
}

// Inline component: Projects
function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Check out my projects on GitHub.</p>
    </section>
  );
}

// Inline component: Contact
function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Email: myemail@example.com</p>
    </section>
  );
}

// Inline component: Blog
function Blog({ posts }) {
  return (
    <section id="blog">
      <h2>Blog</h2>
      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.title}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

// Inline component: CADModel
function CADModel() {
  return (
    <section id="cad-model">
      <h2>3D Model</h2>
      <p>Here is a 3D model I created using Blender and Three.js.</p>
    </section>
  );
}

// Main App function
function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const posts = useBlogPosts();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header>
        <h1>My Portfolio</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
      <nav>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Blog posts={posts} />
      </nav>
      <main>
        <h2>Welcome to My Portfolio</h2>
        <p>
          This is a showcase of my work, including 3D models, web development
          projects, and blog posts.
        </p>
        <CADModel />
      </main>
      <footer>
        <p>© 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
