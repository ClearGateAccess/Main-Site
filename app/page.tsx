const Check = () => <span className="status-check" aria-hidden="true">✓</span>;

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="shell nav-shell">
          <a className="brand" href="#top" aria-label="ClearGate home">
            <img src={asset("/cleargate-logo-reversed.svg")} alt="ClearGate" width="166" height="48" />
          </a>
          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="#platform">Platform</a>
            <a href="#evidence">Evidence</a>
            <a href="#control">Control</a>
            <a href="#responsibility">Responsibility</a>
          </nav>
          <a className="nav-cta" href="#contact">Discuss a program <Arrow /></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="shell hero-copy-grid">
            <div className="hero-copy">
              <p className="hero-context">For pharmaceutical sponsors and research partners</p>
              <h1>From approved criteria to controlled consumer access.</h1>
            </div>
            <div className="hero-support">
              <p>ClearGate gives pharmaceutical sponsors a controlled way to translate product-specific criteria into deterministic qualification, validated releases, retailer authorization, operational monitoring, and traceable evidence.</p>
              <div className="hero-actions">
                <a className="button button-light" href="#contact">Discuss a sponsor program</a>
                <a className="text-link" href="#evidence">Inspect the evidence chain <Arrow /></a>
              </div>
            </div>
          </div>

          <div className="shell product-stage" aria-label="Synthetic ClearGate sponsor workspace demonstration">
            <div className="product-frame">
              <div className="product-topbar">
                <div className="window-brand">
                  <img src={asset("/cleargate-symbol-reversed.svg")} alt="" width="26" height="26" />
                  <span>ClearGate Sponsor Workspace</span>
                </div>
                <div className="workspace-meta">
                  <span>Harborstone Therapeutics</span>
                  <span className="environment">Production demo</span>
                  <span className="avatar" aria-hidden="true">MR</span>
                </div>
              </div>

              <div className="product-workspace">
                <aside className="product-sidebar" aria-label="Demonstration platform navigation">
                  <div className="program-switcher">
                    <span>Active program</span>
                    <strong>Virelixa</strong>
                    <small>VRX-ACNU-01</small>
                  </div>
                  <ul>
                    <li>Portfolio</li>
                    <li>Designer</li>
                    <li>Rules</li>
                    <li>Study</li>
                    <li className="active"><span>Releases</span><b>1</b></li>
                    <li>Vigilance</li>
                    <li>Evidence</li>
                  </ul>
                  <div className="sidebar-foot"><span className="system-dot" /> All services operational</div>
                </aside>

                <div className="release-workspace">
                  <div className="release-header">
                    <div>
                      <div className="breadcrumb">Programs / Virelixa / Releases</div>
                      <div className="release-title-row">
                        <h2>Release 1.1.0</h2>
                        <span className="verified-badge"><Check /> Ready for controlled release</span>
                      </div>
                      <p>Candidate manifest · CR-VRX-0007 · generated 22 Aug 2026, 14:32 ET</p>
                    </div>
                    <button type="button" className="ui-button">Review manifest</button>
                  </div>

                  <div className="readiness-strip" aria-label="Release readiness summary">
                    <div><span>Validation</span><strong>148 / 148</strong><small>tests passed</small></div>
                    <div><span>Requirements</span><strong>42 / 42</strong><small>fully traced</small></div>
                    <div><span>Approvals</span><strong>4 / 4</strong><small>signed</small></div>
                    <div><span>Open blockers</span><strong>0</strong><small>release blockers</small></div>
                  </div>

                  <div className="release-content">
                    <section className="trace-panel" aria-labelledby="trace-heading">
                      <div className="panel-heading">
                        <div><h3 id="trace-heading">Traceability coverage</h3><p>Requirement-to-test lineage for this release candidate</p></div>
                        <span className="coverage">100% covered</span>
                      </div>
                      <div className="trace-table" role="table" aria-label="Synthetic requirement traceability">
                        <div className="trace-row trace-head" role="row">
                          <span role="columnheader">Requirement</span><span role="columnheader">Rule</span><span role="columnheader">Validation</span><span role="columnheader">State</span>
                        </div>
                        <div className="trace-row" role="row">
                          <span role="cell"><strong>REQ-VRX-014</strong><small>Condition Alpha exclusion</small></span><span role="cell">VRX-003</span><span role="cell">TEST-083</span><span role="cell" className="table-state"><Check /> Passed</span>
                        </div>
                        <div className="trace-row" role="row">
                          <span role="cell"><strong>REQ-VRX-021</strong><small>Incomplete input safe state</small></span><span role="cell">VRX-011</span><span role="cell">TEST-112</span><span role="cell" className="table-state"><Check /> Passed</span>
                        </div>
                        <div className="trace-row" role="row">
                          <span role="cell"><strong>REQ-VRX-026</strong><small>Authorization expiry policy</small></span><span role="cell">VRX-018</span><span role="cell">TEST-127</span><span role="cell" className="table-state"><Check /> Passed</span>
                        </div>
                      </div>
                      <div className="lineage-path">
                        <span><b>REQ</b>REQ-VRX-014</span><i>→</i><span><b>QUESTION</b>Q-014</span><i>→</i><span><b>RULE</b>VRX-003</span><i>→</i><span><b>TEST</b>TEST-083</span><i>→</i><span className="passed"><b>RESULT</b>PASS</span>
                      </div>
                    </section>

                    <aside className="approval-panel" aria-label="Release approval record">
                      <div className="panel-heading"><div><h3>Approval record</h3><p>Signed release gates</p></div></div>
                      <ul className="approval-list">
                        <li><Check /><span><strong>Clinical</strong><small>Dr. Maya Rowan · 13:45</small></span></li>
                        <li><Check /><span><strong>Regulatory</strong><small>Elena Voss · 13:58</small></span></li>
                        <li><Check /><span><strong>Quality</strong><small>Samuel Ortiz · 14:11</small></span></li>
                        <li><Check /><span><strong>Validation</strong><small>System verified · 14:28</small></span></li>
                      </ul>
                      <div className="manifest-hash"><span>Manifest digest</span><code>sha256: 48c2…a91e</code><small>Immutable after release</small></div>
                    </aside>
                  </div>
                </div>
              </div>
              <div className="demo-bar"><strong>Synthetic product demonstration</strong><span>Virelixa, Harborstone, people, identifiers, criteria, approvals, and metrics are fictional. Not clinical guidance.</span></div>
            </div>
          </div>
        </section>

        <section className="why-section" id="platform">
          <div className="shell why-grid">
            <div className="section-statement">
              <span className="section-index">The operating problem</span>
              <h2>The assessment is only the visible step.</h2>
            </div>
            <div className="why-copy">
              <p className="lede">Some technology-assisted nonprescription programs require more than labeling alone. Once an additional digital condition becomes part of the access pathway, the sponsor needs more than a questionnaire.</p>
              <p>Product-specific criteria must become reproducible software behavior, move through controlled validation and release, and remain operable and reconstructable after launch.</p>
              <dl className="principle-list">
                <div><dt>Product-specific</dt><dd>Each program keeps its own sponsor-approved questions, rules, messages, measurements, authorization policy, and release history.</dd></div>
                <div><dt>Deterministic</dt><dd>Identical inputs under the same approved version produce the same result. Generative AI does not make the qualification decision.</dd></div>
                <div><dt>Operational</dt><dd>Study, runtime, retailer verification, monitoring, vigilance, CAPA, and evidence stay connected to the same controlled lineage.</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="evidence-section" id="evidence">
          <div className="shell evidence-intro">
            <div>
              <span className="section-index light">Product proof</span>
              <h2>Every material decision remains reconstructable.</h2>
            </div>
            <p>ClearGate connects sponsor intent, configuration, validation, approval, release, assessment, decision, authorization, and downstream verification in one operating history.</p>
          </div>

          <div className="shell evidence-board">
            <div className="evidence-main">
              <div className="artifact-label"><span>Decision lineage</span><b>AUTH-VRX-829401</b></div>
              <ol className="evidence-lineage">
                <li><span>01</span><div><strong>Assessment</strong><code>ASM-9B82F4C1</code></div><small>Completed 15:04:12 ET</small></li>
                <li><span>02</span><div><strong>Deterministic decision</strong><code>DEC-382910</code></div><small>Rule set VRX 1.1.0</small></li>
                <li><span>03</span><div><strong>Signed authorization</strong><code>AUTH-VRX-829401</code></div><small>Minimal permitted metadata</small></li>
                <li><span>04</span><div><strong>Retail verification</strong><code>BWPG-001</code></div><small>Verified and redeemed</small></li>
              </ol>
            </div>
            <aside className="authorization-card">
              <div className="auth-card-head"><span>Retail authorization</span><strong>VALID</strong></div>
              <div className="auth-product"><img src={asset("/cleargate-symbol.svg")} alt="" width="48" height="48" /><div><strong>Virelixa</strong><span>Harborstone Therapeutics</span></div></div>
              <dl>
                <div><dt>Authorization ID</dt><dd>AUTH-VRX-829401</dd></div>
                <div><dt>Release</dt><dd>1.1.0</dd></div>
                <div><dt>Valid until</dt><dd>22 Aug 2026 · 15:34 ET</dd></div>
                <div><dt>Redemption</dt><dd>Single use</dd></div>
              </dl>
              <p>Underlying questionnaire responses are not disclosed to the retailer by default.</p>
            </aside>
          </div>
          <p className="shell synthetic-caption">Synthetic demonstration data. No real drug, patient, clinical criteria, or transaction is represented.</p>
        </section>

        <section className="domains-section">
          <div className="shell domains-head">
            <h2>One controlled model from development to commercial access.</h2>
            <p>The platform spans three buyer-facing operating domains without forcing sponsors to stitch together disconnected point solutions.</p>
          </div>
          <div className="shell domain-rows">
            <article>
              <span>Develop</span><h3>Build and validate the program.</h3><p>Turn sponsor requirements into controlled questions, deterministic rules, study deployments, tests, approvals, and release evidence.</p><ul><li>Portfolio</li><li>Designer</li><li>Rules</li><li>Study</li></ul>
            </article>
            <article>
              <span>Operate</span><h3>Run access across channels.</h3><p>Deliver the approved consumer experience, issue minimal signed authorization, and connect physical and ecommerce retail environments.</p><ul><li>Runtime</li><li>Access</li><li>Integrate</li></ul>
            </article>
            <article>
              <span>Control</span><h3>Monitor, investigate, reconstruct.</h3><p>Detect failures, investigate impact, manage corrective action and controlled change, and preserve the evidence behind every material state.</p><ul><li>Vigilance</li><li>Evidence</li><li>Change control</li><li>Audit & quality</li></ul>
            </article>
          </div>
        </section>

        <section className="journey-section">
          <div className="shell journey-grid">
            <div className="journey-copy">
              <span className="section-index">Two views of one system</span>
              <h2>A short consumer flow. A complete operating record.</h2>
              <p>The consumer sees only the approved qualification experience. ClearGate retains the controlled lineage beneath every decision and authorization.</p>
            </div>
            <div className="dual-flow">
              <div className="flow-header"><span>Consumer experience</span><span>Controlled system record</span></div>
              <ol>
                <li><strong>Answer approved questions</strong><span>Assessment created against release 1.1.0</span></li>
                <li><strong>Receive approved result</strong><span>Decision stored with rule and reason codes</span></li>
                <li><strong>Present authorization</strong><span>Signed, time-limited authorization issued</span></li>
                <li><strong>Complete transaction</strong><span>Verification and redemption appended to lineage</span></li>
              </ol>
            </div>
          </div>
        </section>

        <section className="control-section" id="control">
          <div className="shell control-head">
            <div><span className="section-index amber">Designed for when things go wrong</span><h2>Failure handling is part of the product.</h2></div>
            <p>Signals become investigations, affected decisions can be identified, corrective action stays linked to evidence, and uncertainty never becomes qualification.</p>
          </div>

          <div className="shell incident-record">
            <div className="incident-header"><div><span className="signal-dot" /> Open investigation</div><strong>CASE-ACNU-0004</strong><span>Severity 2 · Synthetic demo</span></div>
            <div className="incident-timeline">
              <div><span>Signal</span><strong>Malformed lab units</strong><small>14:02</small></div>
              <div><span>Impact</span><strong>Assessments identified</strong><small>14:06</small></div>
              <div><span>Root cause</span><strong>Adapter validation gap</strong><small>15:14</small></div>
              <div><span>CAPA</span><strong>CAPA-0012 opened</strong><small>15:37</small></div>
              <div className="resolved"><span>Controlled change</span><strong>Corrected release validated</strong><small>18:22</small></div>
            </div>
          </div>

          <div className="shell control-principles">
            <article><strong>Fail-closed</strong><p>No reliable decision means no authorization.</p></article>
            <article><strong>Immutable releases</strong><p>Released configuration cannot be silently rewritten.</p></article>
            <article><strong>Separation of duties</strong><p>Authors, reviewers, approvers, operators, and retailers remain distinct.</p></article>
            <article><strong>Data minimization</strong><p>Retailers receive only what the approved transaction requires.</p></article>
          </div>
          <p className="shell architecture-note"><strong>Reference security baseline:</strong> tenant isolation, MFA and role-based access, encryption in transit and at rest, centralized secrets management, API authentication, rate limiting, input validation, and auditable administrative activity.</p>
        </section>

        <section className="responsibility-section" id="responsibility">
          <div className="shell responsibility-head">
            <h2>The sponsor keeps clinical control.</h2>
            <p>ClearGate operationalizes sponsor-defined pharmaceutical programs without becoming the prescriber, pharmacy, or independent regulatory decision-maker. Each party stays inside an explicit responsibility boundary.</p>
          </div>
          <div className="shell responsibility-grid">
            <article><span>01</span><h3>Pharmaceutical sponsor</h3><ul><li>Clinical criteria and regulatory strategy</li><li>Approved consumer content</li><li>Drug safety and sponsor obligations</li><li>Program oversight and accountability</li></ul></article>
            <article className="cleargate-role"><span>02</span><h3>ClearGate</h3><ul><li>Controlled configuration and deterministic execution</li><li>Validation evidence and release controls</li><li>Access control and security infrastructure</li><li>Monitoring, incident handling, and integration</li></ul></article>
            <article><span>03</span><h3>Retailer</h3><ul><li>Transaction processing and inventory</li><li>Authorization verification</li><li>Retail-specific consumer obligations</li><li>Authorization enforcement within its channel</li></ul></article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-grid">
            <div>
              <img src={asset("/cleargate-symbol-reversed.svg")} alt="" width="74" height="74" />
              <h2>Bring the program.<br />ClearGate brings the infrastructure.</h2>
            </div>
            <div className="contact-copy">
              <p>Bring a candidate asset, active switch program, or study requirement. Start with feasibility or carry the same controlled model into study, commercial runtime, retailer verification, and vigilance.</p>
              <a className="button button-green" href="mailto:contact@cleargateaccess.com?subject=ClearGate%20sponsor%20program%20inquiry">Discuss a sponsor program <Arrow /></a>
              <a className="contact-email" href="mailto:contact@cleargateaccess.com">contact@cleargateaccess.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <img src={asset("/cleargate-logo-reversed.svg")} alt="ClearGate" width="142" height="42" />
          <p>Controlled infrastructure for technology-assisted nonprescription access.</p>
          <div><a href="#top">Back to top ↑</a><span>© 2026 ClearGate</span></div>
        </div>
      </footer>
    </>
  );
}
