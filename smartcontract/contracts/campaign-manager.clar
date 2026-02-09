;; StacksLaunch - Campaign Manager
;; Decentralized fundraising orchestrator

;; --- Data Maps and Vars ---

(define-map campaigns
  uint
  {
    title: (string-ascii 64),
    creator: principal,
    goal: uint,
    raised: uint,
    deadline: uint,
    active: bool
  }
)

(define-data-var next-campaign-id uint u1)

;; --- Constants ---
(define-constant contract-owner tx-sender)
(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-CAMPAIGN-NOT-FOUND (err u101))
(define-constant ERR-EXPIRED (err u102))

;; --- Public Functions ---

(define-public (create-campaign (title (string-ascii 64)) (goal uint) (deadline uint))
  (let ((campaign-id (var-get next-campaign-id)))
    (asserts! (> goal u0) (err u103))
    (asserts! (> deadline block-height) (err u104))
    (map-set campaigns campaign-id { title: title, creator: tx-sender, goal: goal, raised: u0, deadline: deadline, active: true })
    (var-set next-campaign-id (+ campaign-id u1))
    (ok campaign-id)
  )
)

(define-public (contribute-to-campaign (campaign-id uint) (amount uint))
  (let ((campaign (unwrap! (map-get? campaigns campaign-id) ERR-CAMPAIGN-NOT-FOUND)))
    (asserts! (get active campaign) (err u105))
    (asserts! (<= block-height (get deadline campaign)) ERR_EXPIRED)
    (try! (stx-transfer? amount tx-sender (as-contract tx-sender)))
    (map-set campaigns campaign-id (merge campaign { raised: (+ (get raised campaign) amount) }))
    (ok amount)
  )
)
