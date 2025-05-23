<p align="center">
  <img src="https://via.placeholder.com/200x200?text=RAAIN" alt="RAAIN Logo" width="200" height="200">
</p>

<h1 align="center">RAAIN App</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.4.0-blue" alt="Version 1.4.0">
  <img src="https://img.shields.io/badge/angular-latest-red" alt="Angular">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  <img src="https://img.shields.io/badge/mobile-capacitor-blueviolet" alt="Mobile">
</p>

<p align="center">
  <b>Visualize, analyze, and interact with rainfall data through an intuitive interface</b>
</p>

---

## 📋 Overview

RAAIN App is a powerful Angular-based application that makes rainfall data accessible, understandable, and actionable. It provides users with tools to view, analyze, and work with RAAIN data through an intuitive interface.

### 🌧️ Why RAAIN App?

- **Simplify Complex Data**: Transform raw rainfall data into intuitive visualizations
- **Make Informed Decisions**: Analyze rainfall patterns and predictions with ease
- **Access Anywhere**: Use on web or mobile devices with consistent experience
- **Compare & Analyze**: Powerful tools for comparing rainfall patterns over time
- **Built for Performance**: Handles large datasets with smooth, responsive interactions

## ✨ Key Features

- **📊 Data Visualization**: Intuitive charts, maps, and visual elements for rainfall data
- **🔍 Interactive Analysis**: Filter, sort, and interact with data to focus on specific aspects
- **📱 Multi-platform Support**: Works consistently across web and mobile platforms
- **🔄 Data Comparison**: Tools for comparing rainfall patterns across different time periods
- **📈 Detailed Information**: Access to specific rain events and comprehensive data
- **📤 Export & Share**: Capabilities for exporting and sharing rainfall data and visualizations

## 🚀 Getting Started

### Prerequisites

- Node.js and npm (check package.json for compatible versions)
- Angular CLI: `npm install -g @angular/cli`

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install
```

### Development Workflow

```bash
# Start the development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

### Environment-Specific Development

```bash
# Sandbox environment
npm run start-sandbox

# Lab environment
npm run start-lab

# Production environment (default)
npm start
```

## 🛠️ Technologies

### Core Technologies
- **Angular**: Frontend framework
- **TypeScript**: Programming language
- **RxJS**: Reactive programming
- **SCSS**: Styling

### Key Dependencies
- **RAAIN Model (v3.0.11)**: Data models and business logic
- **RAAIN UI (v2.3.10)**: UI component library
- **Fidj Angular (v15.1.8)**: Additional UI components
- **Capacitor**: Mobile application framework

## 🏗️ Architecture

The RAAIN App follows a typical Angular architecture with:

- **Feature Modules**: Organized by functionality
- **Shared Components**: Reusable UI elements
- **Services**: Handle data retrieval and business logic
- **Models**: Define data structures using raain-model
- **UI Components**: Utilize raain-ui for consistent styling

### Design Patterns

- Component Pattern
- Service Pattern
- Dependency Injection
- Observable Pattern
- Repository Pattern
- Module Pattern

### Code Organization

```
src/
├── app/
│   ├── feature-modules/
│   │   └── rain/
│   ├── shared/
│   │   ├── components/
│   │   ├── services/
│   │   └── models/
│   └── core/
├── assets/
└── environments/
```

## 📈 Project Status

The application is in active development with a focus on stability, performance, and improved developer experience.

### Recent Accomplishments
- Updated dependencies (raain-model from 3.0.9 to 3.0.11, raain-ui to 2.3.10)
- Added build pipeline automation scripts
- Implemented Memory Bank for better project documentation
- Code cleanup and best practices implementation

### Version History
- **v1.4.0** (2025-04-15): Added model offsets and limits
- **v1.3.0** (2025-03-10): Updated UI colors for better contrast and accessibility
- **v1.2.0** (2025-02-05): Refactored fidj implementation for better performance
- **v1.1.0** (2025): Refactored compare functionality for improved user experience
- **v1.0.0** (2024): Initial release with core functionality

## 📚 Documentation

### Memory Bank

This project uses a Memory Bank for comprehensive documentation and context retention. The Memory Bank is located in the
`.memory-bank` directory and contains the following files:

- `memory-bank-rules.md`: Rules to follow and to consider in all contexts
- `projectbrief.md`: Overview of the project, core requirements, and goals
- `productContext.md`: Why the project exists, problems it solves, and how it works
- `systemPatterns.md`: System architecture, key technical decisions, and design patterns
- `techContext.md`: Technologies used, development setup, and technical constraints
- `activeContext.md`: Current work focus, recent changes, and next steps
- `progress.md`: What works, what's left to build, and known issues

=> !! These files should always be considered as a context and keep up-to-date !!

### Additional Documentation
- For detailed feature information and version history, see the [CHANGELOG](./CHANGELOG.md).

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Made with ❤️ by the RAAIN Team
</p>
