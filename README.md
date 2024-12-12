# Promptyx

**Promptyx** is a system designed to streamline the creation, organization, and reuse of predefined prompts for various tasks. Whether you're generating content, automating workflows, or creating custom instructions, Promptyx provides a customizable tool to simplify these processes.

---

## 🔮 Next Steps

1. **Cover All Controllers** 🛠️ Ensure full backend functionality by implementing and testing all defined controllers.
2. **Develop Front-End** 🎨 Build an intuitive interface that connects seamlessly with the backend API.

---

## 🌟 Key Features

- **📚 Prompt Library**
  Organize all your prompts in one place for easy access and coordination.

- **🎛️ Customization**
  Create prompts with adjustable parameters to fit any task.

- **⚙️ Automation**
  Save time and maintain consistency with automated workflows.

- **🛠️ Modular Architecture**
  Built on the powerful **AdonisJS** framework for scalability and reliability.

- **🎨 Output Control**
  Generate results in your desired format, style, or structure with ease.

---

## 🌀 How It Works

1. **Define Prompts**: Craft clear instructions with detailed context and expected outputs.
2. **Store and Organize**: Create prompts in a library for easy reuse.
3. **Customize Parameters**: Dynamically adjust prompts for specific needs.
4. **Generate Outputs**: Produce consistent and reliable results with your chosen model or process.

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: Version >= 20.6

### Setup Steps

1. **Clone the Repository** 🖇️
   ```bash
   git clone <repository-url>
   cd promptyx
   ```

2. **Configure Environment**:
   Create a `.env` file from `.env.example`.
   ```bash
   cp .env.example .env
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run Database Migration**:
   ```bash
   node ace migration:run
   node ace migration:fresh // For a clean slate
   ```

5. **Start the Server**:
   ```bash
   node ace serve
   ```

---

## 🏗️ Architecture

Built on **AdonisJS 6**, a modular and scalable backend framework inspired by Laravel.

### 🔍 Model Structure

**Prompt**

- **Instructions**: Define the task clearly.
- **Context**: Provide relevant data (e.g., files, notes).
- **Output Parameters**: Specify the desired result's format and style.
- **Model**: Select a Large Language Model (LLM) or similar for processing.

**Output**

- **Prompt**: A summarized task description.
- **Output Data**: Well-structured results adhering to the set parameters.

---

## 📂 Database

- **Database File**: `/database/sqlite/database.sqlite`

SQLite offers a simple solution ideal for development and testing. For production, consider a more robust database engine.

---

## 🤝 Join Us

Interactions with language models (LLMs) are becoming a cornerstone of modern information systems. This project, free and community-driven, aims to make these tools accessible to everyone with simplicity and conviviality.

Join us, and let's build a free and accessible system together!
