import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { Meeting } from '@/data/admin';
import { Button } from '@/components/ui/button';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (meeting: Omit<Meeting, 'id'> | Meeting) => void;
  meeting?: Meeting;
  mode: 'add' | 'edit';
}

export function MeetingModal({ isOpen, onClose, onSave, meeting, mode }: MeetingModalProps) {
  const [formData, setFormData] = useState<Omit<Meeting, 'id'>>({
    title: '',
    date: '',
    account: '',
    focus: '',
    owner: '',
  });

  useEffect(() => {
    if (meeting && mode === 'edit') {
      setFormData({
        title: meeting.title,
        date: meeting.date,
        account: meeting.account,
        focus: meeting.focus,
        owner: meeting.owner,
      });
    } else {
      setFormData({
        title: '',
        date: '',
        account: '',
        focus: '',
        owner: '',
      });
    }
  }, [meeting, mode, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'edit' && meeting) {
      onSave({ ...formData, id: meeting.id } as Meeting);
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
          {mode === 'add' ? 'Schedule New Meeting' : 'Edit Meeting'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Meeting Title
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              placeholder="Enter meeting title"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Date & Time
              </label>
              <input
                type="text"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
                placeholder="e.g., Jun 12 · 09:00 EST"
              />
            </div>

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
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Meeting Focus
            </label>
            <input
              type="text"
              required
              value={formData.focus}
              onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              placeholder="e.g., Stage 2 → 3 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Meeting Owner
            </label>
            <input
              type="text"
              required
              value={formData.owner}
              onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-[hsl(var(--accent-blue))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]/20"
              placeholder="e.g., Elena Patel"
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
              {mode === 'add' ? 'Schedule Meeting' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
