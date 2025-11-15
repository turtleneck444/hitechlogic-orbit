import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { Client } from '@/data/admin';
import { Button } from '@/components/ui/button';

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (client: Omit<Client, 'id'> | Client) => void;
  client?: Client;
  mode: 'add' | 'edit';
}

export function ClientModal({ isOpen, onClose, onSave, client, mode }: ClientModalProps) {
  const [formData, setFormData] = useState<Omit<Client, 'id'>>({
    name: '',
    industry: '',
    health: 'stable',
    mrr: '',
    owners: [],
  });
  const [ownersInput, setOwnersInput] = useState('');

  useEffect(() => {
    if (client && mode === 'edit') {
      setFormData({
        name: client.name,
        industry: client.industry,
        health: client.health,
        mrr: client.mrr,
        owners: client.owners,
      });
      setOwnersInput(client.owners.join(', '));
    } else {
      setFormData({
        name: '',
        industry: '',
        health: 'stable',
        mrr: '',
        owners: [],
      });
      setOwnersInput('');
    }
  }, [client, mode, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const owners = ownersInput.split(',').map(o => o.trim()).filter(Boolean);
    const dataToSave = {
      ...formData,
      owners,
    };

    if (mode === 'edit' && client) {
      onSave({ ...dataToSave, id: client.id } as Client);
    } else {
      onSave(dataToSave);
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
          {mode === 'add' ? 'Add New Client' : 'Edit Client'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Client Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              placeholder="Enter client name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Industry
              </label>
              <input
                type="text"
                required
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
                placeholder="e.g., Healthcare, Finance"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Health Status
              </label>
              <select
                value={formData.health}
                onChange={(e) => setFormData({ ...formData, health: e.target.value as Client['health'] })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              >
                <option value="stable">Stable</option>
                <option value="watch">Watch</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Monthly Recurring Revenue (MRR)
            </label>
            <input
              type="text"
              required
              value={formData.mrr}
              onChange={(e) => setFormData({ ...formData, mrr: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              placeholder="e.g., $120K"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Account Owners (comma-separated)
            </label>
            <input
              type="text"
              required
              value={ownersInput}
              onChange={(e) => setOwnersInput(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              placeholder="e.g., J. Chen, R. Singh"
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
              {mode === 'add' ? 'Add Client' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
