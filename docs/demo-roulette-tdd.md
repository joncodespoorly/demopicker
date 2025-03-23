# Demo Picker Roulette Wheel
## Technical Design Document

### System Design
- **Application Type**: Single Page Application (SPA)
- **Architecture**: Client-side application with potential for future backend integration
- **Deployment**: Static site deployment via Vercel
- **Accessibility**: WCAG 2.1 AA compliant
- **Responsiveness**: Primarily desktop-focused with support for tablet landscape view

### Architecture Pattern
- **Frontend Pattern**: Component-based architecture using React
- **Component Structure**:
  - Core components:
    - App (root component)
    - ContestantManager (left panel)
    - RouletteWheel (center/right section)
    - WinnerDisplay (above wheel)
    - SpinControl (below wheel)
    - ConfettiEffect (overlay)
  - Utility components:
    - ContestantItem (individual name in list)
    - WheelSegment (individual segment in wheel)
    - Button (reusable button component)
    - Input (reusable input component)
- **Data Flow**: Unidirectional data flow with prop passing and context for global state

### State Management
- **Primary Method**: React Hooks (useState, useEffect, useContext)
- **Global State**: React Context API for application-wide state
- **Key State Elements**:
  - Contestants array (names for wheel)
  - Current application state (idle, spinning, result)
  - Selected winner
  - Animation state
- **State Persistence**: Session storage for preserving state during page refreshes (optional)

### Data Flow
- **Main Flow**:
  1. User inputs contestant names
  2. UI updates reflect changes to contestant list and wheel
  3. User initiates spin
  4. Animation executes with timing controls
  5. Random winner selection occurs
  6. UI updates to display winner
- **Component Communication**:
  - Parent to Child: Props passing
  - Child to Parent: Callback functions
  - Global State: Context API
- **Prop Drilling Avoidance**: Context API for deep component hierarchies

### Technical Stack
- **Frontend Framework**: Next.js (React)
- **Styling**: Tailwind CSS for utility-first styling
- **Animation Libraries**:
  - Framer Motion for wheel animation
  - canvas-confetti for celebration effects
- **Build/Development Tools**:
  - ESLint for code quality
  - Prettier for code formatting
  - TypeScript for type safety (optional)
- **Deployment**: Vercel for static site hosting
- **State Management**: React's built-in hooks and Context API

### Authentication Process
- **Current Requirements**: No authentication required as per the PRD
- **Future Considerations**:
  - If team persistence is added, consider Supabase Auth for easy integration
  - JWT-based authentication for API requests
  - Role-based access for potential admin features

### Route Design
- **Current Requirements**: Single page application with no route changes
- **Future Considerations**:
  - `/` - Main application
  - `/history` - Past winners and statistics (future enhancement)
  - `/settings` - Application configuration (future enhancement)

### API Design
- **Current Requirements**: No API required as per the PRD (client-side only)
- **Future Considerations**:
  - REST API endpoints for team persistence:
    - `GET /api/teams` - Retrieve saved teams
    - `POST /api/teams` - Create a new team
    - `GET /api/teams/{id}` - Get specific team
    - `PUT /api/teams/{id}` - Update team members
    - `DELETE /api/teams/{id}` - Remove a team
    - `GET /api/teams/{id}/history` - Get selection history

### Database Design ERD
- **Current Requirements**: No database required as per the PRD
- **Future Considerations**:
  - Supabase Schema:
    - `teams` table:
      - `id` (primary key)
      - `name` (team name)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `team_members` table:
      - `id` (primary key)
      - `team_id` (foreign key to teams.id)
      - `name` (contestant name)
      - `created_at` (timestamp)
    - `selection_history` table:
      - `id` (primary key)
      - `team_id` (foreign key to teams.id)
      - `member_id` (foreign key to team_members.id)
      - `selected_at` (timestamp)

### Potential Challenges and Solutions

#### Challenge 1: Smooth Wheel Animation
- **Problem**: Ensuring smooth wheel animation that gradually slows down over exactly 7 seconds
- **Solution**:
  - Use Framer Motion's custom transition with carefully tuned easing functions
  - Implement requestAnimationFrame for performance-optimized animations
  - Pre-calculate final position to ensure animation ends at the right segment

#### Challenge 2: Dynamic Wheel Segments
- **Problem**: Dynamically updating wheel segments as contestants are added/removed
- **Solution**:
  - SVG-based wheel implementation with calculated arc paths
  - React's key-based reconciliation for efficient updates
  - Smooth transition animations between states

#### Challenge 3: Text Positioning in Wheel Segments
- **Problem**: Displaying names clearly within variably-sized wheel segments
- **Solution**:
  - Text positioning algorithm to center text along arc path
  - Text sizing based on segment size and name length
  - Fallback to truncation with ellipsis for very long names

#### Challenge 4: Confetti Performance
- **Problem**: Ensuring confetti animation doesn't impact application performance
- **Solution**:
  - Canvas-based confetti implementation
  - Limit particle count based on device performance
  - Use throttling for performance-critical calculations

#### Challenge 5: Accessibility
- **Problem**: Making a highly visual application accessible to all users
- **Solution**:
  - Proper ARIA attributes for all interactive elements
  - Keyboard navigation support
  - Screen reader announcements for spin results
  - Focus management during application state changes

### Development Phases

#### Phase 1: Core Structure and UI (1-2 days)
- Set up Next.js project with Tailwind CSS
- Implement basic component structure
- Create static UI layout
- Add responsive design considerations

#### Phase 2: State Management and Logic (1-2 days)
- Implement contestant management functionality
- Set up wheel data structure
- Create random selection algorithm
- Implement Context API for state management

#### Phase 3: Animations and Effects (2-3 days)
- Implement wheel spinning animation
- Add confetti celebration effect
- Refine transitions between application states
- Optimize performance

#### Phase 4: Refinement and Testing (1-2 days)
- Cross-browser testing
- Accessibility testing and improvements
- Performance optimization
- Code cleanup and documentation

### Technical Debt Considerations
- Initial implementation uses client-side only approach
- Future enhancements may require backend integration
- Design code with extension points for:
  - User authentication
  - Team persistence
  - History tracking
  - Configuration management
  