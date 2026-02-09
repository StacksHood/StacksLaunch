# StacksLaunch Roadmap & Issues

Detailed development tasks for the StacksLaunch fundraising platform.

## 🛠️ Smart Contract Issues

### Phase 1: Core Campaign Logic
- [ ] **Issue #1**: Implement Campaign Storage Map
  - Define `campaigns` map with metadata and funding targets.
- [ ] **Issue #2**: Implement `create-campaign` Function
  - Add validation for duration and goal.
- [ ] **Issue #3**: Implement Contribution Logic
  - Handle STX transfers and update campaign state.

### Phase 2: Administrative Controls
- [ ] **Issue #4**: Add Campaign Expiration Handling
- [ ] **Issue #5**: Implement Owner Role & Governance

---

## 💻 Frontend Issues

### Phase 3: UI Foundation
- [ ] **Issue #6**: Set up App Shell & Theme
  - Implement dark/terminal theme with Stacks Orange.
- [ ] **Issue #7**: Wallet Connection Integration
  - Connect `@stacks/connect` for signer authentication.

### Phase 4: Feature Dashboards
- [ ] **Issue #8**: Build Campaign Discovery Grid
- [ ] **Issue #9**: Build Campaign Detail View
- [ ] **Issue #10**: Implement Contribution Flow UI
