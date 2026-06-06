import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Play, 
  LayoutDashboard, 
  Settings, 
  Terminal, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  ChevronRight,
  Database,
  Github,
  GitBranch,
  RefreshCw,
  Sliders,
  Cpu,
  Lock,
  FileCode,
  Layers,
  FileText,
  AlertCircle,
  Eye,
  CheckCircle,
  XCircle,
  HelpCircle,
  ExternalLink,
  User,
  LogOut,
  Sparkles,
  ArrowRight,
  GitFork,
  Binary,
  TrendingUp,
  StopCircle
} from 'lucide-react';

export default function App() {
  // Clerk Auth State Simulation
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Pre-authenticated for quick preview
  const [authLoading, setAuthLoading] = useState(false);
  const [clerkUser, setClerkUser] = useState({
    name: 'SecOps Engineer',
    email: 'engineer@acme.security',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  });
  const [authEmail, setAuthEmail] = useState('engineer@acme.security');
  const [authPassword, setAuthPassword] = useState('••••••••••••');

  // Application Navigation (Defaults to first step: Workspace setup)
  const [activeTab, setActiveTab] = useState('workspace');
  const [selectedRepo, setSelectedRepo] = useState('acme-corp/ecommerce-platform');
  const [gitBranch, setGitBranch] = useState('main');
  const [securityScore, setSecurityScore] = useState(88);
  const [functionalPassRate, setFunctionalPassRate] = useState(95);

  // Dynamic Pipeline Settings
  const [forceFailFunctional, setForceFailFunctional] = useState(false);
  const [selectedLLM, setSelectedLLM] = useState('gpt-4o');
  const [bypassScriptCache, setBypassScriptCache] = useState(false);

  // Pipeline Simulation States
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentAgent, setCurrentAgent] = useState('idle'); // 'idle' | 'supervisor' | 'functional' | 'security' | 'reporting'
  const [simStep, setSimStep] = useState(0); 
  const [simLogs, setSimLogs] = useState([]);
  const [cloudBrowserUrl, setCloudBrowserUrl] = useState('https://app-staging.acme.dev/login');

  // Repositories List
  const [repositories, setRepositories] = useState([
    'acme-corp/ecommerce-platform',
    'acme-corp/auth-microservice',
    'acme-corp/billing-gateway'
  ]);
  const [newRepoName, setNewRepoName] = useState('');

  // Functional Test Specs (Connected to Postgres Storage Simulation)
  const [testCases, setTestCases] = useState([
    { id: 'TC-101', name: 'User Signup Flow Validation', agent: 'GPT-4o', status: 'Passed', duration: '45s', engine: 'BrowserBase' },
    { id: 'TC-102', name: 'Stripe webhook payment capture', agent: 'GPT-4o', status: 'Passed', duration: '1m 12s', engine: 'BrowserBase' },
    { id: 'TC-103', name: 'Checkout guest billing bypass check', agent: 'GPT-4o', status: 'Passed', duration: '32s', engine: 'BrowserBase' },
    { id: 'TC-104', name: 'JWT Expiration Refresh window test', agent: 'Cache Match', status: 'Passed', duration: '0.8s', engine: 'PostgreSQL DB' }
  ]);

  // Security Exploits / Vectors
  const [secVulnerabilities, setSecVulnerabilities] = useState([
    { id: 'SEC-301', name: 'Blind SQL Injection in Item Search Query', scanner: 'sqlmap', severity: 'Critical', status: 'Active', target: '/api/v1/search?q=' },
    { id: 'SEC-302', name: 'Reflected Cross-Site Scripting (XSS) in Invoice Portal', scanner: 'OWASP ZAP', severity: 'High', status: 'Active', target: '/billing/invoice?id=' },
    { id: 'SEC-303', name: 'Insecure Direct Object Reference (IDOR)', scanner: 'Semgrep SAST', severity: 'Medium', status: 'Mitigated', target: '/api/v1/users/{id}' }
  ]);

  const [promptContext, setPromptContext] = useState(
    "Target is a Next.js e-commerce platform using Stripe. Instruct the Playwright agent to run Guest Checkout, isolate billing input fields, and assert checkout callback routes status."
  );

  const [targetScriptCode, setTargetScriptCode] = useState(
    `// [LangGraph Script Cache Node] Cache Match Found!\nconst { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('${cloudBrowserUrl}');\n  await page.click('button[type="submit"]');\n})();`
  );

  // Sequential LangGraph Pipeline Execution Simulation
  const triggerUnifiedFlight = () => {
    setIsSimulating(true);
    setSimStep(1);
    setCurrentAgent('supervisor');
    setSimLogs([
      '[Supervisor] Starting State Graph Engine...',
      '[Supervisor] LangGraph state mapping initialized.',
      '[Supervisor] Setting up execution thread. Postgres backend: Connected.'
    ]);

    // Step 1: Supervisor hands over to Functional Agent (2s)
    setTimeout(() => {
      setSimStep(2);
      setCurrentAgent('functional');
      setSimLogs(prev => [
        ...prev,
        '[Functional Agent] Initiated. Context: Reading GitHub repository structures.',
        `[Functional Agent] Querying PostgreSQL for script cache matched on: ${selectedRepo}...`,
        bypassScriptCache 
          ? '[Functional Agent] Cache bypassed. Triggering GPT-4o Playwright Compiler Node...' 
          : '[Functional Agent] Script DB Node Match Found! Skipping dynamic compilation step.'
      ]);
    }, 2000);

    // Step 2: Playwright cloud execution on BrowserBase (2.5s)
    setTimeout(() => {
      setSimStep(3);
      setSimLogs(prev => [
        ...prev,
        '[Functional Agent] Running Playwright suite inside cloud-hosted BrowserBase node.',
        '[Functional Agent] Navigation assertions executing against staging container...'
      ]);
      
      if (forceFailFunctional) {
        // Stop Condition Route
        setTimeout(() => {
          setSimStep(0);
          setIsSimulating(false);
          setCurrentAgent('idle');
          setSimLogs(prev => [
            ...prev,
            '🚨 [Functional Agent] CRITICAL FAILURE: Checkout guest billing bypass failed structural validation.',
            '⛔ [Supervisor] Evaluation Node: Functional status failed. Stopping sequential execution.',
            '⛔ [Supervisor] Security Testing Agent: Bypassed/Skipped to prevent false-positive vulnerability reports.'
          ]);
          setFunctionalPassRate(75);
          setTestCases(old => [
            { id: 'TC-105', name: 'Checkout guest billing bypass check', agent: 'GPT-4o', status: 'Failed', duration: '12s', engine: 'BrowserBase' },
            ...old.filter(t => t.id !== 'TC-103')
          ]);
        }, 3000);
      }
    }, 4500);

    // If we're not forcing failure, proceed to Security Agent
    if (!forceFailFunctional) {
      setTimeout(() => {
        setSimStep(4);
        setCurrentAgent('security');
        setSimLogs(prev => [
          ...prev,
          '✅ [Supervisor] Evaluation Node: Functional tests PASSED. Routing to Security Testing Agent Node.',
          '[Security Agent] Semgrep SAST Node launched. Scanning static structures...',
          '[Security Agent] Semgrep: Completed. No blocking authentication bypasses found.'
        ]);
      }, 7500);

      // Step 4: DAST / sqlmap active testing (2.5s)
      setTimeout(() => {
        setSimStep(5);
        setSimLogs(prev => [
          ...prev,
          '[Security Agent] Launching OWASP ZAP container dynamic spider...',
          '[Security Agent] sqlmap Exploit Node spawned. Injecting payloads onto active search routes...'
        ]);
      }, 10000);

      // Step 5: supervisor gathers reports (2s)
      setTimeout(() => {
        setSimStep(6);
        setCurrentAgent('reporting');
        setSimLogs(prev => [
          ...prev,
          '[Supervisor] Security checks finalized.',
          '[Supervisor] Aggregating SAST, DAST and Functional test datasets to Postgres storage logs...',
          '[Supervisor] Grafana live telemetry dashboard notified. Unified reports ready.'
        ]);
      }, 12500);

      // Final Completion
      setTimeout(() => {
        setIsSimulating(false);
        setSimStep(0);
        setCurrentAgent('idle');
        setSecurityScore(Math.floor(Math.random() * 10) + 88);
        setFunctionalPassRate(100);
        setSimLogs([]);
        setActiveTab('dashboard'); // Auto-redirect to unified cockpit
      }, 14500);
    }
  };

  const handleClerkLogin = (provider) => {
    setAuthLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setClerkUser({
        name: provider === 'github' ? 'GitHub Developer' : 'Acme Admin',
        email: provider === 'github' ? 'git-ninja@github.com' : authEmail,
        avatar: provider === 'github' 
          ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80'
          : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
      });
      setAuthLoading(false);
    }, 1000);
  };

  const handleClerkLogout = () => {
    setIsAuthenticated(false);
    setClerkUser(null);
    setActiveTab('workspace');
  };

  const addNewRepository = (e) => {
    e.preventDefault();
    if (newRepoName.trim()) {
      setRepositories([...repositories, newRepoName.trim()]);
      setSelectedRepo(newRepoName.trim());
      setNewRepoName('');
    }
  };

  // Auth Clerk Page design
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Clerk Custom Sign-in Widget */}
        <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden relative z-10">
          <div className="bg-zinc-950 px-8 py-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <div>
                <h1 className="font-bold text-white text-md">GuardianAI</h1>
                <p className="text-[10px] text-zinc-400 font-mono">clerk-secured-tunnel</p>
              </div>
            </div>
            <span className="text-[10px] bg-zinc-800 text-indigo-400 border border-zinc-700 rounded px-2 py-0.5 font-mono">
              Clerk Secured
            </span>
          </div>

          <div className="p-8 space-y-6">
            <div className="text-center space-y-1.5">
              <h2 className="text-xl font-bold text-zinc-100">Sign in to your account</h2>
              <p className="text-xs text-zinc-400">LangGraph Dual-Agent SecOps System</p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                disabled={authLoading}
                onClick={() => handleClerkLogin('github')}
                className="w-full flex items-center justify-center gap-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-200 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200"
              >
                <Github className="w-5 h-5 text-indigo-400" />
                <span>Continue with GitHub Account</span>
              </button>
            </div>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-zinc-800"></div>
              <span className="flex-shrink mx-4 text-zinc-500 text-xs font-mono">or email credentials</span>
              <div className="flex-grow border-t border-zinc-800"></div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleClerkLogin('email'); }} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">Email Address</label>
                <input
                  type="email"
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-300 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">Password</label>
                <input
                  type="password"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-300 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
              >
                {authLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Proceed securely</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Flight Pipeline Progress Header Bar */}
      {isSimulating && (
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-rose-600 px-4 py-2.5 text-center text-xs font-semibold text-white flex items-center justify-center gap-3 animate-pulse shadow-md relative z-50 font-mono">
          <RefreshCw className="w-4 h-4 animate-spin" />
          <span>
            [LangGraph Supervisor Agent Active] Status: {
              currentAgent === 'supervisor' ? "Setting up State Graph State Parameters" :
              currentAgent === 'functional' ? "Functional Node executing Playwright script inside BrowserBase cloud runner" :
              currentAgent === 'security' ? "Security Node triggered (SAST Semgrep + dynamic ZAP/sqlmap containers)" :
              currentAgent === 'reporting' ? "Aggregating outputs into PostgreSQL Database store" : "Finalizing reports"
            }
          </span>
        </div>
      )}

      <div className="flex flex-1">
        {/* Unified Cybersec Sidebar */}
        <aside className="w-80 bg-zinc-900 border-r border-zinc-800/80 flex flex-col justify-between shrink-0">
          <div>
            {/* SaaS branding */}
            <div className="p-6 border-b border-zinc-800/80 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600/10 border border-indigo-500/20 rounded-xl flex items-center justify-center shadow-lg">
                <ShieldCheck className="text-indigo-400 w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h2 className="font-bold text-md leading-tight tracking-wide text-zinc-100">GuardianAI</h2>
                <p className="text-[10px] text-indigo-400 font-mono uppercase tracking-wider">LangGraph orchestrator</p>
              </div>
            </div>

            {/* Workspace Repo Connection */}
            <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-950/40">
              <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Target Workspace</label>
              <div className="flex items-center justify-between bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-800">
                <div className="flex items-center gap-2 truncate">
                  <Github className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-mono text-zinc-300 truncate">{selectedRepo}</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" title="State: Connected"></div>
              </div>
            </div>

            {/* Navigation Tabs - Sequenced layout: Workspace -> Functional -> Security -> Dashboard */}
            <nav className="p-4 space-y-1">
              {[
                { id: 'workspace', label: '1. Workspace Setup', icon: GitFork, desc: 'LangGraph connections & Github App' },
                { id: 'functional', label: '2. Functional Agent', icon: Terminal, desc: 'GPT-4o scripts & BrowserBase cloud' },
                { id: 'security', label: '3. Security Agent', icon: AlertTriangle, desc: 'Semgrep SAST, OWASP ZAP & sqlmap' },
                { id: 'dashboard', label: '4. Supervisor Dashboard', icon: LayoutDashboard, desc: 'Unified safety score & results logs' },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex gap-3.5 items-start ${
                      isActive 
                        ? 'bg-zinc-800 text-white border border-zinc-700/80 shadow-inner' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                    }`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${isActive ? 'text-indigo-400' : 'text-zinc-600'}`} />
                    <div>
                      <div className="font-semibold text-xs leading-none">{item.label}</div>
                      <div className="text-[10px] text-zinc-500 mt-1 font-normal leading-tight">{item.desc}</div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* User profile with logout */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-950/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <img 
                  src={clerkUser?.avatar} 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full border border-zinc-800 object-cover shrink-0"
                />
                <div className="truncate">
                  <div className="text-xs font-bold text-zinc-200 truncate">{clerkUser?.name}</div>
                  <div className="text-[9px] font-mono text-zinc-500 truncate">{clerkUser?.email}</div>
                </div>
              </div>
              <button 
                onClick={handleClerkLogout}
                title="Log out clerk session"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-zinc-900/80 transition-all shrink-0"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'settings' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Settings className="w-3.5 h-3.5 text-zinc-600" />
                <span>LangGraph Parameters</span>
              </div>
              <span className="bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded text-[8px] font-mono">v1.5</span>
            </button>
          </div>
        </aside>

        {/* Content Body */}
        <main className="flex-1 bg-zinc-950 flex flex-col min-w-0 overflow-hidden">
          
          {/* Dashboard Header Bar */}
          <header className="h-20 border-b border-zinc-800 px-8 flex items-center justify-between shrink-0 bg-zinc-900/25 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="text-[10px] bg-indigo-950 text-indigo-400 border border-indigo-900/50 px-2 py-0.5 rounded font-mono">
                LANGGRAPH ACTIVE NODE
              </span>
              <h2 className="text-zinc-400 font-medium text-xs font-mono">/ {activeTab.toUpperCase()}</h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Force Failure Simulator switch for demonstration */}
              <div className="flex items-center gap-2.5 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-400">Force Functional Fail:</span>
                <button
                  onClick={() => setForceFailFunctional(!forceFailFunctional)}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
                    forceFailFunctional ? 'bg-rose-600' : 'bg-zinc-700'
                  }`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-200 ${
                    forceFailFunctional ? 'translate-x-4' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              <button
                disabled={isSimulating}
                onClick={triggerUnifiedFlight}
                className="relative overflow-hidden group flex items-center gap-2.5 bg-indigo-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-600/15 disabled:opacity-50 text-xs"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{isSimulating ? 'Evaluating Graph Nodes...' : 'Trigger State Flight'}</span>
              </button>
            </div>
          </header>

          {/* Sub Views Based on active tab */}
          <div className="flex-grow overflow-y-auto">
            
            {/* Phase 1: Setup & Workspace Tab */}
            {activeTab === 'workspace' && (
              <div className="p-8 space-y-8">
                
                {/* Onboarding LangGraph Flow Diagram */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl space-y-4 shadow-xl">
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs">
                    <Binary className="w-4 h-4 animate-pulse" />
                    <span>Active LangGraph Pipeline Architecture Layout</span>
                  </div>
                  
                  {/* Visual SVG state model of the pipeline */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                    <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl relative">
                      <span className="absolute top-2 right-2 text-[9px] font-mono text-zinc-500 font-sans">1. Workspace</span>
                      <h4 className="text-xs font-bold text-zinc-200 mb-1">Functional Agent</h4>
                      <p className="text-[10px] text-zinc-500 mb-2">GPT-4o script synthesis + BrowserBase VNC Execution</p>
                      <div className="bg-emerald-950/30 text-emerald-400 text-[9px] border border-emerald-900 px-1.5 py-0.5 rounded w-max">Output: Pass/Fail</div>
                    </div>
                    
                    <div className="p-4 bg-zinc-950 border border-indigo-900/40 rounded-xl relative flex flex-col justify-between">
                      <span className="absolute top-2 right-2 text-[9px] font-mono text-indigo-500 font-sans">Supervisor</span>
                      <div>
                        <h4 className="text-xs font-bold text-indigo-300 mb-1">State Evaluation Node</h4>
                        <p className="text-[10px] text-zinc-500">Sequential Router Check</p>
                      </div>
                      <div className="text-[9px] text-zinc-400 font-mono mt-2">
                        If Pass → Run SecAgent <br/>
                        If Fail → HALT Pipeline
                      </div>
                    </div>

                    <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl relative">
                      <span className="absolute top-2 right-2 text-[9px] font-mono text-zinc-500 font-sans">2. Security</span>
                      <h4 className="text-xs font-bold text-zinc-200 mb-1">Security Agent</h4>
                      <p className="text-[10px] text-zinc-500 mb-2">Semgrep Static + OWASP dynamic + sqlmap exploits</p>
                      <div className="bg-rose-950/30 text-rose-400 text-[9px] border border-rose-900 px-1.5 py-0.5 rounded w-max">Output: Risk Reports</div>
                    </div>

                    <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl relative flex flex-col justify-between">
                      <span className="absolute top-2 right-2 text-[9px] font-mono text-zinc-500 font-sans">3. Cockpit</span>
                      <div>
                        <h4 className="text-xs font-bold text-zinc-200 mb-1">Supervisor Cockpit</h4>
                        <p className="text-[10px] text-zinc-500">PostgreSQL logging + Grafana metric telemetry</p>
                      </div>
                      <span className="text-[9px] bg-zinc-900 text-zinc-500 px-1.5 py-0.5 rounded w-max font-sans">Aggregated Results</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  
                  {/* Repo Config Form */}
                  <div className="xl:col-span-2 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-4 border-b border-zinc-800 pb-6 mb-8">
                      <div className="w-12 h-12 bg-indigo-950 border border-indigo-900/60 text-indigo-400 rounded-xl flex items-center justify-center">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-100 text-sm">Phase 1: Setup Repository Connector</h3>
                        <p className="text-xs text-zinc-500">Establish GitHub mapping variables mapped onto the database execution cache node.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                            Select Current GitHub Repo
                          </label>
                          <select 
                            value={selectedRepo} 
                            onChange={(e) => setSelectedRepo(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-300 font-mono text-xs focus:outline-none focus:border-indigo-500"
                          >
                            {repositories.map((repo, i) => (
                              <option key={i} value={repo}>{repo}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                            Staging Target Branch
                          </label>
                          <div className="flex items-center gap-2 bg-zinc-900 px-4 py-3 rounded-xl border border-zinc-800">
                            <GitBranch className="w-4 h-4 text-zinc-500" />
                            <input 
                              type="text" 
                              value={gitBranch}
                              onChange={(e) => setGitBranch(e.target.value)}
                              className="bg-transparent border-none text-zinc-300 text-xs focus:outline-none w-full font-mono"
                            />
                          </div>
                        </div>

                        <div className="p-4 bg-zinc-900/40 rounded-xl border border-zinc-800">
                          <h4 className="text-xs font-bold text-zinc-300 mb-2 uppercase tracking-wide">Clerk Managed Identity</h4>
                          <p className="text-[10px] text-zinc-500 leading-relaxed mb-4">
                            SaaS platform authentication status verified under Clerk session credentials: <code className="text-indigo-400 font-mono">{clerkUser?.email}</code>. Permissions active.
                          </p>
                          <div className="flex gap-2">
                            <span className="bg-emerald-950/40 text-emerald-400 text-[10px] px-2.5 py-1 rounded border border-emerald-900/50 font-semibold">
                              Webhooks Configured
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Add Custom Repo Simulator */}
                      <div className="bg-zinc-950/40 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between">
                        <form onSubmit={addNewRepository} className="space-y-4">
                          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Connect New Repository</h4>
                          <div>
                            <label className="block text-[11px] text-zinc-500 mb-2">Repository URL / Workspace Path</label>
                            <input 
                              type="text"
                              placeholder="acme-corp/api-gateway"
                              value={newRepoName}
                              onChange={(e) => setNewRepoName(e.target.value)}
                              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-zinc-300 text-xs focus:outline-none focus:border-indigo-500"
                            />
                          </div>
                          <button 
                            type="submit"
                            className="w-full bg-indigo-600/15 hover:bg-indigo-600/35 text-indigo-400 font-semibold py-2 rounded-lg text-xs border border-indigo-900/50 transition-colors"
                          >
                            Add & Select Repo
                          </button>
                        </form>
                        <div className="text-[10px] text-zinc-500 mt-4 leading-relaxed">
                          * Connecting a repository will automatically query Postgres cache to look up existing target Playwright script structures.
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Repo Tree scan side block */}
                  <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                        <span className="text-xs font-bold text-zinc-300 tracking-wide uppercase">Workspace Files Tree</span>
                        <span className="text-[10px] font-mono text-zinc-500">142 files</span>
                      </div>
                      
                      <div className="space-y-2.5 font-mono text-[11px] text-zinc-400">
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-500">📁</span>
                          <span>src/components/</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                          <span className="text-zinc-500">📄</span>
                          <span>navbar.tsx</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                          <span className="text-amber-500">📄</span>
                          <span>payment-gateway.tsx</span>
                          <span className="text-[9px] bg-amber-950 text-amber-400 border border-amber-900 px-1.5 py-0.2 rounded">Target: UI Test</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-500">📁</span>
                          <span>api/</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                          <span className="text-rose-500">📄</span>
                          <span>user-search.ts</span>
                          <span className="text-[9px] bg-rose-950 text-rose-400 border border-rose-950/60 px-1.5 py-0.2 rounded">SAST ScanTarget</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-500">📁</span>
                          <span>tests/</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                          <span className="text-zinc-500">📄</span>
                          <span>langgraph.agent.config.json</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold py-2.5 rounded-xl text-xs transition-all mt-6 border border-zinc-800 flex items-center justify-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5" />
                      Rescan Source Code
                    </button>
                  </div>

                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    onClick={() => setActiveTab('functional')}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-xs"
                  >
                    <span>Proceed to Functional Agent configuration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

            {/* Phase 2: Functional Testing Agent */}
            {activeTab === 'functional' && (
              <div className="p-8 space-y-8">
                
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  
                  {/* Playwright Script Synthesizer Configuration */}
                  <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                        <div className="w-10 h-10 bg-indigo-950 text-indigo-400 border border-indigo-900/60 rounded-xl flex items-center justify-center">
                          <Terminal className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-zinc-100 text-sm">Phase 2: Functional Testing AI Prompt</h3>
                          <p className="text-xs text-zinc-500">Context parameter parser mapped directly into BrowserBase playwright runtime.</p>
                        </div>
                      </div>

                      {/* Model & DB cache selector parameters */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                            Select Generator Model
                          </label>
                          <select 
                            value={selectedLLM} 
                            onChange={(e) => setSelectedLLM(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-300 font-mono text-xs focus:outline-none focus:border-indigo-500"
                          >
                            <option value="gpt-4o">gpt-4o (Default)</option>
                            <option value="claude-3-5-sonnet">claude-3-5-sonnet</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                            Script Database cache lookup
                          </label>
                          <select 
                            value={bypassScriptCache ? 'bypass' : 'cache'} 
                            onChange={(e) => setBypassScriptCache(e.target.value === 'bypass')}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-zinc-300 font-mono text-xs focus:outline-none focus:border-indigo-500"
                          >
                            <option value="cache">Check PostgreSQL cache node</option>
                            <option value="bypass">Force new GPT-4o generation</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                          AI Test Generation Prompt Instructions
                        </label>
                        <textarea
                          value={promptContext}
                          onChange={(e) => setPromptContext(e.target.value)}
                          rows="4"
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-zinc-300 text-xs focus:outline-none focus:border-indigo-500 resize-none font-mono leading-relaxed"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                          Target Cloud Endpoint URL
                        </label>
                        <input 
                          type="text"
                          value={cloudBrowserUrl}
                          onChange={(e) => setCloudBrowserUrl(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-300 font-mono text-xs focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <div className="p-4 bg-emerald-950/10 rounded-xl border border-emerald-900/40">
                        <div className="flex gap-2 items-center text-xs font-semibold text-emerald-400 mb-1">
                          <Cpu className="w-4 h-4" />
                          <span>BrowserBase Cloud Session integration</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-relaxed">
                          Scripts are instantiated within isolated, ephemeral Docker runners mapped to VNC telemetry interfaces for accurate screen diagnostics.
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-800 mt-6 flex gap-4">
                      <button className="flex-grow bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-lg shadow-indigo-600/10">
                        Synthesize Playwright script
                      </button>
                      <button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 py-2.5 rounded-xl border border-zinc-700 text-xs font-medium">
                        Preview Script DB Check
                      </button>
                    </div>
                  </div>

                  {/* BrowserBase VNC Live Feed Simulation */}
                  <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                        <div>
                          <h3 className="font-bold text-zinc-100 text-sm flex items-center gap-2">
                            <Eye className="w-4 h-4 text-emerald-400 animate-pulse" />
                            BrowserBase Cloud render
                          </h3>
                          <p className="text-xs text-zinc-500 mt-0.5">Real-time simulation container render frame.</p>
                        </div>
                        <span className="bg-emerald-950/50 text-emerald-400 text-[10px] px-2.5 py-1 rounded-full border border-emerald-900/50 font-mono font-bold animate-pulse">
                          Cloud Session: Active
                        </span>
                      </div>

                      {/* Simulated Interactive Headless Browser UI Viewport */}
                      <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden relative shadow-inner">
                        {/* VNC header address bar */}
                        <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800/80 flex items-center gap-2">
                          <div className="flex gap-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-ping"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                          </div>
                          <div className="flex-1 bg-zinc-950 text-zinc-500 text-[10px] font-mono px-3 py-1 rounded-md border border-zinc-800 truncate">
                            {cloudBrowserUrl}
                          </div>
                        </div>

                        {/* Mock Render App View inside VNC */}
                        <div className="p-8 min-h-[220px] bg-zinc-950 flex flex-col items-center justify-center text-center">
                          {isSimulating && currentAgent === 'functional' ? (
                            <div className="space-y-3 animate-pulse">
                              <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
                              <p className="text-xs font-mono text-emerald-300">BrowserBase executing Playwright Node: Submitting guest Stripe webhook...</p>
                            </div>
                          ) : (
                            <div className="space-y-4 max-w-sm">
                              <div className="border border-zinc-800 bg-zinc-900/30 p-4 rounded-xl">
                                <h4 className="text-zinc-300 font-bold text-xs text-left mb-2">E-Commerce Checkouts View</h4>
                                <div className="space-y-1.5 text-left text-[10px] font-mono text-zinc-500">
                                  <div>Target Host: app-staging.acme.dev</div>
                                  <div>Active Cookies: Auth JWT state check</div>
                                </div>
                              </div>
                              <span className="text-xs text-zinc-600 font-mono">Headless Browser Container Ready</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        PostgreSQL Cached Playwright Script Node
                      </label>
                      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 font-mono text-[11px] text-zinc-400 overflow-x-auto h-32 leading-relaxed">
                        {targetScriptCode}
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex justify-between pt-4">
                  <button 
                    onClick={() => setActiveTab('workspace')}
                    className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold px-6 py-3 rounded-xl transition-all text-xs border border-zinc-800"
                  >
                    Back to Setup
                  </button>
                  <button 
                    onClick={() => setActiveTab('security')}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-xs"
                  >
                    <span>Proceed to Phase 3: Security Agent Setup</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

            {/* Phase 3: Security Testing Agent */}
            {activeTab === 'security' && (
              <div className="p-8 space-y-8">
                
                <div className="max-w-5xl bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 border-b border-zinc-800 pb-6 mb-8">
                    <div className="w-12 h-12 bg-rose-950/20 border border-rose-900/40 text-rose-400 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-100 text-sm">Phase 3: Security Testing Agent Node</h3>
                      <p className="text-xs text-zinc-500">Orchestrating Semgrep SAST, OWASP ZAP dynamic scans, and custom sqlmap/XSStrike exploits fuzzer containers.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Exploit Config Form list */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Vulnerability Payloads Library</h4>
                        <div className="space-y-3">
                          {secVulnerabilities.map((vuln) => (
                            <div key={vuln.id} className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800 flex items-start gap-4 justify-between hover:border-zinc-700 transition-colors">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className="font-bold text-xs text-zinc-200 truncate">{vuln.name}</span>
                                  <span className={`text-[9px] uppercase px-1.5 py-0.2 rounded font-bold ${
                                    vuln.severity === 'Critical' ? 'bg-rose-950/50 text-rose-400' : 'bg-amber-950/50 text-amber-400'
                                  }`}>
                                    {vuln.scanner} • {vuln.severity}
                                  </span>
                                </div>
                                <p className="text-[10px] text-zinc-500 font-mono truncate">Endpoint: {vuln.target}</p>
                              </div>
                              <span className="text-[10px] font-semibold px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                                Active Node
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-5">
                        <h4 className="text-xs font-bold text-zinc-200 mb-2 uppercase tracking-wide flex items-center gap-1.5">
                          <Lock className="w-4 h-4 text-rose-400" />
                          DAST Container Orchestration
                        </h4>
                        <p className="text-xs text-zinc-500 leading-relaxed">
                          Spawns isolated ephemeral pods running Semgrep and dynamic spiders mimicking actual malicious behavior. These metrics are compiled into your PostgreSQL results logging module upon safe container termination.
                        </p>
                      </div>
                    </div>

                    {/* Active attack vector simulation dashboard */}
                    <div className="bg-zinc-950/40 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-zinc-300 mb-4 uppercase tracking-wider border-b border-zinc-800 pb-2">
                          Exploit Sandbox Status
                        </h4>

                        <div className="space-y-4 font-mono text-[11px] text-zinc-400">
                          <div className="flex justify-between items-center">
                            <span>Status:</span>
                            <span className="font-mono text-indigo-400 bg-indigo-950/30 px-2 py-0.5 border border-indigo-900/40 rounded">
                              LangGraph Queue
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Static Scanner:</span>
                            <span className="text-zinc-500">Semgrep SAST</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Exploit Engine:</span>
                            <span className="text-zinc-500">sqlmap API Node</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Dynamic Spider:</span>
                            <span className="text-zinc-500">OWASP ZAP</span>
                          </div>
                          <div className="border-t border-zinc-800/80 pt-4">
                            <div className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mb-2 font-sans">
                              Active Threat Vectors
                            </div>
                            <div className="space-y-1 text-zinc-500">
                              <div>• Blind SQLi payload tests</div>
                              <div>• XSStrike Reflected payload fuzzing</div>
                              <div>• CSRF bypass testing nodes</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className="w-full bg-rose-950/30 hover:bg-rose-950/50 text-rose-400 font-bold py-2.5 rounded-xl text-xs transition-all border border-rose-900/50 flex items-center justify-center gap-2 mt-6">
                        <Sliders className="w-4 h-4" />
                        Configure exploit payloads
                      </button>
                    </div>

                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button 
                    onClick={() => setActiveTab('functional')}
                    className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold px-6 py-3 rounded-xl transition-all text-xs border border-zinc-800"
                  >
                    Back to Functional Agent
                  </button>
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-xs"
                  >
                    <span>Proceed to Supervisor Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

            {/* Results / Cockpit view */}
            {activeTab === 'dashboard' && (
              <div className="p-8 space-y-8">
                
                {/* Aggregated Safety Cockpit Scorecards */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between shadow-xl backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-400 tracking-wider uppercase font-mono">Unified Risk Score</span>
                      <Lock className="w-4 h-4 text-rose-500" />
                    </div>
                    <div className="my-4 flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white tracking-tight">{securityScore}%</span>
                      <span className="text-xs text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded font-mono">Highly Secure</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-1.5">
                      <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: `${securityScore}%` }}></div>
                    </div>
                  </div>

                  <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between shadow-xl backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-400 tracking-wider uppercase font-mono">Functional Coverage</span>
                      <CheckCircle className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="my-4 flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white tracking-tight">{functionalPassRate}%</span>
                      <span className="text-xs text-indigo-400 font-bold bg-indigo-950/40 border border-indigo-900/50 px-2 py-0.5 rounded font-mono">4 Verified Flows</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-1.5">
                      <div className="bg-indigo-400 h-1.5 rounded-full transition-all duration-1000" style={{ width: `${functionalPassRate}%` }}></div>
                    </div>
                  </div>

                  <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between shadow-xl backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-400 tracking-wider uppercase font-mono">Active vulnerabilities</span>
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                    </div>
                    <div className="my-4 flex items-baseline gap-2">
                      <span className="text-5xl font-black text-rose-500 tracking-tight">
                        {secVulnerabilities.filter(v => v.status !== 'Mitigated').length}
                      </span>
                      <span className="text-xs text-rose-400 bg-rose-950/40 border border-rose-900/50 px-2 py-0.5 rounded font-mono">Threat Action</span>
                    </div>
                    <div className="text-[10px] text-zinc-500">
                      Semgrep SAST flagged 1 critical routing vulnerability on checkout callbacks.
                    </div>
                  </div>

                  <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between shadow-xl backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-400 tracking-wider uppercase font-mono">Supervisor Latency</span>
                      <Cpu className="w-4 h-4 text-violet-400 animate-pulse" />
                    </div>
                    <div className="my-4 flex items-baseline gap-2">
                      <span className="text-5xl font-black text-zinc-100 tracking-tight">21</span>
                      <span className="text-xs text-zinc-400 font-mono">ms execution delay</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>All state machine engines online</span>
                    </div>
                  </div>
                </div>

                {/* Simulation Terminal & Merged Logs (Top Visibility) */}
                {isSimulating && (
                  <div className="bg-zinc-950 border border-indigo-950 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="bg-zinc-900 px-6 py-3 border-b border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-indigo-400" />
                        <span className="font-mono text-xs text-indigo-200 font-bold">LANGGRAPH SUPERVISOR LOG ENGINE</span>
                      </div>
                      <span className="bg-indigo-950 text-[10px] text-indigo-400 border border-indigo-900 px-2.5 py-0.5 rounded-full font-mono animate-pulse">
                        Sequential Engine Online
                      </span>
                    </div>
                    <div className="p-6 font-mono text-xs space-y-2.5 bg-zinc-950 max-h-72 overflow-y-auto">
                      {simLogs.map((log, index) => (
                        <div key={index} className="flex gap-2.5">
                          <span className="text-indigo-500/60 font-semibold">{`[0x0${index}]`}</span>
                          <span className="text-zinc-300 leading-relaxed">{log}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2 mt-4 text-indigo-400 font-bold animate-pulse">
                        <span className="w-1.5 h-3 bg-indigo-400 inline-block animate-pulse"></span>
                        <span>Supervisor coordinating next sequential state node...</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dynamic Workspace and Execution Table Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  
                  {/* Left Side: Merged Flight Executions */}
                  <div className="xl:col-span-2 bg-zinc-900/20 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-zinc-100 text-sm">Aggregated Pipeline Runs</h3>
                        <p className="text-xs text-zinc-500 mt-1">Unified metrics aggregated from Postgres storage logging nodes.</p>
                      </div>
                      <button className="text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold px-3 py-1.5 rounded-lg border border-zinc-800">
                        Export Postgres Logfile
                      </button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-zinc-900/50 text-zinc-500 text-[10px] font-bold uppercase tracking-wider border-b border-zinc-800">
                          <tr>
                            <th className="px-6 py-4">Test Identification</th>
                            <th className="px-6 py-4">Sourced Agent</th>
                            <th className="px-6 py-4">Current Status</th>
                            <th className="px-6 py-4 font-mono">Duration</th>
                            <th className="px-6 py-4 font-mono">Engine Node</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900/80 text-xs">
                          {testCases.map((test) => (
                            <tr key={test.id} className="hover:bg-zinc-900/10 transition-colors">
                              <td className="px-6 py-4">
                                <div className="font-semibold text-zinc-100">{test.name}</div>
                                <span className="text-[10px] font-mono text-zinc-500">{test.id}</span>
                              </td>
                              <td className="px-6 py-4">
                                <span className="bg-zinc-900 text-zinc-300 text-[10px] px-2.5 py-1 rounded border border-zinc-800 font-mono">
                                  {test.agent}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                                  test.status === 'Passed' ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900' : 'bg-rose-950/40 text-rose-400 border border-rose-900'
                                }`}>
                                  {test.status === 'Passed' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                                  {test.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-zinc-400 font-mono">{test.duration}</td>
                              <td className="px-6 py-4 text-zinc-400 font-mono text-[10px]">{test.engine}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right Side: Security Attack Vectors Summary */}
                  <div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-zinc-100 text-sm flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-indigo-400" />
                        Semgrep + sqlmap DAST logs
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1">Detected vulnerabilities on active target endpoints.</p>
                      
                      <div className="space-y-4 mt-6">
                        {secVulnerabilities.map((v) => (
                          <div key={v.id} className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all">
                            <div className="flex justify-between items-start gap-2 mb-2">
                              <span className="font-semibold text-zinc-200 text-xs">{v.name}</span>
                              <span className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded ${
                                v.severity === 'Critical' ? 'bg-rose-950 text-rose-400 border border-rose-900/50' : 'bg-slate-800 text-slate-400'
                              }`}>
                                {v.severity}
                              </span>
                            </div>
                            <div className="text-[10px] font-mono text-zinc-500 truncate mb-1">Target: {v.target}</div>
                            <div className="text-[10px] text-zinc-400 font-mono bg-zinc-950 p-2 rounded border border-zinc-900/80">
                              Scanner Tool: <span className="text-indigo-400">{v.scanner}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => setActiveTab('security')}
                      className="w-full mt-6 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 font-bold py-2.5 rounded-xl text-xs transition-all border border-zinc-800 font-sans"
                    >
                      Manage Security Exploit Nodes
                    </button>
                  </div>

                </div>

              </div>
            )}

            {/* SaaS Parameters & Settings Tab */}
            {activeTab === 'settings' && (
              <div className="p-8 space-y-8">
                <div className="max-w-3xl bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 shadow-xl">
                  <h3 className="font-bold text-zinc-100 text-sm border-b border-zinc-800 pb-4 mb-6">LangGraph Supervisor Engine Setup</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        PostgreSQL Connection Uri (Testing Scripts Cache & Logs)
                      </label>
                      <input 
                        type="text" 
                        defaultValue="postgresql://guardian_admin:••••••••••••@acme-rds-primary.postgres.database.azure.com:5432/guardian_secops" 
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-300 font-mono text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        Supervisor State Graph Thresholds
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center">
                          <span className="block text-[9px] text-zinc-500 font-bold uppercase mb-1.5">Functional Agent Pass Criteria</span>
                          <span className="text-emerald-400 font-bold text-xs">100% Core Flows</span>
                        </div>
                        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center">
                          <span className="block text-[9px] text-zinc-500 font-bold uppercase mb-1.5">SAST Halt Action</span>
                          <span className="text-rose-400 font-bold text-xs">Block PR Deploy</span>
                        </div>
                        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-center">
                          <span className="block text-[9px] text-zinc-500 font-bold uppercase mb-1.5">Aggregated Reporting Server</span>
                          <span className="text-indigo-400 font-bold text-xs">Grafana Webhook</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-zinc-900/40 rounded-xl border border-zinc-800 text-xs text-zinc-500 leading-relaxed">
                      This setup orchestrates sequential microservice instances using LangGraph workflows. During execution, intermediate states are automatically mapped onto Postgres logs for Grafana diagnostic display.
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </main>
      </div>
    </div>
  );
}