/**
 * Ephemora Landing Page — i18n Module
 * Languages: EN, DE, FR, PL
 * Zero dependencies. Graceful degradation (no JS = English).
 */

const i18n = {
  langs: { en: 'EN', de: 'DE', fr: 'FR', pl: 'PL' },

  translations: {
    en: {
      'meta.title': 'Ephemora Cell — Execution in a Cell',
      'meta.description': 'Ephemora Cell delivers deterministic, resource-limited execution for autonomous AI. Isolated at the WASI layer. Apache 2.0 sandbox available.',
      'nav.problem': 'Problem',
      'nav.solution': 'Solution',
      'nav.products': 'Products',
      'nav.benchmarks': 'Benchmarks',
      'nav.cta': 'Request a Demo',      'mcp.label': 'MCP Adapter',
      'mcp.h2': 'Your agent, speaking MCP.',
      'mcp.sub': 'ephemora-cell-mcp turns every Cell into an MCP tool server — one dependency, per-call execution evidence, verified with the official MCP Inspector.',
      'mcp.badge1': 'Official MCP Inspector verified',
      'mcp.badge2': '0.89ms per call · 845 exec/s on DGX',
      'mcp.badge3': '1 dependency · WASM modules as tools',

      'hero.badge': 'WASI Preview1 · 272 Tests · v2.1.1 · Apache-2.0',
      'why.label': 'Why Ephemora Cell',
      'why.h2': 'Built for isolation. Not just WASM execution.',
      'why.sub': 'The cell metaphor — smallest self-sufficient execution unit, protected by a membrane. Purpose-built for agent sandboxing, not generic compute',
      'hero.h1': 'Every workload gets a cell.',
      'hero.h2': 'Every cell has a purpose. Every cell has an end.',
      'hero.sub': 'A secure computational cell for untrusted and sensitive workloads. Born for one execution, closed when its purpose is fulfilled. Apache-2.0 open source — run it yourself.',
      'hero.btn1': 'What is Cell ↓',
      'hero.btn2': 'Open Source — get the code',
      'hero.meta1': 'preopen default-deny',
      'hero.meta2': 'no shell · no syscalls',
      'hero.meta3': 'memory · fuel · timeout',
      'hero.meta4': '5 agent frameworks',
    'lang.comparison.label': 'Comparison',
    'lang.comparison.h2': 'Why Ephemora Cell over alternatives?',
    'lang.comparison.sub': 'Not another generic WASI wrapper. Cell is purpose-built for ephemeral, deterministic execution.',
    'lang.comparison.row1': 'Isolation model',
    'lang.comparison.row2': 'Network by default',
    'lang.comparison.row3': 'Automatic cleanup',
    'lang.comparison.row4': 'Use case',
    'lang.cell.val1': 'WASI Preview1 (preopen)',
    'lang.cell.val2': 'None (zero)',
    'lang.cell.val3': 'Yes (cleanup)',
    'lang.cell.val4': 'Ephemeral agent runtime',
    'lang.extism.val1': 'Host functions (generic)',
    'lang.extism.val2': 'No (sandboxed)',
    'lang.extism.val3': 'No',
    'lang.extism.val4': 'WASM plugin system',
    'lang.wasmedge.val1': 'WASI (configurable)',
    'lang.wasmedge.val2': 'Optional',
    'lang.wasmedge.val3': 'No',
    'lang.wasmedge.val4': 'ML inference runtime',
    'lang.wasmtime.val1': 'WASI (raw)',
    'lang.wasmtime.val2': 'Configurable',
    'lang.wasmtime.val3': 'No',
    'lang.wasmtime.val4': 'General-purpose WASM',
      'metrics.label1': 'isolation verified',
      'metrics.label2': 'dangerous dirs blocked',
      'metrics.label3': 'network access',
      'metrics.label4': 'minimal attack surface',
      'problem.label': 'The problem',
      'problem.h2': 'Your agent writes code. That code is untrusted.',
      'problem.sub': 'Every agentic workflow executes AI-generated code. The three standard options each fail differently.',
      'problem.card1_title': 'Containers',
      'problem.card1_desc': '~300ms per call, shared kernel, images to manage. Isolation is a config away from none.',
      'problem.card1_vs': '&lt;20ms, in-process WASM',
      'problem.card2_title': 'Subprocesses',
      'problem.card2_desc': 'No isolation: same user, filesystem, environment. One bad import and everything leaks.',
      'problem.card2_vs': 'deny-all by default',
      'problem.card3_title': 'MicroVMs',
      'problem.card3_desc': '~120ms cold start, a whole kernel you don\'t need. Fine for fleets — absurd per function call.',
      'problem.card3_vs': 'no kernel, no cloud',
      'solution.label': 'The solution',
      'solution.h2': 'Every execution in its own Cell.',
      'solution.sub': 'Isolated at the WASI layer. Resource-limited. Deterministic. Gone after execution.',
      'solution.card1_title': 'Engine Pool',
      'solution.card1_desc': 'WASM engine caching — no recompile per call. Reuse compiled modules across executions.',
      'solution.card2_title': 'Process Worker',
      'solution.card2_desc': 'Multi-process isolation — concurrent execution with per-worker resource limits.',
      'solution.card3_title': 'IO Budget',
      'solution.card3_desc': 'Rate-limited filesystem access, GC heap control, and per-call timeout. No runaway I/O.',
      'solution.card4_title': 'Fuzz Tested',
      'solution.card4_desc': 'Automated fuzzing in CI on every commit. 23 component tests. Edge cases caught early.',
      'deterministic.label': 'Deterministic execution',
      'deterministic.h2': 'Same input. Same output. Every time.',
      'deterministic.sub': 'The foundation for auditability, compliance, and reproducible AI. Fuel consumption correlates R² = 1.000000 per platform (UAT CL-13) — zero spread across runs, measured identically on macOS arm64 (20891 fuel) and DGX Grace arm64 (4506 fuel).',
      'deterministic.badge1': 'HMAC-verified (simulated, not a ZK-proof)',
      'deterministic.badge2': 'Deterministic Execution',
      'deterministic.badge3': 'Compliance Evidence',
      'deterministic.badge4': 'DORA & EU AI Act Ready',
      
      'lifecycle.label': 'The Cell lifecycle',
      'lifecycle.h2': 'Born isolated. Consumed by purpose. Gone without a trace.',
      'lifecycle.step1_title': 'Germ',
      'lifecycle.step1_desc': 'A Cell forms around a single execution unit — membrane sealed, no ambient authority.',
      'lifecycle.step2_title': 'Metabolism',
      'lifecycle.step2_desc': 'Code in, output out. Resource-limited. Deterministic. Same input always yields the same result.',
      'lifecycle.step3_title': 'Apoptosis',
      'lifecycle.step3_desc': 'Automatic cleanup. After execution, the sandbox is closed and its working directory removed.',
      'vapor.label': 'Czyszczenie',
      'vapor.h2': 'Execute. Isolate. Close.',
      'vapor.sub': 'After execution, the sandbox is closed and its working directory removed — nothing persists on the host.',
      'bench.label': 'Performance',
      'bench.h2': 'No compromise.',
      'products.label': 'The products',
      'products.h2': 'Cell isolation. Platform governance.',
      'products.sub': 'Ephemora Cell — the open execution boundary (Apache-2.0). Ephemora Platform — centralized control and evidence for regulated AI.',
      'products.tag1': 'Platform · Enterprise',
      'products.tag2': 'Sandbox · Open Source',
      'products.platform_desc': 'Self-hostable execution platform for regulated AI — purpose-built for financial institutions, government agencies, and defense. Isolation, cryptographic verification, and compliance mapping in one auditable system.',
      'products.cell_desc': 'Isolated WASM sandbox — hardened, resource-limited, deny-all by default.',
      'contact.label': 'Contact',
      'contact.h2': 'Let\'s talk execution trust.',
      'contact.p': 'We\'re selecting enterprise pilots for Q3 2026. If deterministic execution for autonomous AI is on your roadmap, let\'s connect.',
      'contact.btn': 'Connect on LinkedIn',
      'contact.name': 'Michael Soppa — CEO, Ephemora',
      'contact.sub': 'Reach out via email, LinkedIn, or a brief intro.',
      'problem.vs1': '<20ms, in-process WASM',
      'problem.vs2': 'deny-all by default',
      'problem.vs3': 'no kernel, no cloud',
      'upgrade.label': 'When you need more',
      'upgrade.h2': 'From Cell to Platform.',
      'upgrade.sub': 'Ephemora Platform adds attestation, audit trails, and compliance mapping to the Cell isolation layer.',
      'upgrade.cta': 'Upgrade to 9/9 →',
                                                          'footer.tagline': 'Computation, without the permanence.',
      'arch.label': 'Architecture',
      'arch.h2': 'Beyond isolation.',
      'arch.sub': 'v2.1.1 — engine pooling, WASI-02 components, execution reports, and Wasm 3.0 memory64. Built for scale.',
      'arch.c1_title': 'WASI-02 Components',
      'arch.c1_desc': '413 LOC — next-generation WASI Components support. ABI detection, component binary format.',
      'arch.c2_title': 'Execution Report',
      'arch.c2_desc': 'Structured audit trail: fuel consumed, duration, IO operations, exit status. Signed with Ed25519, canonicalized per RFC 8785 (JCS). Note: currently a simulated/HMAC attestation, not a zero-knowledge proof.',
      'arch.c3_title': 'Wasm 3.0 memory64',
      'arch.c3_desc': '64-bit address space support for large models. Memory beyond 4GB limits.',
      'arch.c4_title': 'MCP-Adapter (ephemora-cell-mcp)',
      'arch.c4_desc': 'MCP server whose tools are WASM modules inside the Cell — 1 dependency, per-call _meta.execution, verified with the official MCP Inspector.',
      'arch.c5_title': 'Components',
      'arch.c5_desc': '23 component tests — modular WASI isolation for pluggable workloads.',
      'trust.label': 'Trust signals',
      'trust.h2': 'Verified. Not claimed.',
      'trust.s1_title': '272 Tests',
      'trust.s1_desc': 'Isolation, security, IO budget, components — all verified in CI.',
      'trust.s2_title': 'Fuzz Testing',
      'trust.s2_desc': 'Automated input fuzzing on every commit — edge cases caught before release.',
      'trust.s3_title': '2,908 LOC',
      'trust.s3_desc': '11 modules, 4 profiles, engine pooling — minimal attack surface.',
      'trust.s4_title': 'Open Source (Apache-2.0)',
      'trust.s4_desc': 'Public code, permissive license, reproducible benchmarks — run the numbers yourself. The full Ephemora platform stays enterprise.',
      'products.platform_f1': 'Cryptographic audit trail per execution',
      'products.platform_f2': 'Self-hostable — no data leaves your infrastructure',
      'products.platform_f3': 'Compliance mapping (DORA, EU AI Act, NIS2)',
      'products.platform_f4': 'Multi-tenant with hardware-rooted trust',
      'products.platform_cta': 'Request a Demo →',
      'vp.statement': 'Ephemora Cell is the open execution boundary for small, untrusted WASI actions — Apache-2.0 open source.',
      'solution.cta': 'Open Source — Apache-2.0',
      'solution.cta_sub': 'Open source — Apache-2.0 license, free usage',
    },
    de: {
      'meta.title': 'Ephemora — Execution der du vertrauen kannst',
      'meta.description': 'Ephemora Cell liefert deterministische, ressourcenlimitierte Execution für autonome KI. Isoliert auf WASI-Ebene. Apache 2.0 Sandbox verfügbar.',
      'nav.problem': 'Problem',
      'nav.solution': 'Lösung',
      'nav.products': 'Produkte',
      'nav.benchmarks': 'Benchmarks',
      'nav.cta': 'Demo anfordern',      'mcp.label': 'MCP-Adapter',
      'mcp.h2': 'Dein Agent, spricht MCP.',
      'mcp.sub': 'ephemora-cell-mcp macht jede Cell zum MCP-Tool-Server — eine Abhängigkeit, Execution-Evidenz pro Call, verifiziert mit dem offiziellen MCP-Inspector.',
      'mcp.badge1': 'Offizieller MCP-Inspector verifiziert',
      'mcp.badge2': '0,89 ms pro Call · 845 exec/s auf DGX',
      'mcp.badge3': '1 Abhängigkeit · WASM-Module als Tools',

      'hero.badge': 'WASI Preview1 · 272 Tests · v2.1.1 · Apache-2.0',
      'lang.comparison.label': 'Vergleich',
      'lang.comparison.h2': 'Warum Ephemora Cell statt Alternativen?',
      'lang.comparison.sub': 'Kein weiterer generischer WASI-Wrapper. Cell ist gezielt für ephemere, deterministische Execution gebaut.',
      'lang.comparison.row1': 'Isolationsmodell',
      'lang.comparison.row2': 'Netzwerk standardmäßig',
      'lang.comparison.row3': 'Automatische Bereinigung',
      'lang.comparison.row4': 'Einsatzzweck',
      'lang.cell.val1': 'WASI Preview1 (preopen)',
      'lang.cell.val2': 'Keine (null)',
      'lang.cell.val3': 'Ja (cleanup)',
      'lang.cell.val4': 'Ephemerer Agent-Runtime',
      'lang.extism.val1': 'Host-Funktionen (generisch)',
      'lang.extism.val2': 'Nein (sandboxed)',
      'lang.extism.val3': 'Nein',
      'lang.extism.val4': 'WASM-Plugin-System',
      'lang.wasmedge.val1': 'WASI (konfigurierbar)',
      'lang.wasmedge.val2': 'Optional',
      'lang.wasmedge.val3': 'Nein',
      'lang.wasmedge.val4': 'ML-Inference-Runtime',
      'lang.wasmtime.val1': 'WASI (raw)',
      'lang.wasmtime.val2': 'Konfigurierbar',
      'lang.wasmtime.val3': 'Nein',
      'lang.wasmtime.val4': 'Allzweck-WASM',
      'upgrade.label': 'Der Organismus',
      'upgrade.h2': 'Eine Zelle lebt eigenständig. Ephemora ist der Organismus.',
      'upgrade.sub': 'Wenn Ihr Anwendungsfall reguliert wird — DORA, EU AI Act, NIS2 — brauchen Sie mehr als Isolation.',
      'upgrade.cta': 'Upgrade auf 9/9 →',
      'hero.h1': 'Jede Workload bekommt eine Cell.',
      'hero.h2': 'Ein Ziel. Ein Ende.',
      'hero.sub': 'Eine sichere Rechen-Cell für untrusted und sensitive Workloads. Geboren für eine Execution, geschlossen, wenn ihr Zweck erfüllt ist. Apache-2.0 Open Source — mach es selbst.',
      'hero.btn1': 'Was ist Cell ↓',
      'hero.btn2': 'Open Source — Code holen',
      'hero.meta1': 'preopen default-deny',
      'hero.meta2': 'kein Shell · kein Syscalls',
      'hero.meta3': 'Speicher · Fuel · Timeout',
      'hero.meta4': '5 Agent-Frameworks',
      'metrics.label1': 'Isolation verifiziert',
      'metrics.label2': 'gefährliche Dirs geblockt',
      'metrics.label3': 'Netzwerkzugriff',
      'metrics.label4': 'minimale Angriffsfläche',
      'problem.label': 'Das Problem',
      'problem.h2': 'Dein Agent schreibt Code. Dieser Code ist nicht vertrauenswürdig.',
      'problem.sub': 'Jeder Agentic-Workflow führt KI-generierten Code aus. Die drei Standardoptionen scheitern jeweils anders.',
      'problem.card1_title': 'Container',
      'problem.card1_desc': '~300ms pro Call, geteilter Kernel, Images zu managen. Isolation ist ein Config-Eintrag von Nichts entfernt.',
      'problem.card1_vs': '&lt;20ms, in-process WASM',
      'problem.card2_title': 'Subprocesses',
      'problem.card2_desc': 'Keine Isolation: gleicher User, Dateisystem, Environment. Ein schlechter Import und alles leakt.',
      'problem.card2_vs': 'deny-all by default',
      'problem.card3_title': 'MicroVMs',
      'problem.card3_desc': '~120ms Cold Start, ein ganzer Kernel, den du nicht brauchst. Gut für Flotten — absurd pro Function Call.',
      'problem.card3_vs': 'kein Kernel, keine Cloud',
      'solution.label': 'Die Lösung',
      'solution.h2': 'Jede Execution in ihrer eigenen Cell.',
      'solution.sub': 'Isoliert auf WASI-Ebene. Ressourcen-begrenzt. Deterministisch. Nach der Execution verschwunden.',
      'solution.card1_title': 'Engine Pool',
      'solution.card1_desc': 'WASM-Engine-Caching — kein Recompile pro Call. Compilierte Module über Executionen wiederverwenden.',
      'solution.card2_title': 'Process Worker',
      'solution.card2_desc': 'Multi-Process-Isolation — parallele Execution mit pro-Worker-Ressourcenlimits.',
      'solution.card3_title': 'IO Budget',
      'solution.card3_desc': 'Rate-limitierter Dateisystemzugriff, GC-Heap-Steuerung und pro-Call-Timeout. Kein unkontrollierter I/O.',
      'solution.card4_title': 'Fuzz-Getestet',
      'solution.card4_desc': 'Automatisches Fuzzing in CI bei jedem Commit. 23 Komponententests. Edge Cases früh erkannt.',
      'deterministic.label': 'Deterministische Execution',
      'deterministic.h2': 'Selbe Eingabe. Selbe Ausgabe. Jedes Mal.',
      'deterministic.sub': 'Die Grundlage für Auditabilität, Compliance und reproduzierbare KI. Der Fuel-Verbrauch korreliert pro Plattform mit R² = 1.000000 (UAT CL-13) — null Streuung über Läufe, identisch gemessen auf macOS arm64 (20891 Fuel) und DGX Grace arm64 (4506 Fuel).',
      'deterministic.badge1': 'HMAC-verifiziert (simuliert, kein ZK-Beweis)',
      'deterministic.badge2': 'Deterministische Ausführung',
      'deterministic.badge3': 'Compliance-Nachweis',
      'deterministic.badge4': 'DORA & EU AI Act Ready',
      'lifecycle.label': 'Der Cell-Lebenszyklus',
      'lifecycle.h2': 'Isoliert geboren. Vom Zweck verbraucht. Ohne Spur verschwunden.',
      'lifecycle.step1_title': 'Germ',
      'lifecycle.step1_desc': 'Eine Cell entsteht um eine einzelne Execution-Einheit — Membran versiegelt, keine Umgebungsberechtigung.',
      'lifecycle.step2_title': 'Metabolism',
      'lifecycle.step2_desc': 'Code rein, Ausgabe raus. Ressourcen-begrenzt. Deterministisch. Selbe Eingabe liefert immer dasselbe Ergebnis.',
      'lifecycle.step3_title': 'Apoptosis',
      'lifecycle.step3_desc': 'Automatische Bereinigung. Nach der Execution wird die Sandbox geschlossen und ihr Verzeichnis entfernt.',
      'vapor.label': 'Bereinigung',
      'vapor.h2': 'Ausführen. Isoliieren. Schließen.',
      'vapor.sub': 'Nach der Execution wird die Sandbox geschlossen und ihr Verzeichnis entfernt — nichts bleibt auf dem Host.',
      'bench.label': 'Performance',
      'bench.h2': 'Ohne Kompromiss.',
      'products.label': 'Die Produkte',
      'products.h2': 'Cell-Isolation. Plattform-Governance.',
      'products.sub': 'Ephemora Cell — die offene Ausführungsgrenze (Apache-2.0). Ephemora Platform — zentrale Kontrolle und Evidenz für regulierte KI.',
      'products.tag1': 'Plattform · Enterprise',
      'products.tag2': 'Sandbox · Open Source',
      'products.platform_desc': 'Selbst betreibbare Ausführungsplattform für regulierte KI — speziell für Finanzinstitute, Behörden und Verteidigung. Isolation, kryptografische Verifizierung und Compliance-Mapping in einem überprüfbaren System.',
      'products.cell_desc': 'Isolierte WASM-Sandbox — gehärtet, ressourcen-begrenzt, deny-all by default.',
      'contact.label': 'Kontakt',
      'contact.h2': 'Reden wir über Execution Trust.',
      'contact.p': 'Wir wählen Enterprise-Piloten für Q3 2026 aus. Wenn deterministische Execution für autonome KI auf deiner Roadmap ist, lass uns connecten.',
      'contact.btn': 'Auf LinkedIn verbinden',
      'contact.name': 'Michael Soppa — CEO, Ephemora',
      'contact.sub': 'Kontakt via E-Mail, LinkedIn oder eine kurze Vorstellung.',
      'problem.vs1': '<20ms, in-process WASM',
      'problem.vs2': 'deny-all als Standard',
      'problem.vs3': 'kein Kernel, keine Cloud',
      'why.label': 'Warum Ephemora Cell',
      'why.h2': 'Für Isolation gebaut. Nicht nur WASM-Execution.',
      'why.sub': 'Wir wählten die kleinstmögliche Execution-Einheit — eine einzelne Cell — weil Vertrauen nach unten skaliert.',
                                                          'footer.tagline': 'Isoliert. Deterministisch. Eingeschlossen.',
      'arch.label': 'Architektur',
      'arch.h2': 'Über Isolation hinaus.',
      'arch.sub': 'v2.1.1 — Engine-Pooling, WASI-02-Komponenten, Execution-Reports und Wasm 3.0 memory64. Für Skalierung gebaut.',
      'arch.c1_title': 'WASI-02 Komponenten',
      'arch.c1_desc': '413 LOC — nächste Generation WASI-Komponenten. ABI-Erkennung, Component-Binary-Format.',
      'arch.c2_title': 'Execution Report',
      'arch.c2_desc': 'Strukturierter Audit-Trail: verbrauchter Fuel, Dauer, IO-Operationen, Exit-Status. Signiert mit Ed25519, kanonisiert nach RFC 8785 (JCS). Hinweis: derzeit simulierte/HMAC-Attestierung, kein Zero-Knowledge-Beweis.',
      'arch.c3_title': 'Wasm 3.0 memory64',
      'arch.c3_desc': '64-Bit-Adressraum für große Modelle. Speicher jenseits von 4GB-Limits.',
      'arch.c4_title': 'MCP-Adapter (ephemora-cell-mcp)',
      'arch.c4_desc': 'MCP-Server, dessen Tools WASM-Module in der Cell sind — 1 Abhängigkeit, _meta.execution pro Call, verifiziert mit dem offiziellen MCP-Inspector.',
      'arch.c5_title': 'Komponenten',
      'arch.c5_desc': '23 Komponenten-Tests — modulare WASI-Isolation für pluggable Workloads.',
      'trust.label': 'Vertrauenssignale',
      'trust.h2': 'Verifiziert. Nicht behauptet.',
      'trust.s1_title': '272 Tests',
      'trust.s1_desc': 'Isolation, Security, IO-Budget, Komponenten — alles in CI verifiziert.',
      'trust.s2_title': 'Fuzz-Testing',
      'trust.s2_desc': 'Automatisches Fuzzing bei jedem Commit — Edge Cases vor Release erkannt.',
      'trust.s3_title': '2.908 LOC',
      'trust.s3_desc': '11 Module, 4 Profile, Engine-Pooling — minimale Angriffsfläche.',
      'trust.s4_title': 'Open Source (Apache-2.0)',
      'trust.s4_desc': 'Öffentlicher Code, permissive Lizenz, reproduzierbare Benchmarks — rechne selbst nach. Die volle Ephemora-Plattform bleibt Enterprise.',
      'products.platform_f1': 'Kryptografischer Audit-Trail pro Execution',
      'products.platform_f2': 'Selbst betreibbar — keine Daten verlassen Ihre Infrastruktur',
      'products.platform_f3': 'Compliance-Mapping (DORA, EU AI Act, NIS2)',
      'products.platform_f4': 'Multi-Tenant mit hardware-gebundenem Vertrauen',
      'products.platform_cta': 'Demo anfordern →',
      'vp.statement': 'Ephemora Cell ist die offene Ausführungsgrenze für kleine, nicht vertrauenswürdige WASI-Actions — Apache-2.0 Open Source.',
      'solution.cta': 'Open Source — Apache-2.0',
      'solution.cta_sub': 'Open Source — Apache-2.0-Lizenz, freie Nutzung',
    },
    fr: {
      'meta.title': "Ephemora — Exécution dont vous pouvez faire confiance",
      'meta.description': "Ephemora Cell fournit une exécution déterministe et à ressources limitées pour l\'IA autonome. Isolée au niveau WASI. Sandbox Apache 2.0 disponible.",
      'nav.problem': "Problème",
      'nav.solution': "Solution",
      'nav.products': "Produits",
      'nav.benchmarks': "Benchmarks",
      'nav.cta': "Demander une démo",      'mcp.label': 'Adaptateur MCP',
      'mcp.h2': 'Votre agent, parlant MCP.',
      'mcp.sub': "ephemora-cell-mcp transforme chaque Cell en serveur d'outils MCP — une dépendance, preuve d'exécution par appel, vérifié avec l'inspecteur MCP officiel.",
      'mcp.badge1': 'Inspecteur MCP officiel vérifié',
      'mcp.badge2': '0,89 ms par appel · 845 exec/s sur DGX',
      'mcp.badge3': '1 dépendance · modules WASM comme outils',

      'hero.badge': 'WASI Preview1 · 272 Tests · v2.1.1 · Apache-2.0',
      'lang.comparison.label': 'Comparaison',
      'lang.comparison.h2': 'Pourquoi Ephemora Cell plutôt que les alternatives ?',
      'lang.comparison.sub': "Pas un autre wrapper WASI générique. Cell est conçue pour l'exécution éphémère et déterministe.",
      'lang.comparison.row1': "Modèle d'isolation",
      'lang.comparison.row2': 'Réseau par défaut',
      'lang.comparison.row3': 'Nettoyage automatique',
      'lang.comparison.row4': "Cas d'usage",
      'lang.cell.val1': 'WASI Preview1 (preopen)',
      'lang.cell.val2': 'Aucun (zéro)',
      'lang.cell.val3': 'Oui (cleanup)',
      'lang.cell.val4': "Runtime d'agent éphémère",
      'lang.extism.val1': 'Fonctions hôtes (génériques)',
      'lang.extism.val2': 'Non (sandboxé)',
      'lang.extism.val3': 'Non',
      'lang.extism.val4': 'Système de plugins WASM',
      'lang.wasmedge.val1': 'WASI (configurable)',
      'lang.wasmedge.val2': 'Optionnel',
      'lang.wasmedge.val3': 'Non',
      'lang.wasmedge.val4': "Runtime d'inférence ML",
      'lang.wasmtime.val1': 'WASI (brut)',
      'lang.wasmtime.val2': 'Configurable',
      'lang.wasmtime.val3': 'Non',
      'lang.wasmtime.val4': 'WASM à usage général',
      'upgrade.label': "L\'organisme",
      'upgrade.h2': "Une cellule vit par elle-même. Ephemora est l\'organisme.",
      'upgrade.sub': "Quand votre cas devient réglementé — DORA, AI Act UE, NIS2 — vous avez besoin de plus que l\'isolation.",
      'upgrade.cta': 'Passer à 9/9 →',
      'hero.h1': "Chaque workload a une cellule.",
      'hero.h2': "Un but. Une fin.",
      'hero.sub': 'Une cellule de calcul sûre pour des workloads non-fiables et sensibles. Née pour une exécution, fermée quand son but est atteint. Apache-2.0 open source — exécutez-la vous-même.',
      'hero.btn1': "Qu'est-ce que Cell ↓",
      'hero.btn2': 'Open source — obtenir le code',
      'hero.meta1': "preopen default-deny",
      'hero.meta2': "pas de shell · pas de syscalls",
      'hero.meta3': 'mémoire · fuel · timeout',
      'hero.meta4': '5 frameworks d\'agents',
      'metrics.label1': 'isolation vérifiée',
      'metrics.label2': 'répertoires dangereux bloqués',
      'metrics.label3': 'accès réseau',
      'metrics.label4': 'surface d\'attaque minimale',
      'problem.label': "Le problème",
      'problem.h2': "Votre agent écrit du code. Ce code n\'est pas digne de confiance.",
      'problem.sub': "Chaque workflow agentic exécute du code généré par l\'IA. Les trois options standards échouent chacune différemment.",
      'problem.card1_title': "Conteneurs",
      'problem.card1_desc': "~300ms par appel, noyau partagé, images à gérer. L\'isolation est à un config du néant.",
      'problem.card1_vs': "&lt;20ms, WASM in-process",
      'problem.card2_title': "Sous-processus",
      'problem.card2_desc': "Aucune isolation : même utilisateur, système de fichiers, environnement. Un mauvais import et tout fuit.",
      'problem.card2_vs': "deny-all par défaut",
      'problem.card3_title': "MicroVMs",
      'problem.card3_desc': "~120ms de démarrage à froid, un noyau entier dont vous n'avez pas besoin. Bien pour les flottes — absurde par appel de fonction.",
      'problem.card3_vs': "pas de noyau, pas de cloud",
      'solution.label': "La solution",
      'solution.h2': "Chaque exécution dans sa propre Cell.",
      'solution.sub': "Isolée au niveau WASI. Limitée en ressources. Déterministe. Disparue après l\'exécution.",
      'solution.card1_title': "Pool d\'engins",
      'solution.card1_desc': "Mise en cache de l'engine WASM — pas de recompilation par appel. Réutilisation des modules compilés.",
      'solution.card2_title': "Worker de processus",
      'solution.card2_desc': "Isolation multi-processus — exécution concurrente avec limites de ressources par worker.",
      'solution.card3_title': "Budget I/O",
      'solution.card3_desc': "Accès au système de fichiers limité, contrôle du tas GC et délai par appel. Pas de I/O incontrôlé.",
      'solution.card4_title': "Testé par fuzzing",
      'solution.card4_desc': "Fuzzing automatisé dans CI à chaque commit. 23 tests de composants. Cas limites détectés tôt.",
      'deterministic.label': "Exécution déterministe",
      'deterministic.h2': "Même entrée. Même sortie. Chaque fois.",
      'deterministic.sub': 'Le fondement de l\'auditabilité, de la conformité et de l\'IA reproductible. La consommation de fuel corrèle à R² = 1.000000 par plateforme (UAT CL-13) — zéro écart entre exécutions, mesurée à l\'identique sur macOS arm64 (20891 fuel) et DGX Grace arm64 (4506 fuel).',
      'deterministic.badge1': 'Vérifié par HMAC (simulé, pas de preuve ZK)',
      'deterministic.badge2': 'Exécution déterministe',
      'deterministic.badge3': 'Preuve de conformité',
      'deterministic.badge4': 'DORA & AI Act UE Ready',
      'lifecycle.label': "Le cycle de vie de la Cell",
      'lifecycle.h2': "Née isolée. Consumée par son but. Disparue sans trace.",
      'lifecycle.step1_title': "Germ",
      'lifecycle.step1_desc': "Une Cell se forme autour d\'une seule unité d\'exécution — membrane scellée, aucune autorité ambiante.",
      'lifecycle.step2_title': "Metabolism",
      'lifecycle.step2_desc': "Code entrant, sortie sortante. Limitée en ressources. Déterministe. La même entrée donne toujours le même résultat.",
      'lifecycle.step3_title': "Apoptosis",
      'lifecycle.step3_desc': "Nettoyage automatique. Après l\'exécution, le sandbox est fermé et son répertoire de travail supprimé.",
      'vapor.label': "Nettoyage",
      'vapor.h2': "Exécuter. Isoler. Fermer.",
      'vapor.sub': "Après l\'exécution, le sandbox est fermé et son répertoire de travail supprimé — rien ne persiste sur l\'hôte.",
      'bench.label': "Performance",
      'bench.h2': "Sans compromis.",
      'products.label': "Les produits",
      'products.h2': "Isolation Cell. Gouvernance Plateforme.",
      'products.sub': 'Ephemora Cell — la frontière d\'exécution ouverte (Apache-2.0). Ephemora Platform — contrôle centralisé et preuves pour l\'IA réglementée.',
      'products.tag1': "Plateforme · Enterprise",
      'products.tag2': "Sandbox · Open Source",
      'products.platform_desc': "Plateforme d\u0027ex\u00e9cution auto-h\u00e9bergeable pour l\u0027IA r\u00e9glement\u00e9e \u2014 con\u00e7ue pour les institutions financi\u00e8res, les agences gouvernementales et la d\u00e9fense. Isolation, v\u00e9rification cryptographique et cartographie de conformit\u00e9 dans un syst\u00e8me auditable.",
      'products.cell_desc': "Sandbox WASM isolée — renforcée, limitée en ressources, deny-all par défaut.",
      'contact.label': "Contact",
      'contact.h2': "Parlons de confiance en l\'exécution.",
      'contact.p': "Nous sélectionnons des pilotes enterprise pour le T3 2026. Si l\'exécution déterministe pour l\'IA autonome est dans votre roadmap, connectons-nous.",
      'contact.btn': "Connecter sur LinkedIn",
      'contact.name': "Michael Soppa — CEO, Ephemora",
      'contact.sub': "Contactez-nous par e-mail, LinkedIn ou une brève présentation.",
      'problem.vs1': "<20ms, WASM in-process",
      'problem.vs2': "deny-all par défaut",
      'problem.vs3': "pas de kernel, pas de cloud",
      'why.label': "Pourquoi Ephemora Cell",
      'why.h2': "Concu pour l\u0027isolation. Pas juste l\u0027execution WASM.",
      'why.sub': "Nous avons choisi la plus petite unite d\u0027execution possible — une seule Cellule — car la confiance monte depuis le bas.",
                                                                                                              'footer.tagline': "Isolé. Déterministe. Contenu.",
      'arch.label': "Architecture",
      'arch.h2': "Au-delà de l'isolation.",
      'arch.sub': 'v2.1.1 — pool d\'engins, composants WASI-02, rapports d\'exécution et Wasm 3.0 memory64. Conçu pour l\'échelle.',
      'arch.c1_title': "Composants WASI-02",
      'arch.c1_desc': "413 LOC — prochaine génération de composants WASI. Détection ABI, format binaire de composant.",
      'arch.c2_title': "Rapport d'exécution",
      'arch.c2_desc': 'Traçabilité structurée: fuel consommé, durée, opérations IO, statut de sortie. Signé Ed25519, canonisé selon RFC 8785 (JCS). Note: attestation actuellement simulée/HMAC, pas une preuve zéro-connaissance.',
      'arch.c3_title': "Wasm 3.0 memory64",
      'arch.c3_desc': "Support espace adresse 64 bits pour grands modèles. Mémoire au-delà des limites 4 Go.",
      'arch.c4_title': 'Adaptateur MCP (ephemora-cell-mcp)',
      'arch.c4_desc': 'Serveur MCP dont les outils sont des modules WASM dans la Cell — 1 dépendance, _meta.execution par appel, vérifié avec l\'inspecteur MCP officiel.',
      'arch.c5_title': 'Composants',
      'arch.c5_desc': '23 tests de composants — isolation WASI modulaire pour charges utiles pluggables.',
      'trust.label': "Signaux de confiance",
      'trust.h2': "Vérifié. Pas seulement affirmé.",
      'trust.s1_title': '272 Tests',
      'trust.s1_desc': "Isolation, sécurité, budget I/O, composants — tout vérifié en CI.",
      'trust.s2_title': "Fuzz Testing",
      'trust.s2_desc': "Fuzzing automatisé à chaque commit — cas limites détectés avant la release.",
      'trust.s3_title': '2 908 LOC',
      'trust.s3_desc': "11 modules, 4 profils, pool d'engins — surface d'attaque minimale.",
      'trust.s4_title': 'Open Source (Apache-2.0)',
      'trust.s4_desc': 'Code public, licence permissive, benchmarks reproductibles — vérifiez par vous-même. La plateforme Ephemora complète reste enterprise.',
      'products.platform_f1': "Traçabilité cryptographique par exécution",
      'products.platform_f2': "Auto-hébergeable — aucune donnée ne quitte votre infrastructure",
      'products.platform_f3': "Cartographie de conformité (DORA, AI Act UE, NIS2)",
      'products.platform_f4': "Multi-locataire avec confiance matérielle",
      'products.platform_cta': "Demander une démo →",
      'vp.statement': 'Ephemora Cell est la frontière d\'exécution ouverte pour les petites actions WASI non fiables — Apache-2.0 open source.',
      'solution.cta': 'Open source — Apache-2.0',
      'solution.cta_sub': 'Open source — licence Apache-2.0, utilisation libre',
    },
    pl: {
      'meta.title': 'Ephemora — Wykonaniu, któremu możesz ufać',
      'meta.description': 'Ephemora Cell dostarcza deterministyczne, z ograniczeniami zasobów wykonanie dla autonomicznego AI. Izolowane na poziomie WASI. Sandbox Apache 2.0 dostępna.',
      'nav.problem': 'Problem',
      'nav.solution': 'Rozwiązanie',
      'nav.products': 'Produkty',
      'nav.benchmarks': 'Benchmarki',
      'nav.cta': 'Poproś o demo',      'mcp.label': 'Adapter MCP',
      'mcp.h2': 'Twój agent, mówiący MCP.',
      'mcp.sub': 'ephemora-cell-mcp zamienia każdą Cell w serwer narzędzi MCP — jedna zależność, dowód wykonania per wywołanie, zweryfikowany oficjalnym MCP Inspector.',
      'mcp.badge1': 'Oficjalny MCP Inspector zweryfikowany',
      'mcp.badge2': '0,89 ms na wywołanie · 845 exec/s na DGX',
      'mcp.badge3': '1 zależność · moduły WASM jako narzędzia',

      'hero.badge': 'WASI Preview1 · 272 testów · v2.1.1 · Apache-2.0',
      'lang.comparison.label': 'Porównanie',
      'lang.comparison.h2': 'Dlaczego Ephemora Cell zamiast alternatyw?',
      'lang.comparison.sub': 'To nie kolejny generyczny wrapper WASI. Cell jest zbudowana do efemerycznej, deterministycznej execution.',
      'lang.comparison.row1': 'Model izolacji',
      'lang.comparison.row2': 'Sieć domyślnie',
      'lang.comparison.row3': 'Automatyczne czyszczenie',
      'lang.comparison.row4': 'Zastosowanie',
      'lang.cell.val1': 'WASI Preview1 (preopen)',
      'lang.cell.val2': 'Brak (zero)',
      'lang.cell.val3': 'Tak (cleanup)',
      'lang.cell.val4': 'Efemeryczny runtime agenta',
      'lang.extism.val1': 'Funkcje hosta (generyczne)',
      'lang.extism.val2': 'Nie (sandbox)',
      'lang.extism.val3': 'Nie',
      'lang.extism.val4': 'System pluginów WASM',
      'lang.wasmedge.val1': 'WASI (konfigurowalne)',
      'lang.wasmedge.val2': 'Opcjonalnie',
      'lang.wasmedge.val3': 'Nie',
      'lang.wasmedge.val4': 'Runtime inferencji ML',
      'lang.wasmtime.val1': 'WASI (raw)',
      'lang.wasmtime.val2': 'Konfigurowalny',
      'lang.wasmtime.val3': 'Nie',
      'lang.wasmtime.val4': 'WASM ogólnego przeznaczenia',
      'upgrade.label': 'Organizm',
      'upgrade.h2': 'Komórka żyje samodzielnie. Ephemora to organizm.',
      'upgrade.sub': 'Gdy Twój przypadek podlega regulacjom — DORA, AI Act UE, NIS2 — potrzebujesz więcej niż izolacji.',
      'upgrade.cta': 'Przejdź na 9/9 →',
      'hero.h1': 'Każdy workload ma cell.',
      'hero.h2': 'Każda cell ma cel. Każda cell ma koniec.',
      'hero.sub': 'Bezpieczna obliczeniowa cell dla niezaufanych i wrażliwych workloads. Utworzona na jedną execution, zamknięta po spełnieniu celu. Apache-2.0 open source — uruchom sam.',
      'hero.btn1': 'Co to Cell ↓',
      'hero.btn2': 'Open source — pobierz kod',
      'hero.meta1': 'preopen default-deny',
      'hero.meta2': 'brak shell · brak syscalls',
      'hero.meta3': 'pamięć · fuel · timeout',
      'hero.meta4': '5 frameworków agentów',
      'metrics.label1': 'izolacja zweryfikowana',
      'metrics.label2': 'niebezpieczne katalogi zablokowane',
      'metrics.label3': 'dostęp do sieci',
      'metrics.label4': 'minimalna powierzchnia ataku',
      'problem.label': 'Problem',
      'problem.h2': 'Twój agent pisze kod. Ten kod nie jest zaufany.',
      'problem.sub': 'Każdy workflow agentic wykonuje kod wygenerowany przez AI. Trzy standardowe opcje zawiodą każda inaczej.',
      'problem.card1_title': 'Kontenery',
      'problem.card1_desc': '~300ms na call, współdzielony kernel, obrazy do zarządzania. Izolacja jest jednym configiem od niczego.',
      'problem.card1_vs': '&lt;20ms, in-process WASM',
      'problem.card2_title': 'Subprocesses',
      'problem.card2_desc': 'Brak izolacji: ten sam użytkownik, filesystem, środowisko. Jedna zła import i wszystko wycieka.',
      'problem.card2_vs': 'deny-all domyślnie',
      'problem.card3_title': 'MicroVMs',
      'problem.card3_desc': '~120ms cold start, cały kernel, którego nie potrzebujesz. Dobrze dla flot — absurdalne per function call.',
      'problem.card3_vs': 'bez kernela, bez chmury',
      'solution.label': 'Rozwiązanie',
      'solution.h2': 'Każde wykonanie w własnej Cell.',
      'solution.sub': 'Izolowane na poziomie WASI. Ograniczone zasobami. Deterministyczne. Znikające po wykonaniu.',
      'solution.card1_title': 'Engine Pool',
      'solution.card1_desc': 'Cache engine WASM — bez rekompilacji per call. Wtórne wykorzystanie skompilowanych modułów.',
      'solution.card2_title': 'Process Worker',
      'solution.card2_desc': 'Izolacja wieloprocesowa — równoległe wykonanie z limitami zasobów per worker.',
      'solution.card3_title': 'Budget I/O',
      'solution.card3_desc': 'Limitowany dostęp do FS, kontrola GC heap i timeout per call. Bez niekontrolowanego I/O.',
      'solution.card4_title': 'Fuzz-Testowane',
      'solution.card4_desc': 'Automatyczne fuzzing w CI przy każdym commicie. 23 testy komponentów. Early detection edge cases.',
      'deterministic.label': 'Wykonanie deterministyczne',
      'deterministic.h2': 'Ten sam input. Ten sam output. Za każdym razem.',
      'deterministic.sub': 'Fundament dla audytowalności, compliance i replikowalnego AI. Zużycie fuel koreluje z R² = 1.000000 na platformę (UAT CL-13) — zero rozrzutu między przebiegami, zmierzone identycznie na macOS arm64 (20891 fuel) i DGX Grace arm64 (4506 fuel).',
      'deterministic.badge1': 'Weryfikacja HMAC (symulowane, nie ZK-proof)',
      'deterministic.badge2': 'Wykonanie deterministyczne',
      'deterministic.badge3': 'Dowód zgodności',
      'deterministic.badge4': 'DORA & AI Act UE Gotowe',
      'lifecycle.label': 'Cykl życia Cell',
      'lifecycle.h2': 'Urodzona izolowana. Zużyta przez cel. Zniknięta bez śladu.',
      'lifecycle.step1_title': 'Germ',
      'lifecycle.step1_desc': 'Cell powstaje wokół pojedynczej jednostki wykonania — membrana zpieczętowana, bez autoryzacji otoczenia.',
      'lifecycle.step2_title': 'Metabolism',
      'lifecycle.step2_desc': 'Kod w, wynik out. Ograniczone zasobami. Deterministyczne. Ten sam input zawsze daje ten sam rezultat.',
      'lifecycle.step3_title': 'Apoptosis',
      'lifecycle.step3_desc': 'Automatyczne czyszczenie. Po wykonaniu sandbox jest zamykany, a jego katalog roboczy usuwany.',
      'vapor.label': 'Czyszczenie',
      'vapor.h2': 'Wykonaj. Izoluj. Zamknij.',
      'vapor.sub': 'Po wykonaniu sandbox jest zamykany, a jego katalog roboczy usuwany — nic nie zostaje na hoście.',
      'bench.label': 'Wydajność',
      'bench.h2': 'Bez kompromisów.',
      'products.label': 'Produkty',
      'products.h2': 'Izolacja Cell. Governancja Platformy.',
      'products.sub': 'Ephemora Cell — otwarta granica wykonania (Apache-2.0). Ephemora Platform — centralna kontrola i dowody dla AI regulowanej.',
      'products.tag1': 'Platforma · Enterprise',
      'products.tag2': 'Sandbox · Open Source',
      'products.platform_desc': 'Platforma wykonawcza hostowana lokalnie dla regulowanej AI — zaprojektowana dla instytucji finansowych, agencji rządowych i obrony. Izolacja, weryfikacja kryptograficzna i mapowanie zgodności w jednym audytowalnym systemie.',
      'products.cell_desc': 'Izolowana sandbox WASM — utwardzona, ograniczona zasobami, deny-all domyślnie.',
      'contact.label': 'Kontakt',
      'contact.h2': 'Porozmawiajmy o zaufaniu do wykonania.',
      'contact.p': 'Wybieramy enterprise pilotów na Q3 2026. Jeśli deterministyczne wykonanie dla autonomicznego AI jest na Twojej roadmapie, łączmy się.',
      'contact.btn': 'Połącz na LinkedIn',
      'contact.name': 'Michael Soppa — CEO, Ephemora',
                                                                                                                    'solution.cta': 'Open source — Apache-2.0',
      'solution.cta_sub': 'Open source — licencja Apache-2.0, wolne użycie',
      'contact.sub': 'Skontaktuj sie via email, LinkedIn lub krótkie wprowadzenie.',
      'problem.vs1': '<20ms, WASM in-process',
      'problem.vs2': 'deny-all domyślnie',
      'problem.vs3': 'bez kernela, bez chmury',
      'why.label': 'Dlaczego Ephemora Cell',
      'why.h2': 'Zbudowane dla izolacji. Nie tylko wykonanie WASM.',
      'why.sub': 'Wybraliśmy najmniejszą możliwą jednostkę wykonawczą — pojedynczą Cell — bo zaufanie skaluje się od dołu.',
'footer.tagline': 'Izolowane. Deterministyczne. Zabezpieczone.',
      'arch.label': 'Architektura',
      'arch.h2': 'Poza izolacją.',
      'arch.sub': 'v2.1.1 — engine pooling, komponenty WASI-02, raporty wykonania i Wasm 3.0 memory64. Zbudowane na skalę.',
      'arch.c1_title': 'Komponenty WASI-02',
      'arch.c1_desc': '413 LOC — następna generacja komponentów WASI. Wykrywanie ABI, format binarny komponentu.',
      'arch.c2_title': 'Raport Wykonania',
      'arch.c2_desc': 'Strukturyzowany ślad audytowy: zużyty fuel, czas, operacje IO, status wyjścia. Podpisany Ed25519, skanonizowany wg RFC 8785 (JCS). Uwaga: obecnie symulowane/HMAC attestation, nie proof zerowej wiedzy.',
      'arch.c3_title': 'Wasm 3.0 memory64',
      'arch.c3_desc': '64-bitowa przestrzeń adresowa dla dużych modeli. Pamiêć poza limitami 4GB.',
      'arch.c4_title': 'Adapter MCP (ephemora-cell-mcp)',
      'arch.c4_desc': 'Serwer MCP, którego narzędzia to moduły WASM w Cell — 1 zależność, _meta.execution per wywołanie, zweryfikowane oficjalnym MCP Inspector.',
      'arch.c5_title': 'Komponenty',
      'arch.c5_desc': '23 testy komponentów — modułowa izolacja WASI dla pluggable workloads.',
      'trust.label': 'Sygnały zaufania',
      'trust.h2': 'Zweryfikowane. Nie tylko twierdzone.',
      'trust.s1_title': '272 testów',
      'trust.s1_desc': 'Izolacja, bezpieczeństwo, budżet I/O, komponenty — wszystko zweryfikowane w CI.',
      'trust.s2_title': 'Fuzz Testing',
      'trust.s2_desc': 'Automatyczne fuzzing przy każdym commicie — edge cases wykrywane przed release.',
      'trust.s3_title': '2,908 LOC',
      'trust.s3_desc': '11 modułów, 4 profile, engine pooling — minimalna powierzchnia ataku.',
      'trust.s4_title': 'Open Source (Apache-2.0)',
      'trust.s4_desc': 'Publiczny kod, permissive licencja, powtarzalne benchmarki — sprawdź sam. Pełna platforma Ephemora pozostaje enterprise.',
      'products.platform_f1': 'Kryptograficzny ślad audytowy per wykonanie',
      'products.platform_f2': 'Hostowany lokalnie — żadne dane nie opuszczają Twojej infrastruktury',
      'products.platform_f3': 'Mapowanie zgodności (DORA, AI Act UE, NIS2)',
      'products.platform_f4': 'Wielodostępny z zaufaniem sprzętowym',
      'products.platform_cta': 'Poproś o demo →',
      'vp.statement': 'Ephemora Cell to otwarta granica wykonania dla małych, niezaufanych akcji WASI — Apache-2.0 open source.',
    },
  },

  currentLang: 'en',

  init() {
    // Detect saved language or browser preference
    const saved = localStorage.getItem('ephemora-lang');
    if (saved && this.translations[saved]) {
      this.setLanguage(saved, false);
    } else {
      const browser = (navigator.language || 'en').slice(0, 2);
      if (this.translations[browser]) {
        this.setLanguage(browser, false);
      }
    }
    this.buildSwitcher();
  },

  setLanguage(lang, save = true) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;
    if (save) localStorage.setItem('ephemora-lang', lang);

    // Update <html lang>
    document.documentElement.lang = lang;

    // Swap all data-i18n elements (textContent prevents XSS)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.translations[lang]?.[key];
      if (!val) return;
      // Safe decode of HTML entities for hardcoded translations
      const decoder = new DOMParser().parseFromString(val, 'text/html');
      el.textContent = decoder.documentElement.textContent;
    });

    // Update <title>
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl && this.translations[lang]['meta.title']) {
      document.title = this.translations[lang]['meta.title'];
    }

    // Update active state in switcher
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  },

  buildSwitcher() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    // Remove existing switcher if any
    const existing = document.querySelector('.lang-switch');
    if (existing) existing.remove();

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-switch';

    const btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.setAttribute('data-lang', 'en');
    btn.innerHTML = `EN <svg aria-hidden="true" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l4 4 4-4"/></svg>`;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      wrapper.classList.toggle('open');
    });

    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';

    for (const [code, label] of Object.entries(this.langs)) {
      const item = document.createElement('button');
      item.setAttribute('data-lang', code);
      item.textContent = label;
      item.addEventListener('click', () => {
        this.setLanguage(code);
        btn.textContent = label;
        btn.setAttribute('data-lang', code);
        wrapper.classList.remove('open');
      });
      dropdown.appendChild(item);
    }

    wrapper.appendChild(btn);
    wrapper.appendChild(dropdown);
    navLinks.appendChild(wrapper);

    // Close on outside click
    document.addEventListener('click', () => wrapper.classList.remove('open'));
    wrapper.addEventListener('click', (e) => e.stopPropagation());
  },
};

