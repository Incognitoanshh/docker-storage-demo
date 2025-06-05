# 🐳 Docker Storage Demo

This project demonstrates how to use **Docker storage mechanisms** including:

- Docker **Volumes** (for persistent storage)
- **Bind Mounts** (to share host files with container)
- **tmpfs Mounts** (temporary in-memory storage)

---

## 📁 Features

| Storage Type | Purpose |
|--------------|---------|
| Volume       | Save logs (`/data/logs/output.log`) even after container removal |
| Bind Mount   | Share and dynamically edit `config.json` from host |
| tmpfs Mount  | Store temporary data in memory (`/tmpfs/temp.txt`) |

---

## 🛠 Technologies Used

- Docker (v20+)
- Node.js
- Alpine Linux (base container)

---

## 🚀 How to Run

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Incognitoanshh/docker-storage-demo.git
   cd docker-storage-demo
