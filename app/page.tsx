import ContactForm from "./components/ContactForm";

const Check = () => <span className="status-check" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 8 3 3 7-7" /></svg></span>;

const Arrow = () => <svg className="arrow" aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 10h12m-5-5 5 5-5 5" /></svg>;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="shell nav-shell">
          <a className="brand" href="#top" aria-label="ClearGate home">
            <img src={asset("/cleargate-logo-reversed.svg")} alt="ClearGate" width="216" height="63" />
          </a>
          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="#platform">Platform</a>
            <a href="#products">Products</a>
            <a href="#evidence">Evidence</a>
            <a href="#partners">Partners</a>
            <a href="#questions">FAQs</a>
          </nav>
          <a className="nav-cta" href="#contact">Discuss your program <Arrow /></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="shell hero-copy-grid">
            <div className="hero-copy">
              <h1 id="hero-heading">Medication-access infrastructure for ACNU programs.</h1>
            </div>
            <div className="hero-support">
              <p>ClearGate helps pharmaceutical sponsors connect program design, access decisions, and pharmacy verification. Gatehouse manages the program. Passage verifies authorization at checkout.</p>
              <div className="hero-actions">
                <a className="button button-light" href="#contact">Discuss your program</a>
                <a className="text-link" href="#products">Explore the products <Arrow /></a>
              </div>
            </div>
          </div>

          <div className="shell hero-scope" aria-label="ClearGate platform scope">
            <div><span>Initial focus</span><strong>Additional Condition for Nonprescription Use (ACNU)</strong></div>
            <div><span>For sponsors and partners</span><strong>From program design to pharmacy checkout</strong></div>
            <div><span>Current stage</span><strong>Working demonstration · seeking design partners</strong></div>
          </div>

          <details className="shell product-stage demo-disclosure">
            <summary>Explore a Gatehouse release example <span>Illustrative workspace · fictional data</span></summary>
            <figure className="product-frame sponsor-frame" aria-label="Synthetic sponsor program workspace demonstration">
              <div className="product-topbar">
                <div className="window-brand">
                  <img src={asset("/cleargate-symbol-reversed.svg")} alt="" width="28" height="28" />
                  <span>Program Control</span>
                </div>
                <div className="workspace-meta">
                  <span>Harborstone Consumer Therapeutics</span>
                  <span className="environment">Sponsor workspace</span>
                  <span className="avatar" aria-hidden="true">MR</span>
                </div>
              </div>

              <div className="product-workspace">
                <aside className="product-sidebar" aria-label="Demonstration platform navigation">
                  <div className="program-switcher">
                    <span>Active program</span>
                    <strong>Virelixa 5 mg</strong>
                    <small>HCT-VRX-005 · PROJECT LIGHTHOUSE</small>
                  </div>
                  <ul>
                    <li>Portfolio</li>
                    <li>Questionnaire</li>
                    <li>Rules</li>
                    <li>Study</li>
                    <li className="active"><span>Releases</span><b>1</b></li>
                    <li>Runtime</li>
                    <li>Vigilance</li>
                    <li>Evidence</li>
                  </ul>
                  <div className="sidebar-foot"><span className="system-dot" /> Example service status</div>
                </aside>

                <div className="release-workspace">
                  <div className="release-header">
                    <div>
                      <div className="breadcrumb">Programs / Virelixa / Controlled releases</div>
                      <div className="release-title-row">
                        <strong className="release-ui-title">Release 1.1.0</strong>
                        <span className="verified-badge"><Check /> Ready for controlled release</span>
                      </div>
                      <p>Candidate manifest · CR-VRX-0007 · generated 25 Aug 2026, 09:42 ET</p>
                    </div>
                    <span className="ui-action">Review manifest</span>
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
                        <div><strong className="panel-title" id="trace-heading">Traceability coverage</strong><p>Requirement-to-test lineage for this release candidate</p></div>
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
                        <span><b>REQUIREMENT</b>REQ-VRX-014</span><i aria-hidden="true"><Arrow /></i><span><b>QUESTION</b>Q-014</span><i aria-hidden="true"><Arrow /></i><span><b>RULE</b>VRX-003</span><i aria-hidden="true"><Arrow /></i><span><b>TEST</b>TEST-083</span><i aria-hidden="true"><Arrow /></i><span className="passed"><b>RESULT</b>PASS</span>
                      </div>
                    </section>

                    <aside className="approval-panel" aria-label="Release approval record">
                      <div className="panel-heading"><div><strong className="panel-title">Approval record</strong><p>Signed release gates</p></div></div>
                      <ul className="approval-list">
                        <li><Check /><span><strong>Clinical</strong><small>Dr. Maya Rowan · 08:45</small></span></li>
                        <li><Check /><span><strong>Regulatory</strong><small>Elena Voss · 08:58</small></span></li>
                        <li><Check /><span><strong>Quality</strong><small>Samuel Ortiz · 09:11</small></span></li>
                        <li><Check /><span><strong>Validation</strong><small>System verified · 09:38</small></span></li>
                      </ul>
                      <div className="manifest-hash"><span>Manifest digest</span><code>sha256: 48c2…a91e</code><small>Immutable after release</small></div>
                    </aside>
                  </div>
                </div>
              </div>
              <figcaption className="demo-bar"><span>Illustrative workspace. All products, people, approvals, and metrics are fictional.</span></figcaption>
            </figure>
          </details>
        </section>

        <section className="platform-section" id="platform" aria-labelledby="platform-heading">
          <div className="shell platform-grid">
            <div className="section-statement">
              <h2 id="platform-heading">Connect the whole medication-access program.</h2>
            </div>
            <div className="platform-copy">
              <p className="lede">ACNU means Additional Condition for Nonprescription Use. Under the FDA framework, a consumer must complete an additional condition to obtain and appropriately use a specific nonprescription drug.</p>
              <p>ClearGate is designed to support technology-based ACNU programs: turn sponsor-defined criteria into versioned questions and rules, validate changes, verify authorization, and retain the records needed to review what happened.</p>
              <p className="scope-note"><strong>Designed for sponsor-specific implementation.</strong> The demonstration is not a commercially qualified deployment. Each implementation requires validation, security qualification, operating procedures, partner certification, and service agreements.</p>
              <dl className="principle-list">
                <div><dt>Product-specific</dt><dd>Each program has its own questions, rules, consumer messages, authorization policies, and release history.</dd></div>
                <div><dt>Deterministic</dt><dd>Identical inputs under the same approved version produce the same result. Generative AI does not make the qualification decision.</dd></div>
                <div><dt>Traceable</dt><dd>Study records, access decisions, transaction events, safety signals, and corrective actions remain linked to the program version.</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="products-section" id="products" aria-labelledby="products-heading">
          <div className="shell products-intro">
            <div>
              <h2 id="products-heading">Gatehouse and Passage. Connected, with clear roles.</h2>
            </div>
            <p>Gatehouse controls how the program is defined and run. Passage connects its approved outcomes to pharmacy and ecommerce verification. A signed handoff links the two.</p>
          </div>

          <div className="shell product-system">
            <article className="system-row">
              <div className="system-identity"><span>Program platform</span><strong>Gatehouse</strong></div>
              <div className="system-copy"><h3>Gatehouse: design and operate your program.</h3><p>Configure questionnaires and rules, prepare studies, validate releases, and review access decisions. Gatehouse records the program version behind each decision and signs the handoff to Passage.</p></div>
              <ul className="system-capabilities"><li>Portfolio and program configuration</li><li>Questionnaire and rule editing</li><li>Study deployments and scenarios</li><li>Validation and release approvals</li><li>Runtime and signed authorization</li><li>Safety monitoring, corrective actions, evidence</li></ul>
            </article>

            <div className="handoff-strip" aria-label="Controlled authorization handoff">
              <span>Approved release</span><i aria-hidden="true"><Arrow /></i><span>Deterministic decision</span><i aria-hidden="true"><Arrow /></i><strong>Signed, minimal handoff</strong><i aria-hidden="true"><Arrow /></i><span>Channel verification</span>
            </div>

            <article className="system-row">
              <div className="system-identity"><span>Authorization network</span><strong>Passage</strong></div>
              <div className="system-copy"><h3>Passage: verify authorization at checkout.</h3><p>Passage checks an approved upstream result, issues or verifies an authorization, and applies transaction policies. Pharmacy and ecommerce partners receive the information needed to verify access without receiving questionnaire answers.</p></div>
              <ul className="system-capabilities"><li>Shared product registry</li><li>Signed assertion and authorization validation</li><li>Verify, redeem, retry, and reverse</li><li>Point-of-sale and ecommerce integrations</li><li>Minimal data in partner responses</li><li>Append-only transaction ledger</li></ul>
            </article>
          </div>

          <p className="shell interoperability-note"><strong>Built to work with other systems.</strong> Passage can accept an approved result from Gatehouse or another approved upstream system. An authorization is not a prescription; clinical and prescribing responsibilities remain with the appropriate parties.</p>
        </section>

        <section className="network-demo-section" id="authorization-network" aria-labelledby="network-demo-heading">
          <div className="shell network-demo-head">
            <div><h2 id="network-demo-heading">Verify access in pharmacy and ecommerce workflows.</h2></div>
            <p>The Passage demonstration shows authorization checks, single-use redemption, safe retries, reversals, and a record of each transaction. The pharmacy and product below are fictional.</p>
          </div>

          <figure className="shell network-frame" aria-label="Synthetic authorization network and pharmacy verification demonstration">
            <div className="network-topbar">
              <img src={asset("/passage-logo.png")} alt="Passage" width="150" height="48" loading="lazy" />
              <div><span className="network-health"><i /> Example service status</span></div>
            </div>
            <div className="network-workspace">
              <aside className="network-sidebar" aria-label="Authorization network demonstration navigation">
                <strong>Authorization network</strong>
                <ul><li>Threshold overview</li><li>Program handoff</li><li>Authorization & actors</li><li className="active">Brightwell POS</li><li>Brightwell ecommerce</li><li>Registry & lifecycle</li><li>Ledger & search</li><li>Evidence & lineage</li><li>Operations & faults</li></ul>
              </aside>

              <div className="network-main">
                <div className="network-page-head">
                  <div><span>BRIGHTWELL PHARMACY GROUP · BWPG-001</span><strong className="network-ui-title">Authorization verification</strong><p>Product detected at checkout · Location AVL-014</p></div>
                  <span className="partner-badge">Partner authenticated</span>
                </div>

                <div className="verification-layout">
                  <section className="pos-panel" aria-labelledby="pos-heading">
                    <div className="panel-heading"><div><strong className="panel-title" id="pos-heading">Brightwell POS</strong><p>Reference pharmacy adapter</p></div></div>
                    <div className="product-detected"><div className="pack-mini"><img src={asset("/cleargate-symbol.svg")} alt="" width="36" height="36" /></div><div><span>Product detected</span><strong>Virelixa 5 mg</strong><small>NDC 00000-0000-00 · Qty 1</small></div><b>Access required</b></div>
                    <div className="scan-zone"><span>Authorization presented</span><code>cgp1.eyJraWQiOiJwYXNzYWdlLWtleS0wMSI…</code></div>
                    <div className="verification-result"><Check /><div><strong>Authorization valid</strong><span>Single-use · product and location policy matched</span></div><b>VALID</b></div>
                  </section>

                  <aside className="transaction-panel" aria-label="Synthetic transaction detail">
                    <div className="panel-heading"><div><strong className="panel-title">Transaction state</strong><p>Append-only lifecycle</p></div></div>
                    <dl><div><dt>Authorization</dt><dd>AUTH-VRX-829401</dd></div><div><dt>Retailer</dt><dd>BWPG-001</dd></div><div><dt>Location</dt><dd>AVL-014</dd></div><div><dt>Release</dt><dd>VRX 1.1.0</dd></div><div><dt>Policy</dt><dd>POL-VRX-SU-01</dd></div></dl>
                    <div className="transaction-state"><span>Current state</span><strong>VERIFIED</strong><small>Ready for atomic redemption</small></div>
                  </aside>
                </div>

                <div className="ledger-preview" role="region" aria-label="Example transaction ledger; scroll horizontally on small screens" tabIndex={0}>
                  <div className="ledger-heading"><strong>Recent network activity</strong><span>Immutable transaction lineage</span></div>
                  <div className="ledger-row ledger-head"><span>Time</span><span>Event</span><span>Actor</span><span>Authorization</span><span>Result</span></div>
                  <div className="ledger-row"><span>10:32:08</span><span>VERIFY</span><span>BWPG-001 / AVL-014</span><span>AUTH-VRX-829401</span><span className="result-ok">VALID</span></div>
                  <div className="ledger-row"><span>10:31:44</span><span>ISSUE</span><span>HCT / Gatehouse</span><span>AUTH-VRX-829401</span><span className="result-ok">ISSUED</span></div>
                  <div className="ledger-row"><span>10:28:19</span><span>REVERSE</span><span>BWPG-001 / AVL-006</span><span>AUTH-VRX-735280</span><span>REVERSED</span></div>
                </div>
              </div>
            </div>
            <figcaption className="demo-bar"><span>Synthetic data · fictional product, pharmacy, identity, and transaction records.</span></figcaption>
          </figure>
        </section>

        <section className="evidence-section" id="evidence" aria-labelledby="evidence-heading">
          <div className="shell evidence-intro">
            <div><h2 id="evidence-heading">Trace each decision to its program version.</h2></div>
            <p>Review which rules were used, which release was approved, and how an authorization reached the retailer. The example below shows how assessment and transaction records stay connected.</p>
          </div>

          <div className="shell evidence-board">
            <div className="evidence-main">
              <div className="artifact-label"><span>Decision and transaction lineage</span><b>AUTH-VRX-829401</b></div>
              <ol className="evidence-lineage"><li><span>01</span><div><strong>Assessment</strong><code>ASM-9B82F4C1</code></div><small>Completed against release 1.1.0</small></li><li><span>02</span><div><strong>Deterministic decision</strong><code>DEC-382910</code></div><small>Reason codes and rule version retained</small></li><li><span>03</span><div><strong>Signed authorization</strong><code>AUTH-VRX-829401</code></div><small>Minimal permitted metadata only</small></li><li><span>04</span><div><strong>Retail verification</strong><code>TXN-70F18A</code></div><small>Partner, location, policy, and state linked</small></li></ol>
            </div>
            <aside className="authorization-card">
              <div className="auth-card-head"><span>Retail authorization</span><strong>VALID</strong></div>
              <div className="auth-product"><img src={asset("/cleargate-symbol.svg")} alt="" width="48" height="48" /><div><strong>Virelixa 5 mg</strong><span>Harborstone Consumer Therapeutics</span></div></div>
              <dl><div><dt>Authorization ID</dt><dd>AUTH-VRX-829401</dd></div><div><dt>Release</dt><dd>1.1.0</dd></div><div><dt>Valid until</dt><dd>25 Aug 2026 · 11:02 ET</dd></div><div><dt>Redemption</dt><dd>Single use</dd></div></dl>
              <p>Underlying questionnaire responses are not disclosed to the retailer by default.</p>
            </aside>
          </div>
          <p className="shell synthetic-caption">Synthetic demonstration data. No real drug, consumer, clinical criteria, identity, or transaction is represented.</p>
        </section>

        <section className="capabilities-section" id="capabilities" aria-labelledby="capabilities-heading">
          <div className="shell capabilities-head"><h2 id="capabilities-heading">From program design to ongoing oversight.</h2><p>Explore the workflows demonstrated across Gatehouse and Passage.</p></div>
          <div className="shell capability-rows">
            <article><span>Feasibility</span><h3>Portfolio and program definition</h3><p>Define candidate products, sponsor objectives, program owners, system boundaries, and release versions.</p><ul><li>Portfolio</li><li>Program ownership</li><li>Tenant isolation</li></ul></article>
            <article><span>Design</span><h3>Questionnaires and deterministic rules</h3><p>Approved questions, criteria, reason codes, outcome messages, rule tests, and change history stay versioned and traceable.</p><ul><li>Designer</li><li>Rules</li><li>Validation</li></ul></article>
            <article><span>Research</span><h3>Study deployment and evidence</h3><p>Study-specific configuration supports sponsor and research workflows while preserving the relationship to the future operating model.</p><ul><li>Study versions</li><li>Scenarios</li><li>Evidence export</li></ul></article>
            <article><span>Operate</span><h3>Runtime, decisions, and authorization</h3><p>Consumers receive only the approved experience while decisions remain deterministic, version-bound, and ready for minimal signed handoff.</p><ul><li>Defined outcomes</li><li>Fail-closed</li><li>Authorization policy</li></ul></article>
            <article><span>Integrate</span><h3>Pharmacy, ecommerce, and channel adapters</h3><p>Verification and transaction enforcement stay separate from clinical logic through scoped, versioned partner contracts.</p><ul><li>POS</li><li>Ecommerce</li><li>Verify / redeem / reverse</li></ul></article>
            <article><span>Control</span><h3>Safety monitoring, corrective actions, and audit</h3><p>Signals become investigations, affected records can be identified, corrective action stays linked, and released history cannot be silently rewritten.</p><ul><li>Vigilance</li><li>Corrective and preventive action (CAPA)</li><li>Evidence lineage</li></ul></article>
          </div>
          <p className="shell demo-status-note"><strong>Demonstration scope:</strong> the screens use fictional data. Commercial use requires sponsor-specific validation, security qualification, partner certification, operating procedures, and service agreements.</p>
        </section>

        <section className="control-section" id="control" aria-labelledby="control-heading">
          <div className="shell control-head"><div><h2 id="control-heading">Keep control when something goes wrong.</h2></div><p>Trace an issue to affected decisions and transactions, investigate its cause, and link corrective action to a controlled release. The example below illustrates that workflow.</p></div>
          <div className="shell incident-record"><div className="incident-header"><div><span className="signal-dot" /> Open investigation</div><strong>CASE-ACNU-0004</strong><span>Severity 2 · Synthetic demo</span></div><div className="incident-timeline"><div><span>Signal</span><strong>Malformed lab units</strong><small>14:02</small></div><div><span>Impact</span><strong>Assessments identified</strong><small>14:06</small></div><div><span>Root cause</span><strong>Adapter validation gap</strong><small>15:14</small></div><div><span>CAPA</span><strong>CAPA-0012 opened</strong><small>15:37</small></div><div className="resolved"><span>Controlled change</span><strong>Corrected release validated</strong><small>18:22</small></div></div></div>
          <div className="shell control-principles"><article><strong>Fail-closed behavior</strong><p>If a reliable decision or valid authorization is unavailable, access is not permitted.</p></article><article><strong>Immutable released history</strong><p>Released configuration and ledger events cannot be silently rewritten.</p></article><article><strong>Separation of duties</strong><p>Authors, approvers, operators, source systems, and retailers remain distinct.</p></article><article><strong>Data minimization</strong><p>Each downstream actor receives only what its approved transaction requires.</p></article></div>
        </section>

        <section className="partners-section" id="partners" aria-labelledby="partners-heading">
          <div className="shell partners-intro"><div><h2 id="partners-heading">Build the next stage with ClearGate.</h2></div><p>We are seeking pharmaceutical sponsors, research organizations, pharmacy technology teams, and advisors to help shape program requirements and plan pilot implementations.</p></div>
          <div className="shell partner-rows">
            <article><div className="partner-type"><span>Sponsor</span><h3>Pharmaceutical and consumer-health companies</h3></div><p>Discuss a candidate product, an active or planned Rx-to-nonprescription program, or a medication-access workflow that needs supporting infrastructure.</p><ul><li>Candidate-program feasibility</li><li>Design engagement</li><li>Sponsor-led pilot planning</li></ul></article>
            <article><div className="partner-type"><span>Research</span><h3>Contract research and consumer-behavior research organizations</h3></div><p>Partners equipped to design or operate label comprehension, self-selection, actual-use, human-factors, or adjacent research against a controlled program configuration.</p><ul><li>Study workflow design</li><li>Research-site operations</li><li>Evidence and data handoff</li></ul></article>
            <article><div className="partner-type"><span>Channel</span><h3>Pharmacy, retailer, and ecommerce technology teams</h3></div><p>Partners willing to shape how product detection, verification, redemption, reversal, exception handling, and channel accountability should work in practice.</p><ul><li>Reference adapter collaboration</li><li>POS or ecommerce pilot</li><li>Partner certification model</li></ul></article>
            <article><div className="partner-type"><span>Advisory</span><h3>Regulatory, quality, vigilance, and industry operators</h3></div><p>Experienced operators who can pressure-test responsibility boundaries, validation strategy, failure procedures, quality systems, and sponsor buying requirements.</p><ul><li>Regulatory and quality review</li><li>Vigilance operating model</li><li>Strategic or technical advisory</li></ul></article>
          </div>
          <div className="shell first-engagement"><div><h3>A practical path to a pilot.</h3><p>We can begin before every downstream vendor or implementation detail is selected.</p></div><ol><li><span>1</span><strong>Choose a program</strong><small>Candidate asset, study, pathway, or channel pilot</small></li><li><span>2</span><strong>Define the boundary</strong><small>Owners, criteria, systems, evidence, and success measures</small></li><li><span>3</span><strong>Configure the model</strong><small>Synthetic workflow, rules, authorization, and integrations</small></li><li><span>4</span><strong>Plan the evidence</strong><small>Validation, research, pilot, and operating readiness</small></li></ol></div>
        </section>

        <section className="responsibility-section" id="responsibility" aria-labelledby="responsibility-heading">
          <div className="shell responsibility-head"><h2 id="responsibility-heading">Clear responsibilities at every stage.</h2><p>Sponsors retain clinical criteria, regulatory strategy, and product obligations. ClearGate provides the software that implements program rules and records its operation.</p></div>
          <div className="shell responsibility-grid"><article><span>Pharmaceutical sponsor</span><h3>Owns the product and program.</h3><ul><li>Clinical criteria and regulatory strategy</li><li>Approved consumer content</li><li>Drug safety and sponsor obligations</li><li>Program oversight and accountability</li></ul></article><article className="cleargate-role"><span>ClearGate</span><h3>Provides the controlled operating layer.</h3><ul><li>Configuration and deterministic execution</li><li>Validation evidence and release controls</li><li>Authorization exchange and integration</li><li>Monitoring, incidents, and traceability</li></ul></article><article><span>Licensed clinician · future pathways</span><h3>Retains medical judgment.</h3><ul><li>Clinical evaluation where required</li><li>Prescribing authority</li><li>Clinician-patient relationship</li><li>Professional and jurisdictional obligations</li></ul></article><article><span>Retail or research partner</span><h3>Performs its approved channel role.</h3><ul><li>Transaction or study operations</li><li>Authorization enforcement where applicable</li><li>Partner-specific consumer obligations</li><li>Evidence and exception handling</li></ul></article></div>
        </section>

        <section className="faq-section" id="questions" aria-labelledby="questions-heading">
          <div className="shell faq-grid">
            <div><h2 id="questions-heading">Questions about ClearGate and ACNU.</h2><p>Understand the framework, the products, and what comes next.</p></div>
            <div className="faq-list">
              <details open><summary>What is an ACNU program?</summary><p>An Additional Condition for Nonprescription Use is an extra step a consumer must complete to obtain and appropriately use a particular nonprescription drug when labeling alone is insufficient. A technology-based assessment may support that condition. Requirements and FDA approval are specific to the drug product.</p><p><a href="https://www.fda.gov/drugs/over-counter-otc-nonprescription-drugs/nonprescription-drug-product-additional-condition-nonprescription-use">Read the FDA’s ACNU framework</a>.</p></details>
              <details><summary>How do Gatehouse and Passage work together?</summary><p>Gatehouse manages program configuration, validation, releases, and access decisions. Passage verifies the signed upstream result and manages authorization checks and transaction records for pharmacy and ecommerce partners.</p></details>
              <details><summary>Is ClearGate ready for commercial use?</summary><p>ClearGate is currently a working enterprise demonstration using fictional data. A commercial implementation requires sponsor-specific validation, security qualification, operating procedures, partner certification, and service agreements. We are seeking design and pilot partners.</p></details>
              <details><summary>Does ClearGate make clinical or prescribing decisions?</summary><p>Gatehouse applies sponsor-defined rules consistently; generative AI does not decide qualification. Sponsors retain responsibility for clinical criteria and regulatory strategy. Clinician-mediated prescription workflows are a potential future extension, in which licensed clinicians would retain medical judgment and prescribing authority.</p></details>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="shell contact-grid">
            <div className="contact-statement">
              <img src={asset("/cleargate-symbol-reversed.svg")} alt="" width="84" height="84" />
              <h2 id="contact-heading">Discuss your medication-access program.</h2>
              <p>Tell us about your product, program stage, or integration needs. We can walk through Gatehouse and Passage and discuss the requirements for a design engagement or pilot.</p>
              <dl className="contact-expectations">
                <div><dt>Good first attendees</dt><dd>Commercial, regulatory, clinical, quality, research, and technical owners</dd></div>
                <div><dt>Useful starting material</dt><dd>Program hypothesis, target channel, open risks, and timing</dd></div>
                <div><dt>Current priority</dt><dd>Design sponsors, research collaborators, pilot channels, and advisors</dd></div>
              </dl>
              <p className="contact-alternative">Email the team: <a href="mailto:contact@cleargateaccess.com">contact@cleargateaccess.com</a></p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="shell footer-grid"><img src={asset("/cleargate-logo-reversed.svg")} alt="ClearGate" width="174" height="51" /><div><span>Controlled medication-access infrastructure</span><span>ACNU is the initial program focus</span></div><nav aria-label="Footer navigation"><a href="#products">Products</a><a href="#questions">FAQs</a><a href="#contact">Contact</a></nav></div></footer>
    </>
  );
}