// CSS injection for language switcher
(function() {
  const style = document.createElement('style');
  style.textContent = `
.lang-switch{position:relative;display:inline-block;margin-left:16px}
.lang-btn{background:var(--surface);border:1px solid var(--border);color:var(--text);font-family:var(--font-mono);font-size:.75rem;padding:6px 12px;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:border-color .15s}
.lang-btn:hover{border-color:var(--cyan)}
.lang-btn .active{color:var(--cyan)}
.lang-dropdown{display:none;position:absolute;top:calc(100% + 6px);right:0;background:var(--surface);border:1px solid var(--border);border-radius:8px;overflow:hidden;min-width:90px;z-index:100;box-shadow:0 8px 24px rgba(0,0,0,.4)}
.lang-switch.open .lang-dropdown{display:block}
.lang-dropdown button{display:block;width:100%;padding:8px 16px;background:none;border:none;color:var(--text);font-family:var(--font-mono);font-size:.75rem;cursor:pointer;text-align:left;transition:background .15s}
.lang-dropdown button:hover{background:var(--bg-elev);color:var(--cyan)}
.lang-dropdown button.active{color:var(--cyan)}
@media(max-width:720px){
  .lang-switch{margin-left:8px}
  .lang-btn{padding:5px 10px;font-size:.7rem}
}
  `;
  document.head.appendChild(style);
})();

// Init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
  i18n.init();
}


// Scroll-triggered fade-in
(function(){
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => observer.observe(el));
})();

// === Scroll Fade-In (IntersectionObserver) ===
(function() {
  var els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  for (var i = 0; i < els.length; i++) {
    io.observe(els[i]);
  }
})();
