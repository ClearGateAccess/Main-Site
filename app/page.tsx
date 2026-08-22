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
            <img src={asset("/cleargate-logo-reversed.svg")} alt="ClearGate" width="220" height="51" />
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
              <p className="hero-context">Controlled infrastructure for sponsor-defined medication access</p>
              <h1>From approved criteria to controlled medication access.</h1>
            </div>
            <div className="hero-support">
              <p>ClearGate&apos;s initial focus is the FDA&apos;s Additional Condition for Nonprescription Use (ACNU) framework and adjacent Rx-to-nonprescription programs. Its controlled foundation can support additional medication-access models as the platform evolves.</p>
              <dl className="hero-scope" aria-label="ClearGate platform scope">
                <div><dt>Initial focus</dt><dd>ACNU and Rx-to-nonprescription development</dd></div>
                <div><dt>Designed to extend</dt><dd>Clinician-mediated prescription pathways with licensed clinicians retaining medical judgment</dd></div>
              </dl>
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
                    <span>Active ACNU program</span>
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
                      <div className="breadcrumb">ACNU Programs / Virelixa / Releases</div>
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
              <div className="demo-bar"><strong>Synthetic ACNU demonstration</strong><span>Virelixa, Harborstone, people, identifiers, criteria, approvals, and metrics are fictional. Not clinical guidance.</span></div>
            </div>
          </div>
        </section>

        <section className="why-section" id="platform">
          <div className="shell why-grid">
            <div className="section-statement">
              <span className="section-index">Initial use case: ACNU</span>
              <h2>The assessment is only the visible step.</h2>
              <div className="entry-points" aria-label="Common ClearGate program entry points">
                <p>Common entry points</p>
                <ul>
                  <li><strong>Feasibility</strong><span>Evaluate a candidate asset and the proposed access pathway.</span></li>
                  <li><strong>Study</strong><span>Connect controlled configuration, validation, deployment, and evidence.</span></li>
                  <li><strong>Commercial</strong><span>Operate the approved release across consumer and retail channels.</span></li>
                </ul>
              </div>
            </div>
            <div className="why-copy">
              <p className="lede">An Additional Condition for Nonprescription Use can provide a product-specific step when labeling alone is not sufficient for appropriate self-selection or use. Operationalizing that ACNU requires far more than a questionnaire.</p>
              <p>Sponsor-defined qualifying criteria and key elements must become reproducible software behavior, move through controlled validation and release, and remain operable and reconstructable after launch.</p>
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
            <div className="section-brief dark">
              <p>ClearGate connects sponsor intent, configuration, validation, approval, release, assessment, decision, authorization, and downstream verification in one operating history.</p>
              <dl>
                <div><dt>Exact release</dt><dd>The approved version that produced the result</dd></div>
                <div><dt>Decision basis</dt><dd>Requirements, rules, reason codes, and validation</dd></div>
                <div><dt>Downstream state</dt><dd>Authorization, verification, and redemption history</dd></div>
              </dl>
            </div>
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
            <h2>One controlled model from development to medication access.</h2>
            <div className="section-brief">
              <p>The platform connects requirements, runtime behavior, authorization, monitoring, and evidence without forcing sponsors to stitch together disconnected point solutions.</p>
              <dl>
                <div><dt>Current market</dt><dd>ACNU and adjacent Rx-to-nonprescription programs</dd></div>
                <div><dt>Platform horizon</dt><dd>Other sponsor-defined access pathways, including future clinician-mediated prescription workflows</dd></div>
              </dl>
            </div>
          </div>
          <div className="shell domain-rows">
            <article>
              <span>Develop</span><h3>Build and validate the access program.</h3><p>Turn clinical, regulatory, and operational requirements into controlled questions, rules, studies, tests, approvals, and release evidence.</p><ul><li>Portfolio</li><li>Designer</li><li>Rules</li><li>Study</li></ul>
            </article>
            <article>
              <span>Operate</span><h3>Run the approved pathway across channels.</h3><p>Deliver the approved experience, issue minimal signed authorization, and connect physical, ecommerce, and future clinician-mediated environments.</p><ul><li>Runtime</li><li>Access</li><li>Integrate</li></ul>
            </article>
            <article>
              <span>Control</span><h3>Monitor, investigate, reconstruct.</h3><p>Detect pathway failures, identify affected decisions, manage corrective action and controlled change, and preserve the evidence behind every material state.</p><ul><li>Vigilance</li><li>Evidence</li><li>Change control</li><li>Audit & quality</li></ul>
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
            <div><span className="section-index amber">Controlled failure response</span><h2>Failure handling is part of the product.</h2></div>
            <div className="section-brief">
              <p>Signals become access-pathway investigations, affected decisions can be identified, corrective action stays linked to evidence, and uncertainty never becomes qualification.</p>
              <dl>
                <div><dt>Detect</dt><dd>Convert operational signals into controlled cases</dd></div>
                <div><dt>Bound impact</dt><dd>Identify affected assessments, decisions, and releases</dd></div>
                <div><dt>Correct</dt><dd>Link CAPA, validation, approval, and controlled change</dd></div>
              </dl>
            </div>
          </div>

          <div className="shell incident-record">
            <div className="incident-header"><div><span className="signal-dot" /> Suspected ACNU failure</div><strong>CASE-ACNU-0004</strong><span>Severity 2 · Synthetic demo</span></div>
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
            <div className="section-brief">
              <p>ClearGate operationalizes sponsor-defined access programs without becoming the prescriber, pharmacy, or independent regulatory decision-maker. Each party stays inside an explicit responsibility boundary.</p>
              <p className="future-boundary"><strong>Future clinician-mediated pathways:</strong> licensed clinicians would retain clinical judgment and prescribing responsibility; ClearGate would provide controlled workflow, integration, authorization, and evidence infrastructure.</p>
            </div>
          </div>
          <div className="shell responsibility-grid">
            <article><span>01</span><h3>Pharmaceutical sponsor</h3><ul><li>Clinical criteria and regulatory strategy</li><li>Approved consumer content</li><li>Drug safety and sponsor obligations</li><li>Program oversight and accountability</li></ul></article>
            <article className="cleargate-role"><span>02</span><h3>ClearGate</h3><ul><li>Controlled configuration and deterministic execution</li><li>Validation evidence and release controls</li><li>Access control and security infrastructure</li><li>Monitoring, incident handling, and integration</li></ul></article>
            <article><span>03</span><h3>Retailer</h3><ul><li>Transaction processing and inventory</li><li>Authorization verification</li><li>Retail-specific consumer obligations</li><li>Authorization enforcement within its channel</li></ul></article>
            <article className="future-role"><span>04 · Future pathways</span><h3>Licensed clinician</h3><ul><li>Independent clinical assessment</li><li>Medical judgment and prescribing responsibility</li><li>Patient escalation and follow-up</li><li>Clinician-specific records and obligations</li></ul></article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-grid">
            <div className="contact-statement">
              <img src={asset("/cleargate-symbol-reversed.svg")} alt="" width="74" height="74" />
              <h2>Bring the program.<br />ClearGate brings the infrastructure.</h2>
              <p>Bring a candidate asset, proposed ACNU, active Rx-to-nonprescription switch, clinician-mediated access concept, or study requirement. Start with feasibility or carry the same controlled model into study, runtime, downstream verification, and vigilance.</p>
              <dl className="contact-expectations">
                <div><dt>Best suited for</dt><dd>Pharmaceutical sponsors, research partners, and retail integration leaders</dd></div>
                <div><dt>First discussion</dt><dd>Access model, program stage, channels, responsibility boundaries, evidence, and integration needs</dd></div>
                <div><dt>Response</dt><dd>Within one business day</dd></div>
              </dl>
              <p className="contact-alternative">Prefer email? <a href="mailto:contact@cleargateaccess.com">contact@cleargateaccess.com</a></p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <img src={asset("/cleargate-logo-reversed.svg")} alt="ClearGate" width="142" height="42" />
          <p>Controlled infrastructure for sponsor-defined medication access.</p>
          <div><a href="#top">Back to top ↑</a><span>© 2026 ClearGate</span></div>
        </div>
      </footer>
    </>
  );
}
