# StacksLaunch - Roadmap & Issues

Detailed development tasks for the StacksLaunch fundraising platform.

---

## 🛠️ Smart Contract Issues

### Phase 1: Core Campaign Logic
- [x] **Issue #1**: Implement Campaign Storage Map
  - ✅ Defined detailed `campaigns` map with metadata and funding targets.
- [x] **Issue #2**: Implement `create-campaign` Function
  - ✅ Added validation for duration, goal, and unique IDs.
- [x] **Issue #3**: Implement Contribution Logic
  - ✅ Handled STX transfers and updated campaign state with real-time tracking.

### Phase 2: Administrative & Safety
- [ ] **Issue #4**: Add Campaign Expiration Handling
  - [ ] Implement `check-campaign-status` helper.
  - [ ] Assert `deadline > block-height` for new contributions.
  - [ ] Implement `finalize-campaign` to handle goal success/failure.
- [ ] **Issue #5**: Implement Owner Role & Governance
  - [ ] Add `contract-owner` constant.
  - [ ] Implement `withdraw-protocol-fees` (Admin only).

---

## 💻 Frontend Issues

### Phase 3: UI Foundation
- [ ] **Issue #6**: Set up App Shell & Theme
  - [ ] Implement Tailwind 4 "Terminal" configuration.
  - [ ] Create `Navigation` and `Sidebar` layouts.
- [ ] **Issue #7**: Wallet Connection Integration
  - [ ] Setup `StacksProvider` for session persistence.
  - [ ] Add `ConnectWallet` button with address formatting.

### Phase 4: Feature Dashboards
- [ ] **Issue #8**: Build Campaign Discovery Grid
  - [ ] Create dynamic cards with goal progress visualization.
- [ ] **Issue #9**: Build Campaign Detail View
  - [ ] Dynamic routing for specific campaign IDs.
- [ ] **Issue #10**: Implement Contribution Flow UI
  - [ ] Modal-based contribution form with live validation.

---

## 📊 Priority Levels
- **P0**: Core Engine, Wallet Auth
- **P1**: Safety Guards, Discovery UI
- **P2**: Creator Dashboard, Analytics
