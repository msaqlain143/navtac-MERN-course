import React, { useState } from 'react';

interface SidebarItem {
    label: string;
    onClick?: () => void;
}

const Sidebar = () => {
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');
    const [projects, setProjects] = useState([
        { value: 'project1', label: 'Project 1' },
        { value: 'project2', label: 'Project 2' },
        { value: 'project3', label: 'Project 3' },
    ]);
    const [selectedProject, setSelectedProject] = useState<string | undefined>();
    const [projectOptions, setProjectOptions] = useState<SidebarItem[]>([
        { label: 'Issues' },
        { label: 'Pages' },
        { label: 'Views' },
        { label: 'Modules' },
        { label: 'Settings' },
    ]);

    const sidebarItems: SidebarItem[] = [
        { label: 'Dashboard' },
        { label: 'Analytics' },
        { label: 'Projects' },
        { label: 'All Issues' },
        { label: 'Notifications' },
    ];

    const handleAddProject = () => {
        if (newProjectName.trim()) {
            const newProjectValue = newProjectName.toLowerCase().replace(/\s/g, '-');
            setProjects([...projects, { value: newProjectValue, label: newProjectName }]);
            setNewProjectName('');
            setIsAddProjectModalOpen(false);
            setSelectedProject(newProjectValue);
        }
    };

    const handleProjectSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProject(event.target.value);
    };

    return (
        <div style={{ width: '256px', backgroundColor: 'white', borderRight: '1px solid #e5e7eb', height: '100vh' }}>
            <div style={{ padding: '24px 0' }}>
                {sidebarItems.map((item) => (
                    <div
                        key={item.label}
                        style={{ padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
                        className="hover:bg-gray-100"
                        onClick={item.onClick}
                    >
                        {item.label}
                    </div>
                ))}
            </div>

            <div style={{ padding: '16px 0', borderTop: '1px solid #e5e7eb' }}>
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setIsProjectOpen(!isProjectOpen)}
                >
                    <span className="font-semibold">Project</span>
                    <span className={`transition-transform ${isProjectOpen ? 'rotate-180' : 'rotate-0'}`}>{isProjectOpen ? '▲' : '▼'}</span>
                </div>
                {isProjectOpen && (
                    <div style={{ marginTop: '16px', gap: '16px' }} className="space-y-4">
                        <select
                            value={selectedProject}
                            onChange={handleProjectSelect}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select a project</option>
                            {projects.map((project) => (
                                <option key={project.value} value={project.value}>
                                    {project.label}
                                </option>
                            ))}
                        </select>
                        {selectedProject && (
                            <div style={{ marginTop: '16px', gap: '8px' }} className="space-y-2">
                                {projectOptions.map((option) => (
                                    <div
                                        key={option.label}
                                        style={{ padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
                                        className="hover:bg-gray-100"
                                        onClick={option.onClick}
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}
                        <button
                            className="w-full bg-transparent border border-gray-300 rounded-md py-2 flex items-center gap-2"
                            onClick={() => setIsAddProjectModalOpen(true)}
                        >
                            <span>+</span>
                            Add Project
                        </button>
                    </div>
                )}
            </div>

            {/* Add Project Modal */}
            {isAddProjectModalOpen && (
                <div style={{ position: 'fixed', inset: '0', backgroundColor: 'rgba(0,0,0,0.5)' }} className="flex items-center justify-center">
                    <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white' }} className="p-6 rounded-md space-y-4">
                        <h2 className="text-lg font-semibold">Add New Project</h2>
                        <input
                            placeholder="Project Name"
                            value={newProjectName}
                            onChange={(e) => setNewProjectName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => {
                                    setIsAddProjectModalOpen(false);
                                    setNewProjectName('');
                                }}
                                style={{ backgroundColor: 'transparent', borderRadius: '8px', padding: '8px 16px' }}
                                className="hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddProject}
                                disabled={!newProjectName.trim()}
                                style={{ backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px', padding: '8px 24px' }}
                                className="disabled:opacity-50"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
