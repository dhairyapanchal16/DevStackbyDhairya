// Document data array
const documents = [
    {
        title: "Ansible Playbooks Guide",
        category: "Ansible",
        filePath: "I:\DevOps Documents\Ansible_026e0d232b8949f497685d062a807fbb\Cheat_Sheets",
        description: "Learn how to create and manage Ansible playbooks for infrastructure automation."
    },
    {
        title: "Ansible Inventory Management",
        category: "Ansible",
        filePath: "docs/Ansible/inventory-management.pdf",
        description: "Master Ansible inventory configuration and dynamic inventory management."
    },
    {
        title: "AI Fundamentals",
        category: "Artificial_Intelligence_Fundamentals",
        filePath: "docs/Artificial_Intelligence_Fundamentals/ai-fundamentals.pdf",
        description: "Comprehensive introduction to Artificial Intelligence concepts and applications."
    },
    {
        title: "Machine Learning Basics",
        category: "Artificial_Intelligence_Fundamentals",
        filePath: "docs/Artificial_Intelligence_Fundamentals/ml-basics.pdf",
        description: "Introduction to Machine Learning algorithms, models, and practical implementations."
    },
    {
        title: "EC2 Guide",
        category: "AWS",
        filePath: "docs/AWS/ec2-guide.pdf",
        description: "Complete guide to Amazon EC2 instances, configuration, and best practices."
    },
    {
        title: "S3 Storage Guide",
        category: "AWS",
        filePath: "docs/AWS/s3-guide.pdf",
        description: "Learn Amazon S3 storage services, buckets, and object management."
    },
    {
        title: "Azure VM",
        category: "Azure",
        filePath: "docs/Azure/azure-vm.pdf",
        description: "Learn how to create, configure, and manage Virtual Machines on Microsoft Azure."
    },
    {
        title: "Azure Storage",
        category: "Azure",
        filePath: "docs/Azure/azure-storage.pdf",
        description: "Comprehensive guide to Azure storage services and data management."
    },
    {
        title: "Azure Pipelines",
        category: "Azure_DevOps",
        filePath: "docs/Azure_DevOps/azure-pipelines.pdf",
        description: "Build, test, and deploy applications using Azure Pipelines."
    },
    {
        title: "Azure Boards",
        category: "Azure_DevOps",
        filePath: "docs/Azure_DevOps/azure-boards.pdf",
        description: "Manage your work with Azure Boards for agile project management."
    },
    {
        title: "Git Basics",
        category: "Git",
        filePath: "docs/Git/git-basics.pdf",
        description: "Learn the fundamentals of Git version control system and basic commands."
    },
    {
        title: "Git Advanced",
        category: "Git",
        filePath: "docs/Git/git-advanced.pdf",
        description: "Master advanced Git techniques including branching, merging, and rebasing."
    },
    {
        title: "Kubernetes Fundamentals",
        category: "Kubernetes",
        filePath: "docs/Kubernetes/kubernetes-fundamentals.pdf",
        description: "Introduction to Kubernetes container orchestration platform."
    },
    {
        title: "Kubernetes Deployment",
        category: "Kubernetes",
        filePath: "docs/Kubernetes/kubernetes-deployment.pdf",
        description: "Learn how to deploy and manage applications on Kubernetes clusters."
    },
    {
        title: "Linux Basics",
        category: "Linux",
        filePath: "docs/Linux/linux-basics.pdf",
        description: "Learn the fundamentals of Linux operating system, commands, and file system structure."
    },
    {
        title: "File Permissions",
        category: "Linux",
        filePath: "docs/Linux/file-permissions.pdf",
        description: "Master Linux file permissions, ownership, and access control mechanisms."
    },
    {
        title: "Prompt Engineering Guide",
        category: "Prompt_Engineering",
        filePath: "docs/Prompt_Engineering/prompt-guide.pdf",
        description: "Master the art of prompt engineering for AI models and get better results."
    },
    {
        title: "Advanced Prompting",
        category: "Prompt_Engineering",
        filePath: "docs/Prompt_Engineering/advanced-prompting.pdf",
        description: "Advanced techniques for crafting effective prompts for AI interactions."
    },
    {
        title: "Bash Scripting",
        category: "Shell_Scripting",
        filePath: "docs/Shell_Scripting/bash-scripting.pdf",
        description: "Learn Bash shell scripting for automation and system administration."
    },
    {
        title: "PowerShell Scripting",
        category: "Shell_Scripting",
        filePath: "docs/Shell_Scripting/powershell-scripting.pdf",
        description: "Master PowerShell scripting for Windows automation and administration."
    },
    {
        title: "Terraform Basics",
        category: "Terraform",
        filePath: "docs/Terraform/terraform-basics.pdf",
        description: "Introduction to Terraform infrastructure as code tool."
    },
    {
        title: "Terraform Modules",
        category: "Terraform",
        filePath: "docs/Terraform/terraform-modules.pdf",
        description: "Learn how to create and use Terraform modules for reusable infrastructure."
    },
    {
        title: "YAML Fundamentals",
        category: "YAML_Scripting",
        filePath: "docs/YAML_Scripting/yaml-fundamentals.pdf",
        description: "Learn YAML syntax and structure for configuration files."
    },
    {
        title: "YAML Best Practices",
        category: "YAML_Scripting",
        filePath: "docs/YAML_Scripting/yaml-best-practices.pdf",
        description: "Best practices for writing clean and maintainable YAML configuration files."
    }
];

