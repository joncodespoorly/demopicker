# Demo Picker Roulette Wheel
## User Experience Description Document

### Layout Structure

#### Overall Layout
- **Header Bar**: Spans full width, contains application title "Demo Roulette" in center
- **Main Content Area**: Split into two primary sections:
  - **Left Section** (30% width): Contestant management area
  - **Center/Right Section** (70% width): Features the centered wheel with winner announcement area

#### Screen Organization
- **Single Page Application**: All functionality contained within one view
- **Vertical Hierarchy**: 
  1. Header/title at top
  2. Main interactive elements in center (wheel, contestant list)
  3. Controls positioned strategically for easy access
  4. Winner announcement prominently displayed above the wheel

### Core Components

#### 1. Contestant Management Panel
- **Position**: Left side of the screen
- **Header**: "Contestants:" label in bold
- **List View**: Vertically stacked contestant names
- **Input Field**: Text input for adding new names
  - Placeholder text: "Enter name..."
  - Positioned at top of contestant list
- **Add Button**: "+" icon button adjacent to input field
- **Contestant Entry**:
  - Each name appears as a list item
  - Delete button (×) appears on hover for each name
  - Visual indication when name is added to wheel
- **Maximum Capacity**: Visual indication when approaching 10 name limit
- **Scroll Behavior**: Vertical scrolling enabled if list exceeds visible area

#### 2. Roulette Wheel
- **Position**: Center of the main content area
- **Size**: Approximately 50-60% of the viewport height
- **Structure**: 
  - Circular wheel divided into equal segments
  - One segment per contestant
  - Each segment randomly assigned a vibrant color
  - Name text centered in each segment
  - Static pointer/indicator at the top of the wheel
- **Wheel Update**: Visually reflects changes to contestant list in real-time
- **Empty State**: Placeholder message when no contestants added
- **Minimum State**: Wheel appears when at least 2 contestants added

#### 3. Winner Announcement Area
- **Position**: Above the wheel
- **States**:
  - Initial: Hidden or displaying "Spin the wheel to select a winner"
  - After spin: "The Winner is: [Name]!" in large, prominent text
- **Visual Emphasis**: 
  - Bold typography
  - Animation that draws attention
  - Connected to winning segment via visual indicator

#### 4. Spin Control
- **Position**: Centered below the wheel
- **Appearance**: Large, prominent button with "Spin the Wheel" text
- **States**:
  - Enabled: When 2+ contestants added
  - Disabled: When fewer than 2 contestants
  - Spinning: Visual indication during spin animation
- **Size**: Large enough for easy targeting during presentations

### Interaction Patterns

#### Adding Contestants
1. User enters name in the input field
2. User clicks "+" button or presses Enter
3. Name appears in contestant list
4. Wheel automatically updates with new segment
5. Input field clears, ready for next entry

#### Removing Contestants
1. User hovers over name in list
2. Delete (×) button appears
3. User clicks delete button
4. Name is removed from list
5. Wheel segments automatically readjust

#### Spinning the Wheel
1. User clicks "Spin the Wheel" button
2. Button state changes to indicate spinning
3. Wheel animation begins:
   - Initial fast rotation
   - Gradual deceleration over 7 seconds
   - Final stop at randomly selected winner
4. Winner announcement appears
5. Confetti animation overlays the interface
6. Spin button returns to enabled state

#### Error Prevention
- Input validation prevents empty names
- Warning when approaching maximum 10 contestants
- Spin button disabled when fewer than 2 contestants
- Confirmation prompt when clearing all names

### Visual Design Elements & Color Scheme

