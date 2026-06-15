import React from 'react';
import { ExternalLink } from 'lucide-react';
import GithubIcon from '../GithubIcon'; // assume we have this file or reuse existing component

function ProjectCard({ title, subtitle, description, techPills, demoLink, sourceLink }) {
  return (
    <section className="card p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3">
          {/* you can replace with an appropriate icon per project */}
          <ExternalLink className="text-indigo-500" size={16} />
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-sm text-slate-300 mb-4">{subtitle}</p>
        <p className="text-sm text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techPills.map((pill, idx) => (
            <span key={idx} className={`pill ${pill.color}`}> {pill.label} </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-3 mt-auto">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-xs font-medium">
            <ExternalLink size={14} /> View Live Demo
          </a>
        )}
        {sourceLink && (
          <a href={sourceLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-xs font-medium">
            <GithubIcon size={14} /> Source Code
          </a>
        )}
      </div>
    </section>
  );
}

export default ProjectCard;
