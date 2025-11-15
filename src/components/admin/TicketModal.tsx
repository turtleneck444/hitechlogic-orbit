import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { SupportTicket } from '@/data/admin';
import { Button } from '@/components/ui/button';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (ticket: Omit<SupportTicket, 'id'> | SupportTicket) => void;
  ticket?: SupportTicket;
  mode: 'add' | 'edit';
}

export function TicketModal({ isOpen, onClose, onSave, ticket, mode }: TicketModalProps) {
  const [formData, setFormData] = useState<Omit<SupportTicket, 'id'>>({
    account: '',
    severity: 'P3',
    summary: '',
    owner: '',
    eta: '',
  });

  useEffect(() => {
    if (ticket && mode === 'edit') {
      setFormData({
        account: ticket.account,
        severity: ticket.severity,
        summary: ticket.summary,
        owner: ticket.owner,
        eta: ticket.eta,
      });
    } else {
      setFormData({
        account: '',
        severity: 'P3',
        summary: '',
        owner: '',
        eta: '',
      });
    }
  }, [ticket, mode, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'edit' && ticket) {
      onSave({ ...formData, id: ticket.id } as SupportTicket);
    } else {
      onSave(formData);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-2 hover:bg-slate-100 transition"
        >
          <X className="h-5 w-5 text-slate-500" />
        </button>

        <h2 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">
          {mode === 'add' ? 'Create Support Ticket' : 'Edit Support Ticket'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Account
            </label>
            <input
              type="text"
              required
              value={formData.account}
              onChange={(e) => setFormData({ ...formData, account: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              placeholder="Client account name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Severity
              </label>
              <select
                value={formData.severity}
                onChange={(e) => setFormData({ ...formData, severity: e.target.value as SupportTicket['severity'] })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              >
                <option value="P1">P1 - Critical</option>
                <option value="P2">P2 - High</option>
                <option value="P3">P3 - Medium</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                ETA / Status
              </label>
              <input
                type="text"
                required
                value={formData.eta}
                onChange={(e) => setFormData({ ...formData, eta: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
                placeholder="e.g., Resolving · 35m"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Summary
            </label>
            <textarea
              required
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20 resize-none"
              rows={3}
              placeholder="Brief description of the issue"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Owner / Team
            </label>
            <input
              type="text"
              required
              value={formData.owner}
              onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              placeholder="e.g., Ops Pod Delta"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90"
            >
              {mode === 'add' ? 'Create Ticket' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