// Category icons mapping
const categoryIcons = {
    "Ansible": "fa-cogs",
    "Artificial_Intelligence_Fundamentals": "fa-brain",
    "AWS": "fa-cloud",
    "Azure": "fa-microsoft",
    "Azure_DevOps": "fa-code-branch",
    "Git": "fa-code-branch",
    "Kubernetes": "fa-docker",
    "Linux": "fa-terminal",
    "Prompt_Engineering": "fa-keyboard",
    "Shell_Scripting": "fa-terminal",
    "Terraform": "fa-mountain",
    "YAML_Scripting": "fa-file-code"
};

// Get category icon
function getCategoryIcon(category) {
    return categoryIcons[category] || "fa-file";
}

// Generate document card HTML
function createDocumentCard(doc) {
    return `
        <div class="document-card" data-category="${doc.category}">
            <div class="card-header">
                <i class="fas ${getCategoryIcon(doc.category)} category-icon"></i>
                <div>
                    <h3 class="card-title">${doc.title}</h3>
                    <span class="card-category">${doc.category}</span>
                </div>
            </div>
            <p class="card-description">${doc.description}</p>
            <a href="${doc.filePath}" class="download-btn" download>
                <i class="fas fa-download"></i>
                Download
            </a>
        </div>
    `;
}

// Render documents to the grid
function renderDocuments(docsToRender = documents) {
    const grid = document.getElementById('documentsGrid');
    
    if (docsToRender.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-folder-open"></i>
                <p>No documents found in this category.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = docsToRender.map(createDocumentCard).join('');
}

// Filter documents by category
function filterDocuments(category) {
    if (category === 'all') {
        renderDocuments(documents);
    } else {
        const filtered = documents.filter(doc => doc.category === category);
        renderDocuments(filtered);
    }
}

// Initialize the page
function init() {
    // Render all documents initially
    renderDocuments();
    
    // Add event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter documents
            const category = btn.getAttribute('data-category');
            filterDocuments(category);
        });
    });
    
    // Ensure download links work correctly
    document.addEventListener('click', (e) => {
        if (e.target.closest('.download-btn')) {
            const link = e.target.closest('.download-btn');
            // The download attribute should handle the download
            // But we can add a small delay to ensure proper behavior
            console.log('Downloading:', link.getAttribute('href'));
        }
    });
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

