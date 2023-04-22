const versionControlQuiz = [
  {
    id: "1",
    question: "What is version control and why is it important?",
    options: [
      "A system for organizing files and folders.",
      "A system for recording changes to files, enabling collaboration and preventing data loss.",
      "A method for managing access to computer resources.",
    ],
    correctOption: 1,
  },
  {
    id: "2",
    question:
      "What are the differences between centralized and distributed version control systems?",
    options: [
      "CVCS uses a single repository; DVCS has multiple repositories.",
      "CVCS is for small projects; DVCS is for large projects.",
      "CVCS is an older technology; DVCS is newer and more advanced.",
    ],
    correctOption: 0,
  },
  {
    id: "3",
    question: "What is Git and how does it work?",
    options: [
      "Git is a text editor for programming.",
      "Git is a type of file compression software.",
      "Git is a DVCS that takes snapshots of project files and tracks changes.",
    ],
    correctOption: 2,
  },
  {
    id: "4",
    question: "What is a Git commit and what information does it store?",
    options: [
      "A Git commit is a project snapshot, storing changes, author, date, and a unique identifier.",
      "A Git commit is a file containing project settings.",
      "A Git commit is a way to organize project files.",
    ],
    correctOption: 0,
  },
  {
    id: "5",
    question: "What are branches in Git and why are they useful?",
    options: [
      "Branches are folders for organizing files in a project.",
      "Branches are pointers to commits, enabling parallel development and easy merging.",
      "Branches are a way to divide a project into smaller tasks.",
    ],
    correctOption: 1,
  },
  {
    id: "6",
    question: "How do you create and switch between branches in Git?",
    options: [
      'Use "git branch" to create, and "git checkout" to switch between branches.',
      'Use "git add" to create, and "git remove" to switch between branches.',
      'Use "git init" to create, and "git clone" to switch between branches.',
    ],
    correctOption: 0,
  },
  {
    id: "7",
    question: "What is a merge conflict in Git and how can it be resolved?",
    options: [
      "A merge conflict occurs when two branches have conflicting changes. Resolve by manually editing the file.",
      "A merge conflict is when two developers try to merge at the same time. Resolve by waiting and trying again.",
      "A merge conflict is when a branch has been deleted. Resolve by creating a new branch.",
    ],
    correctOption: 0,
  },
  {
    id: "8",
    question: "What is a remote repository in Git and how do you add one?",
    options: [
      "A remote repository is a backup of your project. Use git remote add to create one.",
      "A remote repository is a version of your project on a remote server. Use git remote add to add one.",
      "A remote repository is a project template. Use git remote add to download one.",
    ],
    correctOption: 1,
  },
  {
    id: "9",
    question: 'What is the difference between "git fetch" and "git pull"?',
    options: [
      "git fetch downloads changes without merging, while git pull downloads and merges changes.",
      "git fetch is used for creating branches, while git pull is used for merging branches.",
      "git fetch is for creating a remote repository, while git pull is for adding a remote repository.",
    ],
    correctOption: 0,
  },
  {
    id: "10",
    question: "What is a pull request and why is it important?",
    options: [
      "A request to merge changes, enabling code review and collaboration.",
      "A request to create a new branch, enabling parallel development.",
      "A request to delete a branch, enabling better organization.",
    ],
    correctOption: 0,
  },
  {
    id: "11",
    question: "What is a Git rebase and when would you use it?",
    options: [
      "A Git rebase integrates changes and maintains a linear project history.",
      "A Git rebase temporarily saves changes in the working directory.",
      "A Git rebase creates a permanent reference to a specific commit.",
    ],
    correctOption: 0,
  },
  {
    id: "12",
    question: 'What is the difference between "git stash" and "git branch"?',
    options: [
      "git stash saves uncommitted changes, while git branch manages branches.",
      "git stash creates a remote repository, while git branch adds a remote repository.",
      "git stash merges changes from specific commits, while git branch resolves binary file conflicts.",
    ],
    correctOption: 0,
  },
  {
    id: "13",
    question: "What is a Git tag and when should you use it?",
    options: [
      "A Git tag marks release points or milestones in the project.",
      "A Git tag is a process of creating a copy of an existing repository.",
      "A Git tag is a command that temporarily saves changes in the working directory.",
    ],
    correctOption: 0,
  },
  {
    id: "14",
    question: "How do you revert a commit in Git?",
    options: [
      "Use the command git branch to revert a commit.",
      "Use the command git stash to revert a commit.",
      'Use the command "git revert [commit_hash]" to revert a commit.',
    ],
    correctOption: 2,
  },
  {
    id: "15",
    question: "What is a .gitignore file and why is it important?",
    options: [
      "A configuration file that specifies which files or directories should be tracked by Git.",
      "A configuration file that specifies which files or directories should be ignored by Git.",
      "A command used to undo changes made in a Git repository.",
    ],
    correctOption: 1,
  },
  {
    id: "16",
    question: "What is SVN and how does it differ from Git?",
    options: [
      "SVN is a centralized version control system, while Git is a distributed version control system.",
      "SVN is a distributed version control system, while Git is a centralized version control system.",
      "SVN is a command used to create submodules in Git.",
    ],
    correctOption: 0,
  },
  {
    id: "17",
    question: 'What is a "fork" in the context of version control?',
    options: [
      "A process of creating a copy of an existing repository.",
      "A process of merging changes from one branch to another.",
      "A process of resolving binary file conflicts.",
    ],
    correctOption: 0,
  },
  {
    id: "18",
    question: 'What is "git stash" and when would you use it?',
    options: [
      "A command that creates, lists, or deletes branches in your repository.",
      "A command that selectively applies changes from specific commits to another branch.",
      "A command that temporarily saves changes in your working directory.",
    ],
    correctOption: 2,
  },
  {
    id: "19",
    question: 'What is "cherry-picking" in Git and when would you use it?',
    options: [
      "A command that displays the commit history of each line in a file.",
      "A command that creates a partial clone of a repository.",
      "A process of selectively applying changes from specific commits to another branch.",
    ],
    correctOption: 2,
  },
  {
    id: "20",
    question: 'What is the purpose of the "git blame" command?',
    options: [
      "To display the commit history of each line in a file.",
      "To download changes from a remote repository to your local repository.",
      "To rewrite the commit history by integrating changes from one branch onto another.",
    ],
    correctOption: 0,
  },
  {
    id: "21",
    question: "How do you resolve a binary file conflict in Git?",
    options: [
      "By manually selecting the correct version of the file and committing the resolved file.",
      "By merging changes from specific commits to another branch.",
      "By creating a partial clone of the repository.",
    ],
    correctOption: 0,
  },
  {
    id: "22",
    question: 'What is "git bisect" and how can it help in debugging?',
    options: [
      "A command that helps in finding the commit that introduced a bug or issue by performing a binary search through the commit history.",
      "A command that saves changes in the working directory.",
      "A command that marks release points or milestones in the project.",
    ],
    correctOption: 0,
  },
  {
    id: "23",
    question: "What are submodules in Git and when would you use them?",
    options: [
      "A way to include external repositories within your project as a subdirectory.",
      "A way to merge changes from one branch to another.",
      "A way to resolve binary file conflicts.",
    ],
    correctOption: 0,
  },
  {
    id: "24",
    question: 'What is a "shallow clone" in Git and when would you use it?',
    options: [
      "A complete clone of a repository, including the entire commit history.",
      "A partial clone of a repository, where only the most recent commit history is retrieved, reducing the amount of data transferred and the time it takes to clone.",
      "A clone of a repository that excludes certain files or directories.",
    ],
    correctOption: 1,
  },
];
export default versionControlQuiz;
