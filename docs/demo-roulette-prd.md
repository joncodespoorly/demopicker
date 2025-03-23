# Demo Picker Roulette Wheel
## Product Requirements Document

### 1. Overview and Objectives

#### 1.1 Product Description
The Demo Picker Roulette Wheel is a web application designed to randomly select team members to present their work during demo sessions. The application features a colorful roulette wheel that spins and lands on a randomly selected name, accompanied by celebratory confetti animations when a winner is revealed.

#### 1.2 Problem Statement
In tech and product teams, the same individuals often end up demonstrating their work, preventing other team members from getting the opportunity to showcase their contributions. This application aims to make the selection process fair, fun, and engaging.

#### 1.3 Goals and Objectives
- Create an engaging, visually appealing selection tool
- Ensure fair rotation of presentation responsibilities among team members
- Add an element of fun and anticipation to the team demo process
- Provide a simple user interface that requires minimal training or setup

### 2. Target Audience

The primary users will be product leads, engineering managers, scrum masters, or other facilitators who run demo or showcase sessions within technology teams. The application is designed to be used during team meetings, potentially on a shared screen.

### 3. User Interface Requirements

#### 3.1 Layout
Based on the provided wireframe, the application will have a clean, simple layout with:
- Left side: Contestant list section with heading and names
- Right side: Roulette wheel visualization and winner announcement
- Dark mode theme with colorful elements on the wheel

#### 3.2 Design Elements
- **Color Scheme**: Dark mode background with vibrant, playful colors for the wheel sections
- **Typography**: Clean, readable fonts for names and UI elements
- **Wheel Design**: Circular wheel divided into equal sections based on the number of contestants
- **Animation**: Stylized spinning animation (not physics-based) lasting 7 seconds
- **Celebration Effect**: Dramatic confetti animation when a winner is selected

#### 3.3 Components
1. **Name Input Area**:
   - Simple text input field
   - "Add" button to add names to the wheel
   
2. **Contestant List**:
   - Heading labeled "Contestants:"
   - List of all added names
   - Edit and delete options for each name
   
3. **Roulette Wheel**:
   - Visual representation of a wheel divided into sections
   - Each section randomly colored
   - Name displayed clearly within each section
   
4. **Winner Display**:
   - Clear indication of the selected winner
   - Text showing "The Winner is: [Name]!"
   
5. **Control Button**:
   - Prominent "Spin the Wheel" button

### 4. Functional Requirements

#### 4.1 Core Features

| Feature | Description | Priority |
|---------|-------------|----------|
| Name Management | Allow users to add, edit, and delete names | High |
| Wheel Visualization | Display names on a wheel with different colored sections | High |
| Spinning Animation | Animate the wheel spinning for 7 seconds when triggered | High |
| Winner Selection | Randomly select a winner and highlight their section | High |
| Celebratory Animation | Display dramatic confetti animation when winner is revealed | Medium |
| Responsive Wheel | Wheel updates immediately when names are added or removed | Medium |

#### 4.2 Name Input Requirements
- Users must be able to add up to 10 names
- Minimum of 2 names required to enable the spin functionality
- Duplicate names should be allowed
- Names should be visible on both the list and the wheel

#### 4.3 Wheel Behavior
- Wheel sections should be of equal size
- Each section should be randomly colored
- Sections should automatically adjust based on the number of names
- Wheel should visually refresh when names are added or removed

#### 4.4 Animation Requirements
- Spinning animation should last exactly 7 seconds
- Animation should be stylized rather than physics-based
- The wheel should gradually slow down toward the end
- Confetti animation should be dramatic and celebratory

### 5. Technical Specifications

#### 5.1 Platform
- Web application optimized for desktop view
- Modern browser compatibility (Chrome, Firefox, Safari, Edge)

#### 5.2 Recommended Technology Stack
- **Frontend Framework**: React.js for component-based UI management
- **Animation Library**: GreenSock Animation Platform (GSAP) for wheel spinning animation
- **Confetti Effect**: canvas-confetti library for celebration effects
- **State Management**: React's built-in useState for session-based storage

#### 5.3 Data Management
- Session-only storage (data resets when page refreshes)
- No backend or database requirements
- All data will be maintained in the client-side application state

### 6. Non-Functional Requirements

#### 6.1 Performance
- Application should load within 3 seconds on standard internet connections
- Animations should run smoothly without lag or stuttering

#### 6.2 Usability
- Intuitive interface requiring no training or documentation
- Clear visual feedback for all user actions
- Readable text even when wheel is in motion

#### 6.3 Browser Compatibility
- Full functionality in modern browsers (Chrome, Firefox, Safari, Edge)
- Minimum screen resolution support: 1280x720

### 7. Development Milestones

#### Phase 1: Basic Structure and UI
- Set up project with React.js
- Implement UI layout according to wireframe
- Create static wheel visualization
- Implement name input and management functionality

#### Phase 2: Animations and Interactivity
- Implement wheel spinning animation
- Add random color generation for wheel sections
- Create winner selection logic
- Add confetti celebration effects

#### Phase 3: Testing and Refinement
- Test with various numbers of names (2-10)
- Optimize animations for performance
- Polish UI elements and responsiveness
- Final quality assurance testing

### 8. Implementation Guidelines

#### 8.1 Wheel Implementation
The roulette wheel can be implemented using SVG or Canvas:
- Use a circular base
- Divide into equal segments based on number of contestants
- Apply random vibrant colors to each segment
- Center the name text within each segment
- Use rotation transformations for spinning animation

#### 8.2 Winner Selection Logic
- Randomly select an index from the list of contestants
- Calculate the final rotation angle to land on the selected winner
- Ensure the winner section aligns with a fixed pointer/indicator

#### 8.3 Animation Approach
- Use a predefined animation curve for stylized spinning
- Start fast and gradually slow down
- Total animation duration: 7 seconds
- Trigger confetti upon animation completion

### 9. Open Questions and Considerations

- Should previous winners be visually distinguished on the wheel?
- Is there a need to export or share the results?
- Should there be sound effects for spinning and winner selection?

### 10. Future Enhancement Possibilities

- Option to save and load contestant lists
- Ability to exclude previous winners
- Customizable colors or themes
- Adjustable spin time
- Animation and sound effect toggles
- Statistics tracking of who has been selected
