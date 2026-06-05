




### Complete System Architecture (Functional & Penetration Testing)

```mermaid
flowchart TD
    %% Phase 1: Onboarding
    subgraph Setup [1. Workspace Setup]
        A[Workspace] --> B[Connect GitHub Repo]
        B --> C[Configure GitHub App]
    end

    %% Phase 2: Dual Scan & Generation Engine
    subgraph Analysis [2. AI Code Analysis & Security Scan]
        C --> D[Scan Repository Tree]
        D --> E[Read File Contents]
        
        %% Parallel Functional & Security Tracks
        E --> F1[Functional Path: AI Context Prompt]
        E --> F2[Security Path: DAST / SAST Scanning]
        
        %% Functional Generation
        F1 --> G1[AI Model Processing] --> H1[Generate UI Test Cases]
        H1 --> H1a[Title & Description]
        H1 --> H1b[BrowserBase Script]
        
        %% Security Scan
        F2 --> G2[Vulnerability Analysis Engine] --> H2[Generate Pentest Payloads]
        H2 --> H2a[OWASP Top 10 Exploits]
        H2 --> H2b[SQLi / XSS Attack Vectors]
    end

    %% Phase 3: Intelligent Execution Engine
    subgraph Execution [3. Smart Parallel Execution]
        %% Functional Execution Path
        H1b --> I1([Trigger Functional Test])
        I1 --> J1{Script in DB?}
        J1 -- No --> K1[Generate Script via AI] --> L1[Create BrowserBase Session]
        J1 -- Yes --> L1
        L1 --> M1[Execute UI Script in Cloud Browser]
        
        %% Pentest Execution Path
        H2b --> I2([Trigger Pentest Flight])
        I2 --> L2[Initialize Attack Container]
        L2 --> M2[Execute Exploits against Target App]
    end

    %% Phase 4: Unified Reporting
    subgraph Reporting [4. Aggregated Results]
        M1 --> N[Merge Test Logs & Vulnerability Reports]
        M2 --> N
        N --> O([Return Pass/Fail & Security Risk Score])
    end

    %% Minimalist Elegant Styling
    classDef default fill:#fafafa,stroke:#ccc,stroke-width:1px,color:#333;
    classDef primary fill:#f0f7ff,stroke:#0066cc,stroke-width:1.5px,color:#002244;
    classDef security fill:#fef2f2,stroke:#dc2626,stroke-width:1.5px,color:#7f1d1d;
    classDef cloud fill:#fff7ed,stroke:#ea580c,stroke-width:1.5px,color:#431407;
    
    class A,B,C,D,E,F1,G1,H1,H1a,H1b,I1,J1,K1,N default;
    class Setup,Analysis,Execution,Reporting primary;
    class F2,G2,H2,H2a,H2b,I2,L2,M2 security;
    class L1,M1,Cloud cloud;
