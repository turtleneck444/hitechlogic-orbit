import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import type {
  Client,
  Meeting,
  ServiceProgram,
  FormSubmission,
  SupportTicket,
  Metric,
  RevenueMetric,
  AnalyticsPoint,
} from '@/data/admin';
import {
  clients as initialClients,
  meetings as initialMeetings,
  programs as initialPrograms,
  forms as initialForms,
  supportTickets as initialTickets,
  analyticsTrend as initialAnalytics,
} from '@/data/admin';

interface AdminContextType {
  // Data
  clients: Client[];
  meetings: Meeting[];
  programs: ServiceProgram[];
  forms: FormSubmission[];
  supportTickets: SupportTicket[];
  adminMetrics: Metric[];
  revenueMetrics: RevenueMetric[];
  analyticsTrend: AnalyticsPoint[];

  // Client operations
  addClient: (client: Omit<Client, 'id'>) => void;
  updateClient: (id: string, updates: Partial<Client>) => void;
  deleteClient: (id: string) => void;

  // Meeting operations
  addMeeting: (meeting: Omit<Meeting, 'id'>) => void;
  updateMeeting: (id: string, updates: Partial<Meeting>) => void;
  deleteMeeting: (id: string) => void;

  // Program operations
  addProgram: (program: Omit<ServiceProgram, 'id'>) => void;
  updateProgram: (id: string, updates: Partial<ServiceProgram>) => void;
  deleteProgram: (id: string) => void;

  // Support ticket operations
  addTicket: (ticket: Omit<SupportTicket, 'id'>) => void;
  updateTicket: (id: string, updates: Partial<SupportTicket>) => void;
  deleteTicket: (id: string) => void;

  // Form submission operations
  updateFormStatus: (id: string, status: FormSubmission['status']) => void;
  deleteForm: (id: string) => void;

