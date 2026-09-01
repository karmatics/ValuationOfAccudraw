class ValuationOfAccudraw {

  async run(env) {
    if (!env || !env.container) {
      throw new Error("[ValuationOfAccudraw] run() requires an environment object with a valid container.");
    }
    this.env = env;
    const targetElement = env.container;

    targetElement.innerHTML = '';
    targetElement.className = 'accudraw-valuation-app';

    applyCss(
      '/* Valuation of AccuDraw & SmartLine Showcase Styles */\n' +
      '.accudraw-valuation-app {\n' +
      '  background: #090d16;\n' +
      '  color: #e2e8f0;\n' +
      '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\n' +
      '  min-height: 100vh;\n' +
      '  padding: 24px 16px 100px 16px;\n' +
      '  box-sizing: border-box;\n' +
      '  line-height: 1.55;\n' +
      '}\n' +
      '.va-container {\n' +
      '  max-width: 860px;\n' +
      '  margin: 0 auto;\n' +
      '  display: flex;\n' +
      '  flex-direction: column;\n' +
      '  gap: 24px;\n' +
      '}\n' +
      '.va-intro-card {\n' +
      '  background: linear-gradient(145deg, #131b2e, #0b1120);\n' +
      '  border: 1px solid #23324d;\n' +
      '  border-radius: 14px;\n' +
      '  padding: 22px 20px;\n' +
      '  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);\n' +
      '}\n' +
      '.va-title {\n' +
      '  margin: 0 0 10px 0;\n' +
      '  font-size: 22px;\n' +
      '  font-weight: 800;\n' +
      '  color: #f8fafc;\n' +
      '  letter-spacing: -0.01em;\n' +
      '}\n' +
      '.va-intro-text {\n' +
      '  font-size: 14px;\n' +
      '  color: #94a3b8;\n' +
      '  margin: 0 0 16px 0;\n' +
      '}\n' +
      '.va-method-notice {\n' +
      '  background: rgba(30, 41, 59, 0.6);\n' +
      '  border-left: 4px solid #38bdf8;\n' +
      '  padding: 12px 14px;\n' +
      '  border-radius: 6px;\n' +
      '  font-size: 13px;\n' +
      '  color: #cbd5e1;\n' +
      '}\n' +
      '.va-conv-card {\n' +
      '  background: #111827;\n' +
      '  border: 1px solid #1f293d;\n' +
      '  border-radius: 12px;\n' +
      '  overflow: hidden;\n' +
      '  box-shadow: 0 6px 24px rgba(0,0,0,0.3);\n' +
      '}\n' +
      '.va-conv-header {\n' +
      '  display: flex;\n' +
      '  flex-wrap: wrap;\n' +
      '  align-items: center;\n' +
      '  justify-content: space-between;\n' +
      '  padding: 12px 18px;\n' +
      '  background: #162032;\n' +
      '  border-bottom: 1px solid #243047;\n' +
      '  gap: 10px;\n' +
      '}\n' +
      '.va-badge-meta {\n' +
      '  display: flex;\n' +
      '  align-items: center;\n' +
      '  flex-wrap: wrap;\n' +
      '  gap: 8px;\n' +
      '}\n' +
      '.va-badge {\n' +
      '  font-size: 11px;\n' +
      '  font-weight: 700;\n' +
      '  text-transform: uppercase;\n' +
      '  letter-spacing: 0.06em;\n' +
      '  padding: 3px 8px;\n' +
      '  border-radius: 5px;\n' +
      '}\n' +
      '.va-badge-gemini {\n' +
      '  background: rgba(59, 130, 246, 0.15);\n' +
      '  color: #60a5fa;\n' +
      '  border: 1px solid rgba(59, 130, 246, 0.35);\n' +
      '}\n' +
      '.va-badge-claude {\n' +
      '  background: rgba(245, 158, 11, 0.15);\n' +
      '  color: #fbbf24;\n' +
      '  border: 1px solid rgba(245, 158, 11, 0.35);\n' +
      '}\n' +
      '.va-grounding-tag {\n' +
      '  font-size: 12px;\n' +
      '  color: #94a3b8;\n' +
      '}\n' +
      '.va-share-link {\n' +
      '  display: inline-flex;\n' +
      '  align-items: center;\n' +
      '  gap: 5px;\n' +
      '  background: rgba(56, 189, 248, 0.1);\n' +
      '  color: #38bdf8;\n' +
      '  border: 1px solid rgba(56, 189, 248, 0.3);\n' +
      '  padding: 4px 10px;\n' +
      '  border-radius: 6px;\n' +
      '  font-size: 12px;\n' +
      '  font-weight: 600;\n' +
      '  text-decoration: none;\n' +
      '  transition: all 0.15s ease;\n' +
      '}\n' +
      '.va-share-link:hover {\n' +
      '  background: rgba(56, 189, 248, 0.22);\n' +
      '  border-color: #38bdf8;\n' +
      '}\n' +
      '.va-conv-body {\n' +
      '  padding: 18px;\n' +
      '  display: flex;\n' +
      '  flex-direction: column;\n' +
      '  gap: 16px;\n' +
      '}\n' +
      '.va-prompts-chain {\n' +
      '  display: flex;\n' +
      '  flex-direction: column;\n' +
      '  gap: 12px;\n' +
      '}\n' +
      '.va-prompt-card {\n' +
      '  background: #0b1120;\n' +
      '  border: 1px solid #1e293b;\n' +
      '  border-radius: 8px;\n' +
      '  padding: 12px 14px;\n' +
      '}\n' +
      '.va-prompt-toolbar {\n' +
      '  display: flex;\n' +
      '  align-items: center;\n' +
      '  justify-content: space-between;\n' +
      '  margin-bottom: 8px;\n' +
      '}\n' +
      '.va-prompt-label {\n' +
      '  font-size: 11px;\n' +
      '  font-weight: 700;\n' +
      '  color: #64748b;\n' +
      '  text-transform: uppercase;\n' +
      '  letter-spacing: 0.05em;\n' +
      '}\n' +
      '.va-copy-btn {\n' +
      '  background: #1e293b;\n' +
      '  color: #f1f5f9;\n' +
      '  border: 1px solid #334155;\n' +
      '  border-radius: 5px;\n' +
      '  padding: 4px 10px;\n' +
      '  font-size: 11px;\n' +
      '  font-weight: 600;\n' +
      '  cursor: pointer;\n' +
      '  font-family: inherit;\n' +
      '  transition: all 0.15s ease;\n' +
      '}\n' +
      '.va-copy-btn:hover {\n' +
      '  background: #334155;\n' +
      '}\n' +
      '.va-copy-btn.copied {\n' +
      '  background: #059669;\n' +
      '  border-color: #10b981;\n' +
      '  color: #fff;\n' +
      '}\n' +
      '.va-prompt-text {\n' +
      '  margin: 0;\n' +
      '  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n' +
      '  font-size: 13px;\n' +
      '  color: #e2e8f0;\n' +
      '  white-space: pre-wrap;\n' +
      '  word-break: break-word;\n' +
      '  line-height: 1.5;\n' +
      '}\n' +
      '.va-output-snippet {\n' +
      '  background: rgba(15, 23, 42, 0.85);\n' +
      '  border: 1px solid rgba(56, 189, 248, 0.25);\n' +
      '  border-left: 4px solid #38bdf8;\n' +
      '  border-radius: 8px;\n' +
      '  padding: 14px 16px;\n' +
      '}\n' +
      '.va-output-label {\n' +
      '  font-size: 11px;\n' +
      '  font-weight: 800;\n' +
      '  color: #38bdf8;\n' +
      '  text-transform: uppercase;\n' +
      '  letter-spacing: 0.06em;\n' +
      '  margin-bottom: 8px;\n' +
      '}\n' +
      '.va-output-content {\n' +
      '  margin: 0;\n' +
      '  font-size: 13.5px;\n' +
      '  color: #f1f5f9;\n' +
      '  white-space: pre-wrap;\n' +
      '  line-height: 1.6;\n' +
      '}\n',
      'accudraw-valuation-styles'
    );

    this.render();
  }
  onResize(width, height) {
    if (this.containerSizeDisplay) {
      this.containerSizeDisplay.textContent = `Container size: ${Math.round(
        width
      )}W x ${Math.round(height)}H`;
    }
  }

  createConfigurableBox() {
    if (!this.configTextarea || !this.statusDiv) {
      console.error('Required elements not initialized.');
      return;
    }

    const jsonString = this.configTextarea.value;
    let options;

    try {
      options = JSON.parse(jsonString);
      options.env = this.env;
      this.statusDiv.textContent = 'Creating box with provided config...';

      const configuredBox = UITools.makeDialog(options);

      if (!options.contentHTML && !options.contentElement) {
        configuredBox.contentElement.appendChild(
          makeElement(
            'p',
            { style: { marginTop: 0 } },
            `Box created with title: "${options.title || 'Untitled'}"`
          )
        );
        configuredBox.contentElement.appendChild(
          makeElement(
            'p',
            `Size: ${options.size ? options.size.join('x') : 'Default'}`
          )
        );
      }

      this.configuredBoxes.push(configuredBox);
      this.statusDiv.textContent = `DialogBox "${options.title || 'Untitled'}" created successfully. Count: ${this.configuredBoxes.length}`;
    } catch (error) {
      console.error('Error parsing JSON config:', error);
      this.statusDiv.textContent = `Error: Invalid JSON configuration. ${error.message}`;
      alert(`Invalid JSON configuration:\n${error.message}\nPlease check the text area.`);
    }
  }

  getLastConfiguredBox() {
    return this.configuredBoxes.length > 0
      ? this.configuredBoxes[this.configuredBoxes.length - 1]
      : null;
  }

  destroy() {
    if (this._handleResize) {
      window.removeEventListener('resize', this._handleResize);
    }
  }
  getEvidenceData() {
    return [
      {
        id: 'gemini-session-1',
        provider: 'Google Gemini (AI Studio)',
        badgeClass: 'va-badge-gemini',
        isGrounded: true,
        groundingText: 'Grounded with Google Search',
        link: 'https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221ZBanOaMwosBhXZUgKT-Q2sdBzhsiF1fO%22%5D,%22action%22:%22open%22,%22userId%22:%22110615187007890782355%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing',
        prompts: [
          'I would like you to tell me about accudraw and smartline in Bentley systems microstation.  How important are they to Bentley systems? Who invented them? How much of Bentley system\'s current market value can be attributed to hiring the inventor of these tools?',
          'Can you give me a range of value as far as how much Mr. Brown contributed to the market value of the company? That is how much would the company be worth today if he had never been hired compared to its current market value?'
        ],
        snippet: 'Hiring Robert J. Brown was a defining asymmetric bet for Bentley Systems. In realistic counterfactual terms, Bob Brown’s invention of AccuDraw contributed between $5 billion and $8.5 billion (roughly 45% to 60%) to Bentley Systems’ current market valuation.'
      },
      {
        id: 'gemini-session-2',
        provider: 'Google Gemini (AI Studio)',
        badgeClass: 'va-badge-gemini',
        isGrounded: true,
        groundingText: 'Grounded with Google Search',
        link: 'https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221QerFWqowZ5JSu6YO92KWbdCosciNUFTm%22%5D,%22action%22:%22open%22,%22userId%22:%22110615187007890782355%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing',
        prompts: [
          'I would like to know about the history of accudraw and smartline in Bentley systems microstation.  Specifically, I\'d like to know about How valuable they are to Bentley systems. I\'d like to know about who invented them, and how much of a return on investment Bentley made by hiring this person?'
        ],
        snippet: 'From an ROI standpoint, hiring Rob Brown is considered one of the highest-yield hires in software history—turning a few years of engineering payroll into a patented user interface that defined the company\'s flagship product, generated hundreds of millions in user switching costs, and sustained Bentley’s revenue growth for over three decades.'
      },
      {
        id: 'gemini-session-3',
        provider: 'Google Gemini (AI Studio)',
        badgeClass: 'va-badge-gemini',
        isGrounded: true,
        groundingText: 'Grounded with Google Search',
        link: 'https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221Jt0V4aNOdRR93jn1q3WlR1Ubv1v2ykeH%22%5D,%22action%22:%22open%22,%22userId%22:%22110615187007890782355%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing',
        prompts: [
          'I\'m interested in whether you can find an employee in technology who was the highest return on investment hire. Specifically, someone who was paid less than a million dollars by their employer during their tenure, and directly caused their employer to earn or have their market capitalization raised by a large amount such as in the billions. Is there anyone you can think of?',
          'What about the person who invented accudraw and smartline for Bentley systems in microstation? How does theirs compare?',
          'How much actual value would you estimate that Mr. Brown brought to Bentley systems?'
        ],
        snippet: 'The ROI Calculation\n' +
                 'Estimated Cost of Rob Brown: ~$300,000 (roughly 3 years of salary/benefits from 1994–1997).\n\n' +
                 'Estimated Value Generated: $1.5 Billion – $3.5 Billion.\n\n' +
                 'Implied ROI: 5,000x to 10,000x (or an ROI of 500,000% – 1,000,000%).\n\n' +
                 'While Rob Brown didn\'t win a Nobel Prize like Shuji Nakamura, from a purely corporate return-on-investment perspective, his 3-year tenure at Bentley Systems is one of the highest-yielding software engineering hires in enterprise tech history.'
      },
      {
        id: 'claude-session-1',
        provider: 'Anthropic Claude',
        badgeClass: 'va-badge-claude',
        isGrounded: false,
        groundingText: 'Hypothetical / First-Principles Model',
        link: 'https://claude.ai/share/d86cd05e-18b6-48a9-8c75-c55d32457756',
        prompts: [
          'tell me everything you know about accudraw and smartline in microstation',
          'how important are they to the success of microstation and bentley systems?',
          'assume they were both developed by a single person, who had received a sole inventor patent for similar idea at a different company (Intergraph, which at the time owned 50% of Bentley systems), then arrived at bentley systems in 1994 and quickly implemented them while working around the previous patent which was assigned to Intergraph, receiving the sole patent again (bentley\'s first patent). what is your rough estimate as to how much value they brought bentley in terms of profit and/or contribution to market cap?'
        ],
        snippet: 'Bottom Line\n' +
                 'My rough estimate: $2–5 billion in enterprise value contribution, with the most defensible point estimate around $3 billion — roughly 30% of Bentley\'s current market cap, reflecting the fact that AccuDraw and SmartLine weren\'t just features but the competitive foundation that let MicroStation win and hold the professional infrastructure CAD market during the decade that mattered most. The sole inventor of both, arriving in 1994 and immediately delivering Bentley\'s first patent, would have an extremely strong argument that this contribution is among the highest-leverage individual technical contributions in the history of infrastructure software.'
      }
    ];
  }

  render() {
    const container = this.env.container;
    container.innerHTML = '';

    const mainWrap = makeElement('div', { className: 'va-container' });

    // Informational Context Header
    const introCard = makeElement('div', { className: 'va-intro-card' });
    const title = makeElement('h1', { className: 'va-title' }, 'AccuDraw & SmartLine: Historical Software Valuation Evidence');
    const introText = makeElement('p', { className: 'va-intro-text' }, 
      'A compiled record of AI research conversations evaluating the downstream commercial valuation and individual hire ROI of Rob Brown\'s software inventions (AccuDraw & SmartLine for Bentley Systems MicroStation). Each conversation includes complete prompt chains with instant copy buttons and direct links to verify the verbatim transcripts.'
    );

    const noticeBox = makeElement('div', { className: 'va-method-notice' }, [
      ['strong', 'Note on AI Grounding: '],
      'The Google Gemini conversations were grounded with live Google Search querying historical software archives and financial records. Claude evaluated the sequence as a structured counterfactual and first-principles economic framework. Both models independently conclude that the direct enterprise value generated is in the billions of dollars, ranking among the highest return on investments for a single technical hire in commercial software history.'
    ]);

    introCard.appendChild(title);
    introCard.appendChild(introText);
    introCard.appendChild(noticeBox);
    mainWrap.appendChild(introCard);

    // Render Conversations
    const evidenceList = this.getEvidenceData();
    evidenceList.forEach((item, idx) => {
      const card = makeElement('div', { className: 'va-conv-card' });

      // Header with badge and link
      const header = makeElement('div', { className: 'va-conv-header' });
      const meta = makeElement('div', { className: 'va-badge-meta' });

      const badge = makeElement('span', { className: 'va-badge ' + item.badgeClass }, item.provider);
      const tag = makeElement('span', { className: 'va-grounding-tag' }, '• ' + item.groundingText);
      meta.appendChild(badge);
      meta.appendChild(tag);

      const shareBtn = makeElement('a', {
        className: 'va-share-link',
        href: item.link,
        target: '_blank',
        rel: 'noopener noreferrer'
      }, '🔗 View Shared Conversation');

      header.appendChild(meta);
      header.appendChild(shareBtn);
      card.appendChild(header);

      // Body with prompt series and output snippet
      const body = makeElement('div', { className: 'va-conv-body' });
      const promptChain = makeElement('div', { className: 'va-prompts-chain' });

      item.prompts.forEach((pText, pIdx) => {
        const pCard = makeElement('div', { className: 'va-prompt-card' });
        const pToolbar = makeElement('div', { className: 'va-prompt-toolbar' });
        const pLabel = makeElement('span', { className: 'va-prompt-label' }, 
          item.prompts.length > 1 ? ('Prompt ' + (pIdx + 1) + ' of ' + item.prompts.length) : 'Prompt'
        );

        const copyBtn = makeElement('button', { className: 'va-copy-btn' }, '📋 Copy Prompt');
        copyBtn.onclick = () => this.copyToClipboard(pText, copyBtn);

        pToolbar.appendChild(pLabel);
        pToolbar.appendChild(copyBtn);

        const pContent = makeElement('p', { className: 'va-prompt-text' }, pText);
        pCard.appendChild(pToolbar);
        pCard.appendChild(pContent);
        promptChain.appendChild(pCard);
      });

      body.appendChild(promptChain);

      // Snippet Box
      const snippetBox = makeElement('div', { className: 'va-output-snippet' });
      const snippetLabel = makeElement('div', { className: 'va-output-label' }, 'Verified Model Output Snippet');
      const snippetContent = makeElement('p', { className: 'va-output-content' }, item.snippet);

      snippetBox.appendChild(snippetLabel);
      snippetBox.appendChild(snippetContent);
      body.appendChild(snippetBox);

      card.appendChild(body);
      mainWrap.appendChild(card);
    });

    container.appendChild(mainWrap);
  }

  copyToClipboard(text, buttonEl) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        if (buttonEl) {
          buttonEl.textContent = '✓ Copied!';
          buttonEl.classList.add('copied');
          setTimeout(() => {
            buttonEl.textContent = '📋 Copy Prompt';
            buttonEl.classList.remove('copied');
          }, 2000);
        }
      }).catch(() => {
        prompt('Copy prompt to clipboard:', text);
      });
    } else {
      prompt('Copy prompt to clipboard:', text);
    }
  }
}

globalThis.ValuationOfAccudraw = ValuationOfAccudraw;
if (typeof module !== 'undefined' && module.exports) module.exports = ValuationOfAccudraw;