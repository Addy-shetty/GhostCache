# BACK-ME-UP: Bug Bounty Automation Tool

<div align="center">
  <h1>🚀 BACK-ME-UP</h1>
  <p>
    Automated tool for bug bounty reconnaissance that collects URLs from archives and detects sensitive data leaks through pattern matching.
  </p>
  
  <div>
    <a href="https://youtu.be/HenECEU9c34">View Demo</a> •
    <a href="https://github.com/Dheerajmadhukar/back-me-up/issues/">Report Bug</a> •
    <a href="https://github.com/Dheerajmadhukar/back-me-up/issues/">Request Feature</a>
  </div>
</div>

## 🔍 Overview

Back-Me-Up is a powerful shell script that automates:
- URL collection from multiple sources
- Sensitive data pattern matching
- Leak detection across 160+ file extensions

## 🛠️ Installation

```bash
git clone https://github.com/Dheerajmadhukar/back-me-up.git
cd back-me-up/

# Check requirements
bash backmeup.sh --check

# Install dependencies 
bash backmeup.sh --install
```

## 🚦 Usage

```bash
# Basic scan
bash backmeup.sh -d example.com

# Help menu
bash backmeup.sh --help
```

## 🔧 Features

✔️ **Multi-Tool Integration**  
Combines 12+ recon tools (gau, gospider, katana, etc.)

✔️ **Smart Pattern Matching**  
Detects leaks in 160+ file extensions

✔️ **Resume Capability**  
Continues interrupted scans

✔️ **Customizable**  
Add your own extensions to `ext.txt`

## 🗂 Supported Extensions
```
sql, db, bak, log, key, pem, cfg, env, yml, etc...
```
Full list in `ext.txt`

## 📽 Demo
[![Demo Video](https://i.ytimg.com/vi/HenECEU9c34/maxresdefault.jpg)](https://youtu.be/HenECEU9c34)

## ⚠️ Disclaimer
For authorized security testing only. Use responsibly.

## 👨‍💻 Author
**Dheeraj Madhukar**  
[Twitter](https://twitter.com/Dheerajmadhukar) • 
[YouTube](https://youtube.com/c/DheerajMadhukar) • 
[LinkedIn](https://linkedin.com/in/dheerajtechnolegends)

## ☕ Support
<a href="https://www.buymeacoffee.com/medheeraj" target="_blank">
  <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=medheeraj&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" alt="Support">
</a>
