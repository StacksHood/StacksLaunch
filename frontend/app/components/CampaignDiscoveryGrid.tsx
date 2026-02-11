"use client";

import styles from "./CampaignDiscoveryGrid.module.css";

interface Campaign {
  id: string;
  name: string;
  creator: string;
  goalAmount: number;
  raisedAmount: number;
  deadline: string;
  backers: number;
  category: string;
  status: "active" | "completed" | "failed";
}

const SAMPLE_CAMPAIGNS: Campaign[] = [
  {
    id: "camp_001",
    name: "Web3 Learning Platform",
    creator: "Alice Dev",
    goalAmount: 500000,
    raisedAmount: 425000,
    deadline: "2024-03-15",
    backers: 234,
    category: "Education",
    status: "active",
  },
  {
    id: "camp_002",
    name: "DeFi Aggregator Protocol",
    creator: "Bob Team",
    goalAmount: 1000000,
    raisedAmount: 950000,
    deadline: "2024-02-28",
    backers: 512,
    category: "Finance",
    status: "active",
  },
  {
    id: "camp_003",
    name: "NFT Creator Toolkit",
    creator: "Creative Labs",
    goalAmount: 300000,
    raisedAmount: 155000,
    deadline: "2024-04-10",
    backers: 89,
    category: "Creative",
    status: "active",
  },
  {
    id: "camp_004",
    name: "Smart Contract Audit DAO",
    creator: "Security Collective",
    goalAmount: 750000,
    raisedAmount: 750000,
    deadline: "2024-02-20",
    backers: 340,
    category: "Security",
    status: "completed",
  },
];

export function CampaignDiscoveryGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Active Campaigns</h2>
        <p className={styles.subtitle}>Discover and support innovative projects</p>
      </div>

      <div className={styles.filters}>
        <button className={styles.filterBtn + " " + styles.active}>
          All Campaigns
        </button>
        <button className={styles.filterBtn}>Finance</button>
        <button className={styles.filterBtn}>Education</button>
        <button className={styles.filterBtn}>Creative</button>
      </div>

      <div className={styles.grid}>
        {SAMPLE_CAMPAIGNS.map((campaign) => (
          <div key={campaign.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.categoryBadge}>{campaign.category}</div>
              <div className={`${styles.statusBadge} ${styles[campaign.status]}`}>
                {campaign.status.toUpperCase()}
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.campaignName}>{campaign.name}</h3>
              <p className={styles.creator}>by {campaign.creator}</p>

              <div className={styles.progressSection}>
                <div className={styles.progressLabel}>
                  <span>Raised</span>
                  <span className={styles.amount}>
                    ${(campaign.raisedAmount / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{
                      width: `${(campaign.raisedAmount / campaign.goalAmount) * 100}%`,
                    }}
                  />
                </div>
                <div className={styles.goalText}>
                  Goal: ${(campaign.goalAmount / 1000).toFixed(0)}K
                </div>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>{campaign.backers}</span>
                  <span className={styles.statLabel}>Backers</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>
                    {Math.floor((campaign.raisedAmount / campaign.goalAmount) * 100)}%
                  </span>
                  <span className={styles.statLabel}>Funded</span>
                </div>
              </div>

              <p className={styles.deadline}>
                Ends: {new Date(campaign.deadline).toLocaleDateString()}
              </p>
            </div>

            <button className={styles.backButton}>Back This Project →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