#### Color Palette
- **Background**: Dark mode (#121212)
- **Text**: High contrast white (#FFFFFF) for primary text
- **Accents**: 
  - Primary accent: #2D88FF (blue)
  - Secondary accent: #1DB954 (green)
- **Wheel Segments**: 
  - Random vibrant colors from predefined palette
  - Ensures sufficient contrast for name text
  - Colors: #F94144, #F3722C, #F8961E, #F9C74F, #90BE6D, #43AA8B, #577590, #FF5DA2, #C77DFF, #5271FF

#### Visual Hierarchy
- **Primary Elements**: Wheel, winner announcement, spin button
- **Secondary Elements**: Contestant list, input field, instructions
- **Tertiary Elements**: Helper text, footer information
- **Emphasis**: Critical information (winner) receives highest visual prominence

#### Containers & Surfaces
- **Card Surfaces**: Subtle elevation for contestant list panel
- **Shadows**: Light shadows to create depth for interactive elements
- **Borders**: Minimal use of borders, relying on space and background contrast

#### State Indicators
- **Hover States**: Subtle highlight effect on interactive elements
- **Active States**: Visual feedback for button presses
- **Disabled States**: Reduced opacity and desaturated colors

### Mobile, Web App, Desktop Considerations

The application is primarily designed for desktop/presentation use, but maintains responsiveness:

#### Desktop (Primary)
- **Optimized for**: 1280×720px minimum resolution
- **Layout**: As described above with horizontal organization
- **Interaction**: Mouse-oriented with keyboard shortcuts for power users

#### Tablet/Large Mobile
- **Orientation**: Landscape orientation enforced
- **Layout Adjustment**: 
  - Contestant panel collapses to expandable drawer
  - Wheel maintains prominence
  - Controls positioned for thumb accessibility

#### Small Mobile (Limited Support)
- **Warning Message**: Suggestion to use larger screen
- **Alternative Layout**: 
  - Vertical stacking of elements
  - Reduced wheel size
  - Scrollable interface

#### Web App Specific
- **Browser Support**: Chrome, Firefox, Safari, Edge
- **Performance**: Optimized animations for consistent 60fps
- **State Persistence**: Warning about session-only storage

### Typography

#### Font Selection
- **Primary Font**: Inter (sans-serif)
- **Alternative**: System font stack as fallback

#### Text Hierarchy
- **Application Title**: 28px, Bold
- **Section Headers**: 18px, Semi-bold
- **Contestant Names (List)**: 16px, Regular
- **Contestant Names (Wheel)**: 14-16px (responsive), Medium
- **Winner Announcement**: 24px, Bold
- **Button Text**: 16px, Medium
- **Helper Text**: 14px, Regular

#### Text Treatment
- **Truncation**: Ellipsis for long names on wheel
- **Contrast**: Minimum 4.5:1 ratio for all text
- **Line Height**: 1.5 for optimal readability
- **Weight Differentiation**: Uses weight to establish hierarchy instead of multiple sizes

### Accessibility

#### Visual Accessibility
- **Color Independence**: Functionality does not rely solely on color
- **Contrast Ratios**: 
  - Text maintains minimum 4.5:1 contrast ratio against backgrounds
  - Interactive elements have distinct focus states
- **Text Scaling**: Interface supports browser text scaling to 200%
- **Visual Indicators**: Selection state visible through multiple cues

#### Interactive Accessibility
- **Keyboard Navigation**: Full keyboard support
  - Tab navigation for all interactive elements
  - Enter key triggers buttons
  - Arrow keys for list navigation
- **Focus Management**: Clear focus indicators
- **Touch Targets**: Minimum 44×44px for all interactive elements

#### Screen Reader Support
- **Semantic Markup**: Proper ARIA roles and labels
- **Live Regions**: Winner announcement uses ARIA live regions
- **Meaningful Sequences**: Logical DOM order
- **Status Updates**: Animation state changes announced

---

## Implementation Notes

### Wheel Component
The wheel component should be implemented using SVG for crisp rendering:
- Base circle with segments calculated by dividing 360° by number of contestants
- Text orientation adjusted per segment for optimal readability
- CSS transforms for rotation animation
- Pointer indicator fixed at top of wheel container

### Animation Specifications
- **Spin Animation**: 
  - Duration: Exactly 7 seconds
  - Easing: Custom cubic-bezier for natural deceleration
  - Performance: Optimized for transform properties only
- **Confetti Animation**:
  - Trigger: Upon winner selection
  - Duration: 3 seconds
  - Density: Moderate (won't obstruct interface)
  - Distribution: Concentrated around winner announcement

### State Management
- All data maintained in client-side state
- No persistence between sessions
- State structure to track:
  - Contestant list
  - Currently selected winner
  - Application state (idle, spinning, result)