  // Utility operations
  resetData: () => void;
  exportData: (format: 'json' | 'csv') => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const STORAGE_KEY = 'hitechlogic_admin_data';

interface StoredData {
  clients: Client[];
  meetings: Meeting[];
  programs: ServiceProgram[];
  forms: FormSubmission[];
  supportTickets: SupportTicket[];
}

export function AdminProvider({ children }: { children: React.ReactNode }) {
  // Load initial data from localStorage or use defaults
  const loadStoredData = (): StoredData => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load stored data:', error);
    }
    return {
      clients: initialClients,
      meetings: initialMeetings,
      programs: initialPrograms,
      forms: initialForms,
      supportTickets: initialTickets,
    };
  };

  const [clients, setClients] = useState<Client[]>(() => loadStoredData().clients);
  const [meetings, setMeetings] = useState<Meeting[]>(() => loadStoredData().meetings);
  const [programs, setPrograms] = useState<ServiceProgram[]>(() => loadStoredData().programs);
  const [forms, setForms] = useState<FormSubmission[]>(() => loadStoredData().forms);
  const [supportTickets, setTickets] = useState<SupportTicket[]>(() => loadStoredData().supportTickets);

  // Dynamic metrics calculated from actual data
  const adminMetrics = useMemo<Metric[]>(() => {
    const activeClientsCount = clients.length;
    const automationPrograms = programs.filter(p => p.stage === 'Automate' || p.stage === 'Scale').length;
    const totalPrograms = programs.length || 1; // Avoid division by zero
    const automationCoverage = Math.round((automationPrograms / totalPrograms) * 100);
    const stabilizePrograms = programs.filter(p => p.stage === 'Stabilize').length;

    return [
      {
        label: "Active Clients",
        value: activeClientsCount.toString(),
        change: `${programs.length} programs running`
      },
      {
        label: "Automation Coverage",
        value: `${automationCoverage}%`,
        change: `${automationPrograms} in Automate/Scale`
      },
      {
        label: "MTTR Median",
        value: "21 min",
        change: "↓ 14%"
      },
      {
        label: "Open Initiatives",
        value: programs.length.toString(),
        change: `${stabilizePrograms} in Stabilize`
      },
    ];
  }, [clients.length, programs]);

  const revenueMetrics = useMemo<RevenueMetric[]>(() => {
    // Parse MRR values from clients (e.g., "$140K" -> 140000)
    const parseMRR = (mrr: string): number => {
      const match = mrr.match(/\$?([\d.]+)K?/i);
      if (!match) return 0;
      const value = parseFloat(match[1]);
      return mrr.toUpperCase().includes('K') ? value * 1000 : value;
    };

    const totalMRR = clients.reduce((sum, client) => sum + parseMRR(client.mrr), 0);
    const avgContract = clients.length > 0 ? totalMRR / clients.length : 0;
    const forecastedMRR = totalMRR * 1.12; // 12% growth forecast
    const pipeline = forecastedMRR - totalMRR;

    const formatMRR = (value: number): string => {
      if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
      if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
      return `$${value.toFixed(0)}`;
    };

    return [
      {
        label: "Current MRR",
        value: formatMRR(totalMRR),
        delta: `${clients.length} active clients`
      },
      {
        label: "Forecasted MRR",
        value: formatMRR(forecastedMRR),
        delta: `+${formatMRR(pipeline)} pipeline`
      },
      {
        label: "Avg. Contract",
        value: formatMRR(avgContract),
        delta: "+6% YoY"
      },
    ];
  }, [clients]);

  const analyticsTrend = useMemo<AnalyticsPoint[]>(() => {
    // Use initial analytics as base, but could be made more dynamic in the future
    return initialAnalytics;
  }, []);

  // Persist data to localStorage whenever it changes
  useEffect(() => {
    const data: StoredData = {
      clients,
      meetings,
      programs,
      forms,
      supportTickets,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  }, [clients, meetings, programs, forms, supportTickets]);

  // Generate unique ID
  const generateId = (prefix: string) => {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  // Client operations
  const addClient = useCallback((client: Omit<Client, 'id'>) => {
    const newClient: Client = {
      ...client,
      id: generateId('cl'),
    };
    setClients(prev => [...prev, newClient]);
  }, []);

  const updateClient = useCallback((id: string, updates: Partial<Client>) => {
    setClients(prev => prev.map(client =>
      client.id === id ? { ...client, ...updates } : client
    ));
  }, []);

  const deleteClient = useCallback((id: string) => {
    setClients(prev => prev.filter(client => client.id !== id));
  }, []);

  // Meeting operations
  const addMeeting = useCallback((meeting: Omit<Meeting, 'id'>) => {
    const newMeeting: Meeting = {
      ...meeting,
      id: generateId('mt'),
    };
    setMeetings(prev => [...prev, newMeeting]);
  }, []);

  const updateMeeting = useCallback((id: string, updates: Partial<Meeting>) => {
    setMeetings(prev => prev.map(meeting =>
      meeting.id === id ? { ...meeting, ...updates } : meeting
    ));
  }, []);

  const deleteMeeting = useCallback((id: string) => {
    setMeetings(prev => prev.filter(meeting => meeting.id !== id));
  }, []);

  // Program operations
  const addProgram = useCallback((program: Omit<ServiceProgram, 'id'>) => {
    const newProgram: ServiceProgram = {
      ...program,
      id: generateId('sp'),
    };
    setPrograms(prev => [...prev, newProgram]);
  }, []);

  const updateProgram = useCallback((id: string, updates: Partial<ServiceProgram>) => {
    setPrograms(prev => prev.map(program =>
      program.id === id ? { ...program, ...updates } : program
    ));
  }, []);

  const deleteProgram = useCallback((id: string) => {
    setPrograms(prev => prev.filter(program => program.id !== id));
  }, []);

  // Support ticket operations
  const addTicket = useCallback((ticket: Omit<SupportTicket, 'id'>) => {
    const newTicket: SupportTicket = {
      ...ticket,
      id: generateId('st'),
    };
    setTickets(prev => [...prev, newTicket]);
  }, []);

  const updateTicket = useCallback((id: string, updates: Partial<SupportTicket>) => {
    setTickets(prev => prev.map(ticket =>
      ticket.id === id ? { ...ticket, ...updates } : ticket
    ));
  }, []);

  const deleteTicket = useCallback((id: string) => {
    setTickets(prev => prev.filter(ticket => ticket.id !== id));
  }, []);

  // Form submission operations
  const updateFormStatus = useCallback((id: string, status: FormSubmission['status']) => {
    setForms(prev => prev.map(form =>
      form.id === id ? { ...form, status } : form
    ));
  }, []);

  const deleteForm = useCallback((id: string) => {
    setForms(prev => prev.filter(form => form.id !== id));
  }, []);

  // Utility operations
  const resetData = useCallback(() => {
    setClients(initialClients);
    setMeetings(initialMeetings);
    setPrograms(initialPrograms);
    setForms(initialForms);
    setTickets(initialTickets);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const exportData = useCallback((format: 'json' | 'csv') => {
    const data = {
      clients,
      meetings,
      programs,
      forms,
      supportTickets,
      exportedAt: new Date().toISOString(),
    };

    if (format === 'json') {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `hitechlogic-admin-${new Date().toISOString().split('T')[0]}.json`;
      link.click();
      URL.revokeObjectURL(url);
    } else if (format === 'csv') {
      // Export clients as CSV
      const headers = ['ID', 'Name', 'Industry', 'Health', 'MRR', 'Owners'];
      const rows = clients.map(c => [
        c.id,
        c.name,
        c.industry,
        c.health,
        c.mrr,
        c.owners.join('; '),
      ]);
      const csv = [
        headers.join(','),
        ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
      ].join('\n');

      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `hitechlogic-clients-${new Date().toISOString().split('T')[0]}.csv`;
      link.click();
      URL.revokeObjectURL(url);
    }
  }, [clients, meetings, programs, forms, supportTickets]);

  const value: AdminContextType = {
    clients,
    meetings,
    programs,
    forms,
    supportTickets,
    adminMetrics,
    revenueMetrics,
    analyticsTrend,
    addClient,
    updateClient,
    deleteClient,
    addMeeting,
    updateMeeting,
    deleteMeeting,
    addProgram,
    updateProgram,
    deleteProgram,
    addTicket,
    updateTicket,
    deleteTicket,
    updateFormStatus,
    deleteForm,
    resetData,
    exportData,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
