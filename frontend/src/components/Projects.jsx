import React from 'react';
import './Projects.css';
import { Icon } from '@iconify/react';
import ViRouteImage from '../assets/ViRoute.png';
import ResortImage from '../assets/Resort.png';
import LibraryImage from '../assets/Library.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ViRoute',
      description: 'ViRoute is a web app for easy bus bookings with real-time tracking. Users can book, pay, and track their rides, while operators manage routes and schedules on a single platform.',
      links: [
        { type: 'github', url: 'https://github.com/khoidm2004/ViRoute' },
        { type: 'live', url: 'https://vi-route.vercel.app/' },
        { type: 'youtube', url: 'https://youtu.be/Q_sEGSpoNRE?si=pSkYzuCCGKoKMnyL' }
      ],
      image: ViRouteImage
    },
    {
      id: 2,
      title: 'Resort IoT Project',
      description: 'IoT solution for resort management with smart room controls and energy monitoring.',
      links: [
        { type: 'github', url: 'https://github.com/khoidm2004/Resort_IoT_Project' },
        { type: 'live', url: 'https://resort-iot-project.vercel.app/login' },
        { type: 'figma', url: 'https://www.figma.com/design/Jd5zvprsVbrSXdVRGf48pF/IoT-Project?node-id=0-1&t=tsa7qXAyl8pElwBB-1' },
      ],
      image: ResortImage
    },
    {
      id: 3,
      title: 'Diotp Humidity',
      description: 'This project demonstrates an IoT pipeline where an embedded device (Rasberry Pi Pico W) collects data and transmit it to a cloud platform.',
      links: [
        { type: 'github', url: 'https://github.com/nhingnguyen/diotp-humidity' },
        { type: 'youtube', url: 'https://youtu.be/4S8vpAUcOuk' },
      ],
      image: 'https://i.imgur.com/IwohHyL.png'
    },
    {
      id: 4,
      title: 'GUI-Library Management',
      description: 'A modern desktop application for library management built with Python and Tkinter, featuring SQLite database integration.',
      links: [
        { type: 'github', url: 'https://github.com/nhingnguyen/Library-management' },
        { type: 'youtube', url: 'https://youtu.be/Frrb9DUkTy8' },
      ],
      image: LibraryImage
    },
  ];

  const iconMap = {
    github: { icon: 'mdi:github', color: '#a18af8' },
    live: { icon: 'mdi:web', color: '#a18af8' },
    youtube: { icon: 'mdi:youtube', color: '#a18af8' },
    figma: { icon: 'solar:figma-linear', color: '#a18af8' },
  };

  const titleMap = {
    github: 'View on GitHub',
    live: 'View Live Demo',
    youtube: 'Watch on YouTube',
    figma: 'View Figma Design',
  };

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.links.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  aria-label={link.type}
                  title={titleMap[link.type]}
                  style={{
                    '--link-color': iconMap[link.type].color,
                    '--link-hover-shadow': `${iconMap[link.type].color}33`
                  }}
                >
                  <Icon icon={iconMap[link.type].icon} width="24" height="24" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;