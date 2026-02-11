import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>STACKSLAUNCH</h1>
          <p className={styles.subtitle}>
            &gt; Trustless Fundraising Platform
          </p>
        </header>

        <section className={styles.hero}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalControl}>●</span>
              <span className={styles.terminalControl}>●</span>
              <span className={styles.terminalControl}>●</span>
            </div>
            <div className={styles.terminalContent}>
              <p>$ stackslaunch --init</p>
              <p className={styles.accent}>
                &gt; Initializing Campaign Discovery Engine v1.0
              </p>
              <p>$ list --campaigns</p>
              <p className={styles.accent}>
                &gt; [LOADING] Active Fundraising Campaigns...
              </p>
              <p>
                Querying Stacks blockchain...
                <span className={styles.blink}>_</span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <h3>🚀 App Shell</h3>
            <p>Tailwind 4 "Launch" themed UI foundation</p>
          </div>
          <div className={styles.featureCard}>
            <h3>🔗 Wallet Integration</h3>
            <p>StacksProvider with session persistence</p>
          </div>
          <div className={styles.featureCard}>
            <h3>📊 Campaign Discovery</h3>
            <p>Interactive grid with progress visualization</p>
          </div>
          <div className={styles.featureCard}>
            <h3>💳 Contribution Flow</h3>
            <p>Modal-based form with live validation</p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>StacksLaunch &copy; 2024 | Powered by Stacks</p>
        </footer>
      </div>
    </main>
  );
}
