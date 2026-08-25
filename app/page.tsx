import ContactForm from "./components/ContactForm";

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
            <img src={asset("/cleargate-logo-reversed.svg")} alt="ClearGate" width="216" height="63" />
          </a>
          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="#platform">Platform</a>
            <a href="#products">Products</a>
            <a href="#evidence">Evidence</a>
            <a href="#partners">Partners</a>
          </nav>
          <a className="nav-cta" href="#contact">Discuss a program <Arrow /></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="shell hero-copy-grid">
            <div className="hero-copy">
              <p className="hero-context">Controlled medication-access infrastructure</p>
              <h1>Build the access pathway. Control every handoff.</h1>
            </div>
            <div className="hero-support">
              <p>ClearGate gives pharmaceutical sponsors the program controls, deterministic runtime, authorization exchange, and evidence infrastructure needed to move from approved criteria to a controlled transaction.</p>
              <div className="hero-actions">
                <a className="button button-light" href="#contact">Discuss a sponsor program</a>
                <a className="text-link" href="#products">See the operating model <Arrow /></a>
              </div>
            </div>
          </div>

          <div className="shell hero-scope" aria-label="ClearGate platform scope">
            <div><span>Initial program focus</span><strong>Additional Condition for Nonprescription Use</strong></div>
            <div><span>Operating span</span><strong>Program design through retail transaction</strong></div>
            <div><span>Decision model</span><strong>Deterministic and sponsor controlled</strong></div>
          </div>

          <div className="shell product-stage" aria-label="Synthetic sponsor program workspace demonstration">
            <div className="product-frame sponsor-frame">
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
                  <div className="sidebar-foot"><span className="system-dot" /> All services operational</div>
                </aside>

                <div className="release-workspace">
                  <div className="release-header">
                    <div>
                      <div className="breadcrumb">Programs / Virelixa / Controlled releases</div>
                      <div className="release-title-row">
                        <h2>Release 1.1.0</h2>
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
                        <span><b>REQUIREMENT</b>REQ-VRX-014</span><i>→</i><span><b>QUESTION</b>Q-014</span><i>→</i><span><b>RULE</b>VRX-003</span><i>→</i><span><b>TEST</b>TEST-083</span><i>→</i><span className="passed"><b>RESULT</b>PASS</span>
                      </div>
                    </section>

                    <aside className="approval-panel" aria-label="Release approval record">
                      <div className="panel-heading"><div><h3>Approval record</h3><p>Signed release gates</p></div></div>
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
              <div className="demo-bar"><span>Synthetic data · fictional products, people, approvals, and metrics.</span></div>
            </div>
          </div>
        </section>

        <section className="platform-section" id="platform">
          <div className="shell platform-grid">
            <div className="section-statement">
              <span className="section-label">The operating problem</span>
              <h2>The digital assessment is only the visible step.</h2>
            </div>
            <div className="platform-copy">
              <p className="lede">ClearGate is initially designed around Additional Condition for Nonprescription Use (ACNU) programs, where a product-specific technology condition may become part of the path to nonprescription access.</p>
              <p>That path requires more than a questionnaire. Sponsor intent must become controlled software; releases must be validated; permitted outcomes must create minimal, verifiable authorization; and the operating history must remain reconstructable after launch.</p>
              <p className="scope-note"><strong>Built beyond one regulatory pathway.</strong> The same release, authorization, integration, audit, and evidence layers can later support clinician-mediated prescription workflows. In those programs, licensed clinicians retain medical judgment and prescribing authority.</p>
              <dl className="principle-list">
                <div><dt>Product-specific</dt><dd>Each program keeps its own approved questions, rules, messages, measurements, authorization policy, and release history.</dd></div>
                <div><dt>Deterministic</dt><dd>Identical inputs under the same approved version produce the same result. Generative AI does not make the qualification decision.</dd></div>
                <div><dt>Operational</dt><dd>Study, runtime, verification, monitoring, vigilance, CAPA, and evidence remain connected to one controlled lineage.</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="shell products-intro">
            <div>
              <span className="section-label light">Platform architecture</span>
              <h2>Two products. One controlled operating model.</h2>
            </div>
            <p>The enterprise demo separates sponsor program control from downstream transaction enforcement. Each product has a narrow responsibility, explicit trust boundary, and auditable handoff.</p>
          </div>

          <div className="shell product-system">
            <article className="system-row">
              <div className="system-identity"><span>Program platform</span><strong>Gatehouse</strong></div>
              <div className="system-copy"><h3>Design, validate, release, and operate the program.</h3><p>Sponsor-approved requirements become controlled questionnaires, deterministic rules, study configurations, runtime decisions, signed authorization assertions, and evidence.</p></div>
              <ul className="system-capabilities"><li>Portfolio and program configuration</li><li>Questionnaire and rule editing</li><li>Study deployments and scenarios</li><li>Validation and release approvals</li><li>Runtime and signed authorization</li><li>Vigilance, incidents, CAPA, evidence</li></ul>
            </article>

            <div className="handoff-strip" aria-label="Controlled authorization handoff">
              <span>Approved release</span><i>→</i><span>Deterministic decision</span><i>→</i><strong>Signed, minimal handoff</strong><i>→</i><span>Channel verification</span>
            </div>

            <article className="system-row">
              <div className="system-identity"><span>Authorization network</span><strong>Passage</strong></div>
              <div className="system-copy"><h3>Verify and enforce access at the transaction boundary.</h3><p>A standards-neutral service validates approved upstream fulfillment, issues or verifies a pharmacy-verifiable authorization, enforces policy, and records each transaction state without receiving questionnaire answers.</p></div>
              <ul className="system-capabilities"><li>Canonical product registry</li><li>Signed assertion and authorization validation</li><li>Verify, redeem, retry, and reverse</li><li>POS and ecommerce adapter model</li><li>Privacy-minimized partner responses</li><li>Append-only transaction ledger</li></ul>
            </article>
          </div>

          <p className="shell interoperability-note"><strong>Modular by design:</strong> the authorization network can accept an approved fulfillment from the ClearGate program platform or another approved upstream operationalization. It does not make the clinical decision and does not turn an authorization into a prescription.</p>
        </section>

        <section className="network-demo-section" aria-labelledby="network-demo-heading">
          <div className="shell network-demo-head">
            <div><span className="section-label">Downstream transaction surface</span><h2 id="network-demo-heading">Authorization that can move through the channel.</h2></div>
            <p>Verification, redemption, idempotent retry, reversal, product lifecycle control, and transaction lineage are demonstrated across pharmacy and ecommerce reference flows.</p>
          </div>

          <div className="shell network-frame" aria-label="Synthetic authorization network and pharmacy verification demonstration">
            <div className="network-topbar">
              <img src={asset("/passage-logo.png")} alt="Passage" width="150" height="48" />
              <div><span className="network-health"><i /> All services operational</span></div>
            </div>
            <div className="network-workspace">
              <aside className="network-sidebar" aria-label="Authorization network demonstration navigation">
                <strong>Authorization network</strong>
                <ul><li>Threshold overview</li><li>Program handoff</li><li>Authorization & actors</li><li className="active">Brightwell POS</li><li>Brightwell ecommerce</li><li>Registry & lifecycle</li><li>Ledger & search</li><li>Evidence & lineage</li><li>Operations & faults</li></ul>
              </aside>

              <div className="network-main">
                <div className="network-page-head">
                  <div><span>BRIGHTWELL PHARMACY GROUP · BWPG-001</span><h3>Authorization verification</h3><p>Product detected at checkout · Location AVL-014</p></div>
                  <span className="partner-badge">Partner authenticated</span>
                </div>

                <div className="verification-layout">
                  <section className="pos-panel" aria-labelledby="pos-heading">
                    <div className="panel-heading"><div><h4 id="pos-heading">Brightwell POS</h4><p>Reference pharmacy adapter</p></div></div>
                    <div className="product-detected"><div className="pack-mini"><img src={asset("/cleargate-symbol.svg")} alt="" width="36" height="36" /></div><div><span>Product detected</span><strong>Virelixa 5 mg</strong><small>NDC 00000-0000-00 · Qty 1</small></div><b>Access required</b></div>
                    <div className="scan-zone"><span>Authorization presented</span><code>cgp1.eyJraWQiOiJwYXNzYWdlLWtleS0wMSI…</code></div>
                    <div className="verification-result"><Check /><div><strong>Authorization valid</strong><span>Single-use · product and location policy matched</span></div><b>VALID</b></div>
                  </section>

                  <aside className="transaction-panel" aria-label="Synthetic transaction detail">
                    <div className="panel-heading"><div><h4>Transaction state</h4><p>Append-only lifecycle</p></div></div>
                    <dl><div><dt>Authorization</dt><dd>AUTH-VRX-829401</dd></div><div><dt>Retailer</dt><dd>BWPG-001</dd></div><div><dt>Location</dt><dd>AVL-014</dd></div><div><dt>Release</dt><dd>VRX 1.1.0</dd></div><div><dt>Policy</dt><dd>POL-VRX-SU-01</dd></div></dl>
                    <div className="transaction-state"><span>Current state</span><strong>VERIFIED</strong><small>Ready for atomic redemption</small></div>
                  </aside>
                </div>

                <div className="ledger-preview">
                  <div className="ledger-heading"><strong>Recent network activity</strong><span>Immutable transaction lineage</span></div>
                  <div className="ledger-row ledger-head"><span>Time</span><span>Event</span><span>Actor</span><span>Authorization</span><span>Result</span></div>
                  <div className="ledger-row"><span>10:32:08</span><span>VERIFY</span><span>BWPG-001 / AVL-014</span><span>AUTH-VRX-829401</span><span className="result-ok">VALID</span></div>
                  <div className="ledger-row"><span>10:31:44</span><span>ISSUE</span><span>HCT / Gatehouse</span><span>AUTH-VRX-829401</span><span className="result-ok">ISSUED</span></div>
                  <div className="ledger-row"><span>10:28:19</span><span>REVERSE</span><span>BWPG-001 / AVL-006</span><span>AUTH-VRX-735280</span><span>REVERSED</span></div>
                </div>
              </div>
            </div>
            <div className="demo-bar"><span>Synthetic data · fictional product, pharmacy, identity, and transaction records.</span></div>
          </div>
        </section>

        <section className="evidence-section" id="evidence">
          <div className="shell evidence-intro">
            <div><span className="section-label light">Evidence lineage</span><h2>Every material decision remains reconstructable.</h2></div>
            <p>ClearGate connects sponsor intent, configuration, validation, approval, release, assessment, decision, authorization, verification, and transaction state in one inspectable operating history.</p>
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

        <section className="capabilities-section">
          <div className="shell capabilities-head"><h2>Full lifecycle coverage without stitching together point solutions.</h2><p>The enterprise demo is built to show the operating depth required around an access pathway—not simply the front-end assessment.</p></div>
          <div className="shell capability-rows">
            <article><span>Feasibility</span><h3>Portfolio and program definition</h3><p>Candidate products, sponsor objectives, product releases, operationalizations, and program boundaries remain explicitly controlled.</p><ul><li>Portfolio</li><li>Program ownership</li><li>Tenant isolation</li></ul></article>
            <article><span>Design</span><h3>Questionnaires and deterministic rules</h3><p>Approved questions, criteria, reason codes, outcome messages, rule tests, and change history stay versioned and traceable.</p><ul><li>Designer</li><li>Rules</li><li>Validation</li></ul></article>
            <article><span>Research</span><h3>Study deployment and evidence</h3><p>Study-specific configuration supports sponsor and research workflows while preserving the relationship to the future operating model.</p><ul><li>Study versions</li><li>Scenarios</li><li>Evidence export</li></ul></article>
            <article><span>Operate</span><h3>Runtime, decisions, and authorization</h3><p>Consumers receive only the approved experience while decisions remain deterministic, version-bound, and ready for minimal signed handoff.</p><ul><li>Six outcomes</li><li>Fail-closed</li><li>Authorization policy</li></ul></article>
            <article><span>Integrate</span><h3>Pharmacy, ecommerce, and channel adapters</h3><p>Verification and transaction enforcement stay separate from clinical logic through scoped, versioned partner contracts.</p><ul><li>POS</li><li>Ecommerce</li><li>Verify / redeem / reverse</li></ul></article>
            <article><span>Control</span><h3>Vigilance, incidents, CAPA, and audit</h3><p>Signals become investigations, affected records can be identified, corrective action stays linked, and released history cannot be silently rewritten.</p><ul><li>Vigilance</li><li>CAPA</li><li>Evidence lineage</li></ul></article>
          </div>
          <p className="shell demo-status-note"><strong>Current status:</strong> production-shaped enterprise demonstration. Commercial implementations require sponsor-specific validation, security qualification, operating procedures, partner certification, and contractual service design.</p>
        </section>

        <section className="control-section" id="control">
          <div className="shell control-head"><div><span className="section-label amber">Designed for adverse conditions</span><h2>Failure handling is part of the product.</h2></div><p>Signals become investigations, affected decisions and transactions can be identified, corrective action stays linked to evidence, and uncertainty never becomes qualification or a valid authorization.</p></div>
          <div className="shell incident-record"><div className="incident-header"><div><span className="signal-dot" /> Open investigation</div><strong>CASE-ACNU-0004</strong><span>Severity 2 · Synthetic demo</span></div><div className="incident-timeline"><div><span>Signal</span><strong>Malformed lab units</strong><small>14:02</small></div><div><span>Impact</span><strong>Assessments identified</strong><small>14:06</small></div><div><span>Root cause</span><strong>Adapter validation gap</strong><small>15:14</small></div><div><span>CAPA</span><strong>CAPA-0012 opened</strong><small>15:37</small></div><div className="resolved"><span>Controlled change</span><strong>Corrected release validated</strong><small>18:22</small></div></div></div>
          <div className="shell control-principles"><article><strong>Fail-closed behavior</strong><p>No reliable decision or authorization state becomes permitted access.</p></article><article><strong>Immutable released history</strong><p>Released configuration and ledger events cannot be silently rewritten.</p></article><article><strong>Separation of duties</strong><p>Authors, approvers, operators, source systems, and retailers remain distinct.</p></article><article><strong>Data minimization</strong><p>Each downstream actor receives only what its approved transaction requires.</p></article></div>
        </section>

        <section className="partners-section" id="partners">
          <div className="shell partners-intro"><div><span className="section-label">Design and launch partners</span><h2>Help shape the operating standard.</h2></div><p>ClearGate is seeking a small number of serious partners who can bring a real program, research objective, transaction channel, or regulated-operations perspective into the next stage of development.</p></div>
          <div className="shell partner-rows">
            <article><div className="partner-type"><span>Sponsor</span><h3>Pharmaceutical and consumer-health companies</h3></div><p>Best fit: a commercially meaningful asset, an active or planned Rx-to-nonprescription program, or a controlled-access use case without a mature internal software platform.</p><ul><li>Candidate-program feasibility</li><li>Design engagement or LOI</li><li>Sponsor-led pilot planning</li></ul></article>
            <article><div className="partner-type"><span>Research</span><h3>CROs and consumer-behavior research organizations</h3></div><p>Partners equipped to design or operate label comprehension, self-selection, actual-use, human-factors, or adjacent research against a controlled program configuration.</p><ul><li>Study workflow design</li><li>Research-site operations</li><li>Evidence and data handoff</li></ul></article>
            <article><div className="partner-type"><span>Channel</span><h3>Pharmacy, retailer, and ecommerce technology teams</h3></div><p>Partners willing to shape how product detection, verification, redemption, reversal, exception handling, and channel accountability should work in practice.</p><ul><li>Reference adapter collaboration</li><li>POS or ecommerce pilot</li><li>Partner certification model</li></ul></article>
            <article><div className="partner-type"><span>Advisory</span><h3>Regulatory, quality, vigilance, and industry operators</h3></div><p>Experienced operators who can pressure-test responsibility boundaries, validation strategy, failure procedures, quality systems, and sponsor buying requirements.</p><ul><li>Regulatory and quality review</li><li>Vigilance operating model</li><li>Strategic or technical advisory</li></ul></article>
          </div>
          <div className="shell first-engagement"><div><h3>A useful first engagement has four parts.</h3><p>We can begin before every downstream vendor or implementation detail is selected.</p></div><ol><li><span>1</span><strong>Choose a program</strong><small>Candidate asset, study, pathway, or channel pilot</small></li><li><span>2</span><strong>Define the boundary</strong><small>Owners, criteria, systems, evidence, and success measures</small></li><li><span>3</span><strong>Configure the model</strong><small>Synthetic workflow, rules, authorization, and integrations</small></li><li><span>4</span><strong>Plan the evidence</strong><small>Validation, research, pilot, and operating readiness</small></li></ol></div>
        </section>

        <section className="responsibility-section" id="responsibility">
          <div className="shell responsibility-head"><h2>Clear roles. No hidden transfer of judgment.</h2><p>ClearGate operationalizes approved medication-access programs without becoming the sponsor, prescriber, pharmacy, or independent regulatory decision-maker.</p></div>
          <div className="shell responsibility-grid"><article><span>Pharmaceutical sponsor</span><h3>Owns the product and program.</h3><ul><li>Clinical criteria and regulatory strategy</li><li>Approved consumer content</li><li>Drug safety and sponsor obligations</li><li>Program oversight and accountability</li></ul></article><article className="cleargate-role"><span>ClearGate</span><h3>Provides the controlled operating layer.</h3><ul><li>Configuration and deterministic execution</li><li>Validation evidence and release controls</li><li>Authorization exchange and integration</li><li>Monitoring, incidents, and traceability</li></ul></article><article><span>Licensed clinician · future pathways</span><h3>Retains medical judgment.</h3><ul><li>Clinical evaluation where required</li><li>Prescribing authority</li><li>Clinician-patient relationship</li><li>Professional and jurisdictional obligations</li></ul></article><article><span>Retail or research partner</span><h3>Performs its approved channel role.</h3><ul><li>Transaction or study operations</li><li>Authorization enforcement where applicable</li><li>Partner-specific consumer obligations</li><li>Evidence and exception handling</li></ul></article></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-grid">
            <div className="contact-statement">
              <img src={asset("/cleargate-symbol-reversed.svg")} alt="" width="84" height="84" />
              <span className="section-label light">Sponsor and partner inquiries</span>
              <h2>Start with the program—not a software shopping list.</h2>
              <p>Bring a candidate asset, active ACNU or switch program, study requirement, pharmacy workflow, or clinician-mediated access concept. We will start with responsibility boundaries, success criteria, and the smallest useful demonstration or design engagement.</p>
              <dl className="contact-expectations">
                <div><dt>Good first attendees</dt><dd>Commercial, regulatory, clinical, quality, research, and technical owners</dd></div>
                <div><dt>Useful starting material</dt><dd>Program hypothesis, target channel, open risks, and timing</dd></div>
                <div><dt>Current priority</dt><dd>Design sponsors, research collaborators, pilot channels, and advisors</dd></div>
              </dl>
              <p className="contact-alternative">Prefer email? <a href="mailto:contact@cleargateaccess.com">contact@cleargateaccess.com</a></p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="shell footer-grid"><img src={asset("/cleargate-logo-reversed.svg")} alt="ClearGate" width="174" height="51" /><div><span>Controlled medication-access infrastructure</span><span>ACNU is the initial program focus</span></div><a href="mailto:contact@cleargateaccess.com">Contact</a></div></footer>
    </>
  );
}
