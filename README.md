# Antic - Luxury Landing Page

![Landing-Page-Banner](https://github.com/user-attachments/assets/4a3df37a-df8f-4914-8389-26a93996b435)


## 📋 Table of Contents

1. [Overview](#️-overview)
2. [Live Demo](#-live-demo)
3. [Technologies Used](#-technologies-used)
  - [Core Technologies](#core-technologies)
  - [Build Tools](#build-tools)
  - [UI Components & Features](#ui-components--features)
  - [Code Quality & Linting](#code-quality--linting)
4. [Architecture](#️-architecture)
  - [Project Structure](#project-structure-explanation)
  - [Directory Organization](#directory-organization)
    - [Components](#-components)
    - [Features](#-features)
    - [Pages](#-pages)
    - [Root Level](#️-root-level)
5. [Features](#-features)
6. [Responsive Breakpoints](#--responsive-breakpoints)
7. [Development Decisions](#-development-decisions)
8. [Styling Approach](#️-styling-approach)
9. [Acknowledgments](#-acknowledgments)

## 🛋️ Overview
A luxury-styled landing page focused on interior and exterior lighting e-commerce. The design features sophisticated elements that enhance brand value and lead users to discover more about the products.


## 🚀 Live Demo
- [View Live Site](https://landing-antic-purple-fire.vercel.app)
    - [Figma Prototype (Desktop)](https://www.figma.com/proto/23iDxcUBoDZMYEtYwNLpbM/%F0%9F%93%9D-Challenge?page-id=0%3A1&type=design&node-id=1-19&viewport=566%2C576%2C0.14&t=HHpbfGEB1Elh6aHP-1&scaling=min-zoom&starting-point-node-id=1%3A19)
    - [Figma Prototype (Mobile)](https://www.figma.com/proto/23iDxcUBoDZMYEtYwNLpbM/%F0%9F%93%9D-Challenge?page-id=10%3A48&type=design&node-id=10-49&viewport=629%2C485%2C0.2&t=gXsqey2cerSyiGwu-1&scaling=scale-down&starting-point-node-id=10%3A49)

## 💻 Technologies Used
### Core Technologies
- React 18.3.1
- React DOM 18.3.1

### Build Tools
- Vite 5.4.8

### UI Components & Features
- React Material Symbols 4.4.0
- React Multi Carousel 2.8.5

### Code Quality & Linting
- ESLint 9.11.1


## 🏗️ Architecture
The project follows a sensible folder structure:

![landing-tree](https://github.com/user-attachments/assets/a30fcb4c-be70-451e-a51c-3787cb306818)


### Project Structure Explanation:

### Directory Organization

#### 🧩 Components
- Houses reusable UI components
- Each component has its own directory
- Contains CSS and JSX files for each component

#### 🔧 Features
- Contains feature-specific components
- Each feature is isolated in its own directory
- Complex features (like Carousel) have dedicated component subfolders
- Includes specialized sections like Hero, MenuBar, and CTA

#### 📄 Pages
- Contains page-level components
- Currently includes the LandingPage component
- Serves as container for feature composition

#### ⚙️ Root Level
- Handles app initialization
- Contains global styles and configurations
- Main entry point for the application

## 🎯 Features
Implemented Features

- ✅ Fully responsive design (mobile and desktop)
- ✅ Dynamic and dragable Image Carousel
- ✅ Newsletter subscription
- ✅ Animated page transitions

## Responsive Breakpoints
- ### 📱 mobile: '320px - 768px',
- ### 💻 desktop: '1025px and above'


## 💡 Development Decisions
Using the atomic design methodology in IconButton component.
It is optimized to include two variants—Primary and Secondary—and three different sizes for each variant.
Combined with the Material Symbols librarie to use any icon

#### Usage Example:
```javascript
// Importing the IconButton component
import IconButton from "/components/iconButton/iconButton";

// Usage for Primary variant with Large size
<IconButton iconName="{Icon name}" variant="primary" size="large" iconfill="false"/>.

// Usage for Secondary variant with Small size
<IconButton iconName="Icon name" variant="secondary" size="small" iconfill="true"/>.

```

## 🖌️ Styling Approach:
The project implements plain CSS on global styles in index.css with:

- Custom color palette using CSS variables
- Imported typography with custom font classes
- BEM methodology for styling structure


## 🙏 Acknowledgments:

- Icons provided by [Material Symbols](https://fonts.google.com/icons)
- Image Carousel [react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)
